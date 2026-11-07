# OpenAI Codex Workflows for ChampaWeb

This directory contains standardized, production-grade operational workflows for OpenAI Codex and software engineering agents interacting with the `ChampaWeb` repository.

## 1. Workflow Catalog

| Workflow | File | Trigger Condition / Request Examples |
|---|---|---|
| **Feature Development** | [`feature-development.md`](./feature-development.md) | New functionality, page additions, API routes, user stories ("Implement booking flow", "Add artisan detail view") |
| **Bug Fix** | [`bug-fix.md`](./bug-fix.md) | Defects, incorrect behavior, UI glitches, crashes ("Fix login validation bug", "Resolve mobile menu alignment") |
| **Refactoring** | [`refactoring.md`](./refactoring.md) | Code quality improvements, restructuring, technical debt reduction ("Refactor auth service", "Clean up tour component state") |
| **Testing** | [`testing.md`](./testing.md) | Test creation, coverage expansion, verification ("Write unit tests for booking logic", "Add route verification") |
| **Code Review** | [`code-review.md`](./code-review.md) | Quality inspection, pull request review, security audit ("Review this PR", "Audit tour booking security") |

---

## 2. Automatic Selection & Multi-Workflow Composition

- **Autonomous Selection**: Codex automatically matches incoming user requests against the classification rules and loads the corresponding workflow document. Users do not need to specify workflow filenames manually.
- **Combined Tasks**: When a task spans multiple objectives (e.g., "Refactor the booking service and add unit tests"), Codex loads all relevant workflows in sequence:
  1. `refactoring.md` for safe behavior-preserving restructuring.
  2. `testing.md` for test coverage and scenario verification.

---

## 3. The 9-Stage Engineering Lifecycle

Every non-trivial engineering task follows the mandatory 9-stage lifecycle:

```
1. Understand Requirements
   └── Parse user prompt, clarify ambiguities, identify core business constraints.
2. Explore Existing Codebase
   └── Inspect affected files, modules, types, and dependencies without modifying code.
3. Define Acceptance Criteria
   └── Document explicit verifiable conditions of satisfaction.
4. Technical Design
   └── Architect solution aligned with docs/engineering/architecture.md and coding conventions.
5. Implementation Planning
   └── Size task (SMALL / MEDIUM / LARGE / HIGH-RISK) and generate plan under plans/<feature>.md if needed.
6. Implementation
   └── Incremental, scoped modifications adhering to repository style.
7. Testing & Verification
   └── Execute actual linting, type-checking, and build commands. Never fabricate results.
8. Independent Code Review
   └── Self-audit changed code across functional, security, and performance criteria.
9. Final Report
   └── Deliver structured summary, file references, verification results, and any limitations.
```

---

## 4. Scope & Safety Guardrails

- **Zero Unintended Blast Radius**: Never modify files outside the direct scope of the task.
- **Preserve Uncommitted Work**: Respect existing uncommitted working tree changes.
- **No Test Fabrication**: Never report a test as executed or passing without actual execution.
- **Approval Gate**: Stop and obtain explicit human confirmation for **HIGH-RISK** operations (auth/permission changes, database schema destruction, secrets, production deploys).
