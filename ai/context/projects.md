# Projects

## Project Schema
Each project has: id, title, period, status, stack, description, contribution, impact, url

---

## MIMO - Motos
- id: mimo
- period: 2024-04 → present
- status: active (maintenance + new features)
- url: https://www.hondamotoscomoto.mx
- stack: Laravel, PHP, TypeScript, TailwindCSS, Alpine.js, Redis, Meilisearch
- description: Multi-tenant platform for motorcycle dealership groups. Manages groups, distributors, contacts, social media, addresses, schedules. Generates dynamic websites per group based on domain. Manages banners (global + per-group), promotions, product listings, branch maps, lead capture (encrypted PII).
- contribution:
  - Led project from initial analysis to production deploy
  - Architecture decisions and resource management
  - Implemented Repository Pattern, Decorator Pattern, DTO, VO for scalable foundation
  - Integrated Laravel Scout + Meilisearch for encrypted lead search
  - Deployed and configured Meilisearch on server
  - Currently building automation algorithm for site management
- impact: Centralized lead management across apps; CRM with multi-level roles; scalable multi-tenant architecture

---

## Ekar de Gas
- id: ekar
- period: 2024-04 → present
- status: active (maintenance + new features)
- url: https://www.ekardegas.mx
- stack: Laravel, PHP, TypeScript, TailwindCSS, Alpine.js, Filament
- description: Custom e-commerce for historic Jalisco retailer. Full store: products, brands, categories, reviews, stock, warehouses, customers, orders, shipping, payments. Direct SAP integration for product/stock/price/order sync.
- contribution:
  - SAP integration via raw XML + direct DB raw queries (self-researched)
  - Built custom cart package
  - Implemented full checkout flow
  - Built new MercadoPago payment package
  - Ongoing maintenance and module improvements
- impact: First e-commerce built from scratch; established SAP integration expertise

---

## Tubin
- id: tubin
- period: 2024-08 → present
- status: active
- url: [no public URL]
- stack: Laravel, PHP, TypeScript, TailwindCSS, Alpine.js, Filament
- description: Custom e-commerce. Products, brands, categories, stock, customers, orders. Oracle integration via API for products, stock, prices, and order creation.
- contribution:
  - Senior role: led junior team, client meetings, code reviews, staging deploys, hotfix resolution
  - Implemented Strategy Pattern for Oracle integration, enabling local development without external API access
- impact: Team leadership experience; innovative decoupling pattern for third-party dependency

---

## Solar UDG
- id: solarudg
- period: 2022-11 → 2023-04
- status: completed
- url: [internal / UDG]
- stack: Laravel, PHP, JavaScript, Chart.js, Livewire, Alpine.js, TailwindCSS
- description: Administrative system for centralized monitoring of all photovoltaic systems across Universidad de Guadalajara campuses. Real-time, monthly, and period-based energy generation data. CFE file processing.
- contribution:
  - Campus locations module (list, edit, sublocation view)
  - Built Chart.js graphs from scratch (first time using the library): filters by inverter, period, day, month
  - CFE report preview with auto-calculation saved to DB
  - Final PDF report generation with savings metrics (money saved, % green energy, net consumption)
- impact: Report used by UDG to demonstrate solar panel ROI and environmental impact

---

## JB Refacciones
- id: jb_refacciones
- period: 2021-06 → 2023-08
- status: completed (not deployed commercially)
- url: [none]
- stack: .NET, .NET Desktop, C#
- description: Desktop POS application for auto-parts shop. Features: sales, customer management (credit, discounts, companies), product catalog (parts linked to vehicle make/model/version), basic stock control, fast part search by vehicle.
- contribution:
  - Built entirely from scratch in C#
  - Packaged and installed on client machines
  - Set up database on company server
- impact: First real-world project outside school; foundational experience

---

## Portfolio (this site)
- id: portfolio
- period: ongoing
- status: active
- stack: Nuxt 3, Vue, TailwindCSS, PrimeVue, TypeScript
- description: Personal portfolio to showcase projects, skills, and experience. Deployed to GitHub Pages. Bilingual (ES/EN). SSR + static generation.
- contribution: Full design and development

---
