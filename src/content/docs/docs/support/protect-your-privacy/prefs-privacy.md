---
slug: support/prefs-privacy
title: "Settings for privacy, browsing history and do-not-track"
---

This article describes the settings that are available in the Waterfox Options
**Privacy** panel.

The Privacy panel allows you to:

- Control how Waterfox handles your history, which includes what pages you've visited, what files you've downloaded, what you've entered into forms, and what [cookies](/support/cookies-information-websites-store-on-your-computer) sites have sent you.
- Control what sites can send you cookies and remove cookies that sites have sent you.
- Control how the [Location bar](/support/address-bar-autocomplete-waterfox) (address bar) uses your history to suggest matches for what you type in it.

![Privacy panel 38](/assets/docs/2015-05-11-13-00-13-038c94.png)

## Tracking

**Tell sites that I do not want to be tracked**: Checking this box will tell websites that you wish to opt-out of tracking by advertisers and other third-parties. Honoring this setting is voluntary — individual websites are not required to respect it. See [How do I turn on the Do Not Track feature?](/support/how-do-i-turn-do-not-track-feature) for more information.

## History

The **Waterfox will** setting controls how Waterfox saves information about your web browsing.

### Remember history

When **Waterfox will** is set to **Remember history**:

- Waterfox will keep a list of the pages you've visited.
- A list of files you download will be kept in the Downloads panel and Library.
- The text you enter into form fields or the search bar will be remembered so you can use those entries again. For more information, see [Control whether Waterfox automatically fills in forms](/support/control-whether-waterfox-automatically-fills-forms).
- Waterfox will accept cookies from sites until they expire. For more information on cookies, see [Cookies - Information that websites store on your computer](/support/cookies-information-websites-store-on-your-computer).

Click on:

- **clear your recent history** to open the Clear Recent History window, which allows you to erase some or all of your history quickly. For more information, see [Delete browsing, search and download history on Waterfox](/support/delete-browsing-search-download-history-waterfox).
- **remove individual cookies** to display the Cookies window. For more information, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).

### Never remember history

When **Waterfox will** is set to **Never remember history**:

- Waterfox will keep no record of your browsing history.
- The files you download will not be listed in the Downloads panel or Library.
- The text you enter into form fields or the search bar will not be remembered.
- Waterfox will accept cookies from sites and delete them when you close Waterfox. For more information on cookies, see [Cookies - Information that websites store on your computer](/support/cookies-information-websites-store-on-your-computer).

Using **Never remember history** is equivalent to always being in Waterfox Private Browsing mode. For more information, see [Private Browsing - Use Waterfox without saving history](/support/private-browsing-use-waterfox-without-history).

Click on **clear all current history** to open the Clear Recent History window, which allows you to erase some or all of your history quickly. For more information, see [Delete browsing, search and download history on Waterfox](/support/delete-browsing-search-download-history-waterfox).

### Use custom settings for history

![Use custom settings for history](/assets/docs/2015-05-19-17-56-44-fd3d4f.png)

When **Waterfox will** is set to **Use custom settings for history**, the following settings will be available:

- **Always use private browsing mode**:
  If selected, Waterfox will not remember any new history the next time it starts. For more information, see [Private Browsing - Use Waterfox without saving history](/support/private-browsing-use-waterfox-without-history).
- **Remember my browsing and download history**:
  If selected, Waterfox will keep a list of the pages you've visited and the files you've downloaded (visible in the Downloads panel and Library).
- **Remember search and form history**:
  If selected, the text you enter into form fields or the search bar will be remembered so you can use those entries again. For more information, see [Control whether Waterfox automatically fills in forms](/support/control-whether-waterfox-automatically-fills-forms).
- **Accept cookies from sites**:
  If selected, Waterfox will accept [cookies](/support/cookies-information-websites-store-on-your-computer) from sites. Click Exceptions… to control whether some sites are not allowed to set cookies. For more information, see [Block websites from storing cookies and site data in Waterfox](/support/block-websites-storing-cookies-site-data-waterfox).
  - **Accept third-party cookies**:
    **Always**: Waterfox will always accept cookies from *http://site2.com* when you are visiting *http://site1.com*.
    **From Visited**: If you have visited *http://site2.com* previously, Waterfox will accept cookies from this site when you are visiting *http://site1.com*, otherwise Waterfox will not accept them.
    **Never**: Waterfox will never accept cookies from *http://site2.com* when you are visiting *http://site1.com*. For more information, see [Third-party cookies and Waterfox tracking protection](/support/third-party-cookies-waterfox-tracking-protection).
  - **Keep until**:
    **they expire**: If selected, Waterfox will allow the sites you visit to specify how long Waterfox should keep their cookies.
    **I close Waterfox**: If selected, your cookies will be deleted when you close Waterfox.
    **ask me every time**: If selected, Waterfox will ask you how long to keep a cookie each time a site tries to set one.Click Show Cookies… to display the Cookies window. For more information on the Cookies window, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox).
- **Clear history when Waterfox closes**:
  Certain saved items will be deleted when you close Waterfox. Click Settings… to control what items are deleted. Note: Under certain circumstances, this function will not run:
  - _Waterfox did not shut down normally._ If Waterfox crashes, you will need to start Waterfox and exit/quit normally to ensure that this function runs.
  - _Waterfox is set to use automatic private browsing._ History retained from regular sessions can only be cleared from a regular window. To change between regular mode and automatic private browsing, see: [Private Browsing - Use Waterfox without saving history](/support/private-browsing-use-waterfox-without-history).

## Location Bar

The Location Bar is the field where you enter a site's web address (URL). The Location Bar suggests results as you type in a search based on the following:

- **History**: If selected, sites you've previously visited will appear on your results list.
- **Bookmarks**: Sites you've bookmarked will appear on your results list. These results appear with the blue star next to them.
- **Open tabs**: Select this if you want tabs that are currently open to appear in your results list. This is especially useful if you have many tabs open.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Settings for privacy, browsing history and do-not-track](https://support.mozilla.org/en-US/kb/settings-privacy-browsing-history-do-not-track). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/settings-privacy-browsing-history-do-not-track#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
