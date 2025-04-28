---
slug: support/back-and-restore-information-waterfox-profiles
title: "Back up and restore information in Waterfox profiles"
---

Waterfox stores your personal data, such as bookmarks, passwords, and extensions, in a **[profile](/support/profiles-where-waterfox-stores-user-data) folder** on your computer, in a location separate from the Waterfox program. This article explains how to back up your profile, restore it, or move your profile to a new location or computer.

:::note
[The Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) creates an **Old Waterfox Data** folder on your desktop, which contains a backup of your old profile folder and its contents. If you recently refreshed Waterfox and still have this folder, you already have a complete profile backup.
:::

- To restore or move selected information instead of the entire profile, see [Recovering important data from an old profile](/support/recovering-important-data-from-an-old-profile).
- **Just Bookmarks?** For backing up, restoring, or moving your bookmarks (not other data), see [Restore bookmarks from backup or move them to another computer](/support/restore-bookmarks-from-backup-or-move-them).

## Locate your profile folder

- Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
- Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.

:::note
If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
:::

## Backing up your profile

To back up your profile, first close Waterfox if it is open and then copy the profile folder to another location.

1. Locate your profile folder, as explained above.
2. Close Waterfox (if open): Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Go to one level above your profile's folder, i.e. to %APPDATA%\Waterfox\Waterfox\Profiles\
4. Right-click on your profile folder (e.g. xxxxxxxx.default), and select Copy.
5. Right-click the backup location (e.g. a USB-stick or a blank CD-RW disc), and select Paste.

## Restoring a profile backup

1. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
2. If your existing profile folder and profile backup folder have the same name, simply replace the existing profile folder with the profile backup, then start Waterfox. **Important:** The profile folder names must match exactly for this to work, including the random string of 8 characters. If the names do not match or if you are restoring a backup to a different location, follow the steps below.

### Restoring to a different location

If the profile folder names do not match or if you want to move or restore a profile to a different location, do the following:

1. Completely close Waterfox: Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
2. [Use the Waterfox Profile Manager to create a new profile](/support/profile-manager-create-remove-switch-waterfox-profiles) in your desired location, then exit the Profile Manager.
   :::note
   If you just installed Waterfox on a new computer, you can use the default profile that is automatically created when you first run Waterfox, instead of creating a new profile.
   :::
3. Locate the backed-up profile folder on your hard drive or backup medium (e.g., your USB stick).
4. Open the profile folder backup (e.g., the xxxxxxxx.default backup).
5. Copy the entire _contents_ of the profile folder backup, such as the mimeTypes.rdf file, prefs.js file, bookmarkbackups folder, etc.
6. Locate and open the new profile folder as explained above and then close Waterfox (if open).
7. Paste the contents of the backed up profile folder into the new profile folder, overwriting existing files of the same name.
8. Start Waterfox.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Back up and restore information in Firefox profiles](https://support.mozilla.org/en-US/kb/back-and-restore-information-firefox-profiles). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/back-and-restore-information-firefox-profiles#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
