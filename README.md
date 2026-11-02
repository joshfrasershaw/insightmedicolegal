# Insight Medicolegal

**Status: Codex-ready starter, not a finished production site.**

This independent repository recreates the current Insight Medicolegal Webflow design as a lightweight Astro + TypeScript website hosted on **Cloudflare Workers with static assets**.

## For Codex
1. Read [AGENTS.md](AGENTS.md) and [CODEX_TASK.md](CODEX_TASK.md).
2. Read the reference documentation in [docs/](docs/).
3. Build all Webflow pages and functional links, rather than stopping at the starter homepage.
4. Run checks, commit to the prepared `codex/webflow-rebuild` branch, and open a PR.

The older [joshfrasershaw/insight](https://github.com/joshfrasershaw/insight) repository is a **read-only content reference**; do not edit it.

## Local development
Requires Node.js 24 and npm.

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Cloudflare Workers deployment

This project is statically generated. The committed [wrangler.jsonc](wrangler.jsonc) config tells Cloudflare to serve `./dist` directly as Worker static assets. **No Astro Cloudflare adapter or server-side Worker script is needed.**

- Cloudflare build command: `npm run build`
- Cloudflare deploy command: `npx wrangler deploy`
- Static output directory: `dist`
- Worker name: `insightmedicolegal`
- Local Cloudflare test: `npm run preview:cloudflare`

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). The starter is deliberately `noindex` until explicitly approved for release. Do not attach the live custom domain or change DNS without approval.

## References
- Webflow Designer: https://insightmedicolegal.design.webflow.com
- Webflow site ID: `69d54197306f7335172bf4d8`
- Current published website design is **not** the intended Webflow visual reference.
- Site: Insight Medicolegal — Dr Yameen Qureshi, Consultant Psychiatrist

Visual fidelity, real source images, responsive layout and working navigation take priority over adding new SEO features.
