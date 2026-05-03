# auto-glass-repair

Mobile-first lead generation site for **Impex Auto Glass**. Built with Next.js App Router for Vercel.

This version uses the existing Omega EDI instant quote iframe, so no POS API key is required for launch.

## What is included

- Fast quote-first homepage with the main CTA: **Impex Auto Glass Repair — Get a Quote**
- Existing Omega EDI quote iframe embedded on homepage, service pages, location pages, and contact page
- Main service pages
- Main city location SEO pages for:
  - Greensboro, NC
  - Asheville, NC
  - Summerfield, NC
  - Hendersonville, NC
  - Charlotte, NC
  - Raleigh, NC
- Footer location links
- Sitemap and robots metadata
- Content placeholder sections for future copy, photos, reviews, insurance language, and local proof

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel deployment

1. Create or use the GitHub repo.
2. Upload this project to the repo.
3. Import the repo into Vercel.
4. Add `NEXT_PUBLIC_SITE_URL` from `.env.example`.
5. Deploy.

## Quote form

The quote CTA embeds the current Omega EDI quoter:

```html
<iframe width="560" height="800" src="https://app.omegaedi.com/quoter/?folder=impex" frameborder="0"></iframe>
```

This keeps the customer quote flow inside the system Impex already uses.

## Editing pages

- Global site settings: `src/data/site.ts`
- Services: `src/data/services.ts`
- Main location pages: `src/data/locations.ts`
- Quote iframe component: `src/components/LeadForm.tsx`
- Styles: `src/app/globals.css`

## Notes

The project is intentionally simple: no CMS, no Tailwind dependency, no POS API credentials, and no server-side lead integration in this iframe version.
