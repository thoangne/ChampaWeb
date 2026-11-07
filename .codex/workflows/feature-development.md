# Workflow: Feature Development

> **Applies to**: Adding new functionality, creating new UI pages/components, implementing new backend endpoints, extending database models, and integrating third-party services.

---

## 1. Stage 1: Requirement & Business Logic Analysis
- Analyze the user request thoroughly. Dissect user stories, UI/UX expectations, edge cases, and business constraints.
- Identify the target user persona (e.g., traveler booking a tour, artisan listing crafts, platform administrator).
- In the context of `ChampaWeb`, preserve cultural authenticity and existing design patterns (warm terracotta/indigo palettes, authentic Cham terminology).
- If ambiguities exist that alter functional scope or architecture, clarify with the user before proceeding.

## 2. Stage 2: Existing Code Exploration
- Search the codebase for similar or related implementations before writing new code:
  - Check `frontend/src/pages/` and `frontend/src/components/` for reusable widgets or page skeletons.
  - Check `backend/src/routes/`, `backend/src/controllers/`, and `backend/src/services/` for existing endpoints or service utilities.
  - Check `backend/database/schema_all.sql` and `backend/database/migrations/` for related database tables and constraints.
- Identify exact file dependencies and external libraries already installed (`package.json`) to prevent duplicate dependency installation.

## 3. Stage 3: Architecture & Impact Assessment
- **Data Model Impact**:
  - Determine if database schema changes are required.
  - If a schema change is needed:
    - Create a reversible Knex migration in `backend/database/migrations/`.
    - Update `backend/database/schema_all.sql` reference.
    - Classify as **HIGH-RISK** if altering existing production columns or tables.
- **API Impact**:
  - Define endpoint path under `/api/<resource>` following REST conventions.
  - Adhere to the standard JSON envelope: `{ success: true, message: string, data: any }`.
  - Secure endpoints with `authMiddleware` and `requireAdmin` where applicable.
- **Frontend Impact**:
  - Route additions in `frontend/src/App.tsx`.
  - Type definitions in `frontend/src/types/`.
  - Component hierarchy: atomic UI widgets in `components/ui/`, composite domain features in `components/<feature>/`.

## 4. Stage 4: Acceptance Criteria & Implementation Planning
- Formulate clear, testable acceptance criteria (e.g., "Given X, when user does Y, then Z must happen").
- Size the task:
  - **SMALL**: Simple isolated UI tweak or single endpoint extension. Proceed after brief analysis.
  - **MEDIUM**: Multi-file feature with clear boundaries. Create a concise execution plan.
  - **LARGE**: Cross-cutting feature touching DB, API, and UI. Create formal plan at `plans/<feature-name>.md`.
  - **HIGH-RISK**: Changes involving authentication, authorization, financial data, or destructive database operations. Present technical design and request user approval before mutating state.

## 5. Stage 5: Incremental Implementation
- Implement changes incrementally in logical dependency order:
  1. **Database / Migrations**: Run and verify migration structure.
  2. **Backend Services & Controllers**: Implement business logic, error handling with `try/catch -> next(error)`.
  3. **Backend Routes & Middlewares**: Mount endpoint under `backend/src/routes/`.
  4. **Frontend API Clients / Context**: Integrate fetch or Supabase client in frontend.
  5. **Frontend UI Components & Pages**: Build reactive UI with Tailwind CSS and Radix UI components.
  6. **Routing**: Bind routes in `frontend/src/App.tsx`.
- Never modify unrelated files. Adhere strictly to existing coding conventions in `docs/engineering/coding-conventions.md`.

## 6. Stage 6: Testing & Verification
- **Frontend Type & Build Verification**:
  ```bash
  npm run build --prefix frontend
  ```
  Ensure zero TypeScript compiler errors.
- **Frontend Lint Verification**:
  ```bash
  npm run lint --prefix frontend
  ```
  Ensure no new ESLint violations are introduced.
- **Backend Syntax Verification**:
  ```bash
  node -c backend/src/controllers/<modified_file>.js
  node -c backend/src/services/<modified_file>.js
  ```
- **Functional Validation**:
  - Verify edge cases (empty states, invalid inputs, unauthorized access, server errors).
  - Explicitly disclose any tests that could not be executed due to missing test runner infrastructure. **Never fabricate test results.**

## 7. Stage 7: Independent Code Review
- Perform an independent self-review against the review criteria in `.codex/workflows/code-review.md`:
  - Functional correctness & edge cases.
  - Security (auth checks, SQL injection resistance, input sanitization).
  - Performance (unnecessary re-renders, DB query efficiency).
  - Maintainability and adherence to repo conventions.

## 8. Stage 8: Final Report
- Deliver a concise summary:
  1. What was implemented.
  2. Files created / modified (with relative file paths).
  3. Verification commands executed and their output status.
  4. Manual testing steps to verify in browser/API client.
  5. Any remaining limitations or recommended future enhancements.
