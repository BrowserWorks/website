---
slug: /support/waterfox-wont-start-find-solutions
title: "Waterfox won’t start - find solutions"
---

This article describes what to do if Waterfox does not open when you click the Waterfox icon.

- If Waterfox hangs or stops responding as soon as you open it, see [Waterfox hangs or is not responding - How to fix](/support/waterfox-hangs-or-not-responding).
- If you get a message you can dismiss (e.g. _"TypeError: Components.classes['@ … ;1'] is undefined"_, _"onload error TypeError: …"_, _"Exc in ev handl: …"_) and can open Waterfox, see [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).
- If Waterfox starts but won't load any websites, see [Websites don't load - troubleshoot and fix error messages](/support/websites-dont-load-troubleshoot-and-fix-errors).

:::note
The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.
:::

The Waterfox [Safe Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode#how-to-start-waterfox-in-4troubleshoot-modesf5safe-modesf) window includes a Refresh Waterfox option. You can start Waterfox in Safe Mode by holding down the shift key while starting Waterfox.

## Specific error messages

### Waterfox Crash Reporter

If you get the "_Waterfox Crash Reporter_" window when you start Waterfox, see [Troubleshoot Waterfox crashes (closing or quitting unexpectedly)](/support/troubleshoot-waterfox-crashes-closing-or-quitting) for solutions.

### Waterfox is already running but is not responding

See ["Waterfox is already running but is not responding" error - How to fix](/support/waterfox-already-running-not-responding) for solutions.

### Your Waterfox profile cannot be loaded. It may be missing or inaccessible

See [How to run Waterfox when your profile is missing or inaccessible](/support/how-run-waterfox-when-profile-missing-inaccessible) for solutions.

### Failed to read the configuration file

This error is caused by a problem with Waterfox program files. The solution is to remove the Waterfox program and then reinstall Waterfox. (This will not remove your passwords, bookmarks or other user data and settings which are stored in a separate [profiles](/support/profiles-where-waterfox-stores-user-data) folder.)

1. [Uninstall Waterfox](/support/uninstall-waterfox-from-your-computer).
2. Delete the Waterfox installation directory, normally found in one of these locations by default:
   - C:\Program Files\Waterfox
   - C:\Program Files (x86)\Waterfox
3. Use another browser to download the Waterfox installer from the [Waterfox download page](https://www.waterfox.net/download/) and install it. See [How to install Waterfox on Windows](/support/how-install-waterfox-windows) for details.

### XULRunner - Error

If you see the message, _"XULRunner - Error: Platform version {x.x.x.x} is not compatible with minVersion {x.x.x.x}""_ ("{x.x.x.x}" depends on version number), after a software update, use another browser to download the Waterfox installer from the [Waterfox download page](https://www.waterfox.net/download/), save it to the desktop or other location, delete the Waterfox installation directory and then [reinstall Waterfox](/support/how-install-waterfox-windows). If Waterfox still does not start, see the [Waterfox will not start due to security software](#waterfox-will-not-start-due-to-security-software) section below.

### Error opening file for writing…

If you receive the above error when launching Waterfox on a Windows system, you may be required by Waterfox to log in as an administrator. You can either reboot the computer or, if you have an administrator account, you can execute the program as an administrator.

1. Find the waterfox.exe program file in the Waterfox application folder on your system.
2. Right-click the icon.
3. Select Run As Administrator…. Select **The following user:**. From the Username drop-down, select **Administrator** or another user that has administrator privileges. Enter the password required to log in to this account. Click OK.
4. The Waterfox application is started using the administrator Windows account. The user that was used to log in to Windows at startup is still the active one.

### Other error messages

If you get another error message (e.g. _"XML Parsing Error: undefined entity Location"_, _"Secure Connection Failed … uses an invalid security certificate"_), see [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

## No error message

If you click the Waterfox icon but no Waterfox window opens and no error message is shown, a simple first step is to restart your computer and then try again. If Waterfox still does not start, see the following sections.

### Waterfox will not start due to security software

- Outdated versions of Comodo Firewall or Comodo Antivirus security software (or a leftover file after Comodo was uninstalled) can cause Waterfox not to start with no error message. Update Comodo to the latest version, if you have it installed. If Comodo software is not installed, check if there's a file called IseGuard64.dll or IseGuard32.dll in your C:\Windows\system32\ folder or your system drive and, if so, manually delete the file.
- If you use certain versions of ZoneAlarm or other Internet security software that includes a "Virtual Browsing" feature, it can prevent Waterfox from starting. Check virtualization settings and clear the virtual cache, if your Internet security software includes this feature, or visit the software provider's support site for more help.
- Waterfox may fail to start for some Windows users after updating, if AVG or AVAST antivirus is installed. For details, see [this Techdows article](https://techdows.com/2019/07/waterfox-reportedly-freezing-on-startup-with-avast-or-avg-installed.html).

### Waterfox will not start after installing add-ons

If Waterfox previously worked but stopped after you installed extensions or themes, see [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

### Waterfox previously worked

If Waterfox previously worked but suddenly doesn't start, it may be due to some corrupt data in your settings. Uninstalling and reinstalling Waterfox would not fix this problem because your settings are not removed on uninstall.

To test to see if this is the problem, use the [Profile Manager](/support/profile-manager-create-remove-switch-waterfox-profiles) to create a new profile. If the problem goes away, you can then [move your bookmarks and other important settings into the new profile](/support/recovering-important-data-from-an-old-profile).

**_Based on information from [Browser will not start up (mozillaZine KB)](http://kb.mozillazine.org/Browser_will_not_start_up)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox won’t start - find solutions](https://support.mozilla.org/en-US/kb/firefox-wont-start-find-solutions). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-wont-start-find-solutions#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
