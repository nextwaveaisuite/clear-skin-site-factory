# Clear Skin Australia – Vercel Web Wrapper (Next.js)

This adds a **Next.js website** on top of your existing generator repo.

## How it works
- `build.py` generates markdown pages into `output/pages/`
- Next.js reads those markdown files at build time and renders them as static routes

## Vercel build command
`npm run build`

(That runs: `python build.py` then `next build`)

## Local
```bash
npm install
npm run build
npm run dev
```
