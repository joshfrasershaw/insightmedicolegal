# Verified Webflow page inventory and URL mapping

Webflow site ID: 69d54197306f7335172bf4d8. Inventory checked 2 November 2026. Build the published-intended pages below; source may contain additional unpublished element changes.

| New site path | Page | Webflow page ID |
| --- | --- | --- |
| / | Home | 69d54198306f7335172bf50b |
| /about | About Dr Yameen Qureshi | 6aa7acf8579fcf50a7db0836 |
| /areas-of-expertise | Areas of Expertise | 6aa7acf88d851f2950aa1fd4 |
| /instructions | Instructions & Contact | 6aa7acf9ad117c0978461e69 |
| /contact | Contact | 6aa7acf915cd9e027562badf |
| /glasgow | Psychiatric Expert Witness Glasgow | 6ad7820f37350e7b1d269612 |
| /edinburgh | Psychiatric Expert Witness Edinburgh | 6ad78213563f3628b8006d09 |
| /post-traumatic-stress-disorder | PTSD | 6ad7896407c7151a0db43601 |
| /anxiety-depression | Anxiety and depression | 6ad789659e60732948311910 |
| /addiction-psychiatry | Addiction psychiatry | 6ad78966a594e64a99a11955 |
| /chronic-pain-psychological-injury | Chronic pain and psychological injury | 6ad78967edaa2ceaf2e6965a |
| /personality-adjustment-disorders | Personality and adjustment disorders | 6ad789672690a6397a505caf |
| /personal-injury-clinical-negligence | Personal injury and clinical negligence | 6ad78968093144c9b022859e |
| /employment-occupational-matters | Employment and occupational matters | 6ad78969b4ba201dbcf7b5e2 |
| /professional-regulation | Professional regulation | 6ad78969b4ba201dbcf7b635 |
| /404 | Custom not found | 6ad7a0ff5f42d002d429bd11 |

**Excluded:** Webflow /services page ID 69d541a4306f7335172bf70f. It is an unrelated SEO Agency Hub template and is marked draft in Webflow.

Shared navigation should point to /areas-of-expertise, /about, /instructions and /contact. Historical mistaken /instruction (singular) must never be a visible link.

## Extra routes from the existing website
The older read-only repository joshfrasershaw/insight has additional routes under /expertise, /instructing, /locations, plus /privacy-policy, /cookie-policy, /accessibility and /terms-of-engagement. The rebuild should preserve useful legal and professional content and establish sensible route redirects when relevant. Do not copy its old visual design. Avoid unsupported material or duplicate canonical pages.

## Source/current state
- The latest Webflow Designer state includes fixes to navigation, mobile layouts, footer and decorative labels.
- The shared components are Insight | Global Header and Insight | Global Footer.
- Some Webflow content elements remain in its tree despite display:none; do not render them.
- The 404 page should use the shared footer rather than duplicating its old legal footer.
