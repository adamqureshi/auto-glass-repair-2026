# auto-glass-repair-2026

Static Impex Auto Glass quote site for Vercel.

This version does **not** use Next.js, npm, package.json, or package-lock.json. It is plain HTML/CSS with the Omega quote iframe, so Vercel should not run `npm install`.

## Important GitHub update step

Before uploading this version, delete the old app files from the repo root:

- `package.json`
- `package-lock.json`
- `.npmrc`
- `next.config.mjs`
- `next-env.d.ts`
- `tsconfig.json`
- `src/`
- old `public/` folder

Then upload the files from this ZIP:

- `vercel.json`
- `README.md`
- `public/`

## Vercel settings

In Vercel Project Settings, set Framework Preset to **Other**.

Clear any manual Install Command override. This repo already sets `installCommand` to an empty string in `vercel.json`, which tells Vercel to skip install.

Build Command can be left as the repo setting:

```bash
echo "Static site ready - no npm build required"
```

Output Directory:

```bash
public
```

## Quote form

The quote form uses:

```html
<iframe src="https://app.omegaedi.com/quoter/?folder=impex"></iframe>
```
