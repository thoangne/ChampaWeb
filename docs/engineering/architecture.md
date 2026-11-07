# ChampaWeb Engineering Architecture

> **Repository**: `ChampaWeb`  
> **Domain**: Dana Community Tourism & Panduranga Heritage Platform  
> **Architecture Pattern**: Monorepo with decoupled Frontend (React 19 SPA) and Backend (Express 5 REST API), backed by PostgreSQL / Supabase.

---

## 1. System Topology Overview

```
                      +-----------------------------+
                      |       Web Client / PWA      |
                      |  (React 19 + TypeScript)    |
                      +--------------+--------------+
                                     |
               +---------------------+---------------------+
               | HTTP / JSON                               | Direct Supabase
               v                                           v (Auth / Storage)
+-----------------------------+               +-----------------------------+
|    Express 5 Backend API    |               |       Supabase Cloud        |
|  (Node.js CommonJS @ 5000)  |               |  (Auth, Storage, Realtime)  |
+--------------+--------------+               +--------------+--------------+
               |                                             |
               +----------------------+----------------------+
                                      | PostgreSQL (Port 5432)
                                      v
                      +-----------------------------+
                      |     PostgreSQL Database     |
                      |    (Managed via Knex.js)    |
                      +-----------------------------+
```

### Runtime Environments
- **Local Development**:
  - Backend runs on `http://localhost:5000` via Express.
  - Frontend runs on `http://localhost:5173` via Vite development server.
  - Vite dev server proxies `/api` calls to `http://localhost:5000`.
  - Orchestration script `dev.js` (or `npm run dev`) launches both services concurrently.
- **Production / Containerized**:
  - Multi-stage Dockerfile builds Frontend assets via Vite and copies them to `backend/public_client`.
  - Express 5 serves `/api` endpoints and acts as an SPA fallback static host for client assets.
  - Container targets Google Cloud Run or standard Docker hosts listening on `PORT` (default `8080` in Dockerfile, `5000` in docker-compose).

---

## 2. Directory Structure & Boundary Layout

```
ChampaWeb/
├── AGENTS.md                  # Autonomous agent workflow rules and trigger policies
├── .codex/workflows/          # Discrete operational playbooks (features, bugs, tests, etc.)
├── docs/engineering/          # Verified technical architecture and conventions
├── plans/                     # Implementation blueprints for complex or risky tasks
├── backend/                   # Express 5 REST API & Database migrations
│   ├── database/              # Knex migrations & consolidated SQL schema
│   │   ├── migrations/        # Sequential JS migration files (timestamped)
│   │   ├── knex.js            # Initialized Knex database client instance
│   │   └── schema_all.sql     # Consolidated reference database schema
│   ├── src/
│   │   ├── config/            # Environment & client setups (env.js, supabaseClient.js)
│   │   ├── controllers/       # HTTP request handlers (auth, booking, newsletter, post)
│   │   ├── middlewares/       # Express middlewares (auth, admin, error, validation)
│   │   ├── routes/            # Express router modules (mounted at /api)
│   │   └── services/          # Pure business logic and data access routines
│   ├── app.js                 # Express application definition & middleware stack
│   ├── server.js              # Server bootstrapper listening on PORT
│   ├── knexfile.js            # Knex connection & pool configurations
│   └── package.json           # Backend dependencies and migration commands
├── frontend/                  # React 19 Single Page Application (SPA)
│   ├── src/
│   │   ├── components/        # Reusable UI & feature components
│   │   │   ├── auth/          # Auth modals and dialogs
│   │   │   ├── blog/          # Blog articles, editor, and admin route guards
│   │   │   └── ui/            # Primitive UI widgets (radix, sonner, buttons)
│   │   ├── context/           # React Context providers (AuthContext.tsx)
│   │   ├── data/              # Static seed / fallback datasets
│   │   ├── lib/               # Utilities & clients (supabase.ts, utils.ts, AudioContext.tsx)
│   │   ├── pages/             # Route-level view components
│   │   ├── types/             # TypeScript type definitions
│   │   ├── App.tsx            # Main router configuration & provider tree
│   │   └── main.tsx           # React DOM client entrypoint
│   ├── eslint.config.js       # ESLint 9+ flat configuration
│   ├── tsconfig.json          # TypeScript project references
│   ├── vite.config.js         # Vite bundler configuration & /api proxy
│   └── package.json           # Frontend dependencies, scripts, and build tools
├── Dockerfile                 # Unified multi-stage production container build
├── docker-compose.yml         # Local dual-container service configuration
├── dev.js                     # Cross-platform development process runner
└── package.json               # Root scripts for monorepo operations
```

---

## 3. Frontend Architecture

### Core Tech Stack
- **Framework**: React 19 (`react: ^19.3.0`, `react-dom: ^19.3.0`)
- **Language**: TypeScript (`~6.0.2` / ESNext)
- **Bundler & Tooling**: Vite 8 (`vite: ^8.3.0`) with `@vitejs/plugin-react`
- **Routing**: `react-router-dom` v7 (`^7.18.4`)
- **Styling**: Tailwind CSS 3.4 (`tailwindcss`, `tailwindcss-animate`, `postcss`, `autoprefixer`)
- **UI Component System**: Radix UI primitives (`@radix-ui/react-*`), Lucide React icons, Sonner toasts
- **Geographic & Audio Features**: Leaflet & React-Leaflet for heritage map navigation; HTML5 AudioContext for pronunciation & regional soundscapes

