# Josiah Woltjer Portfolio

Personal portfolio site for AI and software recruiting, solutions and implementation roles, and MBA applications.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Four toggleable design palettes (Field Ops, Signal, Brief, Grid)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel (framework preset: Next.js).
3. Deploy. No environment variables required for v1.

Or from the CLI:

```bash
npx vercel
```

## Content

All copy lives in `src/content/portfolio.ts`. Customer and individual names are anonymized by design. Theme tokens live in `src/styles/themes.css`.

## Theme toggle

Use the palette control in the bottom-right corner. Choice is stored in `localStorage` under `josiah-theme`.
