# Project Rules

## Commits
- Commit frequently — after each small, logical unit of work, not at the end
- Examples of commit granularity:
  - Added a new component → commit
  - Added one language to i18n → commit
  - Fixed a build error → commit
  - Deleted unused files → commit
- Use conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`
- Always run `next build` before committing to catch errors early

## Stack
- Next.js App Router, pnpm, Tailwind CSS v4, shadcn/ui
- Dark theme only
- English as primary language

## Workflow
- Use shadcnspace MCP for block exploration, then refine code locally
- Don't over-think — execute fast, iterate
