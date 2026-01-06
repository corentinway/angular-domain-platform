# angular-domain-platform

A modular Angular platform designed for **data-heavy applications**, financial dashboards,
and Green IT calculators, built with modern Angular and Nx best practices.

## 🎯 Goals

- Build a **scalable and reusable architecture** using an Nx monorepo
- Develop **Angular libraries publishable on npm** (`core-config`, `core-http`, `core-api`, etc.)
- Create **fullstack applications** with Angular frontend and Node.js backend
- Leverage **modern Angular patterns**: standalone components, signals, functional providers
- Demonstrate **production-grade frontend engineering** and clean domain-driven design

## 🧱 Architecture & Structure

- `apps/` – End-user applications (e.g. `market-analytics`)
- `libs/` – Reusable, configurable, and open-source Angular libraries
- `backend/` *(coming soon)* – Node.js services (API, calculations, integrations)
- `infra/` *(coming soon)* – Infrastructure as Code for free-tier cloud deployment

The platform follows a **domain-oriented modular design**, making features and technical
concerns explicit, testable, and easy to evolve.

## 🧩 Core Concepts

- Strong separation between **domain logic**, **infrastructure**, and **UI**
- Configuration-driven behavior via typed tokens
- HTTP abstraction through interceptors and policies
- Code reuse across applications through shared libraries

## 🛠️ Technologies

- Angular 17+ (standalone components, signals)
- Nx (monorepo, task orchestration)
- Rspack (modern, fast bundler)
- Node.js / Express *(planned backend)*
- Vitest (unit testing)
- Playwright (end-to-end testing)
- GitHub Actions (CI)

## 🧪 Quality & Engineering Standards

- Unit-tested core libraries
- HTTP and interceptor behavior covered by tests
- Clean, readable code with explicit domain variables
- CI pipeline running lint, test, and build on each push

## 🚀 Setup & Run

```bash
npm install
nx serve market-analytics
