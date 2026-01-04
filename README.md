# Portfolio Platform

Plateforme Angular modulaire, orientée applications **data-heavy**, dashboards financiers et calculs Green IT.

## Objectifs
- Architecture réutilisable et scalable (monorepo Nx)
- Libraries Angular publiables sur npm (`core-config`, `core-api`…)
- Applications fullstack Angular + Node.js
- Pattern standalone + signals pour Angular moderne

## Structure
- `apps/` : applications finales (ex: `market-analytics`)
- `libs/` : briques réutilisables et open source
- `backend/` (à venir) : services Node.js
- `infra/` (à venir) : infrastructure as code pour cloud gratuit

## Technologies
- Angular 17+ (Standalone components, signals)
- Nx (monorepo)
- Node.js / Express (backend futur)
- Playwright (e2e)
- Vitest (unit tests)
- Rspack (bundler moderne)

## Setup & Run
```bash
npm install
nx serve market-analytics
