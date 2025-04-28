---
slug: support/cant-add-change-or-save-bookmarks
title: "Can’t add, change or save bookmarks - How to fix"
---

This article shows you what to do if you cannot add new bookmarks or make other changes to your bookmarks.

:::note
If you have been able to save bookmarks but they are now missing, see [Recover lost or missing Bookmarks](/support/recover-lost-or-missing-bookmarks).
:::

## I can't add or change bookmarks

If you can't add new bookmarks or if changes you make to the toolbar are not saved when you restart Waterfox, see [Changes to toolbars and window sizes are not saved](/support/changes-toolbars-and-window-sizes-are-not-saved).

If you can't add new bookmarks or make other changes to your bookmarks and you have a [Waterfox extension related to bookmarks](https://addons.mozilla.org/firefox/extensions/bookmarks/) installed (for example, one that synchronizes bookmarks) follow the instructions in [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems) to determine if an extension is causing the problem.

## I can add or change bookmarks but they are lost when I restart Waterfox

If you are able to add, delete, rearrange, and make other changes to your bookmarks but your changes are lost whenever you restart Waterfox, try these solutions.

:::note
It is recommended that you disable any extensions related to bookmarks, as explained [here](/support/troubleshoot-extensions-themes-to-fix-problems#disable-all-extensions), before proceeding with the solutions suggested below.
:::

### Fix the Bookmarks file

If your changes to your bookmarks do not appear when you restart Waterfox, the issue may be that your bookmarks file is write-protected. A write-protected file can't be changed, which prevents Waterfox from saving any changes you have made.

Allow Waterfox to save bookmark changes:

1. Open your profile folder:
   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::
2. Close Waterfox completely: Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Right-click the file places.sqlite, and select Properties to open the Properties window.
4. In the Properties window, select the General tab. Near the bottom of the window, verify that **Read-only** is NOT selected.

### Create a new Bookmarks file

Bookmarks and browsing history are stored in the Waterfox profile folder in the file places.sqlite. If there is a problem with this file, your bookmark changes may be lost whenever you restart Waterfox. You can force Waterfox to create another places.sqlite file by deleting (or renaming) the existing one.

You might want to print these directions out, or copy them down to reference because you will have to close Waterfox to delete or rename the files.

:::danger
Once you delete the places.sqlite file, you will lose all of your browsing history.
:::

Waterfox only keeps one copy of this file and there are no automatic backups for browsing history as there are for bookmarks.

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.

   :::note
   If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
   :::

2. Close Waterfox completely: Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. In your profile folder, find the files places.sqlite and places.sqlite-journal (if it exists) and delete them (or rename for example, to places.sqlite*OLD*, to keep the old file as a backup) .

:::note[Optional]
Also delete the file xulstore.json. This will reset any [toolbar customizations](/support/customize-waterfox-controls-buttons-and-toolbars) you have made.
:::

When you next start Waterfox, it will create a new places.sqlite file and automatically import the most recent bookmark backup file. Your bookmarks will be restored from backup but you will lose your browsing history. Note that browsing history is used for the [address bar autocomplete](/support/address-bar-autocomplete-waterfox) feature.

**_Based on information from [Bookmarks not saved (mozillaZine KB)](http://kb.mozillazine.org/Bookmarks_not_saved)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Can’t add, change or save bookmarks - How to fix](https://support.mozilla.org/en-US/kb/cant-add-change-or-save-bookmarks). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/cant-add-change-or-save-bookmarks#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
