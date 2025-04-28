---
slug: support/waterfox-hangs-or-not-responding
title: "Waterfox hangs or is not responding - How to fix"
---

When Waterfox **hangs**, it stops responding to your clicks and keystrokes and doesn't seem to be doing anything. Also, a "(Not Responding)" label is displayed in the title bar and the mouse cursor becomes a spinning wheel when it's over the Waterfox window. This article gives you solutions to Waterfox hangs depending on when they happen.

- If Waterfox does not start at all, see [Waterfox won't start - find solutions](/support/waterfox-wont-start-find-solutions).
- If Waterfox uses a lot of computer resources, see [Waterfox uses too much memory or CPU resources - How to fix](/support/waterfox-uses-too-much-memory-or-cpu-resources).
- If you get an "unresponsive script" warning, see [Warning Unresponsive script - What it means and how to fix it](/support/warning-unresponsive-script).
- If Waterfox closes unexpectedly, see [Troubleshoot Waterfox crashes (closing or quitting unexpectedly)](/support/troubleshoot-waterfox-crashes-closing-or-quitting).

To resolve hanging problems not specifically mentioned in this article, or if the suggested solutions do not solve the problem, see [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems).

:::note
If you [send performance data](/support/share-data-waterfox-help-improve-waterfox), Waterfox will gather data including hangs for your Waterfox, which will help making Waterfox better for future versions.
:::

## Waterfox hangs as soon as it opens

Interactions between certain Internet security software (firewall or anti-virus) can cause Waterfox startup hangs on some systems. A [Waterfox update](/support/update-waterfox-latest-release) or security software update may resolve this problem. You can also try to [reconfigure your firewall](/support/configure-firewalls-so-waterfox-can-access-internet) or disable your antivirus software temporarily, to see if the problem goes away. If your Internet security software is causing the issue, contact the software provider's support site or switch to a different product.

## Waterfox hangs at random times

If Waterfox seems to hang randomly and not after a specific action (for example, downloading a file or quitting Waterfox), try the solutions in this section.

### Create a new _places_ database

If hangs are **periodic**, it may be caused by a corrupted _places_ database.

**Information**: The "places" files store the annotations, bookmarks, favorite icons, input history, keywords, and browsing history (a record of visited pages).

To create a new _places_ database, do the following:

:::caution
This will clear your browsing history and remove bookmarks of the day.
:::

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
   Wait until Waterfox has completely quit.
3. In the Waterfox profile folder, find and rename the files **places.sqlite** to **places.sqlite.old** and **places.sqlite-journal** to **places.sqlite-journal.old** (if it exists).
   - To rename a file, right-click on it and select rename from the menu. Then add .old to the end of its name.
4. Finally, reopen Waterfox.
   - When Waterfox reopens it will create a new _places_ database. Your browsing history will be lost but Waterfox will automatically import your bookmarks from the most recent backup file.

### Turn off hardware acceleration

With some graphics card and graphics driver setups, Waterfox may hang when using hardware acceleration. You can try turning off hardware acceleration to see if it fixes the problem.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Under **Performance**, uncheck Use recommended performance settings.
   Additional settings will be displayed.
   ![Fx55Performance-disableHWA](/assets/docs/2017-08-27-03-46-52-fd0019.png)
4. Uncheck Use hardware acceleration when available.
5. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
6. Start Waterfox the way you normally do.

If the problem is no longer happening, then hardware acceleration was likely the cause. You can try [updating your graphics drivers](/support/upgrade-graphics-drivers-use-hardware-acceleration) to see if that fixes it or simply run without hardware acceleration.

### Change the PAC implementation

If you're using a proxy auto-config file (PAC), Waterfox may hang when you attempt to load sites that don't exist or that you haven't opened recently. To determine if you use an automatic proxy configuration file:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to the **Network Proxy** section.
3. Click Settings…. The Connection Settings dialog appears.
4. If **Automatic proxy configuration URL** is selected, you are using an automatic proxy configuration file. Do not disable this setting, which will prevent you from accessing the Internet. Instead, provide [this workaround](https://bugzilla.mozilla.org/show_bug.cgi?id=235853#c216) to your network administrator.
5. Click Cancel.

## Waterfox hangs after using it for a long time

Waterfox may hang if left open for long periods of time. To fix the issue, restart Waterfox.

If you regularly leave Waterfox open so that you return to where you left off, you may want to use Waterfox's Session Restore feature. For more information, see [Configuring session restore](/support/restore-previous-session#configuring-session-restore).

## Waterfox hangs when downloading files or saving images

If Waterfox hangs when you attempt to download a file or save an image, try these solutions:

### Clear download history

Waterfox may hang when downloading files if your download history has grown too large. To clear the download history:

1. Open the Library window using one of these methods:
   - Click the Downloads icon <img alt="Screenshots down arrow icon fx55" class="inline-image" src="/assets/docs/2017-08-08-03-09-35-23cf57.png"> on the toolbar, if it's available, and click Downloads from the menu.
   - Click the Library <img alt="library icon" class="inline-image" src="/assets/docs/icons/library.svg" /> button, click Downloads and click Show All Downloads at the bottom of the Downloads panel.
2. Click the Clear Downloads button at the top of the Library window.
3. Download some sample files to see if the hanging has stopped.

For more information about managing your downloads, see [Where to find and manage downloaded files in Waterfox](/support/where-find-and-manage-downloaded-files-waterfox).

### Choose a different download folder

Waterfox may hang if the last download folder location (e.g. a shared volume or USB drive) is no longer available. To fix this:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Under **Downloads**, select **Save files to** and click the Browse button.
4. In the **Choose Download Folder** window, choose a new folder location.
5. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

See if you are now able to download files or save images. If this works, you can go back to your Waterfox settings, if you wish, and select Always ask me where to save my files.

## Waterfox hangs when you quit it

Sometimes when you close Waterfox, it may stop responding and remain in memory, even though no Waterfox windows are open. This can prevent Waterfox from working properly the next time you open it or you may see a "Close Waterfox" dialog box with an error message, _Waterfox is already running, but is not responding._ You must then end all Waterfox processes or restart the computer before you can reopen Waterfox (see ["Waterfox is already running but is not responding" error - How to fix](/support/waterfox-already-running-not-responding) for other causes and solutions).

**_Based on information from [Waterfox hangs (mozillaZine KB)](http://kb.mozillazine.org/Waterfox_hangs)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox hangs or is not responding - How to fix](https://support.mozilla.org/en-US/kb/firefox-hangs-or-not-responding). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-hangs-or-not-responding#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
