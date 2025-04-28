---
slug: support/address-bar-autocomplete-waterfox
title: "Address bar autocomplete suggestions in Waterfox"
---

The Waterfox address bar displays the [URL](https://wikipedia.org/wiki/URL) (web address) for the page that you are visiting. When you type into this field to enter a URL or search term, Waterfox remembers the pages that you have visited and shows page suggestions in the address bar drop-down, such as sites you've bookmarked, tagged, visited before or have open in tabs. This article explains how the address bar autocomplete feature works.

## How do I use the autocomplete list?

Just start typing in the address bar. Suggestions from your browsing history, bookmarks, and tabs will be listed, underneath what you've typed. (If you click on the address bar without typing into it, a drop-down list of your [most visited or pinned sites](/support/search-waterfox-address-bar#access-your-top-sites-from-the-address-bar) will be displayed instead.)

![Fx89AutocompleteDropdown](/assets/docs/2021-11-05-13-00-08-397b0f.png)

The autocomplete drop-down when you type into the address bar may include the following.

- Page titles and web addresses from your browsing history.
- Page titles, web addresses and [tags](/support/categorizing-bookmarks-make-them-easy-to-find) from your bookmarks.
- Pages you currently have open in other tabs (see below under [Switch to tab](#switch-to-tab)).
- [Sync'ed tabs](/support/view-synced-tabs-other-devices) from other devices.

A blue star <img alt="Blue Star Bookmarks Icon" class="inline-image" src="/assets/docs/icons/bookmark-star-blue.svg" /> icon will indicate that a matching result is a bookmark; the text _Switch to Tab_ will indicate an open tab. When you see the page you want, just click on it or use the up and down arrows on your keyboard to highlight it and then press Enter.

:::note
Popular search suggestions from your default search engine may also be listed, either before or after suggestions from browsing history, bookmarks and tabs, depending on your [search settings](/support/change-your-default-search-settings-waterfox#search-suggestions). If search suggestions are enabled, those will be marked with a magnifying glass <img alt="Magnifying Glass Icon" class="inline-image" src="/assets/docs/icons/search-glass.svg" /> icon. Suggestions from search history will be marked with a clock <img alt="History Icon" class="inline-image" src="/assets/docs/icons/history.svg" /> icon. To learn more, see [Search suggestions in Waterfox](/support/search-suggestions-waterfox).
:::

The address bar suggestions adjust based on your browsing behavior, such as how frequently and recently you visited a web page and what result you chose based on what was typed. This way, pages you visit all the time will show up at the top of the list, often after typing only one character.

### URL autocomplete

In addition to the autocomplete drop-down list, Waterfox will also complete the URL in the address bar. For example, if you type "suppo", Waterfox may fill in "rt.waterfox.net/" to complete the address "support.waterfox.net" if you've visited that site before. Pressing Enter in this case would take you directly to that address.

![URLAutocomplete75](/assets/docs/2020-03-20-13-52-26-363827.png)

### Switch to tab

The address bar also searches through your open tabs, displaying results with the text _Switch to Tab_. Selecting these results will switch you to the already open tab instead of creating a duplicate.

![Fx89Autocomplete-SwitchToTab](/assets/docs/2021-11-05-09-13-10-2faf96.png)

**To turn off the _Switch to tab_ option temporarily**, press the Alt key or Ctrl key while clicking on the page in the autocomplete list that appears below your address bar. Instead of switching to an existing one, with Alt your page will open in the current tab, with Ctrl in a new tab.

### What can I do to get the best results?

- When you want to go to a web page you've visited before, type a few letters from its web address or page title. Scroll through the autocomplete entries and find the page in the list (type in another letter if you don't see it listed). Press Enter to go to the selected web address. Waterfox will give this entry/result combination higher weight in the future.
- Do not clear the browsing history – usually the richest source of autocomplete entries is from the title/web address combination. [Clearing browsing history](/support/delete-browsing-search-download-history-waterfox) will remove these entries from the results.
- Bookmark and tag frequently used pages. The address bar will match on the name you give the bookmark and also tags associated with the bookmark. See the [Bookmarks in Waterfox](/support/bookmarks-waterfox) article for more information on how to use bookmarks in Waterfox. You can improve your autocomplete results by tagging pages with easily-typed tag names.

## How can I control what results the address bar shows me?

### Changing your address bar settings

To turn off the address bar autocomplete feature or restrict it to exclude certain results:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. Under the _Address Bar_ section, select or deselect any of the following:
   ![Fx89AddressBarSettings](/assets/docs/2021-08-12-11-35-25-2cbcd2.png)

- **Browsing history**: suggests pages that you've previously visited.
- **Bookmarks**: suggests pages that you've bookmarked.
- **Open tabs**: suggests pages that you have open in another tab.
- **Shortcuts**: suggests your most visited sites (if Shortcuts are enabled in your [New Tab page settings](/support/customize-your-new-tab-page)) when you click in the address bar.
- **Search engines**: suggests searching with your search engines.

**Change preferences for search engine suggestions:** Click this link to open to the _Search_ settings panel, where you can change your settings for search engine suggestions, including suggestions from your Search history. To learn more, see [Change your default search settings in Waterfox](/support/change-your-default-search-settings-waterfox).

### Removing autocomplete results

If you want to remove an entry from the autocomplete list:

1. In the address bar, use the up and down arrow keys on your keyboard to highlight the entry.
2. Press Shift + Delete to remove the item from the list.

If you want to remove all the history results from the autocomplete list, [clear Waterfox's browsing history](/support/delete-browsing-search-download-history-waterfox).

:::note
Autocomplete items from bookmarks will not be removed from the results if you attempt to delete them or clear the browsing history. These items have a star. To remove these items, [delete the associated bookmark](/support/bookmarks-waterfox), or [exclude bookmarks in the address bar settings](#changing-your-address-bar-settings).
:::

### Changing results on the fly

By default, when you type search terms in the address bar, the list under it shows search suggestions from the default search engine, and pages (bookmarks, history, open tabs) where every search term is part of the title, part of a tag or part of the web address (URL).

If you are looking for a specific type of result, like a bookmark or open tab, you can speed up the process of finding it by typing in special characters in the address bar separated by spaces:

- Add `^` to show only matches in your browsing history.
- Add `****` to show only matches in your bookmarks.
- Add `+` to show only matches in bookmarks you've tagged.
- Add `%` to show only matches in your currently open tabs.
- Add `#` to show only matches where every search term is part of the title or part of a tag.
- Add `$` to show only matches where every search term is part of the web address (URL). The text “https://” or “http://” in the URL is ignored, but not “file:///”.
- Add `?` to show only search suggestions.

For example, if you're looking for a page you bookmarked called _Waterfox Support_, you might type _waterfox_. The autocomplete results appear, but might not show the page you want.

You can narrow your results down to bookmarks only by making your search string _waterfox ** or ** waterfox_.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Address bar autocomplete suggestions in Firefox](https://support.mozilla.org/en-US/kb/address-bar-autocomplete-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/address-bar-autocomplete-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
