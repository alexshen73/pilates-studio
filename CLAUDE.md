# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Bilingual (Ukrainian/English) Next.js App Router landing page for online pilates coaching, with a blog and a Telegram-backed lead form. Deployed to Vercel at `https://www.pilates-yuliya.com`, with a static-export preview also published to GitHub Pages.

## Commands

```bash
npm install
npm run dev      # start dev server at http://localhost:3000 (redirects to /uk)
npm run build    # production build
npm run start    # run the production build
npm run lint      # next lint
```

There is no test suite configured.

### Local Telegram lead form

Copy `.env.example` to `.env.local` and set `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` to exercise `app/api/lead/route.ts` locally. On Vercel, set the same two variables in Project Settings and redeploy.

## Architecture

### Locale routing

- `app/page.tsx` is the only route at the true root; it immediately `redirect()`s to `/uk`.
- All real content lives under `app/[locale]/...`, gated by `isLocale` from `lib/i18n.ts` (`locales = ["uk", "en"]`, default `"uk"`). Any `[locale]` page/layout must call `isLocale(locale)` and `notFound()` on failure — see `app/[locale]/layout.tsx` and `app/[locale]/blog/[slug]/page.tsx` for the pattern.
- Both locales are fully static: `generateStaticParams` in `app/[locale]/layout.tsx` and `app/[locale]/blog/[slug]/page.tsx` pre-renders every locale/slug combination.

### Content model

- `lib/content.ts` exports a single `content: Record<Locale, LandingContent>` object — every section of the one-page landing (hero, about, whoFor, trainer, testimonials, formats, blog, faq, contacts, footer) plus all blog post bodies live here as plain data, duplicated per locale (no i18n library/message-catalog indirection).
- Blog posts are `content[locale].blog.posts[]` (`slug`, `title`, `excerpt`, `content: string[]` paragraphs). The UK and EN post arrays are expected to stay index-aligned — `app/sitemap.ts` and the blog article page use matching array indices to link a post to its translated counterpart via `alternates.languages`.
- Blog preview images are looked up separately by slug in `lib/blog-images.ts` (`blogPreviewImages: Record<string, string>`), not stored inline in `content.ts`. Add new slugs to both the post data and this map together.

### Lead form flow

- `components/lead-form.tsx` is a client-side modal with its own per-locale copy/validation strings (`formCopy`, `formatOptions`) — this duplicates rather than reads from `lib/content.ts`.
- Validation (phone/email shape) is defined once in `lib/lead-validation.ts` and used both client-side (`lead-form.tsx`) and server-side (`app/api/lead/route.ts`) to keep the checks consistent.
- The form includes a hidden honeypot field (`name="website"`); the API silently accepts (`{ ok: true }`) without sending to Telegram if it's filled.
- `app/api/lead/route.ts` requires `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` and posts the formatted lead to the Telegram Bot API. This is a real server route — it does **not** work under the GitHub Pages static export (see below).

### Build target duality (Vercel vs. GitHub Pages)

`next.config.ts` switches behavior based on `GITHUB_PAGES=true` (set by `.github/workflows/pages-preview.yml`):
- Vercel/default build: normal Next.js server output, `app/api/lead` works.
- GitHub Pages build: `output: "export"` (static export), `trailingSlash: true`, unoptimized images, and `basePath`/`assetPrefix` derived from `GITHUB_REPOSITORY` (so it serves correctly from `https://<user>.github.io/<repo>/`). The Telegram lead API route cannot run in this mode.

When changing anything under `app/api/`, or adding new dynamic/server-only behavior, verify it degrades sensibly (or is intentionally unavailable) in the static-export build.

### SEO surface

`app/sitemap.ts` and `app/robots.ts` are dynamic route handlers (not static files) using `baseUrl = "https://www.pilates-yuliya.com"` and pull page/post URLs directly from `lib/content.ts`, including `alternates.languages` cross-links between `/uk` and `/en` and their blog posts. `app/layout.tsx` sets `metadataBase` to the same production domain; `app/[locale]/layout.tsx` and the blog pages layer in per-locale/per-post `generateMetadata`.
