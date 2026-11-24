# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Bilingual (Ukrainian/English) Next.js App Router landing page for online pilates coaching, with a blog and a Telegram-backed lead form. Deployed to Cloudflare Workers (worker `pilates-studio`, Free plan) at `https://www.pilates-yuliya.com` as a static export served from static assets, with a tiny worker only for the lead form. A static-export preview is also published to GitHub Pages.

## Commands

```bash
npm install
npm run dev      # start dev server at http://localhost:3000 (redirects to /uk)
npm run build      # static export into out/
npm run lint       # next lint
npm run cf:preview # build + wrangler dev (http://localhost:8787, serves out/ + worker)
npm run cf:deploy  # build + wrangler deploy to Cloudflare
```

There is no test suite configured.

### Local Telegram lead form

Copy `.env.example` to `.env.local` and set `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` to exercise `app/api/lead/route.ts` under `npm run dev`. For `wrangler dev`, put them in `.dev.vars`. In production they are Cloudflare worker variables/secrets (dashboard → pilates-studio → Settings → Variables and Secrets); `wrangler.jsonc` sets `keep_vars: true` so deploys do not wipe them.

## Architecture

### Locale routing

- `app/page.tsx` is the only route at the true root; it `permanentRedirect()`s to `/uk` in dev. In the static export the real 301 comes from `public/_redirects` (`/ /uk 301`), which Cloudflare applies.
- All real content lives under `app/[locale]/...`, gated by `isLocale` from `lib/i18n.ts` (`locales = ["uk", "en"]`, default `"uk"`). Any `[locale]` page/layout must call `isLocale(locale)` and `notFound()` on failure — see `app/[locale]/layout.tsx` and `app/[locale]/blog/[slug]/page.tsx` for the pattern.
- Both locales are fully static: `generateStaticParams` in `app/[locale]/layout.tsx` and `app/[locale]/blog/[slug]/page.tsx` pre-renders every locale/slug combination.

### Content model

- `lib/content.ts` exports a single `content: Record<Locale, LandingContent>` object — every section of the one-page landing (hero, about, whoFor, trainer, testimonials, formats, blog, faq, contacts, footer) plus all blog post bodies live here as plain data, duplicated per locale (no i18n library/message-catalog indirection).
- Blog posts are `content[locale].blog.posts[]` (`slug`, `title`, `excerpt`, `content: string[]` paragraphs). The UK and EN post arrays are expected to stay index-aligned — `app/sitemap.ts` and the blog article page use matching array indices to link a post to its translated counterpart via `alternates.languages`.
- Blog preview images are looked up separately by slug in `lib/blog-images.ts` (`blogPreviewImages: Record<string, string>`), not stored inline in `content.ts`. Add new slugs to both the post data and this map together.

### Lead form flow

- `components/lead-form.tsx` is a client-side modal with its own per-locale copy/validation strings (`formCopy`, `formatOptions`) — this duplicates rather than reads from `lib/content.ts`.
- Validation (phone/email shape) is defined once in `lib/lead-validation.ts` and used both client-side (`lead-form.tsx`) and server-side (`lib/lead-handler.ts`) to keep the checks consistent.
- The form includes a hidden honeypot field (`name="website"`); the API silently accepts (`{ ok: true }`) without sending to Telegram if it's filled.
- `lib/lead-handler.ts` (`handleLead(request, env)`) holds all lead logic: it requires `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` from `env` and posts the formatted lead to the Telegram Bot API. It uses only web-standard `Request`/`Response` and relative imports (no `@/` alias, no `next/*`) because the Cloudflare worker imports it directly.
- Two thin callers: `worker/index.ts` (production: handles `POST /api/lead`, 405 for other methods, everything else falls through to `env.ASSETS`) and `app/api/lead/route.ts` (only for local `npm run dev`, reads `process.env`). The route is not part of the static export, so the lead form does **not** work on GitHub Pages.

### Build & deploy (Cloudflare vs. GitHub Pages)

`next build` **always** produces a static export (`output: "export"` when `NODE_ENV=production`) into `out/`, with unoptimized images. `next dev` runs normally, including `/api/lead`.
- Cloudflare (production): `wrangler.jsonc` serves `out/` as static assets (free, no CPU-time limit; `not_found_handling: "404-page"` → `out/404.html`) and runs `worker/index.ts` only for requests with no matching asset (`/api/lead`, 404s). `trailingSlash` stays `false` so URLs remain `/uk`, `/uk/blog/...`. The worker name `pilates-studio` must not change — the domain is bound to it. Rendering pages in the worker (e.g. OpenNext) is deliberately avoided: it exceeded the Free plan 10 ms CPU limit.
- GitHub Pages (`GITHUB_PAGES=true`, set by `.github/workflows/pages-preview.yml`): additionally `trailingSlash: true` and `basePath`/`assetPrefix` derived from `GITHUB_REPOSITORY` (serves from `https://<user>.github.io/<repo>/`). No lead form.

Every page must stay statically renderable. Do not add server-only behavior (dynamic routes without `generateStaticParams`, cookies/headers, middleware, ISR) — it will break `next build`. New server-side endpoints belong in `worker/index.ts`, with shared logic in `lib/` using relative imports.

### SEO surface

`app/sitemap.ts` and `app/robots.ts` are metadata route handlers (emitted as static `sitemap.xml`/`robots.txt` at build time) using `baseUrl = "https://www.pilates-yuliya.com"` and pull page/post URLs directly from `lib/content.ts`, including `alternates.languages` cross-links between `/uk` and `/en` and their blog posts. `app/layout.tsx` sets `metadataBase` to the same production domain; `app/[locale]/layout.tsx` and the blog pages layer in per-locale/per-post `generateMetadata`.
