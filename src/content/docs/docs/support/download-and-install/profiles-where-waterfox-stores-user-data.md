---
slug: /support/profiles-where-waterfox-stores-user-data
title: "Profiles - Where Waterfox stores your bookmarks, passwords and other user data"
---

All of the changes you make in Waterfox, such as your home page, what toolbars you use, extensions you have installed, saved passwords and your bookmarks, are stored in a special folder called a _profile_. Your profile folder is stored in a separate place from the Waterfox program so that, if something ever goes wrong with Waterfox, your information will still be there. It also means that you can uninstall Waterfox without losing your settings and you don't have to reinstall Waterfox to clear your information or troubleshoot a problem.

## How do I find my profile?

- Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
- Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.

:::note
If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
:::

### Finding your profile without opening Waterfox

1. Click the Windows Start button, and select Run….

2. Type in:
   \*\*%APPDATA%\Waterfox\Waterfox\Profiles\*\*
   then click OK.
   A window will open containing profile folders.
3. Double-click the profile folder you wish to open. If you only have one profile, its folder would have "default" in the name.

## What information is stored in my profile?

:::note
This is not a complete list. Only important information is described.
:::

**Bookmarks, Downloads and Browsing History:**

- places.sqlite
  This file contains all your Waterfox bookmarks and lists of all the files you've downloaded and websites you’ve visited.
- bookmarkbackups
  This folder stores bookmark backup files, which can be used to restore your bookmarks.
- favicons.sqlite
  This file contains all of the favicons for your Waterfox bookmarks.

For more information, see [Bookmarks in Waterfox](/support/bookmarks-waterfox) and [Restore bookmarks from backup or move them to another computer](/support/restore-bookmarks-from-backup-or-move-them).

**Passwords:**

- key4.db
- logins.json

Your passwords are stored in these two files. For more information, see [Password Manager - Remember, delete and edit logins and passwords in Waterfox](/support/password-manager-remember-delete-edit-logins).

**Site-specific preferences:**

- permissions.sqlite
- content-prefs.sqlite

These two files store many of your Waterfox permissions (for instance, which sites are allowed to display popups) or zoom levels that are set on a site-by-site basis (see [Font size and zoom - increase the size of web pages](/support/font-size-and-zoom-increase-size-of-web-pages)).

**Search engines:**

- search.json.mozlz4
  This file stores user-installed search engines. For more information, see [Add or remove a search engine in Waterfox](/support/add-or-remove-search-engine-waterfox).

**Personal dictionary:**

- persdict.dat
  This file stores any custom words you have added to Waterfox's dictionary. For more information, see [How do I use the Waterfox spell checker?](/support/how-do-i-use-waterfox-spell-checker).

**Autocomplete history:**

- formhistory.sqlite
  This file remembers what you have searched for in the Waterfox search bar and what information you’ve entered into forms on websites. For more information, see [Control whether Waterfox automatically fills in forms](/support/control-whether-waterfox-automatically-fills-forms).

**Cookies:**

- cookies.sqlite
  A [cookie](/support/cookies-information-websites-store-on-your-computer) is a bit of information stored on your computer by a website you’ve visited. Usually, this is something like your site preferences or login status. Cookies are all stored in this file.

**DOM storage:**

DOM Storage is designed to provide a larger, more secure, and easier-to-use alternative to storing information in cookies.

- webappsstore.sqlite
  Information is stored in this file for websites
- chromeappsstore.sqlite
  This file stores information for [about:\*](http://kb.mozillazine.org/About_protocol_links) pages.

**Extensions:**

- extensions
  This folder, if it exists, stores files for any [extensions](https://addons.mozilla.org/firefox/extensions/) you have installed. To learn more about Waterfox extensions and other add-ons, see [Find and install add-ons to add features to Waterfox](/support/find-and-install-add-ons-add-features-to-waterfox).

**Security certificate settings:**

- cert9.db
  This file stores all your security certificate settings and any SSL certificates you have imported into Waterfox.

**Security device settings:**

- pkcs11.txt
  This file stores security module configuration.

**Download actions:**

- handlers.json
  This file stores your preferences that tell Waterfox what to do when it comes across a particular type of file. For example, these are the settings that tell Waterfox to open a PDF file with Acrobat Reader when you click on it. For more information, see [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file).

**Stored session:**

- sessionstore.jsonlz4
  This file stores the currently open tabs and windows. For more information, see [Restore previous session - Configure when Waterfox shows your most recent tabs and windows](/support/restore-previous-session).

**Toolbar customization:**

- xulstore.json
  This file stores toolbar and window size/position settings. For more information, see [Customize Waterfox controls, buttons and toolbars](/support/customize-waterfox-controls-buttons-and-toolbars).

**User preferences:**

- prefs.js
  This file stores customized user preference settings, such as changes you make in Waterfox Options
  dialogs. The optional user.js file, if one exists, will override any modified preferences.

**Containers:**

- containers.json
  This file stores the details of containers used by the [Container Tabs feature](/support/containers), including those created by extensions such as [Facebook Container](/support/facebook-container-prevent-facebook-tracking).

## Working with profiles

- [Profile Manager - Create, remove or switch Waterfox profiles](/support/profile-manager-create-remove-switch-waterfox-profiles) explains how to do things like, create a new profile, set a new default profile, and delete an old profile.
- [Recover user data missing after Waterfox update](/support/recover-user-data-missing-after-waterfox-update) explains how to use the Profile Manager to switch profiles, if multiple profiles exist.
- [Back up and restore information in Waterfox profiles](/support/back-and-restore-information-waterfox-profiles) explains how to back up and restore a profile. It also explains how to move your profile information to a different location on your hard drive or to another computer.
- [Recovering important data from an old profile](/support/recovering-important-data-from-an-old-profile) explains how to copy files to a new profile and includes a list of files that store information useful for recovery.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Profiles - Where Firefox stores your bookmarks, passwords and other user data](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
