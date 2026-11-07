/**
 * Knex Migration: 2026110705_create_view_logs_and_analytics.js
 * Quản lý phiên bản bảng nhật ký lượt xem (view_logs) và hàm tính toán thống kê
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // 1. Bảng view_logs
  await knex.schema.createTable("view_logs", (table) => {
    table.bigIncrements("id").primary();
    table.string("entity_type", 30).notNullable();
    table.string("entity_id", 100).notNullable();
    table.string("entity_slug", 255).nullable();
    table.uuid("user_id").references("id").inTable("profiles").onDelete("SET NULL").index();
    table.string("session_id", 100).nullable().index();
    table.string("ip_address", 45).nullable();
    table.text("user_agent").nullable();
    table.text("referrer").nullable();
    table.jsonb("metadata").defaultTo("{}");
    table.timestamp("viewed_at").defaultTo(knex.fn.now()).index();

    table.index(["entity_type", "entity_id"], "idx_view_logs_entity");
  });

  // 2. Tạo Function tự động cập nhật số lượt xem và View báo cáo
  await knex.raw(`
    CREATE OR REPLACE FUNCTION public.log_and_increment_view(
        p_entity_type VARCHAR,
        p_entity_id VARCHAR,
        p_entity_slug VARCHAR DEFAULT NULL,
        p_user_id UUID DEFAULT NULL,
        p_session_id VARCHAR DEFAULT NULL,
        p_ip_address VARCHAR DEFAULT NULL,
        p_user_agent TEXT DEFAULT NULL,
        p_referrer TEXT DEFAULT NULL,
        p_metadata JSONB DEFAULT '{}'::jsonb
    )
    RETURNS VOID AS $$
    BEGIN
        INSERT INTO public.view_logs (
            entity_type, entity_id, entity_slug, user_id, session_id,
            ip_address, user_agent, referrer, metadata, viewed_at
        ) VALUES (
            p_entity_type, p_entity_id, p_entity_slug, p_user_id, p_session_id,
            p_ip_address, p_user_agent, p_referrer, p_metadata, NOW()
        );

        IF p_entity_type = 'blog' THEN
            UPDATE public.blog_articles SET views_count = views_count + 1 WHERE slug = p_entity_id OR id::text = p_entity_id;
        ELSIF p_entity_type = 'product' THEN
            UPDATE public.craft_products SET views_count = views_count + 1 WHERE id = p_entity_id OR slug = p_entity_id;
        ELSIF p_entity_type = 'tour' THEN
            UPDATE public.tours SET views_count = views_count + 1 WHERE slug = p_entity_id OR id::text = p_entity_id;
        END IF;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;

    CREATE OR REPLACE VIEW public.view_logs_daily_summary AS
    SELECT 
        date_trunc('day', viewed_at)::date AS view_date,
        entity_type,
        entity_id,
        COUNT(*) AS total_views,
        COUNT(DISTINCT session_id) AS unique_visitors,
        COUNT(DISTINCT user_id) AS logged_in_users
    FROM public.view_logs
    GROUP BY 1, 2, 3
    ORDER BY view_date DESC, total_views DESC;
  `).catch(() => {});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw(`
    DROP VIEW IF EXISTS public.view_logs_daily_summary;
    DROP FUNCTION IF EXISTS public.log_and_increment_view;
  `).catch(() => {});

  await knex.schema.dropTableIfExists("view_logs");
};

