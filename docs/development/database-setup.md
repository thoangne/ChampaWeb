# Database Architecture & Development Setup Guide

> **Project**: Dana Community Tourism & Panduranga Heritage Platform (`ChampaWeb`)  
> **Topic**: Environment-Based PostgreSQL Separation (Local Docker vs. Production Supabase)  
> **Status**: Verified & Operational

---

## 1. Architectural Overview

ChampaWeb implements a strictly isolated, environment-driven PostgreSQL architecture:

```
+-------------------------------------------------------------------------------+
|                            LOCAL DEVELOPMENT                                  |
|                                                                               |
|   +-------------------+          +-------------------+                        |
|   |   React + Vite    |          | Express 5 Backend |                        |
|   | (Port 5173 / dev) | -------> |    (Port 5000)    |                        |
|   +-------------------+          +---------+---------+                        |
|                                            |                                  |
|                                            | DATABASE_URL (no SSL)            |
|                                            v                                  |
|                                  +-------------------+                        |
|                                  |  Docker Compose   |                        |
|                                  |  postgres:17      |                        |
|                                  | (Container 5432)  |                        |
|                                  +---------+---------+                        |
|                                            |                                  |
|                                            v                                  |
|                                  [ Named Docker Volume ]                      |
|                                  (champa_postgres_data)                       |
+-------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------+
|                         PRODUCTION (GOOGLE CLOUD RUN)                         |
|                                                                               |
|   +-----------------------------------------------------------------------+   |
|   | Cloud Run Unified Container                                           |   |
|   |  - Stage 1: Built React SPA assets in public_client                   |   |
|   |  - Stage 2: Express 5 API runtime (Port 8080)                         |   |
|   |  - Secret Manager injected DATABASE_URL (strict SSL)                  |   |
|   +-----------------------------------+-----------------------------------+   |
|                                       |                                       |
|                                       | TLS / SSL (Port 6543 / 5432)          |
|                                       v                                       |
|                       +-------------------------------+                       |
|                       |   Supabase Cloud PostgreSQL   |                       |
|                       | (Session / Transaction Pool)  |                       |
|                       +-------------------------------+                       |
+-------------------------------------------------------------------------------+
```

### Key Isolation Principles
1. **Zero Production Fallbacks**: The application will **fail fast** at startup if running in `NODE_ENV=production` without a valid production connection string. It will never silently fall back to `localhost` or local credentials.
2. **Dedicated Runtimes**: Local development uses a lightweight `postgres:17-alpine` container with persistent Docker volumes. The production container runs strictly on Google Cloud Run and does **not** package any PostgreSQL server daemon.
3. **Frontend Isolation**: Frontend Vite client bundles only `VITE_` prefixed variables (`VITE_API_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`). `DATABASE_URL` and service keys are never exposed to client assets.

---

## 2. Local PostgreSQL Setup (Docker Compose)

### Service Configuration
Defined in `docker-compose.yml`:
- **Image**: `postgres:17-alpine`
- **Container Name**: `champa-postgres`
- **Port Mapping**: `5432:5432`
- **Volume**: `postgres_data` (Named volume `champa_postgres_data`)
- **Healthcheck**: `pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}` every 5 seconds.

### Quick Start Commands
Run these commands from the project root directory:

| Task | Command | NPM Script Shortcut |
| :--- | :--- | :--- |
| **Start Database** | `docker compose up -d postgres` | `npm run db:up` |
| **Check Health & Status** | `docker compose ps` | `npm run db:ps` |
| **View Database Logs** | `docker compose logs -f postgres` | `npm run db:logs` |
| **Stop Database (Persist Data)**| `docker compose stop postgres` | `npm run db:stop` |
| **Stop All Containers** | `docker compose down` | `npm run db:down` |
| **Reset Database (Wipe Volume)**| `docker compose down -v && docker compose up -d postgres` | `npm run db:reset` |

> [!IMPORTANT]
> Always use `docker compose stop postgres` or `docker compose down` for normal shutdown.  
> **Never** use `-v` (`down -v`) unless you intentionally want to delete all local development data.

---

## 3. Environment Variables Configuration

### Local Development (`backend/.env`)
Copy `backend/.env.example` to `backend/.env`:

```env
PORT=5000
NODE_ENV=development

# Direct connection to the Docker Compose PostgreSQL container
DATABASE_URL=postgresql://champa_user:champa_password@localhost:5432/champa_dev

# Connection Pool Limits
DB_POOL_MIN=2
DB_POOL_MAX=10

# Optional Supabase credentials for local testing
SUPABASE_URL=https://placeholder-project.supabase.co
SUPABASE_ANON_KEY=placeholder-anon-key
SUPABASE_SERVICE_ROLE_KEY=placeholder-service-role-key
```

### When Backend Runs Inside Docker Compose
If running the entire stack via `docker compose up`, Docker Compose injects:
```env
DATABASE_URL=postgresql://champa_user:champa_password@postgres:5432/champa_dev
```
The internal network hostname `postgres` resolves automatically.

---

## 4. Migrations & Seeding Workflow

ChampaWeb utilizes **Knex.js** for version-controlled, reversible schema migrations and declarative seed scripts located in `backend/database/`.

