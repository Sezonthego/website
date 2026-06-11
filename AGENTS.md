# WeForge Clinical — Agent Guide

This document is written for AI coding agents. It describes the project architecture, technology stack, build process, and development conventions so you can work effectively in this codebase.

---

## Project Overview

WeForge Clinical is a marketing website for a clinical-recruitment infrastructure company. It is a static-first Next.js application with a single API route for contact form submissions. The site emphasizes rich animations, a strong brand identity, and conversion-oriented landing pages.

**Language:** All code, comments, and documentation are in English.

---

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.7 |
| UI Library | React | 19.2.0 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Motion (Framer Motion successor) | 12.x |
| UI Components | shadcn/ui (New York style) | — |
| Icons | Lucide React + Tabler Icons | — |
| Fonts | Poppins, Source Serif 4 (Google Fonts via `next/font`) | — |
| Deployment | Vercel | — |

---

## Project Structure

```
├── app/                    # Next.js App Router pages & API
│   ├── api/contact/route.ts   # Contact form API endpoint
│   ├── blog/page.tsx          # Insights placeholder
│   ├── contact/page.tsx       # Contact page
│   ├── cookies/page.tsx       # Cookie policy
│   ├── privacy/page.tsx       # Privacy policy
│   ├── terms/page.tsx         # Terms & conditions
│   ├── globals.css            # Tailwind CSS entry + brand variables
│   ├── layout.tsx             # Root layout with fonts & theme
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Home (landing page)
├── components/             # React components
│   ├── ui/                    # shadcn/ui and reusable UI primitives
│   ├── features/              # Feature section components (with skeletons/)
│   ├── features-secondary/    # Secondary feature sections
│   ├── features-tertiary/     # Tertiary feature sections
│   ├── contact-section.tsx    # Contact form (shared across pages)
│   ├── footer.tsx             # Site footer
│   ├── hero-3d-stage.tsx      # Animated hero section
│   ├── landing-page.tsx       # Legacy landing image component
│   ├── legal-page.tsx         # Reusable legal page template
│   ├── navbar.tsx             # Site navigation
│   └── ...                    # Other page sections
├── hooks/                  # Custom React hooks
│   └── use-media-query.tsx
├── lib/                    # Utility functions
│   └── utils.ts               # `cn()` helper (clsx + tailwind-merge)
├── providers/              # React context providers
│   └── ThemeProvider.tsx      # next-themes wrapper
├── icons/                  # Custom icon components
│   └── index.tsx
├── public/                 # Static assets
│   ├── image/                 # Image assets
│   └── *.webp                 # Hero/marketing images
├── next.config.ts          # Next.js configuration
├── vercel.json             # Vercel deployment config (SPA rewrite)
├── components.json         # shadcn/ui configuration
└── postcss.config.mjs      # PostCSS config (Tailwind v4)
```

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server (after build)
npm run start

# Run ESLint
npm run lint
```

The development server runs on `http://localhost:3000` by default.

---

## Architecture Details

### Routing
- Uses Next.js App Router (`app/` directory).
- Static pages: `/`, `/contact`, `/blog`, `/privacy`, `/terms`, `/cookies`.
- API route: `POST /api/contact` handles form submissions.
- `not-found.tsx` provides a custom 404 experience.

### Contact API (`app/api/contact/route.ts`)
Accepts JSON payloads with `name`, `email`, `role`, and `message`. Delivery happens through:
1. **Resend** (email) — if `RESEND_API_KEY` is configured.
2. **Webhook** — if `CONTACT_WEBHOOK_URL` is configured.
3. Falls back to console logging if neither is configured.

### Styling System
- **Tailwind CSS v4** with CSS-based configuration (no `tailwind.config.js`).
- Global styles and custom properties live in `app/globals.css`.
- Brand color palette:
  - `--brand-orange: #ff4f00` — primary CTA/accent
  - `--brand-ivory: #fffefa` — page background
  - `--brand-peach: #fff3e6` — card/section backgrounds
  - `--brand-cocoa: #0a0300` — primary text
  - `--brand-indigo: #0f172a` — dark accent
