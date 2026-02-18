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
- Always find a solution instead of saying "I can't". If one approach is blocked, try another
- If a CLI tool isn't authenticated — make an empty commit or code change to trigger the desired result
- Never stop at "everything up-to-date" — if the goal isn't achieved, find another way
