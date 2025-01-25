---
slug: /support/websites-show-spinning-wheel-never-finish-load
title: "Websites show a spinning wheel and never finish loading"
---

This article explains what to do when specific websites (not all) start to load, but never finish (i.e. the tab displays a spinning wheel and "Connecting..." for several minutes).

- If Waterfox cannot load websites but displays an error message at the end, see [Waterfox can't load websites but other browsers can](/support/waterfox-cant-load-websites-other-browsers-can) and [Websites don't load - troubleshoot and fix error messages](/support/websites-dont-load-troubleshoot-and-fix-errors).
- If none of the web browsers on your computer can load websites, see [Waterfox and other browsers can't load websites](/support/waterfox-and-other-browsers-cant-load-websites).

If none of the below solutions work, try the methods described in the [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems) article to see if they will address your problem.

## Search for malware

A variant of the [Vundo trojan](http://en.wikipedia.org/wiki/Vundo) is known to cause Waterfox to have problems loading certain high-traffic sites, including Google, Yahoo, MySpace, Facebook, and more. Not all variants of the Vundo trojan can be detected or removed by malware scanners.

However, you should scan your computer for infections first. For detailed instructions, see [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware).

## Disable JavaScript

In rare cases, a web page may be using an external JavaScript file which is in the wrong format. Try disabling JavaScript - see [JavaScript settings and preferences for interactive web pages](/support/javascript-settings-for-interactive-web-pages). If the page now finishes loading the bad Javascript file may be coming from:

- a proxy filter that is incorrectly filtering that website's files. If you are running a proxy filter such as Privoxy, try disabling it.
- the server. Contact the site administrator for that website.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Websites show a spinning wheel and never finish loading](https://support.mozilla.org/en-US/kb/websites-show-spinning-wheel-never-finish-load). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/websites-show-spinning-wheel-never-finish-load#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
