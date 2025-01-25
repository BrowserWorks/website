---
slug: /support/recovering-important-data-from-an-old-profile
title: "Recovering important data from an old profile"
---

A Waterfox [profile](/support/profiles-where-waterfox-stores-user-data) stores all of your important data, such as your bookmarks, history, cookies, and passwords. This article explains how to copy the files to a new profile, lists important files in the profile and describes what information is stored in these files.

- To sync and share data among multiple profiles and devices, see [How do I set up Sync on my computer?](/support/how-do-i-set-sync-my-computer).
- To switch to another profile to recover missing data and settings, see [Recover user data missing after Waterfox update](/support/recover-user-data-missing-after-waterfox-update).

:::note
Because your preferences and extensions often cause problems, this article does not explain how to copy these between profiles. If you follow the steps in this article, you will have to reinstall your extensions and reconfigure your Waterfox preferences.
:::

## Back up your current profile

Before starting it is recommended that you make a complete backup of your existing Waterfox profile in case something goes wrong. Please read the [Back up and restore information in Waterfox profiles](/support/back-and-restore-information-waterfox-profiles) article for instructions.

## Create a new Waterfox profile

:::note
This step is not needed if you already have a new Waterfox profile, for example, a profile you previously created or a [dedicated profile for another Waterfox installation](/support/dedicated-profiles-waterfox-installation). For information on how to create a brand new Waterfox profile, please read the [Profile Manager - Create, remove or switch Waterfox profiles](/support/profile-manager-create-remove-switch-waterfox-profiles) article.
:::

## Copying files between profile folders

**Important:** Waterfox must be closed down while copying files between profile folders. Also, Step 1 refers to your "old" profile folder - the profile containing data you want to copy to a new profile. If you can't open a profile from within Waterfox, see [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Right-click
   on a file you want to copy and choose Copy.
4. **Open the new Waterfox profile folder** as explained in step 1, above.
5. Right-click
   inside the profile folder and choose Paste.

Repeat steps 3-5 for each file you wish to transfer over to your new profile folder.

While copying your personal data from an old Waterfox profile to a new Waterfox profile, it is possible that you could copy over the file that is causing the problem you are trying to get rid of! The more files you copy over, the greater the chance of this happening. It is therefore recommended that:

- You copy over only the minimal amount of files that contain your most important data that you simply can't live without.
- You copy over a few files at a time, and then check that the problem you are trying to get rid of hasn't returned.

:::note
By default, Windows hides the _AppData_ folder where Waterfox stores your profile. To set Windows to show hidden files and folders, see [Show hidden files - Windows Help](https://support.microsoft.com/help/14201/windows-show-hidden-files).
:::

## Your important data and their files

### Bookmarks, Downloads and Browsing History

- places.sqlite

This file contains all your Waterfox bookmarks and lists of files you have downloaded and of websites you have previously visited. For more information, see [Bookmarks in Waterfox](/support/bookmarks-waterfox).

- favicons.sqlite

This file stores website favicon images. It's best to also include this file when recovering the places.sqlite file.

### Passwords

Your passwords are stored in two different files, both of which are required:

- key4.db

This file stores your key database for your passwords. To transfer saved passwords, you must copy this file along with the following file.

- logins.json

Encrypted information about your saved usernames and passwords.

For more information see [Password Manager - Remember, delete and edit logins and passwords in Waterfox](/support/password-manager-remember-delete-edit-logins).

### Site-specific preferences

- permissions.sqlite

This file stores many of your Waterfox permissions that are decided on a per-site basis. For example, it stores which sites are allowed to, or blocked from setting cookies, installing extensions, displaying popups, etc.

### Search engines

- search.json.mozlz4

This file stores user-installed search engines. For more information, see [Add or remove a search engine in Waterfox](/support/add-or-remove-search-engine-waterfox).

### Personal dictionary

- persdict.dat

This file stores any custom words you have added to Waterfox's dictionary. If you have never added a custom word to the Waterfox dictionary, then you will not have this file. For more information see [How do I use the Waterfox spell checker?](/support/how-do-i-use-waterfox-spell-checker).

### Autocomplete history

- formhistory.sqlite

This file remembers what you have searched for in the Waterfox search bar and what information you have entered into forms on websites. For more information see [Control whether Waterfox automatically fills in forms](/support/control-whether-waterfox-automatically-fills-forms).

### Cookies

- cookies.sqlite

[Cookies](/support/cookies-information-websites-store-on-your-computer) are used by websites for a variety of reasons, some of which include keeping you logged in to a website you have previously logged in to, remembering any preferences a website has allowed you to set, authenticating you as a person who has visited a specific website before, etc.

### Security certificate settings

- cert9.db

This file stores all your security certificate settings and any SSL certificates you have imported into Waterfox.

### File types and download actions

- handlers.json

This file stores your preferences with respect to what Waterfox does when it comes across known file types, such as whether you want to save a file or open it with a specific application. For more information, see [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file).

**_Based on information from [Transferring data to a new profile - Waterfox (mozillaZine KB)](http://kb.mozillazine.org/Transferring_data_to_a_new_profile_-_Waterfox)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Recovering important data from an old profile](https://support.mozilla.org/en-US/kb/recovering-important-data-from-an-old-profile). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/recovering-important-data-from-an-old-profile#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
