# Cloudflare Workers deployment — static Astro

The Cloudflare project associated with this repository is a **Worker** named `insightmedicolegal`, not a Pages project. The site is fully static: no SSR or Astro Cloudflare adapter required.

## Why the first deployment failed
On 2 November 2026, `npm run build` succeeded and generated `dist/`. Then `npx wrangler deploy` ran without a Wrangler configuration file, detected Astro and attempted automatic `astro add cloudflare` setup. That process failed with `Missing file or directory: public/.assetsignore`. This is an unnecessary auto-configuration path for a static Astro website.

The fix is the committed [wrangler.jsonc](../wrangler.jsonc):

```json
{
  "name": "insightmedicolegal",
  "compatibility_date": "2026-11-02",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

Wrangler reads that config and directly uploads `dist/` as static Worker assets. **Do not run `astro add cloudflare` for this project unless deliberately switching to SSR.** The custom `src/pages/404.astro` generates the required 404 page.

## Cloudflare settings
- Project type: Workers / Workers Builds with Git integration.
- Worker name: `insightmedicolegal`.
- Repository: `joshfrasershaw/insightmedicolegal`.
- Production branch: `main` (only approved releases).
- Node version: 24.
- Build command: `npm run build` (Bun can install dependencies in the environment).
- Deploy command: `npx wrangler deploy`.
- Assets directory: `./dist` (specified in `wrangler.jsonc`).
- Root directory: repository root.

## Local
```bash
npm install
npm run check
npm run build
npm run preview
npm run preview:cloudflare
```

`npm run deploy` performs an Astro build followed by deployment. Only use it once you intend to deploy to the connected Cloudflare account.

## Release safeguards
- This scaffold still only contains a homepage starter, contact starter and 404. It is NOT the completed site and should not replace the real production website yet.
- All starter HTML pages default to `noindex,nofollow` unless `PUBLIC_SITE_READY=true` is deliberately set. This is not a substitute for restricting access; anyone with the workers.dev URL can still visit it.
- Do not add the live custom domain or change DNS without the owner's explicit approval.
- Before setting `PUBLIC_SITE_READY=true`, implement all 15 public content routes, legal pages, assets, and QA in [QA.md](QA.md).
- Do not commit secrets or sensitive medical records.
- New `package-lock.json` must be generated and committed when Codex implements the full website.
- Cloudflare Worker Git integration may deploy when `main` changes. Treat scaffold deployment as a test only, not a production launch.

Current references:
https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
https://developers.cloudflare.com/workers/static-assets/
