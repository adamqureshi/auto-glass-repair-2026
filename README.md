# auto-glass-repair-2026

Mobile-first quote site for **Impex Auto Glass**. Built with Next.js App Router for Vercel.

This version keeps the existing Impex instant quote form embedded on the site.

## What is included

- Quote-first homepage
- Embedded instant quote form
- Service pages for repair, replacement, side glass, back glass, and ADAS calibration
- Main location pages for Greensboro, Asheville, Summerfield, Hendersonville, Charlotte, and Raleigh
- Footer service and location links
- Sitemap and robots metadata
- Customer-facing copy throughout the pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel deployment

1. Upload this project to GitHub.
2. Import the repo into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` if you want canonical URLs to use the final production domain.
4. Deploy.

## Editing pages

- Global site settings: `src/data/site.ts`
- Services: `src/data/services.ts`
- Main location pages: `src/data/locations.ts`
- Quote iframe component: `src/components/LeadForm.tsx`
- Styles: `src/app/globals.css`