### Client Architectural Flow
1. **Application Shell (`App.tsx`)**:
   - Encapsulated within `AuthProvider` (session synchronization) and `AudioProvider` (ambient audio state).
   - Client routes defined with `react-router-dom` v7 `BrowserRouter`.
   - Protected routes (e.g., `/admin/blog/editor`, `/admin/blog`) wrapped in `AdminRoute` guard verifying `role === 'admin'`.
2. **Path Resolution**:
   - Configured with `@/*` pointing to `src/*` in both `tsconfig.app.json` and `vite.config.js`.
3. **State Management**:
   - Global Auth: Handled via React Context (`AuthContext.tsx`) synced with Supabase Auth session listeners (`supabase.auth.onAuthStateChange`).
   - Local UI State: Standard React hooks (`useState`, `useEffect`, `useCallback`, `useMemo`).

---

## 4. Backend Architecture

### Core Tech Stack
- **Runtime & Module System**: Node.js (v20+ / Alpine in Docker), CommonJS (`type: "commonjs"`)
- **Framework**: Express 5 (`express: ^5.2.1`)
- **Database Access**: Knex.js (`knex: ^3.3.0`) query builder and PostgreSQL driver (`pg: ^8.23.1`)
- **External Services**: `@supabase/server` and `@supabase/supabase-js` for Supabase ecosystem integration

### Layered Request-Response Flow
Requests entering `/api` flow through strict architectural layers:
```
[Client Request]
       |
       v
[Middlewares]
   ├── cors()
   ├── express.json()
   ├── authMiddleware (validates Bearer token / Supabase session)
   └── requireAdmin (verifies role === 'admin' for privileged routes)
       |
       v
[Route Handlers (src/routes/*.js)]
   └── Dispatches to corresponding Controller methods
       |
       v
[Controllers (src/controllers/*.js)]
   ├── Parses and validates incoming req.body / req.params / req.query
   ├── Delegates domain execution to Services
   └── Dispatches standard JSON response: { success: true, message, data }
       |
       v
[Services (src/services/*.js)]
   ├── Encapsulates business logic, domain rules, and calculations
   └── Interacts with Database via Knex query builder or Supabase client
       |
       v
[Global Error Handler (src/middlewares/errorHandler.js)]
   └── Catches uncaught controller exceptions via next(error) -> { success: false, message }
```

---

## 5. Database Architecture & Migrations

### Storage Engine
- **Primary Database**: PostgreSQL (hosted on Supabase or local PostgreSQL instance).
- **SSL Connection**: Automatically enabled for cloud instances (`ssl: { rejectUnauthorized: false }` in `knexfile.js`).

### Schema Organization
- **Primary Entities**:
  - `profiles`: Extends Supabase `auth.users`, storing `role` (`customer`, `artisan`, `guide`, `admin`), `full_name`, `avatar_url`, `phone_number`.
  - `blogs` & `blog_categories` & `comments`: Content management for cultural research and field stories.
  - `tours` & `tour_bookings`: Community tour packages (e.g., Baoh Dana ancient house tour), pricing, schedules, and reservations.
  - `products` & `artisans`: Traditional handicrafts, weaving, pottery, and profiles of master artisans.
  - `newsletters`: Email subscription management.
  - `view_logs` & `analytics`: Traffic and interaction monitoring.
- **Migration Strategy**:
  - Sequential migrations located in `backend/database/migrations/`.
  - Tracked in `knex_migrations` table.
  - Executed using `npm run migrate --prefix backend`.

---

## 6. Authentication & Authorization Model

1. **Authentication Provider**: Supabase Auth (supports Email/Password and OAuth via Google/Facebook).
2. **Session Verification**:
   - Frontend stores token in client storage via `@supabase/supabase-js`.
   - Backend `authMiddleware.js` extracts `Bearer <token>` from `Authorization` header and validates the token.
3. **Role-Based Access Control (RBAC)**:
   - User roles are defined on `public.profiles.role`.
   - Permitted roles: `customer` (default), `artisan`, `guide`, `admin`.
   - Sensitive endpoints require `requireAdmin` middleware, checking `req.user.role === 'admin'`.

---

## 7. Containerization & Deployment Pipeline

- **Dual Service Compose (`docker-compose.yml`)**:
  - `champa-backend`: Builds from `./backend`, runs on port `5000`.
  - `champa-frontend`: Builds from `./frontend`, runs on port `3000`.
  - Connected via bridge network `champa-network`.
- **Unified Cloud Run Container (`Dockerfile`)**:
  - Stage 1 (`frontend-builder`): Builds static bundle using Node 22-alpine.
  - Stage 2 (Backend Runtime): Installs production dependencies and serves static assets directly from `backend/public_client`.
  - Deploy command: `gcloud run deploy champa-web --source . --region asia-southeast1 --allow-unauthenticated`.
