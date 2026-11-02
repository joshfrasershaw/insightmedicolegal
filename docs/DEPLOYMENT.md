# Cloudflare Pages deployment — Git-backed Astro static site

This new repository is intended for a static Astro build on Cloudflare Pages.

## Requirements
- Node 24 (repo .nvmrc)
- npm (generate and COMMIT package-lock.json during the implementation)
- No API/server required for the informational site
- Production output directory: dist

## Local
~~~bash
npm install
npm run dev
npm run check
npm run build
npm run preview
~~~

## Connect to Cloudflare Pages
1. Cloudflare dashboard > Workers & Pages > Create application > Pages.
2. Import the GitHub repository joshfrasershaw/insightmedicolegal.
3. Set production branch main.
4. Framework preset Astro (if asked).
5. Build command npm run build.
6. Output directory dist.
7. Root directory: repository root.
8. Node version: 24 (set NODE_VERSION=24 if the platform needs it).
9. Create a preview build for the feature branch before merging.
10. Verify page routing, assets, contact links and privacy/legal pages using the preview address.

**Do not connect the production domain insightmedicolegal.co.uk or change DNS until the owner explicitly approves the completed replacement site.**

Astro static output does NOT require @astrojs/cloudflare. Add it only if actual server-side functions/SSR are introduced deliberately and their deployment has been tested.

## Operational safeguards
- Never commit tokens, API keys or user medical records.
- If introducing a contact form, choose a privacy-appropriate endpoint and implement validation/spam resistance rather than claiming email submission works when it does not. Otherwise use a working mailto link.
- Use a consistent site URL for canonical metadata when deployed; keep preview builds nonindexed where supported.
- Avoid 404 errors from non-existent pages; each path must have its own generated HTML file, or a verified redirect.

Official guidance:
https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
https://developers.cloudflare.com/pages/configuration/build-configuration/
