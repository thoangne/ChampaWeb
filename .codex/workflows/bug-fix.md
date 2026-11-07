# Workflow: Bug Fix

> **Applies to**: Resolving software defects, runtime errors, UI regressions, broken API contracts, state synchronization failures, and performance bottlenecks.

---

## 1. Stage 1: Reproduce & Characterize the Defect
- **Capture Defect Details**:
  - Understand the reported failure: Exact error message, stack trace, affected user action, and browser/device environment.
  - Determine **Expected Behavior** vs. **Actual Behavior**.
- **Formulate Minimal Reproduction Path**:
  - Identify the exact inputs, route transitions, state triggers, or API payloads that trigger the error.
  - Inspect relevant logs (Express server console logs, browser console errors, network tab responses).

## 2. Stage 2: Root Cause Investigation
- **Deep Investigation Over Surface Patching**:
  - Never apply superficial patches or symptom masking (e.g., adding `try/catch` that silently swallows errors, or `if (!x) return null` without understanding why `x` is undefined).
  - Trace the error backward:
    - If UI crashes: Trace state from React component props -> Context (`AuthContext`, `AudioContext`) -> API response / Supabase client.
    - If API returns 500: Trace controller -> service -> database query in Knex/Supabase.
    - If routing fails: Trace `react-router-dom` configuration in `App.tsx` and route matching logic.
- **Inspect Git History**:
  - If the bug is a recent regression, check recent commits (`git log -n 5 -p <file>`) to identify what change introduced the defect.

## 3. Stage 3: Regression Risk Assessment
- Analyze blast radius:
  - What other components or endpoints share the faulty function or component?
  - Does changing the return value or behavior affect existing clients or consumers?
  - Does the fix affect database transactions or concurrency?

## 4. Stage 4: Regression Testing Strategy
- If a test harness exists for the module, write a failing regression test before fixing the code.
- If no automated test harness is present in the repository for that module:
  - Document a deterministic manual verification checklist (inputs, step-by-step actions, expected output).
  - Explicitly document the absence of an automated test runner rather than fabricating test execution.

## 5. Stage 5: Minimal Surgical Remediation
- Implement the smallest, most direct fix that thoroughly eliminates the root cause.
- Adhere to existing patterns:
  - Preserve naming conventions, async/await structures, and error propagation paths.
  - Do NOT refactor surrounding unrelated code or reformat whole files during a bug fix.
  - Do NOT add new dependencies to resolve a bug unless strictly necessary and approved.

## 6. Stage 6: Verification & Validation
- **Run Build & Type Checking**:
  ```bash
  npm run build --prefix frontend
  ```
- **Run Linting**:
  ```bash
  npm run lint --prefix frontend
  ```
- **Syntax Check (Backend)**:
  ```bash
  node -c backend/src/<path>/<modified_file>.js
  ```
- **Defect Verification**:
  - Retest the reproduction path to ensure the issue is completely resolved.
  - Verify adjacent or dependent features to ensure zero collateral regressions.

## 7. Stage 7: Final Report
- Summarize:
  1. Root cause explanation (why the bug occurred).
  2. Description of the fix and files modified.
  3. Verification steps performed and test outputs.
  4. Regression prevention advice or recommended follow-up refactoring.
