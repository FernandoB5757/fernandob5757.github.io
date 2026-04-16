# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Fernando Barajas — a **Nuxt 4** SSR application deployed to GitHub Pages.  
Live URL: `https://fernandobg.com`  
Single-page architecture: `pages/index.vue` renders all content via section components.

## Tech Stack

- **Framework**: Nuxt 4 (`^4.4.2`), Vue 3 Composition API, `<script setup lang="ts">`
- **Styling**: TailwindCSS + PrimeVue (Lara preset, unstyled) + Inspira UI plugins
- **Animations**: `motion-v` library, custom animation components in `components/animations/`
- **i18n**: `@nuxtjs/i18n` — Spanish (default) and English
- **Icons**: `@nuxt/icon` with Iconify (`heroicons`, `fa6-brands`)
- **Dark mode**: `@nuxtjs/color-mode` with `.dark-mode` CSS selector
- **TypeScript**: Strict mode enabled
- **Node**: `^24.0.0` required

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm run generate  # Static generation for GitHub Pages
npm run preview   # Preview production build locally
```

No test framework is configured.

## Architecture

### App Directory (`app/`)

All application code lives under `app/` (Nuxt 4 convention):

- **`pages/index.vue`** — Single page, composed of section components
- **`layouts/default.vue`** — Header + slot + footer; pre-renders SSR icons here
- **`components/home/`** — Page sections: `SectionHome`, `SectionAboutMe`, `SectionPortfolio`, `SectionResume`, `SectionContactMe`, `SectionStats`
- **`components/animations/`** — Reusable animation components (FlipWords, WavyBackground, Orbit, CardSpotlight, etc.)
- **`components/projects/`** — ProjectCard, ProjectDetails, ProjectList
- **`data/`** — Static typed data arrays (projects, experiences, technologies). No API calls.
- **`composables/`** — Wrap `data/` arrays with i18n via `useI18n().t()` to produce computed, translated views
- **`stores/homeStore.ts`** — Reactive shared state (social links, best skills)
- **`lib/utils.ts`** — `cn()` helper for class merging (`clsx` + `tailwind-merge`)

### Other Directories

- **`shared/types/`** — TypeScript interfaces with barrel export in `index.ts`
- **`themes/default.ts`** — PrimeVue theme preset (extends Lara with custom blue palette from CSS variables)
- **`i18n/locales/`** — `es.json` and `en.json` translation files
- **`server/`** — Nitro server routes
- **`public/images/`** — Static images (projects, profile photos)

## Key Conventions

### i18n

- **Never hardcode user-facing strings.** Always use `t('key')` from `useI18n()`.
- When adding new text, add the key to **both** `i18n/locales/es.json` and `en.json`.
- Composables in `composables/` wrap raw data from `data/` and apply `t()` for i18n-ready computed properties.

### PrimeVue

- Auto-import is **disabled**. Components must be added to the `primevue.components.include` array in `nuxt.config.ts` before use. Same for directives.
- Theme preset in `themes/default.ts` maps PrimeVue primary palette to `--color-blue-*` CSS variables.
- Dark mode selector: `.dark-mode` (must match in both Tailwind and PrimeVue config).

### Styling

- TailwindCSS utility classes are the primary styling method.
- Custom color palettes defined as CSS variables in `assets/css/tailwind.css`: `--color-blue-*` (primary), `--color-red-plug-*` (brand), `--color-accent-*`.
- CSS layer order: `tailwind-base, primevue, tailwind-utilities` — respect this in any new CSS.
- Use `cn()` from `~/lib/utils` for conditional/merged class names.
- Fonts: `Poppins` (sans), `Montserrat` (serif), `Rubik Glitch` (display). Custom breakpoint: `3xl: 1920px`.

### Components

- Use Nuxt auto-imports — do **not** manually import `ref`, `computed`, `useI18n`, `useHead`, `useRuntimeConfig`, `useColorMode`, etc.
- Use `~/` alias for project imports.
- Lazy-load below-the-fold sections with `<Lazy*>` prefix and `hydrate-on-visible`.
- Client-only components use `.client.vue` suffix (e.g., `DarkModeSwitch.client.vue`).

## Deployment

- GitHub Actions at `.github/workflows/deploy.yml`
- Triggers on push to `main` or manual dispatch
- Builds with `npx nuxt build --preset github_pages`
- Deploys to GitHub Pages via `actions/deploy-pages@v4`

## Environment Variables

See `.env.example`. Key vars:
- `APP_URL` — defaults to `https://fernandobg.com`
- `NUTRIX_API_BASE_URL` / `NUTRIX_API_SERVER_TOKEN` — API integration
- `GITHUB_TOKEN` — for private Nuxt layers (currently commented out in config)
