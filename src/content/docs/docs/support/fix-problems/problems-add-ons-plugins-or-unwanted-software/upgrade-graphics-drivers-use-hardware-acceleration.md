---
slug: support/upgrade-graphics-drivers-use-hardware-acceleration
title: "Upgrade your graphics drivers to use hardware acceleration and WebGL"
---

Waterfox and some plugins use your graphics card to help speed up the display of web content. Graphic cards are also used by advanced web features like WebGL. To fix problems with these features or to take advantage of them, you may need to update your graphics card drivers. This article describes how to do that.

## Search for and install new graphics drivers

### Using Windows Update

Some recent graphics driver versions are made available from the Windows Update feature.

1. Click ![XP Start button](/assets/docs/2014-11-16-00-11-41-b9f0dc.png), select All programs, then select Windows Update to open the Windows Update website.
2. Update ActiveX controls if prompted.
3. Click Custom and wait until it is done searching.
4. Select "Hardware, Optional" on the left pane.
5. Search updates with your graphics card manufacturer name (probably Intel, AMD/ATI or NVIDIA) in the title.
6. If you find some, check the latest one and click "Review and install updates".
7. Click Install Updates.
8. Wait until update is installed. When prompted, restart your computer.
9. Start Waterfox.

10. Click ![Small Vista Logo](/assets/docs/2011-03-11-06-47-48-e19495.jpg), select All programs, then select Windows Update to open the Windows Update window.
11. Click the "Check for updates" link on the left pane and wait until it is done searching.
12. If there are optional updates available, click "optional updates are available".

**Windows Vista:**
The View available updates panel will open. Click "Optional".

**Windows 7:**
The Select updates you want to install panel will open.

1. Search updates with your graphics card manufacturer name (probably Intel, AMD/ATI or NVIDIA) in the title.
2. If you find some, check the latest one and click OK to close the View available updates panel.
3. Click Install updates.
4. Wait until update is installed. When prompted, restart your computer.
5. Start Waterfox.

6. From the Start Screen, click the Desktop tile. The Desktop view will open.
7. From the Desktop, hover in the lower right-hand corner to access the Charms.
8. Select Control Panel from the Settings charm. The Control Panel window will open.
9. In the Control Panel window, select System and Security.
10. Select Windows Update to open the Windows Update window.
11. Click the "Check for updates" link on the left pane and wait until it is done searching.
12. If there are optional updates available, click "optional updates are available". The Select updates you want to install panel will open.
13. Search updates with your graphics card manufacturer name (probably Intel, AMD/ATI or NVIDIA) in the title.
14. If you find some, check the latest one and click Install to close the View available updates panel.
15. Wait until update is installed. When prompted, restart your computer.
16. Start Waterfox.

In Windows 10, all drivers are automatically downloaded and installed through Windows Update but you can manually search for an updated graphics driver. See Microsoft's support article, [Update drivers in Windows 10](https://support.microsoft.com/en-us/help/4028443/windows-update-drivers-in-windows-10) for details.
If there are no updates available or if the updates don't solve your problems, continue to the next section.

### Using your computer manufacturer's system update tool

Some computer manufacturers include a system update tool that updates drivers and bypasses the Windows ones. You may be required to use this tool to update graphics drivers.

Just search for this tool from the Start menu. Some possible search terms are the name of your computer manufacturer (such as Dell or HP) or generic terms like "update", "maintenance" or "driver". Open the tool and apply all available updates.

If there is no update tool, no updates available, or if the updates don't solve your problems, continue to the next section.

### Using the latest generic graphics drivers

You can also install a generic graphics driver from your graphics card manufacturer's website. These are usually kept up-to-date and are designed to work on a variety of systems:

- [Intel](http://www.intel.com/p/en_US/support/detect/graphics)
- [AMD/ATI](http://support.amd.com/en-us/download)
- [NVIDIA](http://www.nvidia.com/Download/index.aspx)

If you don't know which graphics card you have, look in the graphics section of Waterfox's _about:support_ [Troubleshooting Information page](/support/use-troubleshooting-information-page-fix-waterfox).

:::note
Hardware acceleration is not available for graphics cards from other manufacturers.
:::

:::note
After downloading the graphics driver, the installation wizard may prevent you from installing it because your current driver is customized by your computer manufacturer.
:::

:::caution
With some combinations of computer and graphics card, you may experience problems with generic versions of software drivers.
:::

## After upgrading your graphics driver

Reboot your computer to use the new graphics driver.

## I still have problems with my graphics card in Waterfox

Unfortunately, due to the wide range of possible driver, video card and operating system combinations, hardware acceleration or 3D web graphics (WebGL) may still not work for you in Waterfox. In these instances you fix the problems by disabling hardware acceleration and WebGL.

### Turning off hardware acceleration

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Under **Performance**, uncheck Use recommended performance settings.
   Additional settings will be displayed.
   ![Fx55Performance-disableHWA](/assets/docs/2017-08-27-03-46-52-fd0019.png)
4. Uncheck Use hardware acceleration when available.
5. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
6. Start Waterfox the way you normally do.

### Disabling WebGL

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Enter **webgl.disabled** in the search box.
3. Click the _Toggle_ <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> button next to the webgl.disabled preference to switch it to true.
4. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
5. Start Waterfox normally.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Upgrade your graphics drivers to use hardware acceleration and WebGL](https://support.mozilla.org/en-US/kb/upgrade-graphics-drivers-use-hardware-acceleration). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/upgrade-graphics-drivers-use-hardware-acceleration#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