### Available Migration Files
1. `2026110701_create_users_and_profiles.js`: Schema `auth`, `profiles` table, RLS policies, and sync triggers.
2. `2026110702_create_blogs_and_comments.js`: `blog_categories`, `blog_articles`, and `blog_comments`.
3. `2026110703_create_products_and_artisans.js`: `artisans`, `craft_categories`, and `craft_products`.
4. `2026110704_create_tours_and_bookings.js`: `tours`, `tour_bookings`, `trip_inquiries`, and `newsletter_subscriptions`.
5. `2026110705_create_view_logs_and_analytics.js`: `view_logs` table, analytics view, and increment view stored function.

### Migration Commands

```bash
# 1. Apply latest migrations
npm run db:migrate
# Or in backend directory:
npm run migrate --prefix backend

# 2. Check migration status
npm run db:status
# Or in backend directory:
npm run migrate:status --prefix backend

# 3. Roll back last migration batch (Development only)
npm run db:rollback
# Or in backend directory:
npm run migrate:rollback --prefix backend

# 4. Seed initial cultural heritage dataset (Admin, Artisans, Articles, Tours, Crafts)
npm run db:seed
# Or in backend directory:
npm run seed --prefix backend
```

---

## 5. Application Connection Module (`backend/src/config/db.js`)

The database connection is managed centrally with the following features:
- **Connection Pooling**: Backed by `tarn.js` inside Knex with configurable `min` and `max` connections.
- **SSL Auto-Negotiation**: Local development connections (`localhost`, `127.0.0.1`, `postgres`) automatically disable SSL. Cloud Run and Supabase connections automatically require SSL (`rejectUnauthorized: false`).
- **Singleton Protection**: Modules importing either `src/config/db.js` or `database/knex.js` receive the exact same singleton instance.
- **Health Verification**: Exposes `testConnection()` executing `SELECT NOW(), current_database()`.
- **Graceful Shutdown**: Hooks `SIGTERM` and `SIGINT` to close the HTTP listener and invoke `closeConnection()` (`db.destroy()`).

### Health Endpoint Verification
Querying `GET http://localhost:5000/api/health` returns:
```json
{
  "status": "OK",
  "environment": "development",
  "timestamp": "2026-11-07T08:03:47.453Z",
  "database": {
    "status": "connected",
    "currentDatabase": "champa_dev",
    "serverTime": "2026-11-07T08:03:47.370Z"
  }
}
```

---

## 6. Production Supabase & Google Cloud Run Setup

### 1. Supabase Connection String
In production on Cloud Run, use the **Supabase Transaction Pooler** (Supavisor) URL to accommodate serverless scaling:
```
postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?sslmode=require
```
*(Or use Session Pooler / Direct Port 5432 if IPv6 or non-pooling workloads require it).*

### 2. Store Credentials in Google Secret Manager
Never commit database passwords or pass them as Docker build arguments. Store them in Google Secret Manager:

```bash
# Create secret in Google Secret Manager
gcloud secrets create DATABASE_URL \
  --replication-policy="automatic" \
  --data-file=- << 'EOF'
postgresql://postgres.chzkyvhlhjuaoqnchlxj:YOUR_STRONG_PASSWORD@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?sslmode=require
EOF
```

### 3. Deploy to Cloud Run with Secret Injection
Deploy the container with the secret mounted as an environment variable:

```bash
gcloud run deploy champa-web \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production" \
  --set-secrets="DATABASE_URL=DATABASE_URL:latest"
```

### 4. Connection Pool Considerations for Cloud Run
Because Cloud Run can scale horizontally across multiple instances (e.g., 10–50 instances), configure:
- `DB_POOL_MIN=1` or `2`
- `DB_POOL_MAX=5` to `10`
Using the Transaction Pooler (port 6543) enables hundreds of concurrent container connections without exhausting Supabase's direct Postgres connection limit.

---

## 7. Troubleshooting Common Issues

### Issue 1: `The server does not support SSL connections`
- **Cause**: Trying to connect to a local PostgreSQL container with `ssl: { rejectUnauthorized: false }`.
- **Solution**: The connection module `backend/src/config/db.js` automatically sets `ssl: false` for `localhost` and `postgres`. If manually overriding, ensure `DB_SSL=false` in `backend/.env`.

### Issue 2: `Port 5432 is already in use`
- **Cause**: Another local PostgreSQL instance (e.g., Windows service or WSL2 distribution) is running on port 5432.
- **Solution**:
  - Stop the host service: `wsl -u root -d Ubuntu -- service postgresql stop` or stop the Windows Postgres service.
  - Or map an alternate host port in root `.env` / `docker-compose.yml`: `POSTGRES_PORT=5433` and update `DATABASE_URL=postgresql://champa_user:champa_password@localhost:5433/champa_dev`.

### Issue 3: `Database "champa_dev" does not exist`
- **Cause**: Docker container was initialized before environment variables were configured.
- **Solution**: Run `npm run db:reset` to re-initialize the volume with the credentials from `docker-compose.yml` / `.env`.

### Issue 4: `DATABASE_URL is required in production environment`
- **Cause**: Application started with `NODE_ENV=production` without injecting `DATABASE_URL`.
- **Solution**: In Cloud Run, verify Secret Manager binding (`--set-secrets="DATABASE_URL=DATABASE_URL:latest"`). In staging/CI, pass a valid Supabase connection string.

