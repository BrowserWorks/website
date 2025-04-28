---
slug: support/recover-lost-or-missing-bookmarks
title: "Recover lost or missing Bookmarks"
---

If your bookmarks have suddenly disappeared, don't worry - you should be able to recover them. This article explains how to get back your bookmarks if they disappeared unexpectedly.

- If you are able to add, delete, and edit your bookmarks but the changes are lost when you restart Waterfox, see [Can't add, change or save bookmarks - How to fix](/support/cant-add-change-or-save-bookmarks).

## I can see only the default set of bookmarks in the Bookmarks folder

Your bookmarks are associated with the Waterfox [profile](/support/profiles-where-waterfox-stores-user-data) you are using. There may be instances when you or Waterfox creates a new profile containing the default set of bookmarks (for example, if you make a [separate installation of Waterfox](/support/dedicated-profiles-waterfox-installation) or when you [downgrade Waterfox](/support/install-older-version-waterfox)). A new profile may give you the impression that you have lost your bookmarks.

### Determine if Waterfox has created a new profile

To see if another profile exists, type **about:profiles** into the Waterfox address bar and press the Enter key. This will open the _About Profiles_ page, which will list at least one profile and could list many. The profile that Waterfox is currently using will show: **This is the profile in use and it cannot be deleted.** If you have another profile listed, you can launch that profile in a new Waterfox browser window to see if it contains your lost bookmarks. See [Recover user data missing after Waterfox update](/support/recover-user-data-missing-after-waterfox-update) for more information.

## My Bookmarks Toolbar is missing

If you were using the Bookmarks Toolbar for quick access to your favorite bookmarks and the toolbar is now missing, you may have turned off the option to display the Bookmarks Toolbar. To turn it back on:

- Right-click on an empty section of the navigation bar and select Bookmarks Toolbar in the pop-up menu.

For more information, see the [Bookmarks Toolbar - Display your favorite websites at the top of the Waterfox window](/support/bookmarks-toolbar-display-favorite-websites) article.

## I can't find all of my bookmarks and folders

You can view all of your bookmarks and folders when you click the Bookmarks menu item in the Waterfox Menu bar, if you [enable the Menu bar](/support/restore-menu-bar-waterfox). You can also add a Bookmarks menu button to your Waterfox toolbar.

Follow these steps to add a Bookmarks Menu toolbar button that shows all of your bookmarks and folders:

1. Click on the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, then click Customize….
2. Drag the Bookmarks Menu button <img alt="bookmark menu icon (star on tray)" class="inline-image" src="/assets/docs/icons/bookmark-star-on-tray.svg" /> from the Customize Waterfox tab onto the toolbar.

## My bookmarks have disappeared

Waterfox automatically backs up your bookmarks and saves up to 15 backups in the [profile](/support/profiles-where-waterfox-stores-user-data) bookmarkbackups folder. To recover bookmarks that were previously saved in the Bookmarks menu or on the Bookmarks toolbar but are now missing, you can restore them from one of these backups:

1. Click the Library <img alt="library icon" class="inline-image" src="/assets/docs/icons/library.svg" /> button on your toolbar. (If you don't see it, click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button, then click Library.)
   Click Bookmarks and then click the **Show All Bookmarks** bar at the bottom.
2. In the Library window, click the Import and Backup button and then select Restore.
3. Select the backup you want to restore from the list of dated automatic backups.
   - You can also select Choose File… to restore bookmarks from a [manual backup](/support/restore-bookmarks-from-backup-or-move-them#manual-backup), if you created one.
4. After confirming your choice, the bookmarks from the backup you selected will be restored.

For more information, see [Restore bookmarks from backup or move them to another computer](/support/restore-bookmarks-from-backup-or-move-them).

### There is an "Old Waterfox Data" folder on my desktop

In some cases, Waterfox may create a folder on your desktop called "Old Waterfox Data". This folder contains a complete backup of your Waterfox [profile](/support/profiles-where-waterfox-stores-user-data) and can be used to restore bookmarks and other missing information. If you have this folder on your desktop, see [Recovering important data from an old profile](/support/recovering-important-data-from-an-old-profile).

## No bookmarks are visible after installing an add-on

If you have restarted Waterfox after installing an add-on and your bookmarks are gone, it's possible that Waterfox did not close properly before restarting itself. To recover your bookmarks, restart your computer.

## I can't find my bookmarks after importing them

If you [imported your bookmarks from another browser](/support/import-data-another-browser), you can find them inside a specially-named folder, for example, **From Google Chrome** or **From Microsoft Edge** depending on the browser, in one of these locations:

- At the end of the Waterfox [Bookmarks Toolbar](/support/bookmarks-toolbar-display-favorite-websites).
- At the bottom of the Bookmarks list accessible from the Bookmarks Menu <img alt="bookmark menu icon (star on tray)" class="inline-image" src="/assets/docs/icons/bookmark-star-on-tray.svg" /> toolbar button.
- In the Bookmarks Library. To open the Bookmarks Library window: Click the Library <img alt="library icon" class="inline-image" src="/assets/docs/icons/library.svg" /> button on your toolbar. (If you don't see it, click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button, then click Library.)
- Click Bookmarks and then click the **Show All Bookmarks** bar at the bottom.

If your source bookmarks were stored in a hierarchy of folders, the folder structure is preserved inside the specially-named folder. If desired, you can move your imported bookmarks to other folders. See [Bookmarks in Waterfox](/support/bookmarks-waterfox) to learn more about organizing your bookmarks.

**_Based on information from [Lost bookmarks (mozillaZine KB)](http://kb.mozillazine.org/Lost_bookmarks)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Recover lost or missing Bookmarks](https://support.mozilla.org/en-US/kb/recover-lost-or-missing-bookmarks). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/recover-lost-or-missing-bookmarks#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
