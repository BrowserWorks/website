---
slug: support/block-websites-storing-cookies-site-data-waterfox
title: "Block websites from storing cookies and site data in Waterfox"
---

Websites you visit store [cookies](/support/cookies-information-websites-store-on-your-computer) and other site data on your computer. The stored data contains information such as site preferences and login status. This article describes how to block websites from storing this data in Waterfox.

- See [Where are my logins stored?](/support/where-are-my-logins-stored) to learn more about website logins.

## Block cookies or persistent storage for a single website

You can use the [Page Info window](/support/waterfox-page-info-window) to set Waterfox to block cookies or stored data from one website:

1. Go to the website you wish to block from setting cookies or storing site data in Waterfox.
2. If the [Menu bar is enabled](/support/restore-menu-bar-waterfox), click Tools and select Page Info from the drop-down menu.
   Alternatively, click the padlock ![Fx89Padlock](/assets/docs/2021-05-06-04-33-33-7bdc86.png) to the left of the web page address, click the right arrow **>** in the [Site Information](/support/site-information-panel) drop-down panel and then click the More Information button in the next panel.
3. In the _Page Info_ window, select the Permissions panel.
4. Underneath **Set Cookies** or underneath **Store Data in Persistent Storage**, remove the check mark from **Use Default**.
5. Change the setting to **Block**.
   ![Fx78PageInfo-BlockCookiesSiteData](/assets/docs/2021-10-30-13-38-03-4389e9.png)
6. Close the _Page Info_ window.

You will need to remove any cookies or site data that the website has already set in Waterfox. For instructions, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).

## Block cookies and site data for more than one website

If you have more than one website you want to block, using the [Page Info window](/support/waterfox-page-info-window) for each site can be time-consuming. You can block individual websites from setting cookies and storing site data, as follows:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel and go to the _Cookies and Site Data_ section.
   ![Fx79CookiesAndSiteData](/assets/docs/2021-04-05-16-05-52-24d89c.png)
3. Click Manage Exceptions…. The _Exceptions - Cookies and Site Data_ dialog box will open.
   ![Fx65CookiesAndSiteData-ManagePermissions](/assets/docs/2019-01-06-10-54-21-e3ba59.png)
4. Type in the exact address of the site you want to block.
5. Click Block.
6. Click Save Changes to finish.

To remove cookies that were stored previously, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).

## Viewing a list of blocked sites

To see a list of sites that you have blocked from setting cookies and storing site data:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel and go to the **Cookies and Site Data** section.
3. Click Manage Exceptions…

The _Exceptions - Cookies and Site Data_ dialog box that opens will show you which sites you have blocked from storing cookies.

## Block cookies for all sites

To set Waterfox to block cookies from all websites:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. In the [Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop) section, select **Custom** and check mark **Cookies**.
4. Use the drop-down menu to choose the type of cookies to block. **Warning!** Some sites will not work properly with all cookies blocked.
5. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

For more information about third-party cookies, see [Third-party cookies and Waterfox tracking protection](/support/third-party-cookies-waterfox-tracking-protection).

To remove cookies that were stored previously, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Block websites from storing cookies and site data in Firefox](https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
