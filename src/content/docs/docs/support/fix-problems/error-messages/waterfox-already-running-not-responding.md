---
slug: support/waterfox-already-running-not-responding
title: '"Waterfox is already running but is not responding" error - How to fix'
---

All of your personal settings, bookmarks, and other information are kept in your [Waterfox profile](/support/profiles-where-waterfox-stores-user-data). Waterfox needs an unlocked profile to start up, and if the profile is locked, it displays the message, _Waterfox is already running, but is not responding_. This article explains what to do if you see this message and how to prevent it from showing at startup.

:::note
If this is a recurring problem, see [Waterfox hangs when you quit it](/support/waterfox-hangs-or-not-responding#waterfox-hangs-when-you-quit-it) for possible causes and solutions.
:::

![Fx34already-running-Win7](/assets/docs/2014-11-11-04-50-05-369346.png)

## End Waterfox processes

If Waterfox did not shut down normally when you last used it, Waterfox might still be running in the background, even though it is not visible.
If you try to open it while it's running, an error message will appear with the option to click Close Waterfox. If that doesn't solve the problem, restart your computer or try the following options.
Restart your computer to see if the problem goes away or try the following options.

### Use the Windows Task Manager to close the existing Waterfox process

1. Right-click on an empty spot in the Windows task bar and select Task Manager (or press Ctrl+Shift+Esc).
2. When the Windows Task Manager opens, select the Processes tab.
3. Select the entry for **waterfox.exe** (press F on the keyboard to find it) and click End Process.
4. Click Yes in the "Task Manager Warning" dialog that appears.
5. Repeat the above steps to end all additional waterfox.exe processes, then exit the Windows Task Manager.
6. Start Waterfox normally.

## Remove the profile lock file

Waterfox may have shut down abnormally, leaving the lock file in place. To fix this, open the profile folder (see [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox)) and delete the
parent.lock file.

## Remove the -no-remote startup option

If you start Waterfox with th-e `-no-remote` [command line option](http://web.archive.org/web/20210530092017/https://developer.mozilla.org/en-US/docs/Waterfox/Command_Line_Options), try removing this option.

## Initialize the connection to a file share

If you store the profile on a file share, try accessing the file share beforehand using Windows Explorer.

## Check access rights

Waterfox must also have the right to create files in the profile folder. The error can occur if you try to use a profile from a file system mounted with read-only permission (e.g. a remote Windows share which doesn't have "Allow network users to change my files" checked).

To check if the profile folder has the proper permissions:

1. Find your Waterfox profile folder - see [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
   - If you only have one profile, its folder would have "default" in the name.
2. Right-click on your profile folder and select Properties.
3. Click on the General tab.

4. Make sure **Read-only** is not checked marked.

## Restore data from a locked profile

If you are unable to unlock the profile using the above methods, [use the Profile Manager](/support/profile-manager-create-remove-switch-waterfox-profiles) to create a new profile and migrate your data from the locked profile to the new profile. For information on how to do this, see [Recovering important data from an old profile](/support/recovering-important-data-from-an-old-profile).

**_Based on information from [Profile in use (mozillaZine KB)](http://kb.mozillazine.org/Profile_in_use)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from ["Firefox is already running but is not responding" error - How to fix](https://support.mozilla.org/en-US/kb/firefox-already-running-not-responding). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-already-running-not-responding#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
