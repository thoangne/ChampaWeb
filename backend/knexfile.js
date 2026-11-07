const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const databaseUrl = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL;

const connection = databaseUrl && !databaseUrl.includes("placeholder")
  ? {
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false }, // Hỗ trợ kết nối SSL Supabase
    }
  : {
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "postgres",
      database: process.env.DB_NAME || "postgres",
    };

module.exports = {
  development: {
    client: "pg",
    connection,
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
  },
};

