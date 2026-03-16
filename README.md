# Pilates Landing (UA/EN)

A bilingual, responsive landing page built with Next.js for online pilates coaching.

## Stack
- Next.js (App Router)
- TypeScript
- CSS (mobile-first)
- Built-in SEO routes (`sitemap.ts`, `robots.ts`)

## Local run
```bash
npm install
npm run dev
```
Open `http://localhost:3000` (redirects to `/uk`).

## Replace before launch
- In `app/layout.tsx`, set `metadataBase` to your production domain.
- In `app/sitemap.ts` and `app/robots.ts`, replace `https://example.com`.
- In `app/[locale]/page.tsx`, set real links:
  - YouTube
  - Telegram
  - Email
  - Phone

## Deploy (Private GitHub + Vercel)
1. Create a private GitHub repository.
2. Push this project.
3. Import repo in Vercel.
4. Deploy with default Next.js settings.
5. Add custom domain in Vercel when ready.

## GitHub Pages Preview
- A workflow is included at `.github/workflows/pages-preview.yml`.
- Push your changes to branch `main` to publish a static preview on GitHub Pages.
- In repository settings:
  1. Open `Settings` -> `Pages`.
  2. Set `Source` to `GitHub Actions`.
- First deployment URL format:
  - `https://<github-username>.github.io/<repo-name>/`

## Language routes
- Ukrainian: `/uk`
- English: `/en`

