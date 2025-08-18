---
slug: support/third-party-cookies
title: "Third‑party cookies in Waterfox"
---

Third‑party cookies are created by websites other than the one you’re visiting, typically embedded through ads, widgets, or analytics. Waterfox limits cross‑site tracking by default and isolates cookies between sites with [Total Cookie Protection](/support/total-cookie-protection).

- Total Cookie Protection confines cookies to the site where they were created, which greatly reduces the need to block all third‑party cookies.
- Enhanced Tracking Protection also blocks known trackers that use cookies and other techniques to follow you across sites.

:::tip
If a site asks you to allow cookies to continue, see [Cookie Banner Reduction](/support/cookie-banner-reduction) for fewer interruptions while browsing.
:::

## Adjust cookie and tracking settings (desktop)

You can fine‑tune how Waterfox handles third‑party cookies.

1) Open Settings:
- Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> > Settings.
- macOS: Waterfox > Settings (or Preferences).

2) Privacy controls:
- Go to Privacy & Security.
- Under Enhanced Tracking Protection:
  - Choose Standard for balanced protection (recommended).
  - Choose Strict for stronger protection (may cause some breakage).
  - Choose Custom to explicitly control Cookies:
    - Block cross‑site tracking cookies (recommended)
    - Block all third‑party cookies
    - Block all cookies (not recommended; many sites will not work)

Changes take effect immediately after you reload affected pages.

## Allow third‑party cookies for a specific site

Some sites (for example, single‑sign‑on or embedded payment flows) may need limited cross‑site cookies to work.

Options you can use:

- Temporarily disable protections for the site:
  - Click the protections shield/lock icon in the address bar and turn off protections for this site (wording may vary).
  - Reload the page. Turn protections back on when you’re done.

- Add a site exception:
  1. Settings > Privacy & Security > Cookies and Site Data > Manage Exceptions.
  2. Add the site address and choose Allow.
  3. Reload the page.

- Respond to a prompt:
  - Waterfox may show a prompt to allow cross‑site cookies when a feature requires it. Approve only if you trust the site; you can revoke this later from Exceptions.

:::caution
Allowing cross‑site cookies can let embedded content track you on other sites. Prefer per‑site exceptions over broad, global changes.
:::

## Clear cookies and site data for a site

If a site isn’t working after you change settings:

- Clear just that site’s data:
  1. Click the lock/connection icon in the address bar.
  2. Open the Site Information/Permissions panel and clear cookies and site data for the site.
  3. Reload the page and sign in again if required.

- Or clear from Settings:
  - Settings > Privacy & Security > Cookies and Site Data > Manage Data, search for the site, then Remove.

## Troubleshooting

- Page won’t load or features missing:
  - Use Standard Enhanced Tracking Protection or add a site exception (see above).
  - Reload the page after changing settings.

- Infinite sign‑in loops or embedded content won’t appear:
  - Allow cross‑site cookies for the site temporarily (use the prompt or a per‑site exception).
  - Clear cookies for the site and try again.

- I want stronger privacy:
  - Use Strict Enhanced Tracking Protection and keep Total Cookie Protection enabled.
  - Consider using a Private Window for sensitive sessions.

## Android notes

Waterfox on Android includes Enhanced Tracking Protection:
- Learn more: [Tracking Protection on Waterfox for Android](/support/tracking-protection-firefox-android) and [Enhanced Tracking Protection on Waterfox for Android](/support/enhanced-tracking-protection-firefox-android).

Behavior and available settings may vary by Android version.

## Related articles

- [Total Cookie Protection](/support/total-cookie-protection)
- [Cookie Banner Reduction](/support/cookie-banner-reduction)
- [Privacy and connection controls](/support/how-stop-waterfox-making-automatic-connections)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Third‑party cookies](https://support.mozilla.org/en-US/kb/third-party-cookies). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/third-party-cookies#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::