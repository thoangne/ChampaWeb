# Implementation Plans Directory

This directory stores structured technical design and implementation plans for **MEDIUM**, **LARGE**, and **HIGH-RISK** features in `ChampaWeb`.

## 1. When to Create a Plan
- **Trivial / SMALL Tasks**: Do **NOT** create a plan file for single-line tweaks, trivial CSS changes, or simple typo fixes.
- **MEDIUM Tasks**: Multi-file changes with clear scope. A plan clarifies touchpoints and task sequence.
- **LARGE / Cross-Cutting Tasks**: Changes spanning Database, Express API, and React Frontend. A plan is **mandatory**.
- **HIGH-RISK Tasks**: Changes modifying Authentication, Authorization, Database Schema, or Infrastructure. A plan is **mandatory** and must be approved before execution.

## 2. File Naming Convention
Name plan files in kebab-case describing the target capability:
```
plans/<feature-name>.md
```
*Example: `plans/baoh-dana-booking-flow.md`, `plans/artisan-craft-catalog.md`*

## 3. Plan Status Lifecycle
Every plan file must track its active status using one of these four values:
- `NOT_STARTED`: The plan has been drafted and is awaiting approval or kickoff.
- `IN_PROGRESS`: Implementation is underway. Checkboxes in the task list are updated as tasks finish.
- `BLOCKED`: Work cannot proceed due to external dependencies, unanswered questions, or technical blockers.
- `COMPLETED`: Implementation, verification, and code review have finished successfully.

## 4. Plan Template
Use [`plans/template.md`](./template.md) as the starting structure for new plans.
