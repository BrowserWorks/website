---
slug: /support/startup-home-page-tabs-download-settings
title: "Startup, home page, tabs, and download settings"
---

This article describes the settings that are available in the **General** panel of the Waterfox Options
page. The General panel allows you to:

- Set Waterfox to check if it is your default browser at startup and make Waterfox the default
- Set what page(s) Waterfox displays when you start your browser or click the Home icon
- Set what Waterfox should do when downloading files
- Manage your tabs settings

![Fx46-GeneralPanel](/assets/docs/2016-09-27-04-17-54-d872c6.png)

## Startup

- **Always check if Waterfox is your default browser**: Select this setting if you want Waterfox to check whether it is the default browser at startup. Making Waterfox your default browser will ensure Waterfox is used, whenever an application tries to display a web page.

  - If Waterfox is not currently your default browser, click Make Default to make it the default. See [Make Waterfox your default browser](/support/make-waterfox-your-default-browser) for details.

- **When Waterfox starts**: Controls what Waterfox displays when you open it.
  - **Show my home page** - Displays the home page, which is set below.
  - **Show a blank page** - Displays a blank page, which is fastest to load.
  - **Show my windows and tabs from last time** - Restores the pages you were visiting the last time you closed Waterfox. For more information, see [Restore previous session - Configure when Waterfox shows your most recent tabs and windows](/support/restore-previous-session).
- **Home page**:
  Controls what page(s) Waterfox displays when you click the Home icon on the [Navigation toolbar](/support/customize-waterfox-controls-buttons-and-toolbars). If you set **When Waterfox starts** (above) to **Show my home page**, the specified page(s) will load when Waterfox starts. For more information, see [How to set the home page](/support/how-to-set-the-home-page). **Important:** If your home page keeps automatically changing, see [How to remove the Babylon toolbar, home page and search engine](/support/remove-babylon-toolbar-home-page-and-search-engine) or [Remove a toolbar that has taken over your Waterfox search or home page](/support/remove-toolbar-has-taken-over-your-waterfox-search).

## Downloads

- **Save files to**:
  If selected, Waterfox will automatically save all downloads to the specified folder (such as the desktop or your downloads folder). To change which folder is used, click Browse….
- **Always ask me where to save files**:
  If selected, Waterfox will ask you to select a folder for every download you wish to save.

## Tabs

- **Open new windows in a new tab instead:** This option controls whether links from other applications or from web pages which request to open them in new windows are opened in a new window or a new tab in the most recent window.

:::note
If you have chosen to open pages in new tabs, Waterfox will ignore this option and will open a new window from a link if the page author specified that the new window should have a specific size, because some pages can only be displayed correctly at a specific size.
:::

- _(If applicable)_ **Warn me when closing multiple tabs**: This option is only shown if you disabled the warning dialog Waterfox displays to confirm your choice to close a window with multiple tabs (shown below). Check this option to re-enable the warning, to prevent accidentally closing the entire window when you only intend to close the current tab.

![Fx48Multiple tabs-ConfirmClose](/assets/docs/2016-08-06-17-14-11-d85eb9.png)
:::note
This setting has no effect on the warning when closing other tabs in a window.
:::

- _(If applicable)_ **Warn me when opening multiple tabs might slow down Waterfox**: This option is only shown if you disabled the warning dialog Waterfox displays to confirm your choice to open multiple tabs at once. Check this option to re-enable the warning, to prevent accidentally slowing down Waterfox while loading a large number of tabs.

- **Don't load tabs until selected**: Waterfox will only load the active tab when it starts or restores your previous session. This can make startup much faster if you are restoring many tabs. The other open tabs will be loaded as you click on them.

- **When I open a link in a new tab, switch to it immediately**: When you middle-click on a Web link (or hold down Ctrl while clicking with the left mouse button), the page will be opened in a new tab. That page will not be displayed and will load in a background tab. Check this option to load and display the page in a new foreground tab instead.

- **Show tab previews in the Windows taskbar**: When you move your pointer over the Waterfox icon in the Windows taskbar, Windows will show you a preview of the Waterfox window. With this option check marked, Windows will show you a separate preview for each tab.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Startup, home page, tabs, and download settings](https://support.mozilla.org/en-US/kb/startup-home-page-tabs-download-settings). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/startup-home-page-tabs-download-settings#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
