---
slug: support/cookie-banner-reduction
title: "Cookie Banner Reduction in Waterfox"
---

Cookie Banner Reduction helps reduce or remove intrusive cookie consent pop-ups on supported sites. Waterfox automatically responds to many cookie banners so you can keep browsing with fewer interruptions.

- In normal windows, Waterfox attempts to reject optional cookies whenever possible.
- In Private Windows, when a banner offers no “reject” option, Waterfox may accept the minimum required cookies to dismiss the banner and keep you moving. Cookies are still confined by [Total Cookie Protection](/support/total-cookie-protection).

Notes and limitations:
- This feature only works on sites that are supported by Waterfox’s rules. It won’t remove every banner on the web.
- Some sites may require interaction for legal or functional reasons; in those cases, a banner may still appear.

## Turn Cookie Banner Reduction on or off

You can enable or disable Cookie Banner Reduction at any time.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. Scroll to the Cookie Banner Reduction section (under privacy and tracking controls).
4. Choose your preferences:
   - Reduce cookie banners in all windows
   - Reduce cookie banners in Private Windows

Changes take effect immediately. If you don’t see these options, make sure Waterfox is up to date.

## Control Cookie Banner Reduction for a specific site

If a site behaves incorrectly or you need the banner to appear:

- Use the site controls:
  - Open the site you want to adjust.
  - Open the Site Information panel (click the lock/connection icon in the address bar) or the protections shield icon (if shown).
  - Toggle Cookie Banner Reduction off for this site (wording may vary), or choose to Allow cookie banners for this site.
- Or manage site exceptions from Settings:
  1. Settings > Privacy & Security.
  2. Find Cookie Banner Reduction.
  3. Open Manage Exceptions (if available) and add or remove the site.

Reload the page after changing the setting.

## Troubleshooting and behavior details

- Not supported on this site:
  - If a banner still appears, the site may not be supported yet, or its banner cannot be handled automatically.
- Site breaks or loops:
  - Turn Cookie Banner Reduction off for that site (see above) and reload.
- Regional/legal differences:
  - Some regions or site configurations may require explicit consent. Cookie Banner Reduction won’t override those requirements.
- Private Windows:
  - When a site provides no reject option, Waterfox may accept the minimum necessary cookies to dismiss the banner in Private Windows. Cookies remain isolated by [Total Cookie Protection](/support/total-cookie-protection).

## Related articles

- [Total Cookie Protection](/support/total-cookie-protection)
- [Third-party cookies](/support/third-party-cookies)
- [Tracking protection and privacy controls](/support/how-stop-waterfox-making-automatic-connections)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Cookie Banner Reduction](https://support.mozilla.org/en-US/kb/cookie-banner-reduction). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/cookie-banner-reduction#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::