const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const { resolveSslConfig } = require("./src/config/db");

const databaseUrl = process.env.DATABASE_URL;

function getConnection(env) {
  if (env === "production") {
    if (!databaseUrl || databaseUrl.includes("localhost") || databaseUrl.includes("127.0.0.1") || databaseUrl.includes("placeholder")) {
      throw new Error("DATABASE_URL is missing or invalid for production environment. Cannot run migrations.");
    }
    return {
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    };
  }

  // Development environment
  if (databaseUrl) {
    const sslConfig = resolveSslConfig(databaseUrl, env);
    return {
      connectionString: databaseUrl,
      ...(sslConfig ? { ssl: sslConfig } : { ssl: false }),
    };
  }

  // Fallback dev params
  return {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "champa_user",
    password: process.env.DB_PASSWORD || "champa_password",
    database: process.env.DB_NAME || "champa_dev",
    ssl: false,
  };
}

module.exports = {
  development: {
    client: "pg",
    connection: getConnection("development"),
    pool: {
      min: Number(process.env.DB_POOL_MIN) || 2,
      max: Number(process.env.DB_POOL_MAX) || 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: () => getConnection("production"),
    pool: {
      min: Number(process.env.DB_POOL_MIN) || 2,
      max: Number(process.env.DB_POOL_MAX) || 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
