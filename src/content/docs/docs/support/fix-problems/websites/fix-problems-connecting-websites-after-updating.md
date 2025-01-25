---
slug: /support/fix-problems-connecting-websites-after-updating
title: "Fix problems connecting to websites after updating Waterfox"
---

This article describes how to troubleshoot problems connecting to websites that start immediately after updating Waterfox to a new version.

- Follow the instructions in this article if you can connect to websites using another browser (such as Internet Explorer), but not in Waterfox. If no browsers can load websites, see [Waterfox and other browsers can't load websites](/support/waterfox-and-other-browsers-cant-load-websites).
- For troubleshooting connection problems unrelated to updating Waterfox, see [Waterfox can't load websites but other browsers can](/support/waterfox-cant-load-websites-other-browsers-can).

## The cause

If you were able to load websites until you updated Waterfox, your Internet security software (including firewalls, antivirus programs, anti-spyware programs, and more) is likely preventing Waterfox from connecting to the Internet.

This problem occurs when your Internet security program was set to trust the previous version of Waterfox, but no longer recognizes your updated version as trusted.

:::note
In some cases, disabling an Internet security program or firewall does not stop all of its parts from being active. A program that reports that it is disabled may still be able to block Waterfox.
:::

## Fixing the problem

To allow Waterfox to connect to the Internet again:

1. Make sure your Internet security software is up-to-date (i.e. you are running the latest version).
2. Remove Waterfox from your program's list of trusted or recognized programs, then add it back. For detailed instructions, see [Configure firewalls so that Waterfox can access the Internet](/support/configure-firewalls-so-waterfox-can-access-internet).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Fix problems connecting to websites after updating Firefox](https://support.mozilla.org/en-US/kb/fix-problems-connecting-websites-after-updating). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/fix-problems-connecting-websites-after-updating#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
