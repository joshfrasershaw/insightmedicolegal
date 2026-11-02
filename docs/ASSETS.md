# Webflow asset reference and migration

**Use approved, real source images.** Download files into public/images with stable human-readable filenames. Do not use CSS asset IDs or Webflow @img_ tokens in the final CSS. Verify dimensions, content and image use before committing.

## Required / verified source URLs

### Hero: Glasgow University
Webflow class: insight-hero
URL:
https://s3.amazonaws.com/webflow-prod-assets/69d54197306f7335172bf4d8/6ad75a09028df0ae44f5e998_HERO-UGalsgow_1127848313.jpg
Suggested local file: /images/glasgow-university-hero.jpg
Style: cover; navy gradient overlay; visually centre photo; white H1.

### Profile/portrait visual used in Webflow CSS
Webflow class: im-profile-visual
URL:
https://s3.amazonaws.com/webflow-prod-assets/69d54197306f7335172bf4d8/6ad7824f243acb91c909f9c9_e102a009-fa97-4d02-9888-1aa29491ebe9.png
Suggested local file: /images/doctor-profile-source.png
IMPORTANT: Visually inspect the actual image to confirm content and use. Do not invent a substitute portrait.

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
- No generic medical, hospital or AI face imagery.
- Preserve natural crops and proper aspect ratios; verify 1440px desktop and narrow mobile.
- Use descriptive alt text for content images; decorative backgrounds should not have redundant alt text.
- Optimise heavy photos sensibly and use modern formats as appropriate. Do not lose facial detail.
- Lazy-load below-fold inline images; prioritise the main hero.
- Keep source attribution/copyright requirements intact, and check provenance where not already documented.
