---
slug: support/websites-look-wrong-or-appear-differently
title: "Websites look wrong or appear differently than they should"
---

This article explains how to fix problems with websites that display incorrectly in Waterfox or don't work the way they should.

## Clear the cookies and cache

Waterfox caches websites, which means it saves some files on your machine so that it doesn't have to re-download everything when you visit sites. If a website has updated their code, Waterfox may still be using some of the old code along with some of the new, which can make a web page display incorrectly. To fix this, you need to clear the cookies and cache:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

Now that your cookies and cache are cleared, visit the website again to see if the problem is solved.

## Reset Zoom

Some websites may not look right at different zoom levels. To reset Zoom setting, for the site, press Ctrl + 0 and for all sites, see the documentation about the Zoom add-on you use.

## Reset the minimum font size

Some sites do not display properly with a minimum font size. To reset the minimum font size:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel and navigate to _Language and Appearance_.
3. In the **Fonts & Colors** section, click Advanced….
4. Change the **Minimum font size** to **None**.

## Reset the page style

You may have inadvertently set the page style to No Style. To ensure Waterfox is set to use the page's default style:

- Press the Alt key (or the AltGr key) to [temporarily bring up the Waterfox Menu bar](/support/restore-menu-bar-waterfox), click on the View menu, then select Page Style and click Basic Page Style.

Now that the page is using its default style, it may be displayed correctly.

## Check that JavaScript is not blocked

You should check whether you have an extension (such as NoScript) or Internet security program (such as a firewall, antivirus, or anti-spyware program) that can block JavaScript. To learn more, see [JavaScript settings and preferences for interactive web pages](/support/javascript-settings-for-interactive-web-pages).

## Check that your system clock is set correctly

In some instances the loading and verification of secure web content will be time-dependent, so you should check that date, time and timezone are set correctly on your system.

## Disable problematic extensions or hardware acceleration

Some extensions may interfere with the way websites are displayed, or your graphics card and drivers don't display some web content correctly when hardware acceleration is turned on. Follow the instructions in the [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems) article to see if one of these is causing the problem.

## Check if Waterfox has blocked insecure content

Waterfox blocks potentially harmful, insecure content on web pages that are supposed to be secure. Click the padlock icon <img alt="Fx89Padlock" class="inline-image" src="/assets/docs/2021-05-06-04-33-33-7bdc86.png"> in the address bar to see if Waterfox has blocked insecure parts of the page. See [Mixed content blocking in Waterfox](/support/mixed-content-blocking-waterfox) for details.

## Turn off Enhanced Tracking Protection for the website

Sometimes [Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop) can cause site breakage when tracking content is blocked. To disable tracking protection for the website:

1. Click the shield <img alt="Fx91ShieldIcon-Blue" class="inline-image" src="/assets/docs/2021-09-04-07-27-48-6f4a69.png"> in the address bar to open the Protections panel.
2. Click the blue toggle ![Fx91ETPbluetoggle](/assets/docs/2022-03-16-12-56-21-3859dc.png) switch. The page will reload with Enhanced Tracking Protection turned off.

This will allow trackers to load on that site only. Trackers will continue to be blocked on other sites.

## Report the website

If [turning off Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop#what-to-do-if-a-site-seems-broken) allows a page to display and work correctly, you can report the website to help improve Waterfox. See the [Report breakage due to blocking](/support/report-breakage-due-blocking) article for more information.

Occasionally, you may come across a page that simply doesn't work in Waterfox, even when Enhanced Tracking Protection is turned off. If the same page works in another browser, please report the problem by visiting [Webcompat.com](https://webcompat.com/).

## Related links

- [Websites don't load - troubleshoot and fix error messages](/support/websites-dont-load-troubleshoot-and-fix-errors)
- [Fix problems that cause images to not show](/support/fix-problems-images-not-show)
- [Fix common audio and video issues](/support/fix-common-audio-and-video-issues)

**_Based on information from [Websites look wrong (mozillaZine KB)](http://kb.mozillazine.org/Websites_look_wrong)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Websites look wrong or appear differently than they should](https://support.mozilla.org/en-US/kb/websites-look-wrong-or-appear-differently). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/websites-look-wrong-or-appear-differently#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
