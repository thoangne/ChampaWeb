# ChampaWeb Coding Conventions & Engineering Guidelines

> **Audience**: Software Engineers & AI Agents (OpenAI Codex, Antigravity, contributors)  
> **Source of Truth**: Verified against actual repository structure and configuration.

---

## 1. Development & Operational Commands

All commands are executed using `npm` from the repository root or via sub-project prefixes.

### Orchestration & Local Development
```bash
# Start both Backend (port 5000) and Frontend (port 5173) concurrently
npm run dev

# Alternative node direct script
node dev.js

# Install dependencies for both backend and frontend
npm run install:all
```

### Frontend Commands (`frontend/`)
```bash
# Run standalone Vite development server (port 5173)
npm run dev --prefix frontend

# Type-check and build production bundle (tsc -b && vite build)
npm run build --prefix frontend

# Run ESLint check
npm run lint --prefix frontend

# Preview production build locally
npm run preview --prefix frontend
```

### Backend Commands (`backend/`)
```bash
# Start backend server with Node
npm run start --prefix backend

# Start backend server with Nodemon (auto-reload)
npm run dev --prefix backend

# Execute database migrations to latest
npm run migrate --prefix backend

# Check migration status
npm run migrate:status --prefix backend

# Rollback latest migration batch
npm run migrate:rollback --prefix backend

# Create a new migration file
npm run migrate:make <migration_name> --prefix backend
```

### Containerization & Deployment
```bash
# Build and start services via Docker Compose
npm run docker:up

# Stop Docker Compose services
npm run docker:down

# Deploy unified container to Google Cloud Run
npm run deploy:cloudrun
```

---

## 2. Testing & Verification Reality

> [!IMPORTANT]
> **No Test Fabrication Rule**: Never report a test as executed or passed unless an actual test command was invoked and succeeded. Disclose testing gaps transparently.

### Current Repository Test State
- **Frontend**:
  - `build` command (`tsc -b && vite build`) performs static type checking and bundle verification.
  - `lint` command (`eslint .`) performs static linting. Note: Existing lint rules flag unsanitized `any` types and React 19 Compiler memoization warnings. New code must not introduce new lint errors.
  - No Vitest/Jest unit runner or automated Playwright test script is currently bound in `frontend/package.json`.
- **Backend**:
  - `backend/package.json` contains `"test": "echo \"Error: no test specified\" && exit 1"`.
  - No automated test suite runner (e.g., Jest, Supertest, Mocha) is configured in backend yet.
- **Verification Protocol**:
  1. For Frontend: Run `npm run build --prefix frontend` (mandates TypeScript compiler passes).
  2. For Frontend Lint: Check with `npm run lint --prefix frontend`.
  3. For Backend Syntax: Validate modified files with Node syntax check `node -c <file_path>`.
  4. For Database Migrations: Review syntax with `knex migrate:status` when a valid database connection is available.
  5. For Manual API Verification: Use curl or script-based health checks (`/api/health`) against the local running server.

---

## 3. Frontend Conventions (React 19 + TypeScript + Tailwind)

### Directory Structure & Module Placement
- Components: `frontend/src/components/<domain>/<ComponentName>.tsx`
- Reusable UI primitives: `frontend/src/components/ui/<widget>.tsx`
- Pages / Screens: `frontend/src/pages/<PageName>Page.tsx`
- State Providers: `frontend/src/context/<Domain>Context.tsx`
- Domain Data / Seed: `frontend/src/data/<domain>Data.ts`
- Utility Functions: `frontend/src/lib/utils.ts`

### TypeScript & React Practices
- **Path Aliases**: Always use `@/` alias mapped to `src/` (e.g., `import { Button } from "@/components/ui/button"`).
- **Component Signatures**: Use standard TypeScript function components:
  ```tsx
  interface TourCardProps {
    id: string;
    title: string;
    price: number;
    onSelect?: (id: string) => void;
  }

  export function TourCard({ id, title, price, onSelect }: TourCardProps) {
    // Component body
  }
  ```
- **React 19 Hooks & Memoization**:
  - Do not introduce synchronous `setState` calls directly inside effect bodies if they trigger cascading renders.
  - Avoid unnecessary manual memoization that breaks React Compiler optimizations.
- **Styling**:
  - Use Tailwind CSS utility classes.
  - Combine conditional classes using `cn()` from `@/lib/utils`:
    ```tsx
    import { cn } from "@/lib/utils";
    
    <div className={cn("p-4 rounded-xl transition-all", isActive && "border-amber-600 bg-amber-50")} />
    ```
