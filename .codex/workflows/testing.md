# Workflow: Testing

> **Applies to**: Designing test strategies, authoring unit and integration tests, performing end-to-end verification, and auditing code coverage across frontend and backend.

---

## 1. Stage 1: Identify Testing Scope & Existing Architecture
- **Assess Testing Objective**:
  - Determine whether the task requires unit testing (pure utility, calculation, validator), integration testing (Express route + service + DB query), or end-to-end component verification.
- **Audit Repository Test Infrastructure**:
  - Check `package.json` across root, `frontend/`, and `backend/` for configured runners.
  - **Ground Truth for ChampaWeb**:
    - Frontend relies on `tsc -b && vite build` for compilation and type safety, and `eslint .` for static linting.
    - Backend currently has `"test": "echo \"Error: no test specified\" && exit 1"`.
    - If authoring new automated tests requires adding a runner (e.g., Vitest, Jest, Supertest), declare this upfront and request approval before introducing new dependencies.

## 2. Stage 2: Select Appropriate Test Levels
- **Level 1: Static Type & Lint Verification**:
  - TypeScript compiler (`tsc -b`) verifies interfaces, prop types, nullability, and API schemas.
  - ESLint enforces hook rules and module structure.
- **Level 2: Unit Testing (When runner is available)**:
  - Target pure utilities (`frontend/src/lib/utils.ts`, validation helpers, date/currency formatters).
  - Target backend domain calculations (pricing calculation, booking date validations).
- **Level 3: Integration Testing**:
  - Test Express endpoint routes with mocked or test database instances.
  - Test React context providers (`AuthContext`, `AudioContext`) with component consumers.
- **Level 4: End-to-End & Smoke Verification**:
  - Critical paths: User registration/login -> Tour browsing -> Booking submission -> Admin blog publishing.

## 3. Stage 3: Scenario Coverage Matrix
Every test plan must cover:
1. **Positive Scenarios (Happy Path)**:
   - Valid inputs, expected successful outcomes, HTTP 200/201 status codes.
2. **Negative Scenarios (Invalid Inputs & Error Paths)**:
   - Missing required fields, invalid email format, negative prices, malformed UUIDs.
   - Verifying HTTP 400 Bad Request responses with appropriate error messages.
3. **Edge Cases**:
   - Empty collections, maximum boundary lengths, special characters, unicode strings (Vietnamese diacritics, Cham script).
   - Concurrent requests, overlapping booking dates, expired auth tokens.
4. **Security & Authorization Failures**:
   - Unauthenticated requests to protected routes -> HTTP 401.
   - Non-admin users attempting admin routes -> HTTP 403.

## 4. Stage 4: Test Authoring Conventions
- Structure tests using the **AAA Pattern** (Arrange, Act, Assert).
- Use clear descriptive names:
  ```javascript
  describe("Tour Booking Service", () => {
    it("should calculate total price correctly for 2 adults and 1 child", () => { ... });
    it("should reject booking when selected date is in the past", () => { ... });
    it("should reject booking when maximum group capacity (8 guests) is exceeded", () => { ... });
  });
  ```
- Keep tests isolated: Do not let tests depend on shared mutable state or execution order.

## 5. Stage 5: Execution & Transparent Reporting
- Execute available test and verification commands:
  ```bash
  # Frontend compilation & type check
  npm run build --prefix frontend

  # Frontend static lint check
  npm run lint --prefix frontend

  # Backend file syntax checks
  node -c backend/src/<file>.js
  ```
- **Strict Anti-Fabrication Rule**:
  - Never fake command output.
  - If a test was not run, explicitly report: *"Automated test suite not configured; verified via TypeScript compiler and manual reproduction checklist."*

## 6. Stage 6: Final Report
- Deliver:
  1. Test scope and scenarios covered.
  2. Test files created or modified.
  3. Commands executed with exact exit codes and output summaries.
  4. Identified test gaps and recommendations for future test runner adoption.
