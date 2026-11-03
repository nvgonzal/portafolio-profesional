# Feature: portfolio-site

## Objective
A public Next.js portfolio, deployable to Vercel, that Nicolás can attach to any job application.

## Problem and why
A job application requires a portfolio, and the GitHub profile alone undersells six years of production work: public repositories are mostly university projects and have no demos.

## Scope
- Generic, offer-independent site in Spanish. The CV remains the per-offer document.
- Sections: hero, work case studies, personal projects, stack, experience and education, contact.
- Static content kept in a typed local file. No GitHub API and no tokens.

## Constraints
- Do not invent experience, metrics or skills. Source of truth: the user's CV notes.
- Do not publish the phone number. Do not publish client data, source code or real screenshots of work systems.
- Do not claim professional Java/Kotlin. Next.js carries no "learning" label.
- Deployment, pushing and merging remain the user's decisions.

## Route
- Delegated direct: more than two non-trivial files, so one bounded writer implements T1 to T3.
- Delivery strategy: `exception-ok`. New repository with no remote or base history, so there is no reviewable slice boundary.
- RDD: off (global), so native review does not run. Ordinary checks apply.
- Test-first exception: static content site with no runner and no meaningful RED. Checks are lint, type-check, production build and rendered-output assertions.

## Tasks
- [x] T1 Scaffold Next.js (App Router, TypeScript, `src/`) and clean repository ignores. Commit: `b84fc30`.
- [x] T2 Implement typed content and all sections. Commit: `f54a641`.
- [x] T3 Apply visual design, responsive behavior, dark mode, metadata, sitemap, robots and not-found page. Commit: `feat: apply dossier design and site metadata`.
- [ ] T4 Verify independently: lint, build, phone absent from output, responsive render.

## Acceptance criteria
- `npm run lint` and `npm run build` pass.
- Rendered output contains the contact email, LinkedIn and GitHub, and does not contain the phone number.
- No horizontal page scroll at 375px width.
- CV button stays hidden until a phone-free PDF is supplied.

## Progress
Branch `feat/portfolio-site` created. `.DS_Store` and `.idea` unstaged.

- T1: Next.js 16.4.4 scaffolded; lint, type-check and production build passed on the stripped scaffold.
- T2: Content in `src/content/portfolio.ts`, sections as Server Components. Project descriptions based on the public READMEs. Lint, type-check and build passed.
- T3: Dossier design applied. Accent `#d9381e` is 4.0:1 on paper, so text uses `#b82a13` (5.4:1) in light mode and `#ff6b4a` (6.5:1) in dark mode. Device emulation at 320px and 375px measured no horizontal overflow. Lint, type-check, build and rendered-output checks passed.

## Pending user input
- Results metrics for the case studies (optional).
- Phone-free CV PDF.
- Confirmation that the contract allows publishing the case-study detail.

## Next step
T4.
