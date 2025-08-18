---
slug: support/total-cookie-protection
title: "Total Cookie Protection in Waterfox"
---

Total Cookie Protection (TCP) confines cookies to the site where they were created, so trackers can’t use the same cookie to follow you across different websites. TCP works together with Waterfox’s Enhanced Tracking Protection (ETP) to help stop cross‑site tracking while keeping sites functional.

- Each top‑level site gets its own, separate “cookie jar.”
- Third‑party content (ads, widgets, analytics) embedded on a page cannot reuse their cookies on other sites.
- This protection applies in both normal and Private Windows.

:::tip
If a site insists on a cookie banner, see [Cookie Banner Reduction](/support/cookie-banner-reduction) to reduce interruptions.
:::

## How Total Cookie Protection works

Without TCP, third‑party content can set a cookie once and re‑identify you on other sites that embed the same content. TCP partitions cookie storage by the top‑level site:

- Cookies set by an embedded third party on site A are not accessible when that same third party appears on site B.
- Partitioning applies broadly to mechanisms that behave like cookies and can be used for cross‑site tracking.

This approach preserves important functionality (for example, staying signed in on a single site) without letting trackers correlate your identity across many sites.

## What changes compared to blocking all cookies

- TCP reduces cross‑site tracking without breaking as many sites as “block all third‑party cookies.”
- Blocking all cookies often prevents sign‑in widgets, payment flows, comments, and media embeds from working.
- With TCP, Waterfox isolates cookies per site and also blocks known trackers through Enhanced Tracking Protection.

If a specific feature needs limited cross‑site access (for example, single‑sign‑on), Waterfox may prompt you to allow it for that site. Prefer per‑site allowances over global changes.

## Adjust cookie and tracking settings

Waterfox provides several levels of protection. TCP is enabled alongside these settings.

1) Open Settings
- Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> > Settings.
- macOS: Waterfox > Settings (or Preferences).

2) Privacy & Security
- In Enhanced Tracking Protection:
  - Standard (recommended): Balanced protections with TCP; best compatibility.
  - Strict: Stronger protections; may break some sites.
  - Custom: Fine‑tune items like Cookies (e.g., block cross‑site tracking cookies, block all third‑party cookies, or all cookies — not recommended).

Changes take effect after reloading sites.

## Allow limited cross‑site cookies for a site

Some flows (e.g., identity providers, embedded payments) may need temporary cross‑site cookies.

Options:

- Use the prompt:
  - If Waterfox detects a required cross‑site cookie, it may show a prompt to allow it for the current site. Approve only if you trust the site. You can revoke later.

- Turn off protections for this site:
  - Click the protections shield/lock icon in the address bar.
  - Turn off protections for this site (wording may vary) and reload.
  - Turn protections back on when you’re done.

- Add a site exception:
  1. Settings > Privacy & Security > Cookies and Site Data > Manage Exceptions.
  2. Add the site and choose Allow.
  3. Reload the page.

:::caution
Allowing cross‑site cookies can enable tracking by embedded content on that site. Prefer per‑site allowances and remove them when no longer needed.
:::

## Clear cookies and site data for a site

If a site behaves oddly after changing settings:

- Clear just that site’s data:
  1. Click the lock/connection icon in the address bar.
  2. Clear cookies and site data for the site.
  3. Reload and sign in again if required.

- Or clear from Settings:
  - Settings > Privacy & Security > Cookies and Site Data > Manage Data, search for the site, Remove, then reload.

## Troubleshooting

- Sign‑in loops or “Something went wrong”
  - Use Standard protection, reload, or allow cross‑site cookies for the site via the prompt or an exception.
  - Clear cookies for the site and try again.

- Embedded widgets or checkout won’t load
  - Temporarily turn off protections for the site, complete the flow, then restore protections.
  - Or add a targeted site exception.

- I want stricter privacy
  - Use Strict Enhanced Tracking Protection and keep TCP.
  - Consider Private Windows for sensitive sessions.

## Android notes

Waterfox on Android includes Enhanced Tracking Protection and related privacy controls. Behavior and available settings may vary by Android version.

- Learn more: [Tracking Protection on Waterfox for Android](/support/tracking-protection-firefox-android) and [Enhanced Tracking Protection on Waterfox for Android](/support/enhanced-tracking-protection-firefox-android).

## Related articles

- [Third‑party cookies](/support/third-party-cookies)
- [Cookie Banner Reduction](/support/cookie-banner-reduction)
- [Privacy and connection controls](/support/how-stop-waterfox-making-automatic-connections)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Total Cookie Protection](https://support.mozilla.org/en-US/kb/total-cookie-protection). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/total-cookie-protection#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::