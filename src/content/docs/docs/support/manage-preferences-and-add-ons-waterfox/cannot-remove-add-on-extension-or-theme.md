---
slug: support/cannot-remove-add-on-extension-or-theme
title: "Cannot remove an add-on (extension or theme)"
---

This article describes how to uninstall an [extension](/support/find-and-install-add-ons-add-features-to-waterfox) or [theme](/support/use-themes-change-look-of-waterfox) that can't be removed by following the instructions in [Disable or remove Add-ons](/support/disable-or-remove-add-ons) or [Remove a toolbar that has taken over your Waterfox search or home page](/support/remove-toolbar-has-taken-over-your-waterfox-search).

:::note
The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.
:::

## Uninstalling add-ons from Waterfox Troubleshoot Mode

If you can't access the Add-ons Manager or if the option to remove a certain add-on is disabled, you may need to uninstall it from Waterfox [Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode).

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help, select Troubleshoot Mode… and click Restart in the _Restart Waterfox in Troubleshoot Mode?_ dialog.

:::note
You can also start Waterfox in Troubleshoot Mode by holding down the Shift key while starting Waterfox. 2. In the Waterfox Troubleshoot Mode dialog, click Open.
:::

Once Waterfox has started in Troubleshoot Mode, try removing the add-on again and then restarting Waterfox.

## Uninstalling add-ons from the Windows Control Panel

Some add-ons are installed by other programs. You may be able to remove the add-on from the Windows [Control Panel](https://support.microsoft.com/help/13764/windows-where-is-control-panel) or Settings page.

- See Microsoft's article, [Windows 7 – How to properly uninstall programs](https://support.microsoft.com/en-us/help/2601726).

- See [this Microsoft Community post](https://answers.microsoft.com/en-us/windows/forum/windows_8-files/how-do-i-delete-or-uninstall-a-program-in-windows/a4cbeb29-2ca3-46f0-855f-ba5e8df2436c) for more help.

- See Microsoft's article, [Repair or remove programs in Windows 10](https://support.microsoft.com/en-us/help/4028054/windows-10-repair-or-remove-programs).

## Managing extensions installed by other software

Sometimes installing or updating other software will add an extension that can't be removed from within the Add-ons Manager because the option to remove it is disabled or not functional.

The software that added the Waterfox extension may include an option to remove it. You should visit the support site of the software provider for more information. As an alternative, simply disable the extension in the Add-ons manager if you no longer wish to use it. To disable the extension, click the blue toggle.

![Facebook extension disable fx72](/assets/docs/2019-12-29-20-38-38-12a3bd.png)

## Uninstalling manually

If you can't remove an extension from Waterfox using the other methods described above, you can manually remove it. First navigate to the folder where extensions are installed:

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.

   :::note
   If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
   :::

2. Open the extensions folder inside your profile folder. Inside the extensions folder there are folders or XPI files for each extension and theme that you have installed.
3. To determine which folder or XPI file corresponds to the extension you want to uninstall, return to Waterfox and the Troubleshooting Information tab.
4. In the **Extensions** section, find the extension you want to remove and note the string in the **ID** column.
5. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
6. Delete the folder or XPI file that corresponds to the extension ID you noted above.

### Managing globally installed extensions

In rare cases, extensions are installed globally into the Waterfox installation folder or using the [Windows registry](https://extensionworkshop.com/documentation/enterprise/enterprise-distribution/#installation-using-windows-registry). See [this article on Extension Workshop](https://extensionworkshop.com/documentation/publish/distribute-sideloading/) for more information. Follow these steps to remove a globally installed extension:

1. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
2. To find the sideloading directory, go to the C:\Users\{user name}\AppData\Roaming\Waterfox\ folder and open the Extensions\{ec8030f7-c20a-464f-9b0e-13a3a9e97384} folder.
3. Follow the steps above to locate and delete the appropriate folder or XPI file.

**_Based on information from [Uninstalling add-ons (mozillaZine KB)](http://kb.mozillazine.org/Uninstalling_add-ons)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Cannot remove an add-on (extension or theme)](https://support.mozilla.org/en-US/kb/cannot-remove-add-on-extension-or-theme). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/cannot-remove-add-on-extension-or-theme#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
