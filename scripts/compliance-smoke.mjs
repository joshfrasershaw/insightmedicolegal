import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (page) => readFileSync(join('dist', page === '/' ? 'index.html' : page.slice(1) + '/index.html'), 'utf8');

const pages = ['/', '/about', '/contact', '/instructions', '/privacy-policy', '/cookie-policy', '/terms-of-engagement'];
for (const path of pages) {
  const html = read(path);
  assert.match(html, /id="cookie-banner"/, path + ': consent notice missing');
  assert.match(html, /id="cookie-settings"/, path + ': settings missing');
  assert.match(html, /data-cookie-open/, path + ': reopen control missing');
  assert.doesNotMatch(html, /6ad7824f243acb91c909f9c9/, path + ': prohibited portrait URL present');
}
const privacy = read('/privacy-policy');
for (const text of ['ZB830807', '9(2)(f)', 'Legitimate interests', 'How long', 'Your rights', 'Complaints', 'Information Commission']) {
  assert.ok(privacy.includes(text), 'Privacy notice missing: ' + text);
}
const terms = read('/terms-of-engagement');
for (const text of ['independent', 'Fees', 'cancell', 'court', 'written terms', 'privacy notice']) {
  assert.ok(terms.toLowerCase().includes(text.toLowerCase()), 'Engagement terms missing: ' + text);
}
const cookies = read('/cookie-policy');
assert.match(cookies, /insight_cookie_preferences/, 'Missing storage identifier');
assert.match(cookies, /180 days/, 'Missing preference retention');
assert.match(cookies, /No analytics or advertising trackers/, 'Cookie notice must reflect installed tools');
const home = read('/');
assert.match(home, /Cookie details/, 'Cookie banner must explain settings');
assert.doesNotMatch(home, /<script[^>]+src="[^"]*(?:googletagmanager|google-analytics|doubleclick|facebook.net)/i, 'Unexpected tracking script');
console.log('Compliance smoke test passed: 7 built pages, shared consent UI, privacy and terms content, no portrait or tracking scripts.');
