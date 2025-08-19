---
slug: support/content-blocking
title: "Content blocking"
---

Content blocking was redesigned in [Waterfox version](/support/find-what-version-waterfox-you-are-using) 70 and is now **Enhanced Tracking Protection**. Please see the [Enhanced Tracking Protection in Waterfox for desktop](/support/enhanced-tracking-protection) article.
Please [update your version of Waterfox](/support/update-waterfox-latest-release) for the latest features and security updates.

Content blocking is a collection of Waterfox privacy features that protect you from threats and annoyances on the Web. This includes protections against trackers, which collect your browsing data across multiple websites. Since Waterfox version 67, you can also block harmful scripts including cryptominers and fingerprinters. These privacy protections are mostly invisible, but you’ll know they’re working when you see a shield icon on the left within your address bar.

In some cases, blocking this content makes pages load faster, but can affect the page's functionality. It’s easy to [disable blocking on sites you trust](#turn-content-blocking-off-on-individual-sites_2). You can also customize your content blocking preferences to [block more or fewer trackers](#how-to-block-more-or-fewer-trackers_2).

Please note this video shows an older version of Waterfox. The screens shown may have changed.

## Privacy protections included in content blocking

- Trackers: Tracking generally refers to content, cookies, or scripts that can collect your browsing data across multiple sites. Waterfox blocks trackers in private windows by default. Select the **Strict** or **Custom** radio button to block known trackers in all windows.
- Third-party tracking cookies: A third-party cookie is set by a website other than the one you’re currently on. Advertisers most commonly use these third-party cookies to track you across multiple websites and target you with ads. Waterfox will soon block third-party tracking cookies for everyone by default. We’re gradually rolling out these protections to all users.
- Cryptominers: Cryptomining scripts use your computer’s central processing unit (CPU) to invisibly mine cryptocurrency. These scripts slow down your computer and drain your battery. Block cryptominers using the **Strict** radio button.
- Fingerprinters: Fingerprinting scripts collect information about your browser and device configuration, such as your operating system, screen resolution, and other settings. By compiling these pieces of data, fingerprinters create a unique profile of you that can be used to track you around the Web. Fingerprinting violates Waterfox’s anti-tracking policy. Block fingerprinters using the **Strict** radio button.

## How to block more or fewer trackers

By default, Waterfox protects you from being tracked in [private windows](/support/private-browsing-use-waterfox-without-history) using a list of known trackers provided by [Disconnect](https://disconnect.me/trackerprotection). Waterfox allows some trackers so websites can function properly. You can change your settings to block trackers all the time, to block trackers from Disconnect’s level 2 list, or to not block any trackers at all.

To adjust your settings:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />.
2. Click Content Blocking.
   This takes you to the _Content Blocking_ section in your Waterfox Options
   Privacy & Security panel. If your Waterfox looks different, it's because we're gradually rolling out protections against third-party tracking cookies to all users.

3. Choose your content blocking settings:

- **Standard**: Blocks known trackers in private windows and third-party tracking cookies. This is the default setting. To restore to defaults at anytime, select **Standard**.
- **Strict**: Blocks trackers in all windows and third-party tracking [cookies](/support/cookies-information-websites-store-on-your-computer).
- **Custom**: Lets you choose what to block. You can also turn off all content blocking using the **Custom** radio button.

You can also set Waterfox to always send websites a _Do Not Track_ signal. See [How do I turn on the Do Not Track feature?](/support/how-do-i-turn-do-not-track-feature) to learn more.

### Custom settings for aggressive protection

1. Select **Custom**.
2. Select In all windows from the drop-down on the right.

3. Click the **Change block list** link.
   The _Block Lists_ pop-up displays.
4. Select Level 2 block list. Blocks all detected trackers. Some websites or content may not load properly.
5. Click Save Changes.
6. Select the **Cookies** checkbox if not already selected.
   Third-Party Trackers is selected by default. Select more aggressive cookie protections from the dropdown, such as blocking all third-party cookies or even blocking all cookies.
7. Select the **Cryptominers** checkbox.
8. Select the **Fingerprinters** checkbox.
9. Click the Reload All Tabs button to apply these changes on all your open tabs.

### Remove all protections

You can also remove all the protections offered by content blocking, which effectively disables the feature.

1. Select the **Custom** radio button.
2. Deselect the **Trackers** checkbox.
3. Deselect the **Cookies** checkbox.
4. Deselect the **Cryptominers** checkbox.
5. Deselect the **Fingerprinters** checkbox.
6. Click the Reload All Tabs button to apply these changes on all your open tabs.

## How to detect when content blocking is on

When Waterfox is blocking content on a website, a shield icon <img alt="Address bar shield" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif"> will appear in your address bar.

Select the shield icon <img alt="Address bar shield" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif"> or the information icon <img alt="site info icon" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif"> to expand the Control Center panel.
View the Content Blocking section. This provides more information about the type of content Waterfox is blocking, such as detected trackers and trackers set by third-party tracking cookies.

The content that is blocked will depend on the website and your settings. Click on the arrows "**>**" to the right of the _Trackers_ and _Cookies_ settings to see what content has been blocked or permitted on the specific site you're on.

Blocked content will be labeled as _Blocked_ and grayed out.

## Turn content blocking off on individual sites

Sometimes content blocking can prevent pages or parts of pages from loading. If content blocking interferes with your browsing, you can disable it on individual sites. The shield icon appears in the address bar when Waterfox is actively blocking content on a page.

1. Select the shield icon <img alt="Address bar shield" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif"> or the information icon <img alt="site info icon" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif"> to expand the Control Center panel.

2. Click the Turn off Blocking for This Site button from a normal browsing window to disable blocking for the website.
   If you're in a private window, click the Turn off Blocking Temporarily button (see below).
   Once content blocking is disabled, a shield icon with a strikethrough will appear in your address bar. To turn content blocking back on, expand the Control Center panel by clicking the shield or the site information icon <img alt="site info icon" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif"> and click the Turn on Blocking for This Site button.

## Content Blocking in Private Browsing

Since [Private Browsing](/support/private-browsing-use-waterfox-without-history) doesn’t save information about your browsing session, when you disable content blocking for a site, it will only remain disabled during your current private browsing session. When you start a new private browsing session, your content blocking settings will be restored for all sites. If you’ve disabled content blocking for a site while in a normal browsing window, Waterfox will continue to disable content blocking for this same site when in a private window.

## Block lists in Waterfox

By default, Waterfox uses the [Disconnect.me](https://disconnect.me) Level 1 block list. For more aggressive tracking protection, use the Disconnect.me Level 2 block list.

- Level 1 blocks commonly known analytics trackers, social sharing trackers, and advertising trackers. However, the basic protection list allows some known content trackers so that fewer pages break or fail to load.
- Level 2 list blocks all known trackers, including analytics trackers, social sharing trackers, and advertising trackers as well as content trackers. The strict list will break some videos, photo slideshows, and social networking features.

### Change your block list

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />.
2. Click Content Blocking.
   This takes you to the _Content Blocking_ section in your Waterfox Options
   Privacy & Security panel.
3. Select the **Custom** radio button.
4. Click the **Change block list** link.
5. Choose the block list you want to use.

6. Click Save Changes.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Content blocking](https://support.mozilla.org/en-US/kb/content-blocking). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/content-blocking#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
