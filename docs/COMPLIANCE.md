# Privacy, engagement terms and cookie controls

Updated 2 November 2026.

This site contains a full privacy notice, a general engagement-information page, and a cookie preference interface. The wording reflects UK GDPR, the Data Protection Act 2018 as amended, PECR and the Data (Use and Access) Act 2025 guidance available in November 2026.

## Confirm these practice-specific facts

The law can be described in code; the actual data handling must be confirmed by the practice. Before calling these documents final, the practice should check:

1. **Retention schedule:** Enquiries, complete case files, medical records, assessment notes, reports, finance records and backups. Define actual periods where possible, plus disposal process and the criteria used for extensions. The notice currently uses criteria rather than an invented fixed period.
2. **Provider register:** Email and records platform, file sharing, video assessment, accountancy, security/hosting, IT support and their actual processing and data-transfer locations. Get UK GDPR Article 28 terms where they act as processors.
3. **International transfers:** Check each provider's region and UK adequacy, UK Addendum or International Data Transfer Agreement as appropriate. The notice provides the legal framework without claiming a specific provider is UK-only.
4. **Legal bases for non-litigation work:** Article 9(2)(f) is suitable where necessary for legal claims. For regulatory/occupational instructions not involving legal claims, the practice must identify and document the appropriate Article 9 condition and any extra DPA Schedule 1 safeguards before accepting sensitive data.
5. **Data controller status:** The older Insight Medicolegal website identified the Ltd company as data controller; check this remains right for each independent expert instruction.
6. **Assessment arrangements:** Verify secure transfer methods, whether video sessions are recorded, risk/safeguarding disclosure processes, and how examinees receive case-specific privacy information.
7. **Engagement schedule:** Confirm the actual written fee/payment/cancellation terms, professional indemnity, report ownership and court attendance charges. The webpage does NOT itself create these terms.
8. **Cloudflare configuration:** Check whether any Cloudflare Web Analytics, Google tags, advertising pixels, security cookies, injected scripts or third-party widgets run outside the repository. A build-only check cannot inspect dashboard settings.
9. **Consent logs:** Browser local storage records a choice on the device. If you start using non-essential tracking, assess whether server-side consent evidence is needed, identify each provider in the cookie policy, then obtain a fresh consent version.
10. **Company information:** Confirm the registered office, contact details, ICO registration and company number remain current.

## What the current cookie manager does

- Displays a plain first-visit notice, without blocking the whole page.
- Stores `insight_cookie_preferences` in browser local storage for a maximum of 180 days.
- Has a settings dialogue with necessary, analytics and advertising categories.
- Both analytics and advertising are **disabled because there are no matching tags in this repository**. The banner does not pretend that visitors need to consent to tools not in use.
- Visitors can use the footer or cookie policy to reopen preferences, including with a keyboard.
- A future analytics or advertising integration MUST: update the policy with vendor names, cookies and durations, enable the appropriate category, increment `CONSENT_VERSION` in `src/scripts/cookie-consent.ts`, and **prevent all non-exempt storage or requests until the correct category is consented to**. It must also implement withdrawal (including clearing cookies where possible). Merely enabling a checkbox is not enough.
- Check that browser no-JS or storage-blocked behaviour remains privacy-safe.

## Authoritative guidance

- ICO, Right to be informed: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/
- ICO, Special category data: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/special-category-data
- ICO, Guidance on storage and access technologies (finalised 29 April 2026): https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/
- ICO, Managing consent: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/
- ICO, Right to complain to organisations (2026): https://ico.org.uk/for-the-public/how-to-make-a-data-protection-complaint/
- ICO, Data storage limitation: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/storage-limitation/

**Do not describe any policy as legally certified without checking the actual practice and all live third-party integrations.**
