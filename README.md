# auto-glass-repair

Mobile-first lead generation site for **Impex Auto Glass**. Built with Next.js App Router for Vercel.

## What is included

- Fast quote-first homepage with the main CTA: **Impex Auto Glass Repair — Get a Quote**
- Lead form flow: service need + ZIP first, then name, email, and phone
- Server-side lead route at `/api/leads`
- ZIP decode route at `/api/zip`
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
- Content placeholder sections for you to fill in later

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel deployment

1. Create a GitHub repo named `auto-glass-repair`.
2. Upload this project to the repo.
3. Import the repo into Vercel.
4. Add the environment variables from `.env.example`.
5. Start with `LEAD_CAPTURE_MODE=demo` until the POS credentials are verified.
6. Switch to `LEAD_CAPTURE_MODE=omega` when ready to send real leads to Omega EDI.

## Omega EDI lead setup

The current implementation creates an Omega invoice/job with:

- `job_status: "LE"`
- `invoice_status: "NS"`
- customer name, phone, email, city/state
- service request, ZIP, vehicle info, page URL, and UTM details inside the description/content fields

Required Omega invoice fields must be provided as Vercel environment variables:

```bash
OMEGA_API_KEY=
OMEGA_SALESMAN_1_ID=
OMEGA_LOCATION_ID=
OMEGA_ACCOUNT_COMPANY_ID=
OMEGA_PRICING_PROFILE_ID=
LEAD_CAPTURE_MODE=omega
```

Optional:

```bash
OMEGA_CREATE_INTERACTION=true
```

That creates an Omega Interaction after the invoice is created.

## Editing pages

- Global site settings: `src/data/site.ts`
- Services: `src/data/services.ts`
- Main location pages: `src/data/locations.ts`
- Lead form: `src/components/LeadForm.tsx`
- POS mapping: `src/lib/omega.ts`
- Styles: `src/app/globals.css`

## Notes

The project is intentionally simple: no CMS, no Tailwind dependency, no client-side POS secrets. The API key is only used in the server route.
