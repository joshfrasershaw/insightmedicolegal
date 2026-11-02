# QA / acceptance checklist for Codex

Do not mark DONE without evidence. Update docs/IMPLEMENTATION_LOG.md after performing the checks.

## Site completeness
- [ ] All 15 intended public content pages plus custom 404 are implemented.
- [ ] Unrelated SEO Agency Hub /services page is absent.
- [ ] Exactly one shared header and footer per page.
- [ ] Existing verified credentials, legal information and professional boundaries are preserved.
- [ ] Footer includes linked Allerton Digital credit.

## Design parity
- [ ] Home hero uses actual Glasgow University image, navy overlay, centred white Georgia H1.
- [ ] Expertise strip, expert profile, eight areas, instruction photo section, FAQ, final contact CTA follow the expected sequence.
- [ ] Fonts, colours, whitespace and section geometry are consistent with Webflow.
- [ ] No unnecessary eyebrows, kicker labels, random badges or repeated numbers.
- [ ] No hidden legacy section content has been brought back.
- [ ] No photographic likeness of Dr Qureshi anywhere in rendered HTML, CSS, or downloadable site assets.
- [ ] Homepage doctor introduction and About introduction are centred, with no image placeholders, giant rectangles or substitute artwork panels.
- [ ] All pages have a *single* cloisters-backed combined CTA + footer: enquiry left, brand/navigation/legal links right (mobile: stacked).
- [ ] Light paper-grain and fine cloister arch motifs are cohesive across backgrounds, with no interference to text legibility.

## Links, functionality and content
- [ ] Header and footer links work, including /instructions (NOT /instruction).
- [ ] All eight expertise index links resolve.
- [ ] Every specialty page has a working instruction CTA.
- [ ] Email opens instructions@insightmedicolegal.co.uk.
- [ ] Telephone opens tel:+447739587092.
- [ ] FAQ disclosure buttons work by mouse and keyboard.
- [ ] Contact/legal address discrepancy checked and documented; no guessing.
- [ ] Confidential records warning retained where needed.
- [ ] No fake # links or buttons with no action.
- [ ] 404 returns a real 404 and includes useful routes.

## Responsive and accessibility
- [ ] Test 1440px, 1024px, 768px, 390px, 320px.
- [ ] No horizontal overflow or overlapping navigation.
- [ ] Cards stack, image crops remain sensible, headings do not clip.
- [ ] Dark-on-dark or light-on-light text contrast issues corrected.
- [ ] Keyboard navigation, focus outlines, semantic heading hierarchy, mobile touch targets.
- [ ] Meaningful image alt text; reduced-motion respected.

## Build & release
- [ ] npm install successful and package-lock.json committed.
- [ ] npm run check passes.
- [ ] npm run build passes.
- [ ] No secrets or generated build outputs in Git.
- [ ] Code committed to a feature branch with reviewable PR.
- [ ] Cloudflare preview tested if connected.
- [ ] No production domain/DNS changes without approval.

## Plain English and brevity
- [ ] Homepage H1 is "Psychiatric expert reports.", with no agency tagline.
- [ ] No "scope and availability", "reasoned expert opinion", or similarly vague filler.
- [ ] Homepage, About, specialist, instruction, contact, FAQ and footer text answer practical questions using short sentences.
- [ ] A first enquiry can be a brief email/call; records volume, deadlines and formal documents are not mandatory.
- [ ] Each specialist page uses distinct, relevant content.
- [ ] No fixed fees or turnaround promises without approval.
- [ ] Legal notices and terms receive a separate review for completeness.
