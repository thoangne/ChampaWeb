/**
 * Knex Migration: 2026110703_create_products_and_artisans.js
 * Quản lý phiên bản bảng nghệ nhân và tác phẩm thủ công (gốm Bàu Trúc, thổ cẩm Mỹ Nghiệp)
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // 1. Bảng artisans
  await knex.schema.createTable("artisans", (table) => {
    table.increments("id").primary();
    table.string("name", 150).notNullable();
    table.string("slug", 150).notNullable().unique().index();
    table.string("title", 150).notNullable();
    table.string("experience", 50).nullable();
    table.integer("years_of_dedication").defaultTo(0);
    table.string("village", 100).notNullable().index();
    table.string("specialty", 150).nullable();
    table.jsonb("achievements").defaultTo("[]");
    table.text("workshop_location").nullable();
    table.text("quote").nullable();
    table.text("bio").notNullable();
    table.string("schedule", 150).nullable();
    table.text("avatar_image").notNullable();
    table.text("hands_image").nullable();
    table.string("badge_class", 100).defaultTo("bg-amber-100 text-amber-900 border-amber-300");
    table.boolean("is_active").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  // 2. Bảng craft_categories
  await knex.schema.createTable("craft_categories", (table) => {
    table.string("id", 50).primary().notNullable();
    table.string("label", 100).notNullable();
    table.string("village", 100).nullable();
    table.text("description").nullable();
    table.integer("display_order").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  // 3. Bảng craft_products
  await knex.schema.createTable("craft_products", (table) => {
    table.string("id", 50).primary().notNullable();
    table.string("name", 255).notNullable();
    table.string("slug", 255).notNullable().unique().index();
    table.string("category_id", 50).notNullable().references("id").inTable("craft_categories").onDelete("RESTRICT").index();
    table.string("village", 100).notNullable();
    table.integer("artisan_id").references("id").inTable("artisans").onDelete("SET NULL").index();
    table.string("price_estimate", 50).notNullable();
    table.decimal("raw_price", 12, 2).defaultTo(0);
    table.specificType("materials", "text[]").defaultTo("{}");
    table.string("dimensions", 100).nullable();
    table.string("crafting_time", 100).nullable();
    table.string("badge", 100).defaultTo("Độc bản");
    table.string("badge_type", 50).defaultTo("traditional");
    table.text("summary").nullable();
    table.text("description").nullable();
    table.text("cultural_meaning").nullable();
    table.jsonb("crafting_steps").defaultTo("[]");
    table.specificType("images", "text[]").defaultTo("{}");
    table.boolean("is_featured").defaultTo(false).index();
    table.string("preservation_status", 100).defaultTo("Cần bảo tồn khẩn cấp");
    table.integer("stock_quantity").defaultTo(1);
    table.integer("views_count").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("craft_products");
  await knex.schema.dropTableIfExists("craft_categories");
  await knex.schema.dropTableIfExists("artisans");
};

