# Webflow asset reference and migration

**Use approved, real source images.** Download files into public/images with stable human-readable filenames. Do not use CSS asset IDs or Webflow @img_ tokens in the final CSS. Verify dimensions, content and image use before committing.

## Required / verified source URLs

### Hero: Glasgow University
Webflow class: insight-hero
URL:
https://s3.amazonaws.com/webflow-prod-assets/69d54197306f7335172bf4d8/6ad75a09028df0ae44f5e998_HERO-UGalsgow_1127848313.jpg
Suggested local file: /images/glasgow-university-hero.jpg
Style: cover; navy gradient overlay; visually centre photo; white H1. **Reuse this exact Glasgow University cloisters image** as the shared unified footer background, with a darker navy gradient to protect text legibility.

### No personal portrait imagery
The client expressly requested on 2 November 2026 that **no photographs of Dr Yameen Qureshi** appear on the website. Do not copy, download, reference or reuse his old Webflow profile photo. Homepage and About introductions are centred text with **no image-shaped replacement boxes**. Very faint background texture and fine architectural linework may sit behind the text, never inside a card.

### Glasgow city architecture/process photo
Webflow class: im-process-photo
URL:
https://s3.amazonaws.com/webflow-prod-assets/69d54197306f7335172bf4d8/6ad76ee26d658865d50a5108_top-10-reasons-to-visit-glasgow-header-george-square.jpg
Suggested local file: /images/glasgow-george-square.jpg

### Logo asset
URL:
https://s3.amazonaws.com/webflow-prod-assets/69d54197306f7335172bf4d8/6ad76643ec5c73e50466b3bc_insight-medicolegal-logo-cropped.png
Suggested local file: /images/insight-medicolegal-logo.png
Inspect and compare with the Webflow INSIGHT MEDICOLEGAL wordmark before use.

### Alternative historic Glasgow photo
URL:
https://s3.amazonaws.com/webflow-prod-assets/69d54197306f7335172bf4d8/6aa7ada4aa1049e4bfe9aa30_Glasgow-University-Historic.jpg

## Rules
- No photographs or likenesses of Dr Qureshi. No generic medical, hospital or AI face imagery.
- Preserve natural crops and proper aspect ratios; verify 1440px desktop and narrow mobile.
- Use descriptive alt text for content images; decorative backgrounds should not have redundant alt text.
- Optimise heavy photos sensibly and use modern formats as appropriate. Preserve architectural detail.
- Lazy-load below-fold inline images; prioritise the main hero.
- Keep source attribution/copyright requirements intact, and check provenance where not already documented.
