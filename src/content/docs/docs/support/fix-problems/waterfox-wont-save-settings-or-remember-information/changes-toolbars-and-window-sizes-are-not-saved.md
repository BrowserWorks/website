---
slug: support/changes-toolbars-and-window-sizes-are-not-saved
title: "Changes to toolbars and window sizes are not saved"
---

In some instances, Waterfox may not remember changes you've made to your toolbar settings or certain other configuration changes, like window size or position. This article explains how to fix the underlying problem that may result in one or more of the following symptoms:

- You have [customized your Waterfox toolbar](/support/customize-waterfox-controls-buttons-and-toolbars) to add, rearrange or remove buttons but the changes are not saved when you restart Waterfox.
- You have resized or moved the browser window, but the new size and position are not remembered when you restart Waterfox.
- You cannot save new [bookmarks](/support/bookmarks-waterfox).

Here are two ways that you can solve the problem:

## Solution 1: Delete xulstore.json file

You may have a corrupt **xulstore.json** file in your [Waterfox profile](/support/profiles-where-waterfox-stores-user-data). You can delete this file so that Waterfox can create a new one.

1. - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::
2. Close Waterfox:Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Locate and delete the file xulstore.json (or rename it, for example, to _xulstore.jsonOLD_, to keep the old file as a backup).
4. You can close the profile folder and open Waterfox now.

## Solution 2: Refresh Waterfox

If you don't want to try the first solution or if it didn't work, the Waterfox [refresh feature](/support/refresh-waterfox-reset-add-ons-and-settings) will automatically restore default toolbar settings and browser window size or position, and will also remove add-ons (extensions and themes) that could be interfering.

:::note
When you refresh Waterfox, your bookmarks, browsing history, open tabs, windows, passwords, cookies and web form auto-fill information will be saved. However, your extensions and themes will be removed and your preferences will be reset. [Learn more.](/support/refresh-waterfox-reset-add-ons-and-settings)
:::

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information.
2. Click Refresh Waterfox… then Refresh Waterfox in the confirmation window that opens. Waterfox will close to refresh itself.
3. When finished, a window will list your imported information. Click the Finish button. Waterfox will open.

:::note
There's a Refresh Waterfox button in the Waterfox [Safe Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) window, if you can't start Waterfox normally. You can also do a manual refresh by [creating a new profile and transferring your important data to the new profile](/support/recovering-important-data-from-an-old-profile#create-a-new-waterfox-profile).
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Changes to toolbars and window sizes are not saved](https://support.mozilla.org/en-US/kb/changes-toolbars-and-window-sizes-are-not-saved). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/changes-toolbars-and-window-sizes-are-not-saved#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
