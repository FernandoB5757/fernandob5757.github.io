# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production (SSR)
npm run generate     # Static site generation
npm run preview      # Preview production build
```

**Deploy target:** GitHub Pages via `nuxt generate` with preset `github_pages` and base URL `/portfolio/`.

## Architecture

This is a **Nuxt 3** personal portfolio with SSR enabled, using TypeScript strict mode.

### Data Flow Pattern

Content lives in `data/` as typed arrays (`projects.ts`, `experiences.ts`, `technologies.ts`). Composables in `composables/` (e.g. `useProjects`, `useExperiences`) wrap these with `useI18n()` to merge i18n translations at runtime into typed objects (`ProjectI18n`, `ExperienceI18n`). Components consume composables, never `data/` directly.

When adding a new project or experience:
1. Add the entry to the relevant `data/` file
2. Add translation keys to both `i18n/locales/en.json` and `i18n/locales/es.json`
3. Add thumbnail image to `public/images/` as `.webp`
4. If the project needs prerendered image variants, add them to `nitro.prerender.routes` in `nuxt.config.ts`

### i18n

- Default locale: `es` (Spanish)
- Locales: `es` (es-MX), `en` (en-US)
- Translation files: `i18n/locales/en.json` and `i18n/locales/es.json`
- All user-visible strings (project titles, descriptions, experience descriptions) are in i18n files

### Theming / Styling

- **Dark mode**: toggled via `.dark-mode` CSS class selector (not `prefers-color-scheme`)
- **Primary palette**: custom `red-plug` color scale defined via CSS variables in Tailwind config
- **PrimeVue**: theme configured in `themes/default.ts`, loaded in `nuxt.config.ts`. Only specific components are imported (not auto-import all).
- **Tailwind plugins**: `tailwindcss-primeui`, `tailwindcss-animate`, `@inspira-ui/plugins`
- Custom fonts: `Rubik Glitch` (font-awesome), `Poppins` (sans), `Montserrat` (serif)

### Modules in Use

- `@nuxtjs/tailwindcss` — styling
- `@primevue/nuxt-module` — UI components (selective import only)
- `@nuxtjs/color-mode` — dark/light mode
- `@nuxt/icon` — icons (heroicons, fa6-brands icon sets)
- `@nuxtjs/i18n` — internationalization
- `@nuxt/fonts` — font optimization
- `@nuxt/image` — image optimization (webp format, prerendered variants)

### Component Organization

- `components/home/` — page sections (SectionHome, SectionAboutMe, SectionPortfolio, SectionResume, SectionContactMe)
- `components/animations/` — reusable animation components (AnimatedTestimonials, FlipWords, TimeLine, BlurReveal, WavyBackground, CardSpotlight, Orbit, InteractiveGridPattern)
- `components/projects/` — ProjectCard, ProjectList, ProjectDetails
- `.client.vue` suffix — DarkModeSwitch and LangSwitch are client-only components

### Types

Defined in `types/`: `project.d.ts`, `technology.d.ts`, `index.d.ts`, `orbit.ts`. The `ProjectI18n` and `ExperienceI18n` interfaces extend their base types with translated string fields.

### Environment Variables

See `.env.example`. Runtime config maps `SERVER_TOKEN` → `serverToken` (private) and `API_URL` → `public.apiBase`.
