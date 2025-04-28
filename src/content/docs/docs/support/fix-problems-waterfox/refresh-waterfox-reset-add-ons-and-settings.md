---
slug: support/refresh-waterfox-reset-add-ons-and-settings
title: "Refresh Waterfox - reset add-ons and settings"
---

This feature is available on Waterfox for desktop or laptop computers.
If you're having problems with Waterfox, refreshing may help by restoring the browser to its default state while saving your essential information, like bookmarks and passwords.

**Important:** A Waterfox refresh removes add-ons and other customizations, such as [extensions](/support/find-and-install-add-ons-add-features-to-waterfox#what-types-of-add-ons-can-i-install), extension data, and [preference configurations](/support/about-config-editor-waterfox). If you've made accessibility customizations to Waterfox, you may need to add them back after refreshing. Consider using [Waterfox Safe Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) to diagnose issues before you refresh Waterfox.

## Refresh Waterfox

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information.
2. Click Refresh Waterfox… then Refresh Waterfox in the confirmation window that opens. Waterfox will close to refresh itself.
3. When finished, a window will list your imported information. Click the Finish button. Waterfox will open.

:::note
There's a Refresh Waterfox button in the Waterfox [Safe Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) window, if you can't start Waterfox normally. You can also do a manual refresh by [creating a new profile and transferring your important data to the new profile](/support/recovering-important-data-from-an-old-profile#create-a-new-waterfox-profile).
:::

## What does the refresh feature do?

Waterfox stores all your settings and personal information in a [profile folder](/support/profiles-where-waterfox-stores-user-data). The refresh feature creates a new profile folder and saves your important data.

The refresh feature removes add-ons normally stored inside the Waterfox profile folder (such as [extensions](https://addons.mozilla.org/firefox/extensions/) and [themes](/support/use-themes-change-look-of-waterfox)). Add-ons stored in other locations are not removed (although any modified preferences are reset).

### Waterfox will save these items:

- Bookmarks
- Browsing and download history
- Passwords
- Cookies
- Web form auto-fill information
- Personal dictionary

### These items and settings will be removed:

- [Extensions and themes](/support/find-and-install-add-ons-add-features-to-waterfox)
- Website permissions
- Modified preferences
- [Added search engines](/support/add-or-remove-search-engine-waterfox#add-a-search-engine)
- DOM storage
- [Security certificate](/support/secure-website-certificate) and device settings
- [Download actions](/support/change-waterfox-behavior-when-open-file)
- [Toolbar customizations](/support/customize-waterfox-controls-buttons-and-toolbars)
- User styles (chrome subfolder containing userChrome and/or userContent [CSS files](https://wikipedia.org/wiki/Cascading_Style_Sheets), if previously created.)

:::note
The refresh will place your old Waterfox profile on your desktop in a folder named “Old Waterfox Data”. If your problem persists, you can partially restore lost information by [copying files to the newly created profile](/support/recovering-important-data-from-an-old-profile#copying-files-between-profile-folders). If you no longer need this folder, delete it because it contains sensitive information.
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Refresh Firefox - reset add-ons and settings](https://support.mozilla.org/en-US/kb/refresh-firefox-reset-add-ons-and-settings). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/refresh-firefox-reset-add-ons-and-settings#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
