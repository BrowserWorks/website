---
slug: support/fix-login-issues-on-websites-require-passwords
title: "Fix login issues on websites that require a username and password"
---

If you find that you can't log in to a website that requires a username and password, follow the steps described in this article.

- If you can log in to a website manually, but **can't save or use saved usernames and passwords**, see [Usernames and passwords are not saved](/support/usernames-and-passwords-are-not-saved).

## Enable cookies for the website

Make sure that [cookies](/support/cookies-information-websites-store-on-your-computer) are enabled for the site in question.

- For instructions, see [Websites say cookies are blocked - Unblock them](/support/websites-say-cookies-are-blocked-unblock-them)

If you changed any settings, try logging in to the site again.

## Clear history for that site

The cookies and temporary data already stored on your computer may be causing the problem. Delete them, then test for your problem:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
   Click History and then click the Manage History bar at the bottom to open the Library window.
2. At the top right corner, type the name of the website you wish to forget in the _Search History_ field, and press Enter.
3. In the resulting list, right-click on the site you wish to forget, and select Forget About This Site.
   ![History Win6](/assets/docs/2011-02-03-06-25-59-2e196c.png)
4. Close the Library window.

## Clear all cookies and the cache

If deleting cookies for the site with the problem did not fix the error, clear all the cookies stored on your computer and clear the Waterfox cache:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

To learn more about clearing cookies, site data and cached web content in Waterfox, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).

## Check add-ons

Some extensions can cause problems with logging in to websites, especially extensions associated with certain websites. See [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

## Security application is blocking cookies

Some Internet security and privacy applications have features that block cookies. Check the documentation that came with your software or visit the software provider's support site, to see if your application includes a cookie control feature and how you can change those settings.

## Remove corrupt cookies file

If you can't log in to websites after removing the cookies associated with it, clearing your Waterfox cache, and trying with your extensions and plugins disabled, and have checked security software, you may have a corrupt cookies file in your Waterfox profile folder.

**This will remove all your stored cookies and essentially log you out of all saved sessions on all websites.**

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Delete the cookies.sqlite file and any cookies.sqlite-journal files.
4. Restart Waterfox.

**_Includes information from [Websites report cookies are disabled (mozillaZine KB)](http://kb.mozillazine.org/Websites_report_cookies_are_disabled)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Fix login issues on websites that require a username and password](https://support.mozilla.org/en-US/kb/fix-login-issues-on-websites-require-passwords). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/fix-login-issues-on-websites-require-passwords#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
