---
slug: /support/delete-browsing-search-download-history-waterfox
title: "Delete browsing, search and download history on Waterfox"
---

As you browse the Web, Waterfox remembers lots of information for you – sites you've visited, files you've downloaded and more. All of this information is called your history. However, if you are using a public computer or share a computer with someone, you may not want others to see these kinds of things.

This article explains what information is stored in your Waterfox history and gives you step-by-step ways to clear all or part of it.

- To temporarily stop Waterfox from storing history, see [Private Browsing - Use Waterfox without saving history](/support/private-browsing-use-waterfox-without-history).

## What information is included in my history?

- **Browsing & Download History**: Browsing history is the list of sites you've visited that are shown in the History menu, the Library window's History list and the [address bar autocomplete](/support/address-bar-autocomplete-waterfox) list. Download history is the list of files you've downloaded that are shown in the [Downloads window](/support/where-find-and-manage-downloaded-files-waterfox).
- **Form & Search History**: Form history includes the items you've entered into web page forms for [Form autocomplete](/support/control-whether-waterfox-automatically-fills-forms). Search history includes items you've entered into the search field on the [New Tab page](/support/about-new-tab-page) or into Waterfox's [Search bar](/support/add-search-bar-waterfox-toolbar).
- **Cookies**: [Cookies](/support/cookies-information-websites-store-on-your-computer) store information about websites you visit, such as site preferences or login status. Cookies can also be used by third parties to track you across sites. See [How do I turn on the Do Not Track feature?](/support/how-do-i-turn-do-not-track-feature) to learn more about tracking.
- **Active Logins**: If you entered a username and password for a site that uses [HTTP basic authentication](https://wikipedia.org/wiki/Basic_access_authentication) since you last opened Waterfox, that login is considered “active”. Clearing this will log you out of all sites that use this authentication method. It will not log you out of websites that use cookies to store login status.
- **Cache**: The cache stores temporary files, such as web pages and other online media, that Waterfox downloaded from the Internet to speed up loading of pages and sites you've already seen. For more information, see [How to clear the Waterfox cache](/support/how-clear-waterfox-cache).
- **Offline Website Data**: If you've allowed it, a website can store files on your computer so that you can continue to use it when you are not connected to the Internet.
- **Site Preferences**: Site-specific preferences, including the saved [zoom](/support/font-size-and-zoom-increase-size-of-web-pages) level for sites, character encoding, and the permissions for sites (like pop-up blocker exceptions) described in the [Page Info window](/support/waterfox-page-info-window#permissions).

## How do I clear my history?

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. Select how much history you want to clear:

   - Click the drop-down menu next to **Time range to clear** to choose how much of your history Waterfox will clear (the last hour, the last two hours, the last four hours, the current day or everything).![fx100-ClearRecentHistory](/assets/docs/2022-05-17-16-50-47-c086f1.png)

   - Use the check boxes to select what information you want to clear from your history. Your choices are described in the [What things are included in my history?](#what-things-are-included-in-my-history) section above.

4. Click the OK button. The window will close and the items you've selected will be cleared from your history.

## How do I make Waterfox clear my history automatically?

_If you need to clear your history every time you use Waterfox, you can set it to happen automatically on exit, so you don’t forget._

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel and go to the **History** section.
3. In the drop-down menu next to **Waterfox will**, choose Use custom settings for history.
4. Check the box for **Clear history when Waterfox closes**.
   ![Fx100Custom-ClearHistoryWhenWaterfoxCloses](/assets/docs/2022-05-17-18-16-12-63c152.png)
5. To specify what types of history should be cleared, click the Settings… button next to **Clear history when Waterfox closes**.
6. In the _Settings for Clearing History_ window, check the items that you want to have cleared automatically each time you quit Waterfox.
   ![fx100-SettingsClearingHistory](/assets/docs/2022-05-17-16-52-20-971315.png)
7. After selecting the history to be cleared, click OK to close the _Settings for Clearing History_ window.
8. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

:::note
Under certain circumstances, this function will not run:
:::

- _Waterfox did not shut down normally._ If Waterfox crashes, you will need to start Waterfox and exit/quit normally to ensure that this function runs.
- _Waterfox is set to use automatic private browsing._ History retained from regular sessions can only be cleared from a regular window. To change between regular mode and automatic private browsing, see [Private Browsing - Use Waterfox without saving history](/support/private-browsing-use-waterfox-without-history).

## Clear cookies and data for a specific website

See [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).

## Remove a single website from your history

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
   Click History and then click the Manage History bar at the bottom to open the Library window.
2. Search for the website you want to remove from your history by typing its name in the **Search History** field in the top-right corner and then pressing Enter.
3. Then, in the search results, right-click on the site you want to remove, and select Forget About This Site.**All history items (browsing and download history, cookies, cache, active logins, passwords, saved form data, exceptions for cookies, images, pop-ups) for that site will be removed.**
4. Finally, close the Library window.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Delete browsing, search and download history on Firefox](https://support.mozilla.org/en-US/kb/delete-browsing-search-download-history-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/delete-browsing-search-download-history-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
