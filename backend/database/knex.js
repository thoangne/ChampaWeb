/**
 * Centralized Knex instance re-export.
 * Ensures the entire application and Knex migrations share the same singleton connection pool.
 */
const db = require("../src/config/db");

module.exports = db;
