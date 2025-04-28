---
slug: support/importing-safari-data-waterfox
title: "Importing Safari data into Waterfox"
---

:::note
This article only applies to Mac.
:::

Waterfox allows you to easily and safely [import data from other browsers](/support/import-data-another-browser), such as bookmarks, browsing history, and custom preferences. This article explains how to allow Waterfox full disk access to your computer, so that you can import data into Waterfox from your Safari browser on macOS 10.14 (Mojave) or higher.

Starting in moder [Waterfox versions](/support/find-what-version-waterfox-you-are-using), full disk access is only required on macOS 10.14 ([bug 1493103](https://bugzilla.mozilla.org/show_bug.cgi?id=1493103)).

## Before importing: Enable full disk access for the necessary Waterfox applications

If you’re using a Mac and running macOS version 10.14 or higher, please be sure to enable full disk access for the necessary Waterfox applications, before importing data.

:::note
Quit Safari and the Waterfox applications that you’re enabling full disk access for, prior to performing the steps below. Otherwise, these changes won’t take effect until these applications have been terminated.
:::

To enable full disk access for the necessary Waterfox applications:

1. Click the Apple logo on your toolbar and choose System Preferences.
2. Click Security & Privacy.
3. Click the **Privacy** tab.
4. Click the lock icon to unlock at the bottom of the _Security & Privacy_ dialog window.
5. Enter the password used to access your Mac when prompted and then click **Unlock**.
6. Select Full Disk Access from the left pane.
7. Click the + button and do the following:
8. Select Applications from the left pane if not already selected.
9. Select the appropriate Waterfox application (use the Command key to select multiple applications if necessary) and then click Open.
   - The applications display on the right of the Security & Privacy dialog window.

## Import data from Safari

After completing the above steps on macOS version 10.14 or higher, import your Safari data into Waterfox by following the instructions [here](/support/import-data-another-browser).

## After Importing: Disable full disk access

If you’ve enabled full disk access for any Waterfox applications on your Mac and you’re running macOS version 10.14 or higher, please be sure to disable full disk access after a successful import by doing the following:

1. Click the Apple logo on your toolbar and choose System Preferences.
2. Click Security & Privacy.
3. Click the **Privacy** tab.
4. Click the lock icon to unlock at the bottom of the _Security & Privacy_ dialog window.
5. Enter the password used to access your Mac when prompted and then click **Unlock**.
6. Select Full Disk Access from the left pane.
7. Click the corresponding row for the necessary Waterfox application.
8. Click the - button.
9. Repeat steps 7 and 8 for all remaining Waterfox applications.
10. Close the _Security & Privacy_ dialog window once all the necessary Waterfox applications have been removed.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Importing Safari data into Firefox](https://support.mozilla.org/en-US/kb/importing-safari-data-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/importing-safari-data-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
