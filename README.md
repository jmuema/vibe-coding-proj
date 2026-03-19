# Joseph muema — Portfolio (Placeholder)

Minimal, bold, static portfolio site built with Astro + Tailwind CSS.

## Requirements

- Node.js (LTS recommended)
- npm

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing content

All site copy and content is currently **placeholder text**.

- Pages live in `src/pages/`
- Shared layout in `src/layouts/BaseLayout.astro`
- Components in `src/components/`

## SEO

- Per-page `<title>` and `<meta name="description">` are set in each page.
- Sitemap is generated at build time via `@astrojs/sitemap`.
- `public/robots.txt` is included (update the domain when you set the real site URL).

## Cloudflare Pages deployment

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project and connect the repo.
3. Use these build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Set an environment variable for the sitemap/robots domain:
   - **Variable name**: `SITE_URL`
   - **Value**: `https://your-domain.com`
5. Deploy.

## Notes

- The newsletter form is frontend-only for now (no backend integration).
- The site is built to ship minimal JavaScript by default.

