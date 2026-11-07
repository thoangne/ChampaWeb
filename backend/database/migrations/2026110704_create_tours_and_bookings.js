/**
 * Knex Migration: 2026110704_create_tours_and_bookings.js
 * Quản lý phiên bản bảng Tour du lịch, đơn đặt tour và yêu cầu tư vấn
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // 1. Bảng tours
  await knex.schema.createTable("tours", (table) => {
    table.increments("id").primary();
    table.string("slug", 150).notNullable().unique().index();
    table.string("title", 255).notNullable();
    table.string("badge", 50).defaultTo("Khảo cứu");
    table.string("badge_class", 100).defaultTo("bg-amber-100 text-amber-800");
    table.string("duration", 50).notNullable();
    table.string("location", 150).notNullable();
    table.string("price", 50).notNullable();
    table.decimal("adult_price", 12, 2).defaultTo(0);
    table.decimal("child_price", 12, 2).defaultTo(0);
    table.text("description").notNullable();
    table.text("image").notNullable();
    table.string("category", 50).defaultTo("craft").index();
    table.decimal("rating", 2, 1).defaultTo(5.0);
    table.integer("reviews_count").defaultTo(0);
    table.jsonb("chips").defaultTo("[]");
    table.jsonb("gallery").defaultTo("[]");
    table.jsonb("unique_touches").defaultTo("[]");
    table.jsonb("timeline").defaultTo("[]");
    table.integer("keeper_id").references("id").inTable("artisans").onDelete("SET NULL");
    table.boolean("is_active").defaultTo(true).index();
    table.integer("views_count").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  // 2. Bảng tour_bookings
  await knex.schema.createTable("tour_bookings", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("booking_code", 30).notNullable().unique().index();
    table.string("tour_slug", 150).notNullable();
    table.string("tour_title", 255).notNullable();
    table.uuid("customer_id").references("id").inTable("profiles").onDelete("SET NULL").index();
    table.string("customer_name", 150).notNullable();
    table.string("customer_phone", 25).notNullable();
    table.string("customer_email", 255).nullable();
    table.text("pickup_note").nullable();
    table.date("departure_date").notNullable();
    table.integer("adults").defaultTo(1);
    table.integer("children").defaultTo(0);
    table.decimal("total_price", 12, 2).notNullable();
    table.string("status", 30).defaultTo("pending").index();
    table.string("payment_status", 30).defaultTo("unpaid");
    table.text("special_requests").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  // 3. Bảng trip_inquiries
  await knex.schema.createTable("trip_inquiries", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("destination", 150).notNullable();
    table.date("departure_date").nullable();
    table.string("experience_type", 100).nullable();
    table.string("travelers", 50).nullable();
    table.string("customer_phone", 25).notNullable();
    table.string("customer_email", 255).nullable();
    table.string("status", 30).defaultTo("new");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  // 4. Bảng newsletter_subscriptions
  await knex.schema.createTable("newsletter_subscriptions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("email", 255).notNullable().unique();
    table.boolean("is_active").defaultTo(true);
    table.timestamp("subscribed_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("newsletter_subscriptions");
  await knex.schema.dropTableIfExists("trip_inquiries");
  await knex.schema.dropTableIfExists("tour_bookings");
  await knex.schema.dropTableIfExists("tours");
};

