# CODEX TASK — reproduce Insight Medicolegal Webflow as a complete coded website

**Execute this brief. Do not merely write a proposal.**

## Objective
Recreate the LATEST Insight Medicolegal Webflow design in THIS repository (joshfrasershaw/insightmedicolegal). Make it fast, accessible, mobile-friendly and easy to maintain. Prepare it for Git-connected Cloudflare Workers static asset hosting. Implement the WHOLE website and test it. The current public insightmedicolegal.co.uk design is NOT the approved visual reference.

The repository is new and independent. Do not confuse it with the separately existing joshfrasershaw/insight React/TanStack site. You may read that older repository for verified business/legal content where available, but do not edit it.

## Source of truth
Webflow site: Insight Medicolegal
Webflow site ID: 69d54197306f7335172bf4d8
Designer: https://insightmedicolegal.design.webflow.com
Webflow global design guidance: rules/insight-global-design.md
Webflow shared components: Insight | Global Header and Insight | Global Footer

When Webflow Designer access exists, inspect the actual current/unpublished site, not solely the last published version. If the Designer is unavailable, implement from this brief and the source/asset documentation without waiting for access. Clearly log any unverified differences. Do not generate dummy medical claims.

## Explicit photography and visual texture instruction (2 November 2026)
Dr Qureshi does not want photos of himself on the website. Remove any Webflow portrait asset and never reintroduce one in new sections. Give selected backgrounds light paper-like texture and subtle linework, preserving readability, professionalism and the existing restrained palette.

## Visual design tokens
- Primary navy: #254659
- Dark navy: #102C38
- Dark ink: #10252E
- Secondary navy: #203D4B
- Warm off-white: #F6F3EC
- White: #FFFFFF
- Supporting slate: #43545A
- Pale text on dark: #DDE7EB
- Georgia serif headlines, Arial/system sans body and controls.
- Homepage H1 roughly clamp(54px, 6vw, 90px), regular weight, line-height about 1.1.
- Internal-page H1 roughly clamp(44px, 5vw, 76px).
- Body typically 16–18px and generous line-height.
- Readable container approximately 1180px max width, 7–8% desktop gutters, 6–7% mobile gutters.
- Airy editorial layout, subdued lines/borders, authentic Glasgow architecture photography and restrained shadows. NOT a hospital brochure, a SaaS interface or a generic template.

## Global header
Recreate the floating, white, gently shadowed Webflow navigation pill, max width around 960px and min height around 64px on desktop. Wordmark INSIGHT MEDICOLEGAL on left. Main links: Expertise, About, Instructions, Contact. Dark navy pill CTA: Discuss an instruction ↗. Use real routes from docs/ROUTES.md. On mobile the navigation MUST remain usable, with a tidy two-row/wrapping design if necessary, no sideways overflow, and visible focus states. On internal pages provide room below the floating header.

## Global footer
Deep navy #102C38; white navigation and pale legal text. One shared component, no duplicate home footer. Preserve legal company details, registered office, Dr Qureshi's GMC registration and Allerton Digital website credit linking to https://allertondigital.co.uk. Include working routes Home, Areas of expertise, About, Instructions, Contact, plus real legal pages where supplied. Single-column/wrapped mobile treatment; never a three-column footer squeezed into a phone.

## Homepage: recreate Webflow sections in order

1. **Photographic hero.** Full-width Glasgow University photograph from docs/ASSETS.md, cover/centred, dark navy overlay (approx linear-gradient(90deg, rgba(10,25,32,.40), rgba(10,25,32,.53) 50%, rgba(10,25,32,.40))). Desktop roughly full viewport. Centred large white Georgia H1: "Clear psychiatric opinion for legal decisions." Supporting line: "Dr Yameen Qureshi · Consultant Psychiatrist and Independent Expert Witness. Clear, independent psychiatric opinion for legal, insurance and regulatory proceedings." Primary button "Discuss an instruction ↗". No hero stats, cards, eyebrows or decorative icons.

2. **Compact expertise strip.** Warm cream, centred concise line "PTSD · Depression · Anxiety disorders · Personality disorders · Fitness to plead" with a clear text link to the expertise index. Clean transition, not an oversized card.

3. **Editorial expert profile.** Off-white, generous asymmetric split layout. **No portrait or photograph of Dr Qureshi, at his explicit request.** Use custom CSS-only editorial typographic artwork with delicate architectural arches and fine-line patterning instead of any person. Alongside it, retain the Georgia heading, short practice bio, verified qualifications "MBBS · MRCPsych · MSc · FRCPsych", and profile link. Stack gracefully on mobile.

4. **Eight-area expertise collection.** Warm cream with a large Georgia headline "Specialist psychiatric opinions." Eight named areas: post-traumatic stress disorder; anxiety and depression; addiction psychiatry; chronic pain and psychological injury; personality and adjustment disorders; personal injury and clinical negligence; employment and occupational matters; professional regulation. Each has a short concise description and working link. The Webflow source numbers cards 01–08; use numbers only where they genuinely aid the designed sequence. Do not reintroduce arbitrary numbering to other sections or add cluttered icon cards.

