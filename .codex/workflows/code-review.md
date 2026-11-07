# Workflow: Code Review

> **Applies to**: Performing rigorous, independent code reviews of pull requests, commits, staged changes, or proposed technical solutions in `ChampaWeb`.

---

## 1. Review Persona & Mindset
- Act as an objective, uncompromising Senior Principal Software Engineer.
- Review independently without assuming the author's code is bug-free or complete.
- Verify both the code that was changed and the code that should have been changed but was overlooked.

---

## 2. Review Dimensions & Checklists

### A. Functional Correctness & Business Logic
- Does the implementation satisfy all stated user requirements and acceptance criteria?
- Are boundary conditions handled (empty states, off-by-one errors, null/undefined inputs)?
- Does the change adhere to ChampaWeb business logic (e.g., maximum 8 guests per group for Baoh Dana tour, revenue sharing rules, proper role definitions)?

### B. Security & Permissions
- Are authentication (`authMiddleware`) and authorization (`requireAdmin`) strictly enforced on protected routes?
- Are database queries protected against SQL injection (using Knex query builder parameters)?
- Are sensitive secrets, database credentials, or private API keys exposed in code or commits?
- Is user input sanitized before rendering or persisting?
- Does client authentication rely only on verified backend state rather than easily forged client storage?

### C. Performance & Scalability
- **Frontend**: Are there unnecessary re-renders, un-memoized heavy calculations, or unintended infinite loops in `useEffect`?
- **Backend / Database**: Are there N+1 query patterns, missing indexes on foreign keys, or unindexed full table scans?
- **Bundle Size**: Were heavy libraries imported when lightweight alternatives or native Web APIs suffice?

### D. Error Handling & Resilience
- Are promises properly awaited and wrapped in `try/catch` with errors passed to `next(error)` in Express controllers?
- Does the client handle API network failures gracefully with user-facing toast alerts (`sonner`)?
- Are error responses sanitized to prevent leaking stack traces or internal database details to clients?

### E. Backward Compatibility & Conventions
- Are existing API contracts preserved for existing client versions?
- Does the code adhere to the directory structure and coding conventions in `docs/engineering/coding-conventions.md`?
- Are TypeScript types explicit without resorting to `any` unless strictly unavoidable?

### F. Verification & Test Coverage
- Are there tests or verifiable reproduction steps for new logic?
- Was the code verified with `npm run build --prefix frontend`?
- Are limitations or unverified edge cases disclosed transparently?

---

## 3. Severity Classification Matrix

Every finding must be tagged with an explicit severity level:

| Severity | Definition | Action Required |
|---|---|---|
| **CRITICAL** | Data loss, security vulnerability (e.g., SQL injection, auth bypass), production crash, severe data corruption. | Must be fixed immediately. Blocks release. |
| **HIGH** | Major functional defect, broken business logic, missing error handling on primary flow, performance regression. | Must be fixed before merging/closing task. |
| **MEDIUM** | Code smell, suboptimal pattern, edge case defect, missing validation, maintenance concern. | Strongly recommended to fix; discuss trade-offs. |
| **LOW** | Minor style inconsistency, typo in comment/label, trivial optimization opportunity. | Optional polish; fix if time permits. |

---

## 4. Review Output Format

Structure the review report with clear sections, exact file links, and actionable remediation snippets:

```markdown
### Summary of Review
[Concise executive summary of changes and overall recommendation: APPROVE / REQUEST_CHANGES / COMMENT]

### Detailed Findings

#### 1. [SEVERITY] Finding Title
- **Location**: `path/to/file.ext#L123-L130`
- **Issue Description**: Detailed explanation of the bug, security flaw, or regression.
- **Impact**: Concrete consequence if left unaddressed.
- **Recommended Remediation**:
  ```diff
  - old faulty code
  + new secure/correct code
  ```

### Verification Status
- Type checking: [Passed / Failed / Not applicable]
- Linting: [Passed / Failed / Not applicable]
- Build: [Passed / Failed / Not applicable]
```
