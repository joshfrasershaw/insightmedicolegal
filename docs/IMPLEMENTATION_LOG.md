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

## Art direction revision — 2 November 2026
- Client explicitly requested that no photograph of Dr Yameen Qureshi appear on the website. Removed the homepage CSS portrait and About image and replaced them with CSS-only editorial typographic artwork.
- Added restrained paper-grain, fine arch/contour and hairline textures to selected sections and internal-page backgrounds; no new image libraries or external scripts.
- Updated the project instructions and asset policies to ensure future coding agents do not restore the portrait.
- Build/CI status to be recorded once the revision is checked.

## Layout clarification — 2 November 2026
- Removed the portrait *and* the entire portrait/artwork box on both the homepage and About page. Centre-aligned their doctor introduction and body text.
- Consolidated the homepage's separate ContactBanner and footer into one shared, cloisters-photo-backed footer on every route, with CTA on left and brand/navigation/legal details on right, stacked on mobile.
- Harmonised minimal grain and architectural arch motifs across the cream/white/blue sections without adding competing ornaments or new image assets.
- Verification pending GitHub Actions.