5. **Instruction/process.** Split Glasgow architecture photo alongside a light editorial content area. Heading "Instructing Dr Qureshi". Three key pieces of instruction information: questions to address, approximate records volume, required reporting date. Link to /instructions.

6. **FAQ.** Calm editorial accordion, keyboard accessible. Useful questions about remote assessment, information needed, fees/timescales, and who may instruct. Existing factual material only.

7. **Dark photographic contact CTA.** Navy-tinted photo section, large white Georgia "Discuss an instruction", pale supporting copy, working email and telephone buttons. Remind professionals not to transmit confidential medical records before secure arrangements are agreed.

8. **Single shared footer.**

**Do not revive hidden legacy Webflow elements:** .im-hide-old, .im-editorial-expertise (display:none), earlier duplicated footer panel, or repeated decorative labels. Only recreate the intended visible current design.

## Internal pages
Use the exact public routes listed in docs/ROUTES.md. They include:
- About: polished editorial biography, **no portrait or likeness**, subtle typography/arch artwork in lieu of photography, verified biography/credentials and instruction CTA.
- Expertise index: all eight areas, a clean introduction, restrained bordered editorial cards/blocks linking to details.
- Eight specialty pages: one reusable editorial template each, correct H1 and opening, useful clinical context, questions/assessments, related links and instruction CTA; preserve facts rather than making medical claims up.
- Instructions: clear who-can-instruct, what information is needed, assessment/report arrangements, three-step process and professional email/telephone.
- Contact: prominent email, telephone, correspondence details and confidentiality note. No insecure medical-record-upload form.
- Glasgow and Edinburgh: same editorial system; factual location coverage; do NOT claim permanent Edinburgh office.
- Custom 404: useful links plus shared header/footer.
- Legacy SEO Agency Hub /services template is an UNRELATED Webflow draft; exclude it.

The older codebase joshfrasershaw/insight has additional legal and content routes (such as privacy, cookies, accessibility and terms), which may be incorporated when source text is available and verified. Preserve useful professional content, not its older visual design. Map equivalent legacy routes via explicit redirects if those are needed; do not create duplicate competing pages.

## Existing verified contact and professional data
Practice: Insight Medicolegal Ltd; registration SC822243; Dr Yameen Qureshi; GMC 4771627.
Email: instructions@insightmedicolegal.co.uk
Phone: 07739 587092; telephone URI tel:+447739587092
Registered office from existing codebase: Clyde Offices, 48 West George Street, 2nd Floor, Glasgow, G2 1BP.
Correspondence address differs across references (older site: Centrum Business Park, 38 Queen Street, Glasgow, G1 3DX; Webflow also references PO Box 5639, Glasgow G77 9FL). DO NOT silently conflate or overwrite these. Use current validated contact data and report discrepancies for confirmation.
No patient self-referrals. No medical records before secure transfer is agreed. Do not invent fees, timescales or services.

## Technical
- Astro + TypeScript; output=static; Cloudflare Pages build command npm run build and output dist.
- Source under src/pages, src/components, src/layouts, src/styles, src/data as appropriate.
- Use Astro components and CSS by default; minimal client JS.
- Native details/summary for FAQ.
- No fake links, dead CTAs, unexplained blank template sections or lorem ipsum.
- Localise copied approved assets under public/images rather than forever hotlinking.
- Match source responsive hierarchy; verify 1440, 1024, 768, 390 and 320 pixel widths.
- WCAG AA contrast for standard text; visible focus, accessible navigation and descriptive image alt attributes.
- Keep pages static; do not add an SSR adapter unless the final functionality requires one.
- Use site-wide metadata, descriptive semantic headings, preserve accurate existing titles/descriptions where appropriate. No SEO rewrite.

## Execution order (do not stop after planning)
1. Inspect repository docs and Webflow references. Make a feature branch.
2. Install dependencies, generate and commit npm lockfile, verify existing scaffold.
3. Implement shared layout, design tokens, real assets, header/footer.
4. Fully implement the homepage to match the Webflow reference.
5. Implement all internal routes from docs/ROUTES.md and legal pages when verified.
6. Fix contact links, navigation, responsive layouts and accessibility.
7. Run npm run check and npm run build; inspect with browser/Playwright if available. Check internal routes and image loads, mobile viewport and contrast.
8. Update docs/IMPLEMENTATION_LOG.md with exact changes, test outcomes, remaining differences and deployment setup.
9. Commit changes to the feature branch and open a PR if available. If the Cloudflare Pages Git integration is connected, use its branch preview. Do NOT switch production DNS or publish an unapproved production replacement.

## Acceptance
- All 15 intended public content pages plus 404, no legacy /services page.
- Credible, cohesive Webflow-matching design across every route.
- Zero intentionally broken/placeholder links.
- Correct business contact and legal information, no unsupported clinical claims.
- Desktop/tablet/phone reviewed; no overflows, clipping, unreadable coloured text or duplicate footer.
- Cloudflare-compatible production build with committed lockfile.
- Actual implementation commits and an honest completion report (branch/PR, tests, preview if available).
