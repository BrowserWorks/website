---
slug: support/websites-say-cookies-are-blocked-unblock-them
title: "Websites say cookies are blocked - Unblock them"
---

This article describes how to troubleshoot problems that involve websites reporting that cookies are blocked or disabled. For more information on cookies, see [Cookies - Information that websites store on your computer](/support/cookies-information-websites-store-on-your-computer).

## Check cookie settings

Waterfox can be set to not accept cookies. To turn on cookies:

1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2.  Select the Privacy & Security panel. This is where you can view your settings for **[Enhanced Tracking Protection](/support/enhanced-tracking-protection)**, which includes cookies.
    ![Fx78settingsEnhancedTrackingProtection](/assets/docs/2021-03-30-03-28-19-af0e1d.png)

        * If Standard is selected, this is the default setting and, except for trackers, all cookies are enabled. For more information, see [Trackers and scripts Waterfox blocks in Enhanced Tracking Protection](/support/trackers-and-scripts-waterfox-blocks-enhanced-track).
        * If Strict is selected, either choose Standard or switch to Custom.
        * If Custom is selected, either uncheck **Cookies** (this will allow all cookies) or select the setting to only block *Cross-site tracking cookies — includes social media cookies*.![Fx86ETPcustom-cookies](/assets/docs/2021-03-30-04-03-17-961cb6.png)

3.  Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## Check sites that are blocked from setting cookies

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel and scroll down to the **Cookies and Site Data** section.
   ![Fx79CookiesAndSiteData](/assets/docs/2021-04-05-16-05-52-24d89c.png)
3. Click Manage Exceptions…
   - The _Exceptions - Cookies and Site Data_ dialog box that opens will show you which sites you have blocked from storing cookies.
4. Make sure the site you're trying to access isn't listed.
   - If it is, click on its entry and click Remove Website.
5. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## Clear history for that site

The cookies and temporary data already stored on your computer may be causing the problem. Delete them, then test for your problem:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
   Click History and then click the Manage History bar at the bottom to open the Library window.
2. Search for the website you want to remove from your history by typing its name in the **Search History** field in the top-right corner and then pressing Enter.
3. Then, in the search results, right-click on the site you want to remove, and select Forget About This Site.**All history items (browsing and download history, cookies, cache, active logins, passwords, saved form data, exceptions for cookies, images, pop-ups) for that site will be removed.**
4. Finally, close the Library window.

## Clear all cookies and the cache

If deleting cookies for the site with the problem did not fix the error, clear all the cookies stored on your computer and clear the Waterfox cache:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

**_Based on information from [Websites report cookies are disabled (mozillaZine KB)](http://kb.mozillazine.org/Websites_report_cookies_are_disabled)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Websites say cookies are blocked - Unblock them](https://support.mozilla.org/en-US/kb/websites-say-cookies-are-blocked-unblock-them). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/websites-say-cookies-are-blocked-unblock-them#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
