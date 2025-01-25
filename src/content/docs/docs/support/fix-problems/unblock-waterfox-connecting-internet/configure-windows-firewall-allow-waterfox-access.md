---
slug: /support/configure-windows-firewall-allow-waterfox-access
title: "Configure Windows Firewall to allow Waterfox access to the Internet"
---

Windows provides a built-in firewall, which controls how programs access the Internet. If Windows Firewall doesn't permit Waterfox to make connections, Waterfox generates a "_Server not found_" error when you try to browse to websites.

:::note
Steps for Windows 11 may differ.
:::

## Checking for Windows 10 Firewall

To see if you're running Windows Firewall:

1. Right-click the Windows icon. A menu will appear.
2. Select **Control Panel** from the menu. The Control Panel will appear.
3. In the Control Panel, select **System and Security**.
4. In System and Security, select **Windows Firewall**.

## Configuring Windows 10 Firewall

If you're running Windows Firewall and having connection problems in Waterfox:

1. On the left side of the Windows Firewall panel, click **Allow an app or feature through Windows Firewall**. The Allowed apps panel will appear.
2. Click the Change Settings button.
3. Find **Waterfox** in the list of programs. If it is there, click to select it. If not, skip the next step.
4. With **Waterfox** (or **waterfox.exe**) selected, click the Remove button. Confirm that you want to remove the entry.
5. Click the Allow another app button. The Add a Program window will appear.
6. In the Add an app window, click the Browse button.
7. Navigate to the Waterfox program directory (e.g. C:\Program Files\Waterfox\) and double-click on **waterfox**.exe.
8. Click the Add button.
9. Click the OK button to close the Allowed apps panel.

## Checking for Windows 8 Firewall

To see if you're running Windows Firewall:

1. From the Start Screen, click the **Desktop** tile. The Desktop view will open.
2. From the Desktop, hover in the lower right-hand corner to access the Charms.
3. Select Control Panel from the Settings charm. The Control Panel window will open.

4. Click on **System and Security**. The System and Security Panel will appear.

5. Click on **Windows Firewall**. The Windows Firewall panel will appear.

6. If you see a green check mark, you are running Windows Firewall.

## Configuring Windows 8 Firewall

If you're running Windows Firewall and having connection problems in Waterfox:

1. On the left side of the Windows Firewall panel, click **Allow a program or feature through Windows Firewall**. The Allowed Programs panel will appear.
2. Click the Change Settings button.
3. Find **Waterfox** in the list of programs. If it is there, click to select it. If not, skip the next step.
4. With **Waterfox** (or **waterfox.exe**) selected, click the Remove button. Confirm that you want to remove the entry.
5. Click the Allow another program... button. The Add a Program window will appear.
6. In the Add a Program window, click the Browse... button.
7. Navigate to the Waterfox program directory (e.g. C:\Program Files\Waterfox\) and double-click on **waterfox**.exe.
8. Click the Add button.
9. Click the OK button to close the Allowed Programs panel.

## Windows 7

### Checking for Windows 7 Firewall

To see if you're running Windows Firewall:

1. Click the Windows icon, and select Control Panel. The Control Panel window will appear.

2. Click on **System and Security**. The System and Security Panel will appear.

3. Click on **Windows Firewall**. The Windows Firewall panel will appear.

4. If you see a green check mark, you are running Windows Firewall.

### Configuring Windows 7 Firewall

If you're running Windows Firewall and having connection problems in Waterfox:

1. On the left side of the Windows Firewall panel, click **Allow a program or feature through Windows Firewall**. The Allowed Programs panel will appear.
2. Click the Change Settings button.
3. Find **Waterfox** in the list of programs. If it is there, click to select it. If not, skip the next step.
4. With **Waterfox** (or **waterfox.exe**) selected, click the Remove button. Confirm that you want to remove the entry.
5. Click the Allow another program... button. The Add a Program window will appear.
6. In the Add a Program window, click the Browse... button.
7. Navigate to the Waterfox program directory (e.g. C:\Program Files\Waterfox\) and double-click on **waterfox**.exe.
8. Click the Add button.
9. Click the OK button to close the Allowed Programs panel.

## Windows Vista

### Checking for Windows Vista Firewall

To see if you're running Windows Firewall:

1. Click the Windows icon, and select Control Panel. The Control Panel window will appear.
2. Click on the **System** header. The Security Panel will appear.
3. Click on the **Windows Firewall** header. The Windows Firewall panel will appear.
4. If you see a green check mark and the message **Windows Firewall is helping to protect your computer**, you are running Windows Firewall.

### Configuring Windows Vista Firewall

If you're running Windows Firewall and having connection problems in Waterfox:

1. On the left side of the Windows Firewall panel, click **Allow a program or feature through Windows Firewall**. The Windows Firewall Settings window will appear.
2. Find **Waterfox** (or **waterfox.exe**) in the list of programs. If it is there, click to select it. If not, skip the next step.
3. With **Waterfox** selected, click the Delete button. Confirm that you want to delete the entry.
4. Click the Add program... button. The Add a Program window will appear.
5. In the Add a Program window, click the Browse... button.
6. Navigate to the Waterfox program directory (e.g. C:\Program Files\Waterfox\) and double-click on **waterfox**.exe.
7. Click the OK button to close the Add a Program window.
8. In the Windows Firewall Settings window, click to select the **General** tab.
9. Ensure that **Block all incoming connections** is not selected.
10. Click the OK button to close the Windows Firewall Settings window.

## Checking for Windows XP Firewall

To see if you're running Windows Firewall:

1. Click on the Windows Start button, and select Control Panel. The Control panel window will appear.

2. Click on the **Security Center** link. The Security Center will appear.

3. If the **Firewall** header says **ON**, you are running Windows Firewall.

## Configuring Windows XP Firewall

If you're running Windows Firewall and having connection problems in Waterfox:

1. [Check Windows Firewall is ON](#checking-for-windows-xp-firewall).
2. In the Security Center, click Windows Firewall. The Windows Firewall window will open.
3. Select the **Exceptions** tab.
4. Find **Waterfox** (or **waterfox.exe**) in the list of programs. If it is there, click to select it. If not, skip the next step.
5. With **Waterfox** selected, click the Delete button. Confirm that you want to delete the entry.
6. Click the Add Program... button.
7. In the Add a Program window, click the Browse... button.
8. Navigate to the Waterfox program directory (e.g. C:\Program Files\Waterfox\) and double-click on **waterfox**.exe.
9. Click the OK button to close the Add a Program window. 10. Click the OK button to close the Windows Firewall Settings window.

**_Based on information from [Firewalls (mozillaZine KB)](http://kb.mozillazine.org/Firewalls)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Configure Windows Firewall to allow Firefox access to the Internet](https://support.mozilla.org/en-US/kb/configure-windows-firewall-allow-firefox-access). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/configure-windows-firewall-allow-firefox-access#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
