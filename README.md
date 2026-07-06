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

## Telegram lead form
Create `.env.local` from `.env.example` and fill in:

```bash
TELEGRAM_BOT_TOKEN=your_botfather_token
TELEGRAM_CHAT_ID=your_group_or_private_chat_id
```

On Vercel, add the same variables in `Settings` -> `Environment Variables`, then redeploy.

## Production values
Currently pointing at `https://www.pilates-yuliya.com`. To change domain or contact links:
- `app/layout.tsx` — `metadataBase`.
- `app/sitemap.ts` and `app/robots.ts` — `baseUrl`.
- Contacts (Instagram, Tik-Tok, YouTube, Telegram, email, phone) — contact data used by `app/[locale]/page.tsx`.

## Deploy (Private GitHub + Vercel)
1. Create a private GitHub repository.
2. Push this project.
3. Import repo in Vercel.
4. Deploy with default Next.js settings.
5. Add custom domain in Vercel when ready.

## GitHub Pages Preview
- A workflow is included at `.github/workflows/pages-preview.yml`.
- Push your changes to branch `main` to publish a static preview on GitHub Pages.
- The build runs with `GITHUB_PAGES=true`, which switches Next.js to `output: "export"` (see `next.config.*`). This is a static export, so server-side features like the Telegram lead form API route won't work in this preview.
- In repository settings:
  1. Open `Settings` -> `Pages`.
  2. Set `Source` to `GitHub Actions`.
- First deployment URL format:
  - `https://<github-username>.github.io/<repo-name>/`

## Language routes
- Ukrainian: `/uk`
- English: `/en`

Each locale also has a blog at `/uk/blog` and `/en/blog`.
