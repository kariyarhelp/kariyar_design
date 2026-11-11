# Auto-convert to Next.js — setup

1. Copy `.github/workflows/convert-to-nextjs.yml` into this repo at the same path.
2. Repo → Settings → Secrets and variables → Actions → New secret: `ANTHROPIC_API_KEY` (from console.anthropic.com).
3. Repo → Settings → Actions → General → Workflow permissions → "Read and write permissions".
4. Push any code to `main`. The action converts changed files into `next-app/` and commits the result.

Notes
- Pushes that only touch `next-app/` or `.github/` are ignored, so the bot's own commit won't retrigger it.
- Each run uses Anthropic API credits.
- Change `main` in the workflow if your branch differs.
