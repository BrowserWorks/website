---
slug: support/third-party-cookies-waterfox-tracking-protection
title: "Third-party cookies and Waterfox tracking protection"
---

Third-party cookies are [cookies](/support/cookies-information-websites-store-on-your-computer) set by a website other than the one you are currently on. For example, cnn.com might have a Facebook like button on their site. The like button will set a cookie that can be read by Facebook. That would be considered a third-party cookie. Some advertisers use these types of cookies to track your visits to the various websites on which they advertise. This is called [cross-site tracking](/support/third-party-trackers).

:::note
Cross-site tracking cookies are now disabled by default for all Waterfox users. See [Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop) for more information about how Waterfox protects you against tracking.
:::
When third-party cookies are disabled, it can stop some, but not all types of tracking. If you are concerned about tracking, see also [How do I turn on the Do Not Track feature?](/support/how-do-i-turn-do-not-track-feature), [Enhanced Tracking Protection in Waterfox for desktop](/support/enhanced-tracking-protection-waterfox-desktop) and [Trackers and scripts Waterfox blocks in Enhanced Tracking Protection](/support/trackers-and-scripts-waterfox-blocks-enhanced-track).

## Disable third-party cookies

To block cross-site trackers or all third-party cookies:

1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2.  Select the Privacy & Security panel.
    ![Privacy & Security](/assets/docs/2021-04-23-13-58-44-998298.png)
3.  Under _[Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop)_, select the **Custom** radio button.
4.  Check **Cookies** and use the drop-down menu to select the types of cookies you wish to block. The default setting is _Cross-site tracking cookies — includes social media cookies_.
    ![Fx91settings-ETPcustomCookies](/assets/docs/2022-07-11-03-30-20-310d60.png)

        * To block all third-party cookies, select **All third-party cookies** from the drop-down.

5.  Close the _about:preferences_ page. Any changes you've made will automatically be saved.

:::note
Waterfox also includes [Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/), which creates a “cookie jar” for every website. This feature keeps cookies in the site where they were created so that they can't track you across websites. Total Cookie protection is enabled when the _Cross-site cookies — includes social media cookies_ setting is selected.
:::

## Enable third-party cookies for specific sites

Some websites may not work properly when third-party cookies are blocked, even with the default setting, _Cross-site tracking cookies — includes social media cookies_.

To turn off Enhanced Tracking Protection for a specific website:

1. Visit the website.
2. Click on the shield <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> to the left of the address bar.
   ![Fx91ETPtoggle-on](/assets/docs/2022-07-10-12-10-57-722b75.png)
3. Toggle the switch ![Fx91ETPbluetoggle](/assets/docs/2022-03-16-12-56-21-3859dc.png) at the top of the panel. This will turn off Enhanced Tracking Protection for this site.
   The page will reload automatically and allow trackers on this site only.
   ![Fx91SiteFixedSendReport](/assets/docs/2022-03-16-13-01-56-7fcd80.png)

Follow the same process to turn Enhanced Tracking Protection back on.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Third-party cookies and Firefox tracking protection](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
