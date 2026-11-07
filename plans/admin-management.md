# Implementation Plan: Production Admin Management System (CMS)

> **Status**: `COMPLETED`  
> **Author**: Senior Software Architect & Full-stack Engineer  
> **Target Date / Sprint**: November 2026 / Sprint CMS  
> **Risk Level**: `LARGE`
> **Verified**: November 7, 2026 (12/12 Automated Backend Tests Passed, Frontend Build & ESLint Clean)

---

## 1. Objective
Design and implement an integrated, production-grade Admin Management System (CMS) for ChampaWeb at `/admin`. The CMS provides authorized administrators and editors complete control over articles, news, media assets, categories/tags, user roles/status, administrative settings, and audit activity logs, wrapped in an editorial-inspired, minimal, and responsive user interface aligned with Champa cultural aesthetics.

---

## 2. Scope & Non-Goals

### In Scope
1. **Dashboard Overview (`/admin`)**:
   - Live metrics (published/draft articles, news posts, registered users, media count, total views).
   - Content distribution and monthly publication trends.
   - Recent administrative activities and quick jump actions.
2. **Article Management (`/admin/articles`, `/admin/articles/create`, `/admin/articles/edit/:id`)**:
   - Comprehensive CRUD, search, category/status filters, pagination.
   - Rich Markdown & HTML block editor with preview, slug generator, SEO metadata, reading time, featured image picker.
   - Publish/unpublish, draft mode, scheduling support.
3. **News Management (`/admin/news`, `/admin/news/create`, `/admin/news/edit/:id`)**:
   - Dedicated news desk tailored for events, announcements, and fieldwork reports sharing the `blog_articles` data model (`main_category: 'tin-tuc'`).
   - Quick thumbnail assignment, event date, category assignment, and status controls.
4. **User Management (`/admin/users`)**:
   - Registered user list, search by name/email, filter by role (`admin`, `editor`, `artisan`, `guide`, `customer`) and status (`active`, `suspended`).
   - Role updates, activation/deactivation.
   - Self-lockout prevention (cannot demote or deactivate self), password protection (no password exposure).
5. **Media Library (`/admin/media`)**:
   - File upload (JPEG, PNG, WEBP, GIF, SVG <= 5MB) via local disk storage and Supabase Storage fallback.
   - Grid and list view, search by filename, copy URL, image preview modal, file size/dimension display, delete file.
   - Reusable `MediaPickerModal` embedded in article and news editors.
6. **Categories and Tags Management (`/admin/categories`)**:
   - CRUD for `blog_categories` and `tags`.
   - Slug management, article count display, safe deletion guards.
7. **Site Settings (`/admin/settings`)**:
   - Configurable site name, tagline, description, SEO defaults, social channels, contact details.
8. **Activity Logs (`/admin/activity-logs`)**:
   - Comprehensive audit trail recording actor, action, target resource, timestamp, and metadata diff.
9. **Admin UI/UX Shell (`AdminLayout`, `AdminSidebar`, `AdminHeader`)**:
   - Clean editorial aesthetic matching ChampaWeb design tokens (`#8F4E00`, `#972F12`, `#FAF9F6`).
   - Responsive sidebar with permission-based menu filtering (Editor vs Admin).
   - Breadcrumbs, quick actions, current user profile, view site link.
10. **Backend REST APIs & Database Migrations**:
   - New Knex migration for `media_files`, `tags`, `article_tags`, `site_settings`, `activity_logs`, extending `profiles` and `blog_articles`.
   - Unified `/api/admin` routes protected by `authenticateUser` and `requireAdmin` (or role-based checks).

### Non-Goals (Out of Scope)
- Do NOT replace Supabase Auth or introduce a separate parallel auth database.
- Do NOT delete existing public blog routes (`/bai-viet`, `/blog/:slug`).
- Do NOT perform destructive drops on existing database tables or columns.

---

