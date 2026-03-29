# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Le Verger des Vérités" — a single-page brochure website for a French non-profit association promoting community orchards, kitchen gardening, biodiversity, and organic practices. The site is in **French** (`lang="fr"`), **mobile-first**, and deployed to GitHub Pages at `levergerdesverites.fr`.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck (tsc) then build for production
- `npm run lint` — ESLint on the whole project
- `npm run preview` — preview the production build locally

No test framework is configured yet.

## Architecture

Single-page React app (React 19 + TypeScript + Vite). All UI uses **MUI v7** with a custom theme (`src/theme.ts`).

- `src/App.tsx` — root component, assembles all sections in order: Header → Hero → Actus → Cards → Association → Contact → Presse → Mentions → Footer
- `src/theme.ts` — MUI theme with the project's color palette (beige/oak/green) and component overrides. Exported `colors` object for direct use.
- `src/Constant.ts` — association contact info and metadata (phone, email, RNA number, officers)
- `src/components/` — one component per page section

## Conventions

- **Conventional Commits**: `feat:`, `fix:`, `docs:`, etc.
- **Branch naming**: `feat/*`, `fix/*`, `docs/*`
- Deployment: pushes to `main` trigger GitHub Actions (`.github/workflows/pages.yml`) that build and deploy to GitHub Pages. CI runs on PRs to `main` (`.github/workflows/ci.yml`).
- Design mood: calm, zen, serene. Keep it lightweight (digital sobriety).
