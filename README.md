# Clear Skin Australia – Site Factory (Markdown Export)

This repo generates a **publish-ready Markdown site** from:
- `config/sitemap.json`
- `config/linkmap.json`
- `config/templates.json`

## Quick start

1) Install Python 3.10+
2) Run:

```bash
python build.py
```

Outputs:
- `output/pages/*.md`
- `output/report.json`

## Where this fits (GitHub/Vercel/Supabase)
- **GitHub:** yes — push this repo as-is.
- **Vercel:** this repo is a generator (not a web app). To deploy on Vercel, add a Next.js wrapper that renders `output/pages` (we can do that next).
- **Supabase:** not required for static affiliate content. Add Supabase later only if you want auth, user accounts, saved routines, dashboards, or forms.

Generated: 2025-12-21T11:57:25.938118Z
