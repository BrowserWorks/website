---
slug: /support/waterfox-repeatedly-opens-empty-tabs-or-windows
title: "Waterfox repeatedly opens empty tabs or windows after you click on a link"
---

Waterfox may repeatedly open new, empty tabs or windows after you click on a link, forcing you to close Waterfox. The same untitled tabs or blank windows may open the next time you start Waterfox if the previous session is restored. This article describes what to do if you are experiencing this problem.

:::note
This usually happens because you chose to use Waterfox as the application to always use for opening a particular type of file.
:::

The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.

## Start a new Waterfox session

You may be forced to close Waterfox if it is repeatedly opening multiple tabs or windows. Waterfox includes a [Session Restore](/support/restore-previous-session) feature that can restore your windows and tabs from the previous session after a crash or unexpected close.

The same multiple tabs or windows may start opening when you next start Waterfox, forcing you to close Waterfox again. If you see a Restore Session "_Sorry. We're having trouble getting your pages back._") page when you restart Waterfox, click the Start New Session button to start a new session and then follow the instructions given below to fix the problem.

## Change the action for a content type

You may be able to fix the problem by finding the content type that is set to use Waterfox and then changing the action, using these steps:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go to the _Files and Applications_ section and review the Content Type entries under **Applications**.
3. If you know which item in the Content Type column is causing the problem, select it. Otherwise, in the Search box, type _Use Waterfox_. The list will display only items that are set to "Use Waterfox".
   ![Fx61ApplicationsUseWaterfox](/assets/docs/2018-10-24-13-42-46-7cac94.png)
4. Select each problematic content type and choose a new action from the drop-down menu in the Action column. If you're not sure which action to pick, choose Always ask.
5. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

:::note
A problematic _Portable Document Format (PDF)_ content type should be set to Open in Waterfox if you wish to [view PDF files in Waterfox](/support/view-pdf-files-waterfox-or-choose-another-viewer), even when Waterfox is the default program to open PDF files on Windows.
:::

For more information about content types, see [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file).

## Reset actions for all content types

If the preceding steps didn't fix the problem, or if you can't find the problematic item in the Applications list, you will have to reset the default actions for all content types and remove customized settings, by refreshing Waterfox. To learn more, see [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings).

## Check for malware

If the problem is still not solved, or if Waterfox is opening multiple tabs or windows with unwanted content, consider that your system may be infected by [malware](http://en.wikipedia.org/wiki/Malware). For more information, see [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox repeatedly opens empty tabs or windows after you click on a link](https://support.mozilla.org/en-US/kb/firefox-repeatedly-opens-empty-tabs-or-windows). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-repeatedly-opens-empty-tabs-or-windows#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
