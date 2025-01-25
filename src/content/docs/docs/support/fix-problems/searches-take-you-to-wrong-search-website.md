---
slug: /support/searches-take-you-to-wrong-search-website
title: "What to do when searches take you to the wrong search website"
---

This article describes what to do when searches from Waterfox don't go to the expected site(s). For example, Google searches may redirect to a page with a lot of advertising or using a different search engine.

:::note
The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.
:::

## Only address bar searches are affected

If a term is entered in the address bar, Waterfox sends a request to your Internet provider to see if the term is actually a website address. If it isn't, Waterfox will then do a search using your default search engine (for more information, see [Search with the Waterfox address bar](/support/search-waterfox-address-bar)). A number of Internet providers, however, will redirect you to their own search site instead.

Some service providers offer "DNS Assistance" which is what is doing the redirecting. Check with your provider to see if you can opt out of this service.

If you are unable to opt out from your service provider, the following workarounds may help you retain the ability to search from the location bar:

- Only do multi-word searches from the Location bar. If you put multiple words in your search terms, Waterfox will start with a Location bar search. You can often use a dummy word that is ignored by the search engine (such as the + character). For example, you will need to type **+ searchterm** when the search term is one word (that space is important) but only **search terms** when the search terms are multiple words.
- You can set up a smart keyword that corresponds to the search and prepend your search with this keyword. For example, you can use the keyword **g** to search [Google](http://www.google.com/). From then on, you would just have to type **g searchterm** to perform a search from the location bar. For instructions on how to set up smart keywords, see [How to search IMDB, Wikipedia and more from the address bar](/support/how-search-from-address-bar).
- If you have a router, ask your ISP about changing your DNS server.

## All searches are affected

If searching using the search bar **and** searching directly from the site itself are both being redirected to alternate sites, it is likely that this redirection is being caused by malicious software such as a virus, spyware or trojan installed on your computer. See [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware) for instructions to get rid of malware.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [What to do when searches take you to the wrong search website](https://support.mozilla.org/en-US/kb/searches-take-you-to-wrong-search-website). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/searches-take-you-to-wrong-search-website#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
