---
slug: /support/update-failed-error-message-when-updating
title: "How to fix the Update Failed error message when updating Waterfox"
---

Waterfox includes a Software Update feature that automatically checks for updates and prompts you to install them when necessary.

- For more information about the Software Update feature, see [Update Waterfox to the latest release](/support/update-waterfox-latest-release).

Sometimes, the updater fails and displays an **Update Failed** error message. This article presents possible solutions and workarounds to get Waterfox updated.

## Manual update

One solution is to update Waterfox by manually downloading and installing the new version over top of your current version. See [How to install Waterfox on Windows](/support/how-install-waterfox-windows) for instructions.

## Check for updates after restarting the computer

It's possible that another running program or a previous instance of Waterfox that did not close properly is interfering with the Waterfox update process. This error can also occur if you share your computer with other users, and another user's account is still logged in with Waterfox running. The easiest way to resolve such problems is to restart your computer. Once the computer starts up again:

1. Start Waterfox.
2. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and click ![Fx57Help](/assets/docs/2018-04-30-13-36-30-8d298a.png)Help.
3. Select About Waterfox. Waterfox will begin checking for updates.

## Close other running programs

Some programs that can interfere with Waterfox are set to start up automatically when you start your computer. Before updating Waterfox, try closing or disabling such programs; for example, Spybot TeaTimer and Logitech QuickCam software have been known to interfere with Waterfox updates.

## Run as Administrator

If you are using Windows 7 or Vista:

1. Restart the computer so that no Waterfox processes are active.
2. Open the Windows Start Menu, type _firefox_ and right-click on the "Waterfox" entry that appears.
3. Select Run as Administrator and Continue if the User Account Control dialog comes up.

If the issue is not resolved, close Waterfox and restart the computer again but this time, open the program folder where Waterfox is installed (e.g., open the C:\Program Files\Waterfox folder or, on 64-bit windows, the C:\Program Files (x86)\Waterfox folder), right-click on the **waterfox** or **waterfox.exe** file icon and select Run as Administrator.

**Still can't update Waterfox?** If you're using a school or work computer, IT admins may lock updates to a specific version to prevent users from updating the application. As a result, when users try to manually update Waterfox to a newer version, they won't see any updates available or they'll see the message that they're already running the latest version as set by their IT admin.

**_Based on information from [Software Update (mozillaZine KB)](http://kb.mozillazine.org/Software_Update#Software_Update_not_working_properly)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How to fix the Update Failed error message when updating Firefox](https://support.mozilla.org/en-US/kb/update-failed-error-message-when-updating). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/update-failed-error-message-when-updating#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
