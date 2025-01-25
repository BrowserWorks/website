---
slug: /support/how-to-fix-preferences-wont-save
title: "How to fix preferences that won’t save"
---

Sometimes, your Waterfox preference settings may not be saved after you change them. For example, you may change a setting in your Waterfox Options, only to have it set back to its previous value the next time you open the Options panel.

The possible causes and solutions vary depending on whether you are unable to save a few specific preferences or if no preferences are saved at all. This article may also apply if, after updating Waterfox, a **Waterfox Updated** tab opens to a page stating _You’ve been updated to the latest version of Waterfox_ every time you start Waterfox.

## Refresh Waterfox to fix the problem

The easiest way to solve this problem is to restore Waterfox to its default state while saving your essential information. Besides resetting all preferences to default values, a Waterfox refresh will also fix many other issues, including problems caused by extensions or with data and settings that are stored in other files in your Waterfox [profile](/support/profiles-where-waterfox-stores-user-data). If you'd like to try a more precise fix, skip this section and try the solutions below.

:::note
When you refresh Waterfox, your bookmarks, browsing history, open tabs, windows, passwords, cookies and web form auto-fill information will be saved. However, your extensions and themes will be removed and your preferences will be reset. [Learn more.](/support/refresh-waterfox-reset-add-ons-and-settings)
:::

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information.
2. Click Refresh Waterfox… then Refresh Waterfox in the confirmation window that opens. Waterfox will close to refresh itself.
3. When finished, a window will list your imported information. Click the Finish button. Waterfox will open.

:::note
There's a Refresh Waterfox button in the Waterfox [Safe Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) window, if you can't start Waterfox normally. You can also do a manual refresh by [creating a new profile and transferring your important data to the new profile](/support/recovering-important-data-from-an-old-profile#create-a-new-waterfox-profile).
:::

## Specific preferences are not saving

If a specific setting in Waterfox keeps resetting or you are unable to change a single setting but other settings save correctly, you may have one of the following issues.

### Third-party programs changing Waterfox settings

Some programs force Waterfox to use certain settings. Below is a list of programs known to do this and actions you can take to make them stop forcing Waterfox settings:

- Creative ZenCast changes Waterfox's user agent, interfering with Java.
  - Uninstall the program.
- McAfee Privacy Service turns Waterfox's pop-up blocker off.
  - See [Pop-up blocker settings, exceptions and troubleshooting](/support/pop-blocker-settings-exceptions-troubleshooting).
- Norton 360 includes a "Waterfox Privacy Cleanup" feature that, if enabled, overrides your Waterfox Privacy settings and prevents you from keeping your Browsing History, Cookies or other private data between sessions.

Some third-party toolbars and add-ons change Waterfox's home page and search settings. You can quickly reset these with the [SearchReset add-on](https://addons.mozilla.org/firefox/addon/searchreset/).

- See [Remove a toolbar that has taken over your Waterfox search or home page](/support/remove-toolbar-has-taken-over-your-waterfox-search) for more information.

### User.js file overriding Waterfox settings

If you don't have any of the above programs installed, or if you followed the suggestions and certain settings change back each time you start Waterfox, you may have to edit Waterfox's configuration files yourself. Don't panic, it's pretty easy. Here's how to do it.

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Open the file user.js with a text editor (like Notepad).
   - If there is no user.js file, these steps won't help you.
4. Remove the lines for the user preferences you want to be able to change. You can delete all the lines if you want to be able to change everything.
5. Save the file and close the text editor.

You should now be able to change your Waterfox settings.

### Waterfox program file locks or prevents changes to certain settings

Your installation of Waterfox may have been customized to add a program configuration file that locks certain settings or prevents certain changes from being saved. Follow the **Reinstall Waterfox** step in the [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems) article to remove the Waterfox program from your computer and then reinstall a new copy of Waterfox. (Reinstalling Waterfox this way will not remove your [user data and settings](/support/profiles-where-waterfox-stores-user-data), since those are saved in a separate location from the program files.)

## Unable to save any preferences or settings

If none of your settings will save, if you get the **Waterfox Updated** tab every time you start Waterfox, or if you have tried the steps above with no effect, the file which Waterfox uses to save your preferences may be locked or corrupted.

### Locked preferences file

Waterfox may be unable to save your settings if the prefs.js file (or the prefs.js.moztmp file, if it exists) is write-protected or there are other prefs backup files.

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Locate the prefs.js file (and, if present, the prefs.js.moztmp file).
4. Right click on each file in turn and select Properties from the context menu. Check that under **Attributes**, there is no check in the box next to **Read Only** for either file.
   - If RealPlayer is open, that may be locking the prefs.js file. Closing RealPlayer should unlock it.
5. Delete any prefs-_n_.js files where _n_ is a number (e.g. prefs-2.js).
6. Delete Invalidprefs.js if it exists.
7. Restart Waterfox. You should now be able to save preferences.

### Corrupt preferences file

The preferences file may be corrupt, preventing Waterfox from writing to it. If you delete this file, Waterfox will automatically create another one when it needs to. Here's how to delete the prefs.js file.

**_This will remove all your custom settings and settings for many extensions._**

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Locate the prefs.js file (and, if present, the prefs.js.moztmp file).
4. Delete those files and any prefs-_n_.js files where _n_ is a number (e.g. prefs-2.js).
5. Delete Invalidprefs.js if it exists.
6. Restart Waterfox. You should now have all your preferences reset.

### Other solutions

- Your problem might also be due to malware. See [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware) for details.
- Some software, like Advanced SystemCare with Surfing Protection, can protect files in the Waterfox profile folder against changes. If you have such software then check the settings or uninstall this software.

**_Based on information from [Preferences not saved (mozillaZine KB)](http://kb.mozillazine.org/Preferences_not_saved)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How to fix preferences that won’t save](https://support.mozilla.org/en-US/kb/how-to-fix-preferences-wont-save). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/how-to-fix-preferences-wont-save#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
