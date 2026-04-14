# AGENT.md

> Instructions for AI coding agents (Claude, Windsurf, Cursor, etc.) working on this repository.

## Project Overview

Personal portfolio website for Fernando Barajas — a Nuxt 3 SSR application deployed to GitHub Pages.  
Live URL: `https://fernandobg.com`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 3 (`^3.17`) with SSR enabled |
| UI | Vue 3 Composition API, `<script setup lang="ts">` |
| Styling | TailwindCSS + PrimeVue (Lara preset) + Inspira UI plugins |
| Animations | `motion-v`, custom animation components in `components/animations/` |
| i18n | `@nuxtjs/i18n` — Spanish (default) and English |
| Icons | `@nuxt/icon` with Iconify (`heroicons`, `fa6-brands`, etc.) |
| Dark mode | `@nuxtjs/color-mode` — selector: `.dark-mode` |
| TypeScript | Strict mode enabled |
| Node | `^24.0.0` required |

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run generate  # Static generation
npm run preview   # Preview production build
```

## Directory Structure

```
components/
  animations/      # Reusable animation components (FlipWords, WavyBackground, Orbit, etc.)
  home/            # Page sections: SectionHome, SectionAboutMe, SectionPortfolio, etc.
  projects/        # ProjectCard, ProjectDetails, ProjectList
  App*.vue         # Global layout components (AppHeader, AppFooter, AppMenu, AppLogo)
  *.client.vue     # Client-only components (DarkModeSwitch, LangSwitch)
composables/       # Vue composables wrapping data with i18n (useProjects, useExperiences, etc.)
data/              # Static typed data arrays (projects.ts, experiences.ts, technologies.ts)
i18n/locales/      # Translation JSON files: es.json, en.json
layouts/           # default.vue — main layout with header, slot, footer
lib/               # Utilities: cn() for class merging (clsx + tailwind-merge)
pages/             # index.vue — single-page app with section anchors
public/images/     # Static images (projects, experiences, OG images)
stores/            # Reactive shared state (homeStore.ts — social links, best skills)
themes/            # PrimeVue theme preset (Lara-based with custom blue primary palette)
types/             # TypeScript type definitions (.d.ts) with barrel export in index.d.ts
```

## Code Generation Rules

### Components

- **Always** use `<script setup lang="ts">` for Single File Components.
- Use Nuxt auto-imports — do **not** manually import `ref`, `computed`, `useI18n`, `useHead`, `useRuntimeConfig`, `useColorMode`, `useImage`, `useSeoMeta`, etc.
- Use `~/` alias for project imports:
  ```ts
  import type { Project } from '~/types/project'
  import { projects } from '~/data/projects'
  ```
- Lazy-load below-the-fold sections with `<Lazy*>` prefix and `hydrate-on-visible`.

### Internationalization (i18n)

- **Never** hardcode user-facing strings. Always use `t('key')` from `useI18n()`.
- Translation keys live in `i18n/locales/es.json` and `i18n/locales/en.json`.
- When adding new text, add the key to **both** locale files.
- Composables in `composables/` wrap raw data from `data/` and apply `t()` to produce i18n-ready computed properties.

### Types

- Define interfaces and types in `types/` as `.d.ts` files.
- Re-export everything through `types/index.d.ts` barrel file.
- Key types: `Project`, `ProjectI18n`, `Technology`, `TechnologyCategory`, `Experience`, `ExperienceI18n`, `Theme`, `SocialRef`, `BestSkill`, `OrbitProps`.

### Data Layer

- Static data arrays live in `data/` (e.g., `data/projects.ts`, `data/technologies.ts`).
- Data files export typed `const` arrays — no API calls, no async.
- Composables (`useProjects`, `useExperiences`, `useTechnologies`) provide computed, filtered, and i18n-enriched views of this data.

### Styling

- Use **TailwindCSS utility classes** as the primary styling method.
- Custom color palettes are defined as CSS variables in `assets/css/tailwind.css`:
  - `--color-blue-*` (primary/PrimeVue theme)
  - `--color-red-plug-*` (brand)
  - `--color-accent-*`
- Reference them as `rgb(var(--color-blue-500))` in CSS or via Tailwind config tokens.
- CSS layers order: `tailwind-base, primevue, tailwind-utilities` — respect this in any new CSS.
- Use `cn()` from `lib/utils.ts` for conditional/merged class names:
  ```ts
  import { cn } from '~/lib/utils'
  ```
- Fonts: `Poppins` (sans), `Montserrat` (serif), `Rubik Glitch` (awesome/display).
- Custom breakpoint: `3xl: 1920px`.

### PrimeVue

- PrimeVue auto-import is **disabled**. Components must be listed in the `primevue.components.include` array in `nuxt.config.ts` before use.
- Same applies to `primevue.directives.include`.
- Theme preset is in `themes/default.ts` (extends Lara).
- Dark mode selector for PrimeVue: `.dark-mode`.

### Icons

- Use `<Icon name="..." />` from `@nuxt/icon` with Iconify icon names.
- Preloaded icon sets: `heroicons`, `fa6-brands`.
- Tech icons use SimpleIcons CDN URLs via `getTechIcon()` in `data/technologies.ts`.
- Icons used in SSR must be pre-rendered — see hidden icons in `layouts/default.vue`.

### Dark Mode

- Managed by `@nuxtjs/color-mode`.
- Three modes: `system`, `light`, `dark`.
- The `useTheme()` composable handles cycling between modes.
- CSS selector: `.dark-mode` (configured in both Tailwind and PrimeVue).

## Deployment

- **GitHub Actions** workflow at `.github/workflows/deploy.yml`.
- Triggers on push to `main` or manual dispatch.
- Builds with `npx nuxt build --preset github_pages`.
- Deploys to GitHub Pages via `actions/deploy-pages@v4`.

## Environment Variables

See `.env.example`:

```
APP_NAME=
APP_URL=              # Defaults to https://fernandobg.com
NUTRIX_API_BASE_URL=
NUTRIX_API_SERVER_TOKEN=
GITHUB_TOKEN=         # For private Nuxt layers (currently commented out)
```

Runtime config maps these in `nuxt.config.ts` → `runtimeConfig`.

## Testing

No test framework is configured yet. If adding tests, prefer Vitest + Vue Test Utils for unit tests and Playwright for E2E.
