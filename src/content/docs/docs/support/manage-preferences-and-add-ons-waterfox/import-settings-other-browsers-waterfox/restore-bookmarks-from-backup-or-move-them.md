---
slug: /support/restore-bookmarks-from-backup-or-move-them
title: "Restore bookmarks from backup or move them to another computer"
---

Waterfox automatically creates backups of your [bookmarks](/support/bookmarks-waterfox) and saves the last 15 backups for safekeeping. This article describes how to restore your bookmarks from the automatic backups that Waterfox creates, how to save and restore your own bookmark backup files, and how to move your bookmarks to another computer.

- If your bookmarks suddenly become unavailable in Waterfox, see [Recover lost or missing Bookmarks](/support/recover-lost-or-missing-bookmarks) for troubleshooting information.
- For more information about using bookmarks, see [Bookmarks in Waterfox](/support/bookmarks-waterfox).

## Backup and restore

### Manual backup

1. Click the Library <img alt="library icon" class="inline-image" src="/assets/docs/icons/library.svg" /> button on your toolbar. (If you don't see it, click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button, then click Library.)
   Click Bookmarks and then click the **Show All Bookmarks** bar at the bottom.
2. In the Library window, click the Import and Backup button and then select Backup….
   ![Bookmarks Backup 68](/assets/docs/2019-10-05-08-14-55-26baa0.png)
3. In the Bookmarks backup filename window that opens, choose a location to save the file, which is named bookmarks-"date".json by default. The desktop is usually a good spot, but any place that is easy to remember will work.
4. Save the bookmarks json file. The Bookmarks backup filename window will close and then you can close the Library window.

### Restoring from backups

**Caution: Restoring bookmarks from a backup will overwrite your current set of bookmarks with the ones in the backup file.**

1. Click the Library <img alt="library icon" class="inline-image" src="/assets/docs/icons/library.svg" /> button on your toolbar. (If you don't see it, click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button, then click Library.)
   Click Bookmarks and then click the **Show All Bookmarks** bar at the bottom.
2. In the Library window, click the Import and Backup button and then select Restore.
   ![Bookmarks Restore 68](/assets/docs/2019-10-05-08-19-30-c86aaa.png)
3. Select the backup from which you want to restore:
   - The dated entries are automatic bookmark backups.
   - Choose File… lets you restore from a manual backup (see above).
4. After selecting a backup and confirming your choice, your bookmarks from that backup will be restored.
5. Close the Library window.

## Moving bookmarks to another computer

### Using Waterfox Sync

You can use Waterfox Sync to move your bookmarks from one computer to another.

**Important:** Waterfox Sync continuously updates itself as you change bookmarks, so **it does not provide a true backup service**, nor is it intended to be used as one.
Waterfox Sync is the best way to keep your bookmarks (and other profile data) synchronized between all of the computers you use. See [How do I set up Sync on my computer?](/support/how-do-i-set-sync-my-computer) for more information and instructions on setting it up.

### Using a bookmark backup file

You can also use a bookmark backup file from one computer and restore it on another computer. This is useful if you can't synchronize the two computers' bookmarks using Sync, for some reason.

The bookmark backup file can either be a [manual backup](#manual-backup) (see above) or one of the automatic dated backups located inside the [Waterfox profile folder](/support/profiles-where-waterfox-stores-user-data) named bookmarkbackups folder. Place the bookmark backup file on your transfer media (for example a Flash drive) and copy it to the desktop (or any location) of the other computer. You can then restore the backup from the Waterfox Library window, using the Choose File… option, as described in the [Restoring from backups](#restoring-from-backups) section above.

## Restoring bookmarks after upgrading or downgrading Windows 10

After upgrading or downgrading your Windows 10 operating system, a directory named Windows.old is created, and most of the data erased from the upgrade or downgrade is stored there. One especially useful item is the Bookmarks from Waterfox. Follow the instructions in [Restoring from backups](#restoring-from-backups) above, and when you select Choose File…, follow the path _C:\Windows.old\Users\{UserName}\AppData\Roaming\Waterfox\Waterfox\Profiles\{filename.default}\bookmarkbackups_ to your previous bookmarks. Check the file date for information when the backup was created. Be aware using a backup bookmark folder will replace all the bookmarks in Waterfox with the bookmarks in the backup file.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Restore bookmarks from backup or move them to another computer](https://support.mozilla.org/en-US/kb/restore-bookmarks-from-backup-or-move-them). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/restore-bookmarks-from-backup-or-move-them#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
