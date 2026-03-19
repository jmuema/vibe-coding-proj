# AGENTS.md — Joseph muema Portfolio (Astro)

This repo is a minimal, bold, high-performance portfolio site for **Joseph muema** built with **Astro** + **Tailwind CSS** and designed for **Cloudflare Pages**.

## Product goals

- **Educate** visitors about Joseph (placeholder content for now).
- Drive a primary action: **newsletter signup** via a prominent CTA form on every page.
- Keep the site **fast** (static output, minimal JS).

## Routes (pages)

- **Home**: `src/pages/index.astro` → `/`
- **About**: `src/pages/about.astro` → `/about`
- **Projects**: `src/pages/projects.astro` → `/projects`

## Components

- **Layout wrapper**: `src/layouts/BaseLayout.astro`
  - Loads Fontshare fonts, global CSS, header/footer
  - Sets per-page `<title>` + `<meta name="description">`
  - Provides skip-to-content link for accessibility
- **Header / Nav**: `src/components/Header.astro`
  - Links: Home / About / Projects
  - **Current page** is highlighted via `aria-current="page"` + accent color
- **Footer**: `src/components/Footer.astro`
  - Dynamically renders year
- **Newsletter CTA**: `src/components/NewsletterForm.astro`
  - Frontend-only placeholder `<form>` (no backend yet)
  - Email input + “Subscribe” button styled with the accent red
- **Project preview**: `src/components/ProjectCard.astro`
  - Used on Projects page for placeholder project list/grid

## Styling & design rules

- **Global CSS**: `src/styles/globals.css`
  - Tailwind base/components/utilities
  - Sets base fonts for body + headings
  - Adds `.container-max` helper for centered layout
- **Tailwind config**: `tailwind.config.cjs`
  - Defines `colors.accent` as **#E10600** (violent red accent)
- **Aesthetic**
  - Clean, minimal, lots of whitespace
  - **White/black** base with accent red used sparingly for CTAs/links/highlights
  - Content max width ~**960px** centered (via `.container-max`)

### Fonts (Fontshare)

Loaded in `src/layouts/BaseLayout.astro`:

- **Headings**: `Khand` (bold, uppercase)
- **Body**: `Switzer`

## SEO & essentials

- **Titles/descriptions**: each page passes `title` and `description` into `BaseLayout`.
- **Sitemap**: `@astrojs/sitemap` is enabled in `astro.config.mjs`.
  - `site` is set from `process.env.SITE_URL` (fallback: `https://example.com`).
- **robots.txt**: generated as a static route at build time:
  - `src/pages/robots.txt.ts` → `/robots.txt`
  - Uses Astro’s `site` value to emit a correct `Sitemap: <origin>/sitemap-index.xml`
- **Favicon**: placeholder at `public/favicon.svg`

## Content editing guide (placeholders)

All content is intentionally placeholder text.

- **Home hero + intro**: `src/pages/index.astro`
- **About story sections**: `src/pages/about.astro`
- **Projects list**: `src/pages/projects.astro` (edit the `projects` array)
- **Newsletter CTA copy**: pass `heading`/`subheading` props to `NewsletterForm`

## Local development

```bash
npm install
npm run dev
```

Build / preview:

```bash
npm run build
npm run preview
```

Note: Astro telemetry is disabled in `package.json` scripts (`ASTRO_TELEMETRY_DISABLED=1`) to avoid permission issues in restricted environments.

## Cloudflare Pages deployment

**Build settings**

- **Build command**: `npm run build`
- **Output directory**: `dist`

**Environment variables**

- **`SITE_URL`**: set to your production URL (example: `https://your-domain.com`)
  - Used for sitemap + robots.txt sitemap link.

## Performance expectations

- Astro output is static; components are server-rendered at build time.
- No client-side JS is required for core UX.
- Newsletter form is a placeholder and intentionally does not submit anywhere yet.

