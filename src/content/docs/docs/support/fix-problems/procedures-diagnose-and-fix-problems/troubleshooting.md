---
slug: /support/troubleshooting
title: "Troubleshoot and diagnose Waterfox problems"
---

Most problems with Waterfox can be fixed by following the troubleshooting methods described below. Try these steps in order. If one doesn't work, move on to the next one.

## 1. Restart your computer

Sometimes problems can be fixed by simply restarting your computer and then starting Waterfox again.

## 2. Clear your cookies and cache

Many problems with loading web pages can be resolved by clearing Waterfox's cookies and cached Web content. To learn more, see [Clear cookies and site data in Waterfox](/support/clear-cookies-and-site-data-waterfox) and [How to clear the Waterfox cache](/support/how-clear-waterfox-cache).

To clear cookies and cache all at once:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

## 3. Restart Waterfox in Safe Mode

Waterfox Safe Mode is a troubleshooting mode that disables extensions, uses the default theme, turns off hardware acceleration and uses default toolbar settings, among other changes (see [this article](/support/diagnose-waterfox-issues-using-troubleshoot-mode) for details). To start Waterfox in Safe Mode:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help, select Troubleshoot Mode… and click Restart in the _Restart Waterfox in Troubleshoot Mode?_ dialog.

:::note
You can also start Waterfox in Troubleshoot Mode by holding down the Shift key while starting Waterfox. 2. In the next _Waterfox Safe Mode_ dialog, click Start in Safe Mode. 3. Check whether your problem is still happening while in Safe Mode.
:::

- If the problem still happens in Safe Mode, go on to step 4.
- If the problem does not happen in Safe Mode, follow [these instructions](/support/troubleshoot-extensions-themes-to-fix-problems#the-problem-does-not-occur-in-safe-mode) to troubleshoot extensions, themes and hardware acceleration.

## 4. Reinstall Waterfox

Some Waterfox issues can be caused by a problem with one of the Waterfox program files. Follow these steps to completely remove and reinstall Waterfox. This process will not remove your [Waterfox profile](/support/profiles-where-waterfox-stores-user-data) data (such as bookmarks and passwords), since that information is stored in a different location.

:::note
You might want to print these steps or view them in another browser.
:::

1. Download and save the installer for the latest official version of Waterfox from [waterfox.net](https://www.waterfox.net/download/).
2. Exit Waterfox (if open): Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. You may want to make a note of the Waterfox program folder location (right-click the Waterfox desktop icon, select Properties from the context menu and click the Shortcut tab) since there may be leftover files and folders after you uninstall Waterfox that should be removed for a clean reinstallation.
4. [Uninstall Waterfox from your computer](/support/uninstall-waterfox-from-your-computer).
5. Delete the Waterfox program folder, which is normally found in one of these locations by default:
   - C:\Program Files\Waterfox
   - C:\Program Files (x86)\Waterfox
6. Reinstall Waterfox using the installer you downloaded earlier - see [How to install Waterfox on Windows](/support/how-install-waterfox-windows) for instructions.

Now start Waterfox and check to see if your problem has been fixed. If it hasn't, continue with the next troubleshooting method.

## 5. Refresh Waterfox

The _Refresh Waterfox_ feature can fix many issues by restoring your [Waterfox profile](/support/profiles-where-waterfox-stores-user-data) to its default state while saving your essential information.If you have many Waterfox customizations, you may want to skip this step and create a new Waterfox profile instead (see [step 6, below](#6-create-a-new-waterfox-profile)) so that your old profile is easily recoverable from the [Profile Manager](/support/profile-manager-create-remove-switch-waterfox-profiles).

:::note
When you refresh Waterfox, your bookmarks, browsing history, open tabs, windows, passwords, cookies and web form auto-fill information will be saved. However, your extensions and themes will be removed and your preferences will be reset. [Learn more.](/support/refresh-waterfox-reset-add-ons-and-settings)
:::

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information.
2. Click Refresh Waterfox… then Refresh Waterfox in the confirmation window that opens. Waterfox will close to refresh itself.
3. When finished, a window will list your imported information. Click the Finish button. Waterfox will open.

:::note
There's a Refresh Waterfox button in the Waterfox [Safe Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) window, if you can't start Waterfox normally. You can also do a manual refresh by [creating a new profile and transferring your important data to the new profile](/support/recovering-important-data-from-an-old-profile#create-a-new-waterfox-profile).
:::

## 6. Create a new Waterfox profile

Sometimes files in your Waterfox [profile folder](/support/profiles-where-waterfox-stores-user-data) that correspond to the essential information that a Waterfox Refresh doesn't remove (such as bookmarks and browsing history) may be causing the issue. You can create a new, additional profile which will not contain any of your old Waterfox data. See the [Profile Manager - Create, remove or switch Waterfox profiles](/support/profile-manager-create-remove-switch-waterfox-profiles) article for instructions.

## Other solutions

If you've tried all of these troubleshooting methods, and you're still having problems, here are some other solutions you can try:

### Check browser internals

The [Waterfox Task Manager](/support/task-manager-tabs-or-extensions-are-slowing-waterfox) (_about:performance_ page) lets you see what tabs or extensions are slowing down Waterfox. [Telemetry Data shared with Waterfox](/support/share-data-waterfox-help-improve-waterfox#telemetry-data) (_about:telemetry_ page) contains detailed data about performance, hardware, usage and customization. The [Troubleshooting Information page](/support/use-troubleshooting-information-page-fix-waterfox) (_about:support_ page) includes other _about:_ page links and troubleshooting resources. (For a list of all _about:_ pages, enter **about:about** in the address bar.)

### Check for conflicts with your Internet security software

Some Internet security software (including antivirus, antispyware, and firewall programs) can cause problems with Waterfox including blocking it from opening websites, crashes, and more. Often you can open the program's settings, remove Waterfox from its list of allowed or trusted programs, and it will be re-detected and things should start working again. See [Configure firewalls so that Waterfox can access the Internet](/support/configure-firewalls-so-waterfox-can-access-internet).

### Check for malware

[Malware](http://wikipedia.org/wiki/Malware) (short for "malicious software") can cause problems with Waterfox. Periodically, you should scan your system for viruses, spyware, or other malware. For more information, see [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware).

**_Based on information from [Standard diagnostic - Waterfox (mozillaZine KB)](http://kb.mozillazine.org/Standard_diagnostic_-_Waterfox)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Troubleshoot and diagnose Firefox problems](https://support.mozilla.org/en-US/kb/troubleshooting). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/troubleshooting#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
