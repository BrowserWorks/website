---
slug: support/android/custom-search-engines
title: Manage my default search engines in Waterfox for Android
label: Manage my default search engines in Waterfox for Android
---

Waterfox for Android gives you the ability to add, remove, and change a default search engine. There are a variety of search engines available to choose from such as Google and Bing. You can also manually add other search engines and set one of them as your default.

Note: Some search engines are regionally bound and may not be accessible from every location. Make sure the search engine you want is available in your region.

### Change the default search engine

1.  Tap the search engine icon in the address bar.
2.  Tap **Search Settings**.
3.  Tap **Default search engine**.
4.  Select the search engine of your choice.

### Change the search engine for a single search

1.  Tap the search engine icon in the address bar.
2.  Select the search engine you want to use for this search.

This will not change your default search engine.

### Edit search settings

1.  Tap the search engine icon in the address bar.
2.  Tap **Search Settings**.
3.  Under Search settings, you can toggle any of the following:

- **Show search suggestions**: Display search suggestions from your default search engine when you enter URLs or keywords in the address bar.
- **Show in private sessions**: Display search suggestions when searching from the address bar in private browsing sessions. Note: This option is only active if "Show search suggestions" is toggled on.
- **Show recent searches**: Display recent searches when searching from the address bar.
- **Search browsing history**: Include your browsing history in searches from the address bar.
- **Search bookmarks**: Include your bookmarks in searches from the address bar.
- **Search synced tabs**: Search tabs that you have synchronized from another copy of Waterfox using Waterfox Sync.
- **Show voice search**: Display the microphone icon to perform a web search using voice.
- **Autocomplete URLs**: Autocomplete website addresses entered into the address bar.
- **Show clipboard suggestions**: If the last thing you copied to the clipboard was a link, the option "Fill link from clipboard" shows up when you tap the address bar in a new tab.

### Add a search engine

1.  Tap the search engine icon in the address bar.
2.  Tap **Search Settings**.
3.  Tap **Default search engine**.
4.  Tap **Add search engine**.
5.  Provide a name for the search engine in the designated Name text field. Then, input the URL for the search string in the Search string URL field. Optionally, include a URL for the Search Suggestion API, and tap Save.

:::caution

- If the search string URL is flagged as invalid, an error message will display to help you provide a valid URL. Please be sure to replace the query string with “%s”, for example: https://www.google.com/search?q=%s
- If you don't know which search string to use for a particular search engine, you can access its website in a new tab, do any search and use the resulting URL as a reference. For example, if you go to ecosia.org and search for waterfox, the resulting URL in the address bar will be https://www.ecosia.org/search?q=waterfox. Then the search string must be https://www.ecosia.org/search?q=%s, replacing the query with "%s".
  :::

### Manage alternative search engines

The search engine is added to the predefined list of search engines in alphabetical order.

1.  Tap the search engine icon in the address bar.
2.  Tap **Search Settings**.
3.  Tap **Manage alternative search engines**.
4.  Select the engines you want to have visible in the search menu.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Manage my default search engines in Firefox for Android](https://support.mozilla.org/en-US/kb/manage-my-default-search-engines-firefox-android). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/manage-my-default-search-engines-firefox-android#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