- **Cultural & Brand Alignment**:
  - Preserve regional Cham cultural identity (warm earth tones, terracotta, deep indigo, forest green, natural stone textures).
  - Use authentic cultural terminology (e.g., *Palei*, *Thang*, *Baoh Dana*, *Ging*, *Sukur*) rather than generic filler copy.

---

## 4. Backend Conventions (Express 5 + CommonJS + Knex)

### Layered Separation of Concerns
1. **Routes (`backend/src/routes/`)**:
   - Define HTTP method, URL pattern, and attach middleware pipeline.
   - Do NOT write business or database logic directly in routes.
   ```javascript
   const express = require("express");
   const router = express.Router();
   const postController = require("../controllers/postController");
   const authMiddleware = require("../middlewares/authMiddleware");
   const requireAdmin = require("../middlewares/requireAdmin");

   router.get("/", postController.getAllPosts);
   router.post("/", authMiddleware, requireAdmin, postController.createPost);

   module.exports = router;
   ```
2. **Controllers (`backend/src/controllers/`)**:
   - Extract parameters from `req.body`, `req.params`, `req.query`.
   - Call service methods.
   - Always return standard JSON responses and pass errors to `next(error)`.
   ```javascript
   exports.getTourById = async (req, res, next) => {
     try {
       const { id } = req.params;
       const tour = await tourService.getTourById(id);
       if (!tour) {
         return res.status(404).json({ success: false, message: "Tour không tồn tại." });
       }
       return res.status(200).json({ success: true, data: tour });
     } catch (error) {
       next(error);
     }
   };
   ```
3. **Services (`backend/src/services/`)**:
   - Pure business logic and database querying.
   - Independent of `req` and `res` objects.

---

## 5. API Conventions & Standard Response Schema

### Standard Response Envelope
All API endpoints must conform to the standard JSON structure:

**Success Response (`200 OK`, `201 Created`)**:
```json
{
  "success": true,
  "message": "Chi tiết thao tác thành công",
  "data": { ... }
}
```

**Client / Server Error Response (`400`, `401`, `403`, `404`, `500`)**:
```json
{
  "success": false,
  "message": "Mô tả chi tiết nguyên nhân lỗi"
}
```

### URL Naming
- Prefix: All endpoints are mounted under `/api`.
- Case: Lowercase, kebab-case or plural nouns for collections (`/api/bookings`, `/api/posts`, `/api/newsletters`).
- Nesting: Keep nesting minimal (e.g., `/api/posts/:slug`, `/api/bookings/:id/status`).

---

## 6. Database Conventions (PostgreSQL & Knex)

- **Naming**:
  - Table names: Plural, snake_case (`tours`, `tour_bookings`, `profiles`).
  - Column names: snake_case (`created_at`, `updated_at`, `full_name`, `avatar_url`).
  - Foreign key columns: `<singular_table>_id` or referenced entity name (e.g., `user_id`, `category_id`).
- **Primary Keys**: Use `UUID` (matching Supabase `auth.users.id`) for user-owned records, or `SERIAL / BIGSERIAL` for sequential entities.
- **Audit Columns**: Every table must include:
  ```sql
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
  ```
- **Migrations**:
  - Always write reversible Knex migrations (`exports.up` and `exports.down`).
  - Do NOT modify existing executed migrations in production; write a new incremental migration file.

---

## 7. Error Handling & Logging

- **Backend**:
  - Never let an unhandled promise rejection crash Express.
  - Wrap controller logic in `try { ... } catch (err) { next(err); }`.
  - The centralized error handler `backend/src/middlewares/errorHandler.js` logs the error and returns a clean `{ success: false, message }` response without leaking internal stack traces in production.
- **Frontend**:
  - Display user-friendly notifications using Sonner (`toast.error("...", { description: "..." })`).
  - Provide fallback UI states for empty lists, loading states, and failed network fetches.

---

## 8. Security Best Practices

1. **Secrets & Credentials**:
   - Never commit `.env` or raw API keys, Supabase Service Role keys, or database passwords to git.
   - Reference credentials through `process.env` in backend and `import.meta.env` in frontend.
2. **SQL Injection Prevention**:
   - Use Knex parameterized query builders (`knex('table').where({ id })`).
   - Never concatenate raw user input into SQL queries.
3. **Authentication & Authorization**:
   - Always verify identity on protected routes using `authMiddleware`.
   - Always enforce permission checks on administrative operations using `requireAdmin`.
4. **Input Sanitization**:
   - Validate incoming payloads before persisting data.
   - Clean HTML inputs in blog content before rendering.
