/**
 * Cookie choices for the static Insight Medicolegal website.
 * Optional categories are intentionally OFF: the current build has no
 * analytics or advertising integrations. Enabling one requires an updated
 * policy, identified provider, fresh consent version and actual script gating.
 */
type CookieChoice = {
  version: string;
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  savedAt: number;
};
const STORAGE_KEY = 'insight_cookie_preferences';
const CONSENT_VERSION = '2026-11-02-v1';
const MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
const ENABLED = Object.freeze({analytics: false, advertising: false});

const $ = <T extends HTMLElement = HTMLElement>(id: string): T | null =>
  document.getElementById(id) as T | null;

const banner = $('cookie-banner');
const settings = $('cookie-settings');
const closeButton = $('cookie-close');
const rejectButton = $('cookie-reject');
const acceptButton = $('cookie-accept');
const manageButton = $('cookie-manage');
const saveButton = $('cookie-save');
const settingsRejectButton = $('cookie-settings-reject');
const settingsAcceptButton = $('cookie-settings-accept');
const analyticsInput = $<HTMLInputElement>('cookie-analytics');
const advertisingInput = $<HTMLInputElement>('cookie-advertising');
const settingsPanel = settings?.querySelector<HTMLElement>('.cookie-settings__panel') ?? null;
const hasOptional = ENABLED.analytics || ENABLED.advertising;
let restoreFocusTo: HTMLElement | null = null;

function getSaved(): CookieChoice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    const p = parsed as Partial<CookieChoice>;
    if (p.version !== CONSENT_VERSION || p.necessary !== true ||
        typeof p.savedAt !== 'number' || !Number.isFinite(p.savedAt) ||
        p.savedAt > Date.now() || Date.now() - p.savedAt > MAX_AGE_MS ||
        typeof p.analytics !== 'boolean' || typeof p.advertising !== 'boolean') return null;
    return {...(p as CookieChoice), analytics: ENABLED.analytics && p.analytics, advertising: ENABLED.advertising && p.advertising};
  } catch {
    return null; // Browsers can block storage; banner still allows a session choice.
  }
}

function broadcast(choice: CookieChoice): void {
  document.documentElement.dataset.cookieConsent = 'saved';
  window.dispatchEvent(new CustomEvent<CookieChoice>('insight:cookie-consent', {detail: choice}));
}

/** Do not load any optional technology merely because this event fires. */
function persist(analytics: boolean, advertising: boolean): void {
  const choice: CookieChoice = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: ENABLED.analytics && analytics,
    advertising: ENABLED.advertising && advertising,
    savedAt: Date.now(),
  };
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(choice)); } catch { /* disabled storage */ }
  if (banner) banner.hidden = true;
  if (settings) settings.hidden = true;
  broadcast(choice);
  restoreFocusTo?.focus();
  restoreFocusTo = null;
}

function openSettings(trigger?: HTMLElement): void {
  if (!settings) return;
  restoreFocusTo = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
  const saved = getSaved();
  if (analyticsInput) analyticsInput.checked = ENABLED.analytics && (saved?.analytics ?? false);
  if (advertisingInput) advertisingInput.checked = ENABLED.advertising && (saved?.advertising ?? false);
  settings.hidden = false;
  document.body.classList.add('cookie-settings-open');
  closeButton?.focus();
}

function closeSettings(): void {
  if (settings) settings.hidden = true;
  document.body.classList.remove('cookie-settings-open');
  restoreFocusTo?.focus();
  restoreFocusTo = null;
}

if (banner && settings) {
  const saved = getSaved();
  if (!saved) banner.hidden = false;
  else broadcast(saved);

  // No fictitious consent to future trackers: accept-all is hidden until a
  // real, disclosed optional technology is installed.
  if (acceptButton) acceptButton.hidden = !hasOptional;
  if (settingsAcceptButton) settingsAcceptButton.hidden = !hasOptional;
  if (rejectButton) rejectButton.textContent = hasOptional ? 'Reject optional' : 'OK';

  if (analyticsInput) analyticsInput.disabled = !ENABLED.analytics;
  if (advertisingInput) advertisingInput.disabled = !ENABLED.advertising;

  rejectButton?.addEventListener('click', () => persist(false, false));
  acceptButton?.addEventListener('click', () => persist(true, true));
  manageButton?.addEventListener('click', () => openSettings(manageButton));
  saveButton?.addEventListener('click', () => {
    persist(Boolean(analyticsInput?.checked), Boolean(advertisingInput?.checked));
    document.body.classList.remove('cookie-settings-open');
  });
  settingsRejectButton?.addEventListener('click', () => {
    persist(false, false);
    document.body.classList.remove('cookie-settings-open');
  });
  settingsAcceptButton?.addEventListener('click', () => {
    persist(true, true);
    document.body.classList.remove('cookie-settings-open');
  });
  closeButton?.addEventListener('click', closeSettings);

  document.querySelectorAll<HTMLButtonElement>('[data-cookie-open]').forEach(button => {
    button.addEventListener('click', () => openSettings(button));
  });

  settings.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSettings();
      return;
    }
    if (event.key !== 'Tab' || !settingsPanel) return;
    const nodes = [...settingsPanel.querySelectorAll<HTMLElement>(
      'button:not([disabled]):not([hidden]), input:not([disabled]):not([hidden]), a[href]'
    )].filter(el => el.getClientRects().length > 0);
    if (!nodes.length) return;
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