- CSS variables map to shadcn/ui semantic tokens (`--background`, `--primary`, `--border`, etc.).
- Dark mode is wired via `next-themes` but currently maps to the same palette as light mode.
- **Border radius is globally set to `0`** (`--radius: 0`). All UI is intentionally sharp-cornered.
- Custom animations defined in `@theme inline`: `orbit`, `logo-marquee`, `front-office-progress`.

### Typography
- **Poppins** (`--font-poppins`) — body text, UI elements.
- **Source Serif 4** (`--font-source-serif`) — display headings.
- Font utility classes: `font-clarion-body`, `font-clarion-display`.

### Component Patterns
- **shadcn/ui** components are customized to the brand palette. The `Button` component uses `class-variance-authority` (CVA) with variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`.
- **Client components** use `"use client"` directive. Many sections are client components because they rely on `motion/react` animations or React state.
- **Shared layout** (`app/layout.tsx`) wraps all pages with `ThemeProvider` and `Navbar`.
- **`Container`** component (`components/container.tsx`) provides a standard `container mx-auto` wrapper used across pages.
- **`LegalPage`** (`components/legal-page.tsx`) is a reusable template for policy pages (privacy, terms, cookies).

### Image Handling
- `next/image` is used with static images from `public/`.
- Remote image domains allowed in `next.config.ts`:
  - `images.unsplash.com`
  - `media.istockphoto.com`
  - `cdn.prod.website-files.com`
  - `hebbkx1anhila5yf.public.blob.vercel-storage.com`

---

## Development Conventions

### Code Style
- **TypeScript strict mode** is enabled.
- **Path aliases** use `@/*` mapped to `./*` (e.g., `@/components/ui/button`).
- Components are generally exported as named exports.
- Props interfaces/types are defined inline or with `React.ComponentProps`.
- Tailwind classes are written as long strings; use the existing `cn()` utility for conditional merging.

### File Naming
- Pages: `page.tsx`
- Layouts: `layout.tsx`
- API routes: `route.ts`
- Components: `PascalCase.tsx`
- Hooks: `kebab-case.tsx`
- Utilities: `kebab-case.ts`

### Accessibility
- Focus rings use `focus-visible:ring-brand-orange` pattern.
- `aria-hidden`, `aria-label`, and `role` attributes are present in interactive and decorative components.
- `useReducedMotion` from `motion/react` is used to respect user motion preferences.

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for contact form email delivery |
| `RESEND_FROM_EMAIL` | Sender address for Resend emails |
| `CONTACT_TO_EMAIL` | Destination inbox for contact submissions |
| `CONTACT_WEBHOOK_URL` | Optional Zapier/Make/Slack webhook for lead notifications |

No secrets are required to run the dev server; the contact API gracefully degrades to console logging without them.

---

## Testing

There is **no test suite** currently configured in this project. There are no test runners (Jest, Vitest, Playwright) in `package.json`. If you add tests, follow the existing TypeScript and React patterns.

---

## Deployment

- **Target platform:** Vercel.
- `vercel.json` contains a catch-all rewrite to `/` for SPA behavior:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/" }
    ]
  }
  ```
- Build output is handled automatically by Next.js on Vercel.

---

## Security Considerations

- The contact API validates email format with a simple regex and sanitizes inputs via `.trim()`.
- No database or persistent storage is used in the application.
- Environment variables for third-party services (Resend, webhooks) should be treated as secrets.
- The site does not handle clinical or participant health data directly; the privacy policy explicitly asks users not to submit sensitive health information through general contact forms.

---

## Common Tasks for Agents

- **Adding a new page:** Create `app/new-page/page.tsx`. Export metadata and a default component. Wrap in `Container` and `Footer` if it should follow existing page patterns.
- **Adding a section to the home page:** Import the component in `app/page.tsx` and place it in the JSX. Many sections are commented out as placeholders — follow that pattern.
- **Adding a shadcn/ui component:** Use the shadcn CLI if available, or manually create the component in `components/ui/` using CVA and the existing brand tokens.
- **Modifying colors:** Update CSS custom properties in `app/globals.css` under `:root` and `.dark`.
- **Changing contact form behavior:** Edit `components/contact-section.tsx` (frontend) and `app/api/contact/route.ts` (backend).
