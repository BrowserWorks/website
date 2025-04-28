---
slug: support/diagnose-waterfox-issues-using-troubleshoot-mode
title: "Diagnose Waterfox issues using Troubleshoot Mode"
---

**Troubleshoot Mode** runs Waterfox with some features and customizations disabled ([see below](#what-does-troubleshoot-mode-disable) for details). If you're having a problem in Waterfox that does not occur in Troubleshoot Mode, the cause of the problem is one of the disabled items.

## How to start Waterfox in Troubleshoot Mode

Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help, select Troubleshoot Mode… and click Restart in the _Restart Waterfox in Troubleshoot Mode?_ dialog.

:::note
You can also start Waterfox in Troubleshoot Mode by holding down the Shift key while starting Waterfox.
:::

## Troubleshoot Mode window

![Fx89TroubleshootModeWin10](/assets/docs/2021-06-15-10-13-14-78eb78.png)

Choose one of these options:

- Click Open to start Waterfox with a default theme, your extensions disabled and some other features and customizations turned off. These changes are temporary. When you leave Troubleshoot Mode and start Waterfox normally, your add-ons and other settings will return to the state they were in before you entered Troubleshoot Mode.
- Click Refresh Waterfox to restore Waterfox to its factory default state while saving your essential information. These changes are permanent. Before you choose this option, see [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings) for more information.

## Diagnosing problems in Troubleshoot Mode

After you start Waterfox in _Troubleshoot Mode_, test its behavior and see if the problem goes away.

### The problem happens in Troubleshoot Mode

If the problem still happens in Troubleshoot Mode, it is not being caused by an extension or theme. Other possible causes include changes made to Waterfox preference settings, which are not disabled in Troubleshoot Mode. See the following articles for solutions:

- [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems)
- [Reset Waterfox preferences to troubleshoot and fix problems](/support/reset-preferences-fix-problems)

### The problem does not happen in Troubleshoot Mode

If the problem does not happen in Troubleshoot Mode, the most likely cause is an extension, theme or hardware acceleration. See this article for solutions:

- [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems)

## Exiting Troubleshoot Mode

1. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
2. Start Waterfox as you normally would.

:::note
If Waterfox keeps starting in Troubleshoot Mode, see [Waterfox is stuck in Troubleshoot Mode](/support/waterfox-stuck-troubleshoot-mode).
:::

## What does Troubleshoot Mode disable?

- [Add-ons (extensions and themes)](/support/find-and-install-add-ons-add-features-to-waterfox)
- [Hardware acceleration](/support/upgrade-graphics-drivers-use-hardware-acceleration)
- [Site Isolation (Fission)](https://hacks.mozilla.org/2021/05/introducing-waterfox-new-site-isolation-security-architecture/)
- [Window and sidebar size and position settings](/support/changes-toolbars-and-window-sizes-are-not-saved)
- userChrome and userContent customizations
- [JavaScript Just-in-time (JIT) compiler](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/)

**_Based on information from [Safe mode (mozillaZine KB)](https://kb.mozillazine.org/Safe_Mode)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Diagnose Firefox issues using Troubleshoot Mode](https://support.mozilla.org/en-US/kb/diagnose-firefox-issues-using-troubleshoot-mode). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/diagnose-firefox-issues-using-troubleshoot-mode#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
