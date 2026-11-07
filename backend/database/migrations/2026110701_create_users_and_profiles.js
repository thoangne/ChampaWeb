/**
 * Knex Migration: 2026110701_create_users_and_profiles.js
 * Quản lý phiên bản bảng hồ sơ người dùng (profiles), triggers và phân quyền RLS
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // 1. Tạo bảng profiles bằng Knex Schema Builder
  await knex.schema.createTable("profiles", (table) => {
    table.uuid("id").primary().notNullable(); // Tương thích với auth.users.id
    table.string("email", 255).notNullable().unique().index();
    table.string("full_name", 150).nullable();
    table.text("avatar_url").nullable();
    table.string("phone_number", 25).nullable();
    table.string("role", 20).defaultTo("customer").index();
    table.string("provider", 50).defaultTo("email");
    table.text("bio").nullable();
    table.text("address").nullable();
    table.jsonb("preferences").defaultTo("{}");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  // 2. Trigger đồng bộ tự động với Supabase auth.users & RLS policies
  await knex.raw(`
    CREATE OR REPLACE FUNCTION public.handle_new_user()
    RETURNS TRIGGER AS $$
    BEGIN
        INSERT INTO public.profiles (id, email, full_name, avatar_url, provider)
        VALUES (
            NEW.id,
            NEW.email,
            COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
            COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
            COALESCE(NEW.raw_app_meta_data->>'provider', 'email')
        )
        ON CONFLICT (id) DO UPDATE SET
            full_name = EXCLUDED.full_name,
            avatar_url = CASE WHEN public.profiles.avatar_url IS NULL OR public.profiles.avatar_url = '' THEN EXCLUDED.avatar_url ELSE public.profiles.avatar_url END,
            updated_at = NOW();
        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;

    DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
    CREATE TRIGGER on_auth_user_created
        AFTER INSERT OR UPDATE ON auth.users
        FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

    ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
    DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
    CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
    CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
  `).catch(() => {});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw(`
    DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
    DROP FUNCTION IF EXISTS public.handle_new_user();
  `).catch(() => {});

  await knex.schema.dropTableIfExists("profiles");
};

