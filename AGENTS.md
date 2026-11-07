# OpenAI Codex Engineering Protocol — ChampaWeb

This document governs all interactions by OpenAI Codex and software engineering agents within the `ChampaWeb` repository. It enforces disciplined, production-grade engineering practices on every request.

---

## 1. Task Classification & Workflow Selection

Every incoming request must immediately be classified into one or more categories. Codex must **automatically load and follow** the corresponding workflow file from `.codex/workflows/` without requiring the user to prompt for it:

| Task Category | Trigger Criteria / User Intent | Target Workflow |
|---|---|---|
| **Feature Development** | New features, screens, endpoints, DB tables, integrations | [`.codex/workflows/feature-development.md`](.codex/workflows/feature-development.md) |
| **Bug Fix** | Defects, errors, crashes, broken UI/API behavior | [`.codex/workflows/bug-fix.md`](.codex/workflows/bug-fix.md) |
| **Refactoring** | Code cleanup, restructuring, tech debt, optimization | [`.codex/workflows/refactoring.md`](.codex/workflows/refactoring.md) |
| **Testing** | Writing tests, expanding coverage, test suites | [`.codex/workflows/testing.md`](.codex/workflows/testing.md) |
| **Code Review** | Reviewing changes, security/architecture audit | [`.codex/workflows/code-review.md`](.codex/workflows/code-review.md) |
| **Technical Investigation** | Research, root cause analysis, architecture assessment | Follow Stages 1–4 of Feature or Bug Fix |
| **Documentation** | Updating architecture, API docs, schemas, checklists | Maintain [Engineering Docs](docs/engineering/) |

*For combined tasks (e.g., refactor + add tests), load and apply all relevant workflows in sequence.*

---

## 2. Mandatory 9-Stage Engineering Lifecycle

All implementation tasks must adhere to this sequence:

```
1. Understand Requirements      -> Clarify ambiguities & constraints
2. Explore Existing Codebase    -> Inspect code, types, dependencies (Read-only)
3. Define Acceptance Criteria   -> Document testable satisfaction conditions
4. Technical Design             -> Align with docs/engineering/architecture.md
5. Implementation Planning      -> Classify risk & plan under plans/<feature>.md
6. Implementation               -> Incremental, scoped edits adhering to conventions
7. Testing & Verification       -> Real build/lint checks; NEVER fabricate results
8. Independent Code Review      -> Self-audit for bugs, security & performance
9. Final Report                 -> Summary, modified files, verification, limits
```

---

## 3. Scope Control & Safety Boundaries

- **Never modify unrelated files**: Keep changes strictly localized to the requested capability.
- **Never silently change business requirements**: If requirements conflict with implementation, surface the discrepancy to the user.
- **Never introduce unnecessary dependencies**: Use existing libraries (`package.json`) before proposing new packages.
- **Never perform destructive operations**: Dropping tables, deleting data, or purging files without explicit approval is strictly forbidden.
- **Never commit, push, or deploy**: Git commits, pushes, and Cloud Run deployments require explicit user authorization.
- **Preserve working tree changes**: Respect any preexisting uncommitted modifications in the user's workspace.
- **Maintain backward compatibility**: Preserve existing public interfaces, route paths, and DB column conventions.

---

## 4. Approval Policy Matrix

Read-only investigation is always permitted without waiting for approval. Write operations follow this tiering:

| Risk Tier | Scope & Triggers | Required Agent Action |
|---|---|---|
| **SMALL** | Isolated UI fix, documentation, minor bug patch, single function edit | Proceed with implementation after initial analysis. |
| **MEDIUM** | Multi-file feature, non-breaking service addition, internal component refactor | Prepare a concise plan. Proceed when scope is clear and changes are reversible. |
| **LARGE** | Cross-cutting features touching DB, Express API, and React frontend | Present a technical design plan and **wait for user approval** before writing code. |
| **HIGH-RISK** | Authentication, authorization, database migration/drop, payment, security, infra | Present detailed impact analysis and **require explicit user authorization** before modifying state. |

---

## 5. Verification & Anti-Fabrication Policy

A task cannot be marked complete until all verification steps are satisfied:

1. **Acceptance Criteria Verified**: Every defined criterion is validated.
2. **Build & Type Checking Executed**:
   - Frontend: `npm run build --prefix frontend` (`tsc -b && vite build`) must pass.
3. **Linting Executed**:
   - Frontend: `npm run lint --prefix frontend` (`eslint .`) must not produce new errors.
4. **Backend Syntax Verified**:
   - Modified Node.js files must pass `node -c <file_path>`.
5. **Independent Review Completed**:
   - Code must be audited against [`.codex/workflows/code-review.md`](.codex/workflows/code-review.md).
6. **No Fabricated Results**:
   - **Never fabricate or assume test results.** If an automated test runner does not exist for a module, explicitly report: *"Automated test suite not configured; verified via TypeScript build and manual checks."*
7. **Disclose Limitations**: Disclose any remaining edge cases, environment requirements, or follow-up items.

---

## 6. Project Architecture & Conventions Quick Links

- **Architecture Details**: [`docs/engineering/architecture.md`](docs/engineering/architecture.md)
- **Coding Conventions & Commands**: [`docs/engineering/coding-conventions.md`](docs/engineering/coding-conventions.md)
- **Workflows Directory**: [`.codex/workflows/`](.codex/workflows/)
- **Plans & Tracking**: [`plans/`](plans/)
