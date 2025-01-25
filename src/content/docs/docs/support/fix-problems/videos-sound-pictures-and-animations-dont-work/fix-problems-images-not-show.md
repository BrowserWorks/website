---
slug: /support/fix-problems-images-not-show
title: "Fix problems that cause images to not show"
---

This article explains how to fix problems with images on websites, such as PNG, GIF, and JPG still images, as well as animated file formats such as animated GIF. If you are experiencing difficulty downloading or viewing images in Waterfox, follow the troubleshooting instructions below.

## Clear cookies and cache

Sometimes problems loading websites can be fixed by clearing the cookies and cache.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

## Security software

Some Internet security software (including antivirus and anti-spyware programs, firewalls, privacy programs, and others) may identify and block certain images as web bugs or may prevent images from animating. Check the settings for your Internet security program to make sure it allows images to load.

## Extensions

Extensions are add-ons that add or modify Waterfox features. See the [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems) article for instructions on how to disable or uninstall extensions that may cause images not to load in Waterfox.

## Images load but look wrong

If images on websites load, but don't look right or don't look the way they do in other browsers:

- If you are using any sort of web accelerator software, disable it and see if images load properly. For more information, see the documentation that came with the software.
- If the image area shows text or some form of gibberish, it's most likely caused by a misconfigured web server. Contact the website and tell them about the problem.

## Other reasons why images may not load

- The site that displays the images may be down or experiencing difficulties. To verify, try loading the site from a different computer or browser.
- Some pathnames to images contain backslashes (e.g. example.com\MyImage.jpg). In browsers other than Internet Explorer, these pathnames do not load. If you see that the image's URL contains a backslash, contact the site's webmaster about the issue.

- You may have modified one of your Waterfox preference settings which is causing images not to show. You can either [reset all preferences](/support/reset-preferences-fix-problems) or else try the following:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Find browser.display.document_color_use in the list of preferences. Its value should be set to 0 by default.
3. Click _Reset_ <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> if its value is other than 0.

## Images still do not load correctly

If you have tried all of the solutions in this article and images or animations still don't load correctly then try these solutions:

- Try [refreshing Waterfox](/support/refresh-waterfox-reset-add-ons-and-settings).
- [Use the Profile Manager to create a new Waterfox profile](/support/profile-manager-create-remove-switch-waterfox-profiles).
- Follow the other steps in the [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems) article.

## Related links

- [Websites look wrong or appear differently than they should](/support/websites-look-wrong-or-appear-differently)
- [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file)
- [Fix common audio and video issues](/support/fix-common-audio-and-video-issues)
- [Mixed content blocking in Waterfox](/support/mixed-content-blocking-waterfox)

**_Based on information from [Images or animations do not load (mozillaZine KB)](http://kb.mozillazine.org/Images_or_animations_do_not_load)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Fix problems that cause images to not show](https://support.mozilla.org/en-US/kb/fix-problems-images-not-show). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/fix-problems-images-not-show#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