## 3. Requirements & Acceptance Criteria
- [x] **AC 1 (Security & RBAC)**: Given an unauthenticated or non-admin/editor user, accessing `/admin` or `/api/admin/*` must redirect to login or return HTTP 401/403.
- [x] **AC 2 (Dashboard Metrics)**: Given an authorized admin, `/api/admin/dashboard` returns accurate counts for articles, news, users, media, and recent activity logs.
- [x] **AC 3 (Article & News CRUD)**: Administrators can create, edit, draft, publish, and delete articles and news. All edits reflect on the public website (`/bai-viet`).
- [x] **AC 4 (Media Management & Upload)**: Administrators can upload valid image files (<= 5MB) and select them within the article/news editor via the `MediaPickerModal`.
- [x] **AC 5 (User Access Control)**: Administrators can change user roles and toggle status; an administrator cannot deactivate or demote their own account.
- [x] **AC 6 (Category & Tag Safety)**: Categories with associated articles cannot be hard deleted without warning.
- [x] **AC 7 (Activity Logging)**: Every sensitive operation (create, update, delete, role change) creates an audit entry in `activity_logs`.
- [x] **AC 8 (Zero Build Regressions)**: `npm run build --prefix frontend` passes with zero TypeScript errors.

---

## 4. Technical Approach

### Architecture & Data Flow
```
[Admin Web Client (React 19)]
        │
        ▼ (JWT Bearer Token)
[Express 5 /api/admin Routes]
        │
   ├── authenticateUser (validates token from Supabase Auth or mock token)
   ├── requireAdminOrEditor (validates role: admin | super_admin | editor)
   └── uploadMiddleware (Multer for multipart/form-data)
        │
        ▼
[Admin Controllers & Services]
        │
   ├── Knex Database Client (PostgreSQL)
   ├── Supabase Client (if configured)
   └── ActivityLogger (writes to activity_logs)
```

### Data Model & Database Impact
Knex Migration: `2026110706_create_admin_cms_tables.js`
- `media_files`: `id` (UUID), `filename`, `original_name`, `mime_type`, `size`, `dimensions`, `url`, `uploader_id`, `created_at`
- `tags`: `id` (SERIAL), `name`, `slug`, `created_at`
- `article_tags`: `article_id` (UUID references `blog_articles`), `tag_id` (INT references `tags`)
- `site_settings`: `key` (VARCHAR 100 PRIMARY KEY), `value` (JSONB), `description`, `updated_at`, `updated_by`
- `activity_logs`: `id` (BIGSERIAL), `actor_id` (UUID), `actor_name`, `actor_email`, `action`, `target_type`, `target_id`, `target_title`, `details` (JSONB), `ip_address`, `created_at`
- Extensions on `profiles`: ensure `status` (`active`, `suspended`) and updated role enum (`super_admin`, `admin`, `editor`, `artisan`, `guide`, `customer`).
- Extensions on `blog_articles`: add `seo_title`, `seo_description`, `scheduled_at`, `tags` (text[]).

---

## 5. Affected Files & Modules
- `backend/database/migrations/2026110706_create_admin_cms_tables.js`
- `backend/src/routes/adminRoutes.js`
- `backend/src/routes/index.js`
- `backend/src/controllers/adminController.js`
- `backend/src/services/adminService.js`
- `backend/src/services/activityLogService.js`
- `backend/src/middlewares/requireRole.js`
- `backend/app.js` (serve `/uploads` directory)
- `frontend/src/App.tsx` (admin routes)
- `frontend/src/components/admin/*` (Layout, Sidebar, Header, MediaPicker, Modals)
- `frontend/src/pages/admin/*` (Dashboard, Articles, News, Categories, Media, Users, ActivityLogs, Settings)
- `frontend/src/components/Header.tsx` (navigation link update)

---

## 6. Implementation Tasks Checklist
- [x] Task 1: Codebase investigation & architecture analysis.
- [x] Task 2: Knex database migration `2026110706_create_admin_cms_tables.js` and execution.
- [x] Task 3: Backend Admin Services (`adminService.js`, `activityLogService.js`).
- [x] Task 4: Backend Admin Controllers & Routes with Multer upload handler.
- [x] Task 5: Frontend Admin UI Shell (`AdminLayout`, `AdminSidebar`, `AdminHeader`).
- [x] Task 6: Frontend Modules: Dashboard, Articles, News, Media, Categories, Users, Settings, Activity Logs.
- [x] Task 7: Reusable `MediaPickerModal` and Rich Article Editor integration.
- [x] Task 8: Integration testing & verification (`tsc`, `eslint`, API tests).
- [x] Task 9: Final Report & documentation.

---

## 7. Test Strategy & Verification
1. `npm run migrate --prefix backend` -> verify all migrations apply cleanly.
2. `node -c backend/src/...` -> verify all Node backend files have zero syntax errors.
3. `npm run build --prefix frontend` -> verify TypeScript compilation succeeds with zero errors.
4. Execute test API calls against `/api/admin` verifying authentication, role checks, and CRUD responses.
5. Verify public blog views reflect CMS changes.
