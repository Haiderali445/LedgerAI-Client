# LedgerAI.Web: Enterprise Wholesale Frontend & Landing Experience

[![React 18+](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6.1-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-teal.svg)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](../LICENSE)

> **Document ID:** `LEDGERAI-WEB-SPEC-2026-V1.0`  
> **Repository Scope:** Frontend Web Application & Client Gateway (`C:\projects\LedgerAi\LedgerAI.Web\`)  
> **Design Language:** Obsidian/Navy Surface (`#070B14` / `#0B1120`), Emerald Accents, Subtle `1px` Borders (`border-white/[0.08]`), `rounded-3xl` Geometries & `tabular-nums`  

---

## 1. Overview & Architectural Scope

**LedgerAI.Web** is the client application for **LedgerAI**, an Enterprise B2B Multi-Tenant ERP, Inventory Management System (IMS), and digital *Udhaar Khata* (credit ledger). It presents a benefit-driven commercial landing experience and a polished early-access waitlist, wired with enterprise-ready repository abstractions (`mock`, `.NET 9 API`, `Supabase`) and dev-gated HTTP logging.

### Two-Page Architecture (Zero AI Dashboard Clutter)

1. **`/` — Master Landing Page (`src/views/public/LandingPage.tsx`)**:
   - **Where Sales Meets AI Automation:** Sharp, benefit-driven business pitch for wholesale distributors and mandi traders with zero AI hype.
   - **Visual Arrowed Workflow:** True directional arrow connectors (`→` / `↓`) showing the 5-step journey (`WhatsApp, Email & Orders` → `AI Organizes Order Draft` → `Stock & Khata Check` → `Your Approval` → `Bill & Khata Updated`) with interactive scenario toggles (*WhatsApp Order*, *Credit Alert*, *Manual Entry*).
   - **Problems Saved → Business Benefits:** 5 concise, scannable cards addressing missed orders, runaway credit exposure, 00/01 calculation disputes, expiring batch spoilage, and operational downtime.
   - **Real-UI Interactive Preview:** Hands-on dark preview tabs demonstrating the WhatsApp audio order workflow, multi-warehouse stock utilization bars, batch expiry schedules, and 00/01 voucher surcharge math (Bilty, Mazdoori, WHT, Kasar).
   - **Closing CTA & Business Footer:** Clean closing card and business-only navigation without developer jargon or dead links.

2. **`/coming-soon` — Early Access Waitlist & Module Roadmap (`src/views/public/SoonToComePage.tsx`)**:
   - Centered `rounded-3xl` waitlist card on deep obsidian background with ambient radial glow.
   - Business email capture with regex validation, instant confirmation feedback, and `localStorage` persistence.
   - **Interactive Module Pills (No Truncation):** Clickable pills for `Sales & Orders`, `Purchase & Billing`, `Warehouse Stock`, `Udhaar Khata`, `WhatsApp & Email`, and `AI Assistant` showing concise 1-line business benefits.
   - **Who It's For & 3-Step Rollout:** Compact cards for wholesale distributors and mandi traders alongside a clean 3-step setup guide.
   - Top navigation with brand emblem and `"Back to Home"` return button.

---

## 2. Directory Structure

```text
LedgerAI.Web/
├── dist/                               # Production build artifacts
├── src/
│   ├── components/
│   │   ├── helper/
│   │   │   └── ErrorBoundary.tsx       # Top-level React error boundary
│   │   ├── landing/                    # Modular landing page sections
│   │   │   ├── ArrowedWorkflowSection.tsx # 5-step arrowed flow diagram with scenario toggles
│   │   │   ├── BenefitsSection.tsx     # 5 scannable Problems Saved -> Business Benefits cards
│   │   │   ├── ClosingCtaFooter.tsx    # Closing CTA card & business SaaS footer
│   │   │   ├── HeroSection.tsx         # Short, punchy hero ("Where Sales Meets AI Automation")
│   │   │   ├── Navbar.tsx              # Sticky glass navigation bar
│   │   │   └── ProductPreviewSection.tsx  # Interactive real-UI preview frame
│   │   └── ui/                         # Reusable UI primitives (Badge, Button, Card, Input, Modal)
│   ├── contracts/                      # TypeScript contracts matching .NET 9 DTOs & DB schemas
│   ├── core/
│   │   ├── config/
│   │   │   └── env.ts                  # Typed environment configuration
│   │   ├── data/
│   │   │   ├── baseRepository.ts       # Tri-mode BaseRepository<T> ('mock' | 'api' | 'supabase')
│   │   │   └── supabaseClient.ts       # Supabase client initializer
│   │   ├── http/
│   │   │   ├── apiClient.ts            # Axios client with JWT & tenant interceptors
│   │   │   └── signalrClient.ts        # SignalR client with pub/sub listener patterns
│   │   └── telemetry/
│   │       └── logger.ts               # Dev-only telemetry logger (import.meta.env.DEV strictly gated)
│   ├── mocks/
│   │   └── landing.mock.ts             # Authoritative landing features, stats & testimonials
│   ├── utils/
│   │   ├── cn.ts                       # Tailwind clsx + twMerge utility
│   │   ├── formatCurrency.ts           # PKR currency formatter
│   │   └── formatDate.ts               # Localized date formatter
│   ├── views/
│   │   └── public/
│   │       ├── LandingPage.tsx         # Master landing page view (/)
│   │       └── SoonToComePage.tsx      # Early access waitlist view (/coming-soon)
│   ├── App.tsx                         # Router configuration (/ and /coming-soon)
│   ├── index.css                       # Obsidian theme Tailwind baseline & custom scrollbars
│   ├── main.tsx                        # React DOM root entrypoint
│   └── vite-env.d.ts                   # Vite environment typings
├── index.html                          # Single-page HTML shell with Plus Jakarta Sans & JetBrains Mono
├── package.json                        # Scripts and dependencies
├── tailwind.config.ts                  # Obsidian colors (#070B14, #0B1120) & brand palette
└── vite.config.ts                      # Vite build configuration
```

---

## 3. Core Data & HTTP Architecture

### Tri-Source `BaseRepository<T>`
Entities inherit from `BaseRepository<T extends { id: string }>` configured via `src/core/config/env.ts`:
* **`'mock'`**: In-memory store with array simulation (used during development).
* **`'api'`**: Direct REST calls against the .NET 9 Web API (`LedgerAI.Api`).
* **`'supabase'`**: Direct PostgreSQL queries using `@supabase/supabase-js`.
* **Automatic Fallback:** If network queries fail or return empty datasets, requests fall back to mock data when `fallbackToMock` is enabled.

### Dev-Only Telemetry Logger
All HTTP request/response metrics and repository operations log exclusively in development:
```typescript
private isEnabled(): boolean {
  return import.meta.env.DEV && env.enableHttpLogger;
}
```
Production bundles compiled via `npm run build` emit zero telemetry logs.

---

## 4. Local Development

### Prerequisites
* Node.js v20+ (tested on Node v26.4)
* npm v10+

### Installation & Run
```bash
# Navigate to web root
cd c:\projects\LedgerAi\LedgerAI.Web

# Start local Vite development server
npm run dev

# Production build and typecheck
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Verification & Status

* **TypeScript Compilation (`tsc -b`):** 0 Errors, 0 Warnings
* **Vite Bundler:** Build completes cleanly in ~6s, outputting gzip-optimized assets in `dist/`
* **Route Coverage:** Complete 2-page routing (`/` and `/coming-soon`) with zero dead links or no-op buttons
