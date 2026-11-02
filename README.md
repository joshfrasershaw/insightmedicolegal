# Insight Medicolegal

**Status: Codex-ready starter, not a finished or published website.**

This repository is the **new, independent codebase** for recreating the current Insight Medicolegal Webflow design as a fast static website hosted on Cloudflare Pages.

## For Codex

1. Read [AGENTS.md](AGENTS.md).
2. Read [CODEX_TASK.md](CODEX_TASK.md).
3. Follow the supporting documentation in [docs/](docs/).
4. Implement **all** Webflow pages, using the approved design and assets.
5. Run checks, commit your work and provide a Cloudflare preview if your connection permits.

Do **not** assume this repository contains the older React/TanStack website. The legacy content reference, if accessible, is a different repository: [joshfrasershaw/insight](https://github.com/joshfrasershaw/insight), which must remain untouched.

## Development

Requires Node.js 24 and npm.

~~~bash
npm install
npm run dev
npm run check
npm run build
npm run preview
~~~

This starter uses **Astro + TypeScript**, with static rendering by default. Interactive details/summary FAQs require no client-side framework.

## Deployment

Cloudflare Pages, linked to this GitHub repository:

- Production branch: main
- Framework preset: Astro
- Build command: npm run build
- Build output directory: dist
- Root directory: repository root
- Node version: 24

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). **Do not connect the production domain or publish a replacement site without approval.**

## References

- Webflow Designer: https://insightmedicolegal.design.webflow.com
- Webflow site ID: 69d54197306f7335172bf4d8
- Existing code/content reference (read-only): https://github.com/joshfrasershaw/insight
- Site: Insight Medicolegal — Dr Yameen Qureshi, Consultant Psychiatrist

Visual fidelity, working site navigation and readable responsive typography take priority over additional SEO features.
