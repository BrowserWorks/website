---
slug: support/restore-previous-session
title: "Restore previous session - Configure when Waterfox shows your most recent tabs and windows"
---

Waterfox can restore all windows and tabs that were open when it was last closed or terminated unexpectedly. This article describes the circumstances under which Waterfox will restore your previous session and how you can configure it.

:::note
Session Restore may keep you logged in to sites that you were logged in to before you closed Waterfox. For more information, see [Privacy issues](#privacy-issues).
:::

## When session restore occurs

### When you select Restore Previous Session from the Waterfox menu

Here's how to get your tabs and windows from a previous session back using the Waterfox menu:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> on the right side of your toolbar.
2. Click History and then select Restore Previous Session.
   ![Sessionrestore89](/assets/docs/2021-05-19-06-31-50-513d15.png)

### After a Waterfox update

To apply any updates to the Waterfox application that have been downloaded, you must restart Waterfox. To restart, click Restart to update Waterfox.

### After restarting Waterfox in Troubleshoot Mode

When you [restart in Troubleshoot Mode to diagnose Waterfox problems](/support/diagnose-waterfox-issues-using-troubleshoot-mode), your tabs and windows will be reopened.

### After a crash

Due to unexpected issues such as problems with a website, software errors, or an accidental loss of power, Waterfox may unexpectedly close. In these situations, Waterfox can restore the pages that you were visiting when it is restarted. Waterfox will automatically restore your previous session, the first time you launch it after a crash.
If Waterfox crashes a second time, the Restore Session page will appear when you next launch Waterfox.

![Fx91RestoreSession](/assets/docs/2022-02-25-16-45-59-075591.png)

- To restore your previous session, select the windows or tabs you want to restore and click Restore Session.
- If Waterfox continues to experience errors when windows and tabs are re-opened, you can launch Waterfox without restoring these items. To start a new session, click Start New Session.

### When you've set Waterfox to restore the previous session at startup

You can set Waterfox to always show your windows and tabs from your previous session each time you start Waterfox. To change your Waterfox startup settings, see [Configuring session restore](#configuring-session-restore), below.

## Configuring session restore

When Waterfox starts, a single window is opened by default, displaying your [specified home page](/support/how-to-set-the-home-page). If you wish, you can configure Waterfox to open the windows and tabs from your previous session:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Below **Startup** select Restore previous session.
   ![Fx92General-Startup](/assets/docs/2021-10-06-09-30-37-a38d86.png)
4. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## Privacy issues

Session Restore may keep you logged in to sites that you were logged in to before you closed Waterfox. If someone else used your computer after you, they could access your account on these sites. If this is a concern then you should not configure Waterfox to open all windows and tabs from your previous session.

You may also wish to disable the Session Restore crash recovery feature which is enabled by default. This will prevent restoring a previous session when Waterfox is opened after an unexpected close or software crash:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the Search box at the top, type **browser.sessionstore.resume_from_crash**.
3. In the resulting grid, double-click browser.sessionstore.resume_from_crash to set it to **false**.

## Troubleshooting

### Previous session not correctly closed

To get your tabs and windows back from a previous session, you should close Waterfox from the menu: Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
If you close each window or tab, only the tabs in the final window that you close are available when you restart Waterfox.

### Settings may be incorrect

For other session restore problems, you may need to make corrections to your Waterfox settings:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. In the **History** section, make sure that the **Waterfox will** drop-down menu is set to either Remember history or Use custom settings for history.
   - If **Waterfox will** is set to Use custom settings for history then make sure that **Always use Private Browsing mode** is not selected.
   - If **Waterfox will** is set to Use custom settings for history and **Clear history when Waterfox closes** is selected, then click the Settings button and make sure that **Browsing & Download History** is not selected.
4. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

**_Based on information from [Session Restore (mozillaZine KB)](http://kb.mozillazine.org/Session_Restore)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Restore previous session - Configure when Firefox shows your most recent tabs and windows](https://support.mozilla.org/en-US/kb/restore-previous-session). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/restore-previous-session#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
