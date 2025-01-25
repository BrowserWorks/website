---
slug: /support/how-run-waterfox-when-profile-missing-inaccessible
title: "How to run Waterfox when your profile is missing or inaccessible"
---

If you see a "Profile Missing" error message that says, _Your Waterfox profile cannot be loaded. It may be missing or inaccessible_ it usually means that Waterfox can't find or access the profile folder. This article explains what to do if you see this error.

![FXprofile-cannot-be-loaded](/assets/docs/2014-11-09-15-46-58-4ec2f0.png)

:::note
If you see a "Profile Missing" error after clicking the "Close Waterfox" button in the "Waterfox is already running but is not responding" error dialog, click OK in the "Profile Missing" window and wait a few seconds before trying to start Waterfox. Alternatively, either restart the computer or use the Windows Task Manager to end all Waterfox processes, then try starting Waterfox. For more information, see the article ["Waterfox is already running but is not responding" error - How to fix](/support/waterfox-already-running-not-responding).
:::

## If you moved, renamed, or deleted your Waterfox profile folder

Waterfox stores your user data and settings in a special [profile](/support/profiles-where-waterfox-stores-user-data) folder and pulls information from this folder every time you start Waterfox. The default profile folder location is under the %APPDATA%\Waterfox\Waterfox\Profiles folder, which you can find using [these instructions](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).

### Profile was moved or renamed

If you know where your profile is, try one of the following methods to help Waterfox find it.

- Move the profile folder back to its original location.
- Restore the profile's original name if you've changed it.
- [Create a new profile using the Profile Manager](/support/profile-manager-create-remove-switch-waterfox-profiles) using the instructions to start the Profile Manager when Waterfox is closed. Give it a descriptive name, click on the Choose Folder button, and then select the profile folder you moved or renamed, before you finish the _Create a new profile_ wizard.

### Profile was deleted

If you deleted or lost your profile folder and have no way of restoring it, use one of these methods to create a new Waterfox profile:

Your new profile will not contain settings or user data from your deleted or lost profile.

- **Method 1: Use the Profile Manager wizard**

Follow the steps in the [Profile Manager - Create, remove or switch Waterfox profiles](/support/profile-manager-create-remove-switch-waterfox-profiles) article to create a new profile.

- **Method 2: Manually delete the _profiles.ini_ file**

If you have problems accessing the Profile Manager, you can create a new default Waterfox profile by deleting the profiles.ini file, using these steps:

1. Click on the Windows Start button and click on Run...
2. Type **%appdata%** in the Run box and click OK. The hidden Application Data folder will open.
3. Double-click the Waterfox folder.
4. Double-click the Waterfox folder.
5. Delete (or rename, for example, to profiles.iniOLD) the profiles.ini file.

6. Click the Windows Start button or press the Windows key to open the Start Menu.
7. Type **%appdata%** in the search box and press the Enter key. The hidden AppData\Roaming folder will open.
8. Double-click the Waterfox folder.
9. Double-click the Waterfox folder.
10. Delete (or rename, for example, to profiles.iniOLD) the profiles.ini file.

11. From the Windows Start Screen, click the **Desktop** tile. The Desktop view will open.
12. From the Desktop, hover in the lower right-hand corner to access the Charms.
13. Select the Search charm. The Search sidebar will open.
14. Type **%appdata%** in the search box and press the Enter key. The hidden AppData\Roaming folder will open.
15. Double-click the Waterfox folder.
16. Double-click the Waterfox folder.
17. Delete (or rename, for example, to profiles.iniOLD) the profiles.ini file.

18. Click on the Windows Start button or press the Windows key to open the Start Menu.
19. Type **%appdata%** (as you type, a Windows search will start) and press the Enter key. The hidden AppData\Roaming folder will open.
20. Double-click the Waterfox folder.
21. Double-click the Waterfox folder.
22. Delete (or rename, for example, to profiles.iniOLD) the profiles.ini file.

:::note
By default, Windows does not show the .ini file extension. The file should have an icon similar to a document with a gear on it, and a file type similar to "Configuration settings" or "Application settings". You should not delete the Profiles folder, which should have a file folder icon and a file type of "File folder".
:::

:::note
Instead of deleting the profiles.ini file, you can delete (or rename) the folder that contains it. For example, right-click the Waterfox folder and rename it WaterfoxOLD.
When you start Waterfox, a new profile will be created.
:::

**_Based on information from [Profile cannot be loaded (mozillaZine KB)](http://kb.mozillazine.org/Profile_cannot_be_loaded)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How to run Firefox when your profile is missing or inaccessible](https://support.mozilla.org/en-US/kb/how-run-firefox-when-profile-missing-inaccessible). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/how-run-firefox-when-profile-missing-inaccessible#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
