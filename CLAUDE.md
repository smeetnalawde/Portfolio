# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

This is Smeet Nalawade's personal portfolio site, built with Next.js 14 (App Router),
TypeScript, Tailwind, Framer Motion, and react-three-fiber for 3D elements. It showcases
his data science / data engineering work and includes an AI chatbot that answers questions
about his background using resume content as context (RAG-style, backed by Perplexity).

The project was originally forked from a template by Ishaan Bandekar and is being
rebranded to Smeet. Most of the app has been updated, but rebranding is not finished —
see "Known rebranding gaps" below.

## Directory note: nested folder

The actual project root (`package.json`, `app/`, `config/`, `public/`, etc.) lives in a
**doubly-nested** folder: `wportfolio-website-main/wportfolio-website-main/`. Always run
`npm`/`yarn`/`next` commands from this inner directory, not the outer one — the outer
folder has no `package.json` and commands will fail there.

## Commands

- `npm run dev` — start dev server (also bumps Node heap to 4GB via `NODE_OPTIONS`)
- `npm run build` — production build (same heap bump)
- `npm run start` — start production server
- `npm run lint` — `next lint` (config: `next/core-web-vitals`)

This repo uses both `package-lock.json` and `yarn.lock` — check which one is actually
in use / up to date before adding dependencies.

## Architecture

- `app/` — Next.js App Router pages and API routes
  - `app/page.tsx`, `app/layout.tsx` — main site shell
  - `app/resume/page.tsx` — resume page
  - `app/api/chat/route.ts` — chatbot endpoint (see below)
  - `app/api/resume/route.ts`, `app/api/health/route.ts` — supporting API routes
- `components/main/` — top-level page sections (hero, navbar, footer, projects, skills,
  resume section, the `ai-chatbot.tsx` widget, etc.)
- `components/sub/` — smaller building blocks used by `components/main/`
- `lib/rag/` — chunking (`chunker.ts`), retrieval (`retriever.ts`), and document loading
  for the chatbot's resume context
- `lib/perplexity/client.ts` — wrapper for calling the Perplexity API
- `config/index.ts` — site metadata (title, description, keywords, author) used in
  `app/layout.tsx`
- `public/resume-data.txt` — plain-text resume content that feeds the chatbot (read fresh
  on every request, not cached)

## The chatbot (`app/api/chat/route.ts`)

- Reads and chunks `public/resume-data.txt` on every request (`chunkText`, 800/150
  char chunk/overlap), then retrieves the top relevant chunks (`getRelevantChunks`) as
  context for the system prompt.
- The system prompt hard-codes rules to keep answers scoped to Smeet's professional
  background, third person, no invented facts, specific formatting/tone constraints.
- Calls out to Perplexity (`callPerplexity`) with the system + user messages, then
  sanitizes the response (strips horizontal rules, collapses blank lines, strips
  speaker-label prefixes).
- If you edit `public/resume-data.txt`, no rebuild/restart is needed — it's read live.

## Known rebranding gaps — flag if you see these

The site is mid-rebrand from the original template author to Smeet Nalawade. Watch for
leftover "Ishaan" references when touching related code/content:

- **`app/api/chat/route.ts` (out-of-scope response string)**: still reads *"I'm only
  able to answer questions about **Ishaan Bandekar's** professional background..."*
  while the rest of the file (system prompt, comments) refers to Smeet. This is a real
  bug, not just stale branding — the chatbot's own out-of-scope reply exposes the old
  name to site visitors.
- **`LICENSE`**: copyright line still reads "Copyright (c) 2025 Ishaan Bandekar".
  Confirm with the user before changing — attribution/license changes may need to stay
  as-is depending on the original template's license terms.

When making other changes, grep for "Ishaan" (case-insensitive) to catch any other
stragglers before considering rebranding-adjacent work done.
