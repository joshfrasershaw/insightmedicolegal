# Implementation log

## Bootstrap — 2 November 2026
- Created a dedicated GitHub repository for Insight Medicolegal, separate from joshfrasershaw/insight.
- Added Codex agent instructions, approved design specification, route list, image sources, Cloudflare setup and QA criteria.
- Added a minimal Astro static-site scaffold to be completed by Codex.

## Deployment fix — 2 November 2026
- First Cloudflare build succeeded but Wrangler automatic Astro configuration failed with `Missing file or directory: public/.assetsignore`.
- Added explicit `wrangler.jsonc` for static assets served from `./dist` through Worker `insightmedicolegal`, bypassing Astro adapter auto-setup.
- Added a small custom Astro 404 and configured `not_found_handling: "404-page"`.
- Added Wrangler as a development dependency and deploy/preview scripts.
- Updated README and deployment guidance from Pages to the actual Cloudflare Workers configuration.
- **Cloudflare redeployment outcome: pending verification.** Do not claim success without a completed deployment log.

## Codex implementation
Pending. For each significant change, record date, files changed, reason, actual checks run, result, unresolved issues and relevant PR/preview link. Do not claim tests passed until executed.
