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

## Plain-English revision — 2 November 2026
- Replaced marketing-led hero copy with "Psychiatric expert reports." and factual supporting text.
- Simplified biography, expertise, instructions, FAQs, contact and the shared footer.
- Replaced generic repeated specialist/location copy with ten short, topic-specific summaries and bullets.
- Removed compulsory-sounding first-enquiry checklists and avoided unverified promises about fees or deadlines.
- Updated agent guidance. The legal pages still require an independent compliance review.

## UK privacy and cookie compliance revision — 2 November 2026
- Expanded the privacy notice for controller identity, purposes, Article 6 bases, Article 9 legal claims, sources, recipients, storage, overseas transfers, retention criteria, data rights, objections and the DUAA 2025 organisational complaints process.
- Added general engagement terms: acceptance, expert independence, case records, assessments, written fees and payment, cancellation, confidentiality and report limitations, without inventing a contract.
- Added a complete cookie preference UI, persistent necessary-choice record, settings dialog, necessary/analytics/advertising categories, re-open buttons and no pre-consent tracking.
- Current site intentionally has no analytics/advertising integrations; those categories are disabled. See docs/COMPLIANCE.md before installing third-party scripts.
- Practice-specific records/providers/retention/contract terms must be verified against actual operations; code cannot certify them.
