---
slug: /support/reset-preferences-fix-problems
title: "Reset Waterfox preferences to troubleshoot and fix problems"
---

Resetting preferences (zoom, tabs, privacy, network, encryption, updates, where to save file downloads, etc.) is one of many procedures that can be helpful in [troubleshooting Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems). We'll explain two ways to do this.

- If changes to preference settings are not saved when you restart Waterfox, see [How to fix preferences that won't save](/support/how-to-fix-preferences-wont-save).

## Solution 1: Refresh Waterfox

The refresh feature restores Waterfox to its default state while saving your essential information. This solution will reset preferences but will also remove other customizations, including added [extensions and themes](/support/find-and-install-add-ons-add-features-to-waterfox). For more information, see [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings).

## Solution 2: Delete Waterfox preference files

1. - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::
2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Locate and delete the file prefs.js (or rename it, for example, to _prefs.jsOLD_, to keep the old file as a backup). If you find more than one, a prefs.js.moztmp file or a user.js file, delete (or rename) these as well.
4. You can close the profile folder and open Waterfox now.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Reset Firefox preferences to troubleshoot and fix problems](https://support.mozilla.org/en-US/kb/reset-preferences-fix-problems). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/reset-preferences-fix-problems#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
