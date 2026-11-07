# Workflow: Refactoring

> **Applies to**: Restructuring existing code, eliminating code smells, paying down technical debt, improving readability, optimizing performance, and modularizing oversized components without altering external observable behavior.

---

## 1. Stage 1: Understand Current Behavior & Code Smells
- **Understand Baseline Behavior**:
  - Carefully study the target code and document exactly what it does, including edge cases, side effects, and implicit dependencies.
- **Identify Code Smells & Tech Debt**:
  - Oversized components / God files (e.g., page files exceeding 500 lines with mixed presentation and data access).
  - Duplicated logic across controllers or React components.
  - Tightly coupled modules or circular dependencies.
  - Violations of layered architecture (e.g., direct database calls inside route handlers).
  - Suboptimal state management (e.g., prop drilling where context or composition is better suited).
- **Rule of Isolation**:
  - **Never combine refactoring with new feature development or bug fixes.** Refactoring must be behavior-preserving.

## 2. Stage 2: Behavior Preservation & Dependency Analysis
- **Define Invariants**:
  - Explicitly define the contracts that must remain 100% unchanged:
    - API response formats, HTTP status codes, and error envelopes.
    - React component public props, emitted events, and accessibility attributes.
    - Database schemas, constraints, and column data types.
- **Map Dependencies**:
  - List all callers, consumers, imports, and downstream components that interact with the target module.

## 3. Stage 3: Characterization Strategy
- When an automated test suite is available, establish baseline tests capturing the existing behavior before altering code.
- In modules lacking automated test suites:
  - Document a strict before/after verification matrix.
  - Capture sample inputs and baseline outputs for manual or script-based comparison.

## 4. Stage 4: Incremental Refactoring Execution
Execute the refactoring in small, atomic, verifiable steps:
1. **Extract Utilities / Helpers**: Move pure algorithmic logic into dedicated helper functions or service files.
2. **Decompose UI Components**: Split massive JSX components into smaller focused sub-components (e.g., extracting a card, modal, or list item).
3. **Streamline Controllers & Services**: Move business logic out of route handlers and controllers into `backend/src/services/`.
4. **Preserve Naming & Interfaces**: Maintain backward-compatible exports and aliases to prevent breaking external callers.

## 5. Stage 5: Verification & Regression Check
- **Type Checking & Bundler Verification**:
  ```bash
  npm run build --prefix frontend
  ```
  Ensure type safety and that no broken exports or imports were introduced.
- **Lint Verification**:
  ```bash
  npm run lint --prefix frontend
  ```
- **Backend Syntax Check**:
  ```bash
  node -c backend/src/<path>/<modified_file>.js
  ```
- **Behavioral Comparison**:
  - Compare runtime output and UX before and after refactoring to ensure exact behavioral preservation.

## 6. Stage 6: Final Report
- Summarize:
  1. Motivation: Technical debt or code smells addressed.
  2. Structural changes made (files split, functions extracted, abstractions created).
  3. Verification that external behavior remains unchanged.
  4. Before / after comparison (e.g., line count reduction, clarity improvement, performance metrics).
