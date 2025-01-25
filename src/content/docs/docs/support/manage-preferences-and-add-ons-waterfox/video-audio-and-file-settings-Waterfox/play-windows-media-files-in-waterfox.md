---
slug: /support/play-windows-media-files-in-waterfox
title: "Play Windows Media files in Waterfox with the Windows Media plugin"
---

Support ended for all [NPAPI plugins](https://wikipedia.org/wiki/NPAPI#Plugins), except for Adobe Flash, in [Waterfox version](/support/find-what-version-waterfox-you-are-using) 52. See [this article](/support/npapi-plugins) for details.

If you've come to this article from a link on the Babylon toolbar and you'd like to get rid of it, see the [How to remove the Babylon toolbar, home page and search engine](/support/remove-babylon-toolbar-home-page-and-search-engine) article for instructions.
To play Windows Media in Waterfox, you need the Windows Media Player browser plugin installed. There are two different versions:

- The original, which is usually included with Windows up until XP.
- The new version, specifically developed for Windows XP and above, which is only available by download.

This article describes how to check for and install the Windows Media Player Waterfox plugin. Many Windows XP users will have the old plugin but it is recommended that you install the new plugin, anyway.Even if you have Windows Media Player installed, you may still be missing the plugin required to play back Windows Media audio and video content in web pages.

:::note
The [64-bit version of Waterfox](/support/how-do-i-tell-if-32-bit-or-64-bit) does not recognize or support this plugin.
:::

## Checking if the plugin is installed

**Important:** The Windows Media plugin is now disabled by default and doesn't show up in the Add-ons manager. Please see [these instructions for turning it back on](/support/windows-media-or-other-plugins-stopped-working).
To see if you already have the plugin installed:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Plugins.
2. Scroll down the list, and look for the entry called:
   **Microsoft® Windows Media Player Waterfox Plugin**
   np-mswmp.dll

   - If the entry is present, then the plugin is installed.
   - If the entry is missing, proceed to the _Installing the plugin_ section.

## Installing the plugin

1. Go to the [plugin download page on Interoperability Bridges](http://www.interoperabilitybridges.com/windows-media-player-waterfox-plugin-download).
   - The Interoperability Bridges page also contains more detailed installation instructions.
2. Click "**Download Now**" and you will be prompted to save a file.
3. Save the file to your desktop.
4. Once it has downloaded, run it, and the plugin will install.
5. When the installation has finished, close Waterfox:
   - Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
6. When Waterfox has completely closed, start Waterfox up again.
7. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
8. Search for **plugins.load_appdir_plugins**.
9. Double-click plugins.load_appdir_plugins to change its value to **true**.
10. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
    When you restart Waterfox the plugins will be enabled.

## Testing the plugin

The following link opens a test page that requires the Windows Media Player plugin. If the player loads and plays, then the plugin is installed correctly:

- [Windows Media test](http://www.vdat.com/techsupport/windowstest.asp)

## Enabling or disabling the plugin

You can disable or enable the Windows Media Player plugin in the Waterfox Add-ons Manager.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Plugins.
2. In the list of plugins, select the Windows Media Player plugin.
   - If you want to disable the plugin, select Never Activate in its drop-down menu.
   - If you want to re-enable the plugin, select Always Activate in its drop-down menu.

If the plugin is disabled, pages with embedded Windows Media such as the "Windows Media test" linked above will not work and, if you download a Windows Media file, Waterfox may ask you what to do with the file instead of automatically opening it in Waterfox.

## Links to media files

The Windows Media formats handled by the plugin include asf, asx, wm, wma, wax, wmp, wmv, and wvx. When you click on a link to download a Windows Media file and the plugin is enabled, it will open automatically in Waterfox using the plugin. If you do not want this to happen, you can select a different download action in your Waterfox Application settings for Windows Media files. For more information, see [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file).

## Troubleshooting

If you are having problems with Windows Media content, see [Fix common audio and video issues](/support/fix-common-audio-and-video-issues).

**_Based on information from [Windows Media Player (mozillaZine KB)](http://kb.mozillazine.org/Windows_Media_Player)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Play Windows Media files in Firefox with the Windows Media plugin](https://support.mozilla.org/en-US/kb/play-windows-media-files-in-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/play-windows-media-files-in-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
