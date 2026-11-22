# LedgerAI-Client: Enterprise Wholesale Frontend & Landing Experience

[![React 18+](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6.1-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-teal.svg)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

> **Repository:** [`https://github.com/Haiderali445/LedgerAI-Client.git`](https://github.com/Haiderali445/LedgerAI-Client.git)  
> **Parent Monolith:** [`https://github.com/Haiderali445/LedgerAI.git`](https://github.com/Haiderali445/LedgerAI.git)  
> **Design Language:** Obsidian/Navy Surface (`#070B14` / `#0B1120`), Emerald Accents (`#10B981`), 1px Subtle Borders (`border-white/[0.08]`), `rounded-3xl` Smooth Geometries & `tabular-nums`  

---

## 1. Overview & Architectural Scope

**LedgerAI-Client** (`LedgerAI.Web`) is the official web client for **LedgerAI** — Next-Gen B2B Wholesale ERP, Multi-Warehouse IMS, Udhaar Khata Ledger, and WhatsApp-native AI Copilot.

It provides a high-converting, benefit-driven commercial landing experience and a priority early-access waitlist, backed by production-ready enterprise repository abstractions (`mock`, `.NET 9 API`, `Supabase`) and dev-gated HTTP logging.

### Two Active Pages (Zero AI-Dashboard Clutter)

1. **`/` — Master Landing Page (`src/views/public/LandingPage.tsx`)**:
   * **Where Sales Meets AI Automation:** Crisp, benefit-driven business pitch for wholesale distributors and mandi traders with zero AI hype.
   * **Visual Arrowed Workflow (`ArrowedWorkflowSection.tsx`):** True directional SVG arrowheads (`→` desktop, `↓` mobile) displaying the 5-step journey:
     $$\text{WhatsApp, Email \& Orders} \longrightarrow \text{AI Organizes Order Draft} \longrightarrow \text{Stock \& Khata Check} \longrightarrow \text{Your Approval} \longrightarrow \text{Bill \& Khata Updated}$$
     With interactive scenario toggles (*WhatsApp Order*, *Credit Alert*, *Manual Entry*).
   * **Problems Saved → Business Benefits (`BenefitsSection.tsx`):** 5 scannable cards solving missed WhatsApp orders, runaway credit exposure, 00/01 calculation disputes, expiring batch spoilage, and operational downtime.
   * **Real-UI Interactive Preview (`ProductPreviewSection.tsx`):** Hands-on dark preview tabs demonstrating the WhatsApp audio order workflow, multi-warehouse stock utilization bars, batch expiry schedules (FEFO), and 00/01 voucher surcharge math (Bilty, Mazdoori, WHT, Kasar).
   * **Closing CTA & Business Footer (`ClosingCtaFooter.tsx`):** Clean closing waitlist card and business navigation without developer jargon or dead links.

2. **`/coming-soon` — Early Access Waitlist & Roadmap Inspector (`src/views/public/SoonToComePage.tsx`)**:
   * Centered `rounded-3xl` waitlist card on deep obsidian background with ambient radial glow.
   * Business email capture with regex validation, instant confirmation feedback, and `localStorage` persistence.
   * **3 Metric Snapshot Cards (`tabular-nums`):** `₨ 0 Lost Orders`, `100% Manual Continuity`, and `FEFO Batch Logic`.
   * **Interactive Module Pills (No Truncation):** Clickable pills for `Sales & Orders`, `Purchase & Billing`, `Warehouse Stock`, `Udhaar Khata`, `WhatsApp & Email`, and `AI Assistant` displaying live 1-line business benefits.
   * **Who It's For & 3-Step Rollout:** Target profiles for wholesale distributors and mandi traders alongside a clean 3-step setup guide.

---

## 2. Directory Structure

```text
LedgerAI-Client/
├── dist/                               # Production build artifacts
├── public/                             # Static public assets
│   ├── _redirects                      # Netlify & Cloudflare SPA rewrite rules
│   ├── favicon.ico                     # Favicon
│   └── ledger-icon-ai.jpg              # High-res favicon & web app icon
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── ledger-icon-ai.jpg      # Official AI copilot emblem & brand mascot
│   ├── components/
│   │   ├── helper/
│   │   │   └── ErrorBoundary.tsx       # Top-level React error boundary
│   │   ├── landing/                    # Modular landing page sections
│   │   │   ├── ArrowedWorkflowSection.tsx # 5-step arrowed flow diagram with scenario toggles
│   │   │   ├── BenefitsSection.tsx     # 5 scannable Problems Saved -> Business Benefits cards
│   │   │   ├── ClosingCtaFooter.tsx    # Closing CTA card & business SaaS footer
│   │   │   ├── HeroSection.tsx         # Short, punchy hero ("Where Sales Meets AI Automation")
│   │   │   ├── Navbar.tsx              # Sticky glass navigation bar with brand emblem
│   │   │   └── ProductPreviewSection.tsx  # Interactive real-UI preview frame (3 tabs)
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
├── netlify.toml                        # Netlify build and redirect configuration
├── package.json                        # Scripts and dependencies
├── tailwind.config.ts                  # Obsidian colors (#070B14, #0B1120) & brand palette
├── tsconfig.json                       # TypeScript compiler configuration
├── vercel.json                         # Vercel deployment configuration
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
* [Node.js v20+](https://nodejs.org/) (tested on Node v26.4)
* npm v10+

### Installation & Run
```bash
# Clone the client repository
git clone https://github.com/Haiderali445/LedgerAI-Client.git
cd LedgerAI-Client

# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Compile production bundle (Typecheck + Vite build)
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Production Deployment (Netlify & Vercel)

### Option A: Netlify Deployment
The repository includes pre-configured [`netlify.toml`](netlify.toml) and [`public/_redirects`](public/_redirects):

* **Build Command:** `npm run build`
* **Publish Directory:** `dist`
* **Node Version:** `20+`
* **Wildcard SPA Rewrite:** All routes redirect to `/index.html` with status `200` to support React Router v6 cleanly.

### Option B: Vercel Deployment
The repository includes [`vercel.json`](vercel.json):

* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Framework:** `vite`
* **Security Headers:** Enforces `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.

---

## 6. Project Team & Academic Credits

**LedgerAI** is developed as a Final Year Project at the **Department of Software Engineering, University of Gujrat, Pakistan**:

* **Haider Ali** — Lead Architect & Backend / AI Engineering
* **Ibtisam Kashif** — Full-Stack & Inventory Systems
* **Fazina Mukhtar** — Frontend Engineering & Quality Assurance

---

## 7. License

This project is **proprietary and confidential**. All rights reserved. Unauthorized copying, distribution, or public mirroring is strictly prohibited.
