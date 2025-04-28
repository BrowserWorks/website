---
slug: support/xframe-neterror-page
title: "Website will not allow Waterfox to display the page if another site has embedded it"
---

If you see this error, it is probably because a website is trying to display another website without the consent of its owner. This is usually the result of a security misconfiguration.

Websites can use [x-frame options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) or a [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to control whether other websites may embed them in their own pages. They are important security tools designed to prevent [clickjacking](https://en.wikipedia.org/wiki/Clickjacking), which is an attack that allows malicious sites to trick users into clicking their links.

To visit a site that has shown this message, you can open the link in a New Tab or New Window in Waterfox. Note that in some cases, the embedding page will not work correctly without access to the blocked page. In this case, you will need to contact the owner of the broken site for troubleshooting.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Website will not allow Firefox to display the page if another site has embedded it](https://support.mozilla.org/en-US/kb/xframe-neterror-page). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/xframe-neterror-page#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
