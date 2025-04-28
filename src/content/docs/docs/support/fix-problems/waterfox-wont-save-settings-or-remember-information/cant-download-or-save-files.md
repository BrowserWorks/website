---
slug: support/cant-download-or-save-files
title: "What to do if you can’t download or save files"
---

This article describes steps to take if you are unable to download or save files using Waterfox.

:::note
The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.
:::

## Check the Downloads panel for blocked downloads

Waterfox includes a [download protection](https://blog.mozilla.org/security/2016/08/01/enhancing-download-protection-in-waterfox) feature to protect you from malicious or potentially harmful file downloads. If Waterfox has blocked an unsafe download, you will see a warning message about the file in the Downloads panel, along with options for handling the pending download. You can open the Downloads panel to view completed and pending downloads by clicking on the Downloads button (the down arrow on your toolbar). See the articles [Where to find and manage downloaded files in Waterfox](/support/where-find-and-manage-downloaded-files-waterfox) and [How does built-in Phishing and Malware Protection work?](/support/how-does-phishing-and-malware-protection-work) for more information.

## Clear the download history

Clearing the download history can fix some problems with downloading files:

1. Click the Downloads icon <img alt="download icon 57" class="inline-image" src="/assets/docs/2017-10-27-10-52-24-fd4564.png">, and then click Show all downloads. The [Downloads window](/support/where-find-and-manage-downloaded-files-waterfox) will open.
2. In the Downloads window, click Clear Downloads.
3. Close the Downloads window.

## Choose a different download folder

Waterfox may not be able to download files if there is a problem with the folder in which downloaded files are saved:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Find the **Downloads** section under _Files and Applications_.
4. Click the Browsebutton next to the **Save files to** entry.
5. Choose a different download folder for saving files.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## Reset the download folder

If you have tried the above suggestions, you can restore the default Waterfox download folder settings:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the Search field, enter **browser.download**.
3. If any of the following settings are in bold text, reset their values. To reset a value, click the _Delete_ <img alt="Fx71aboutconfig-DeleteButton" class="inline-image" src="/assets/docs/2019-10-29-08-53-36-604f20.png"> or _Reset_ <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> button, depending on the preference:
   - browser.download.dir
   - browser.download.downloadDir
   - browser.download.folderList
   - browser.download.lastDir
   - browser.download.useDownloadDir
4. If desired, you can revert back to your preferred download folder settings in your Waterfox Options
   General panel, in the **Downloads** section under _Files and Applications_.

## Change file type settings

If downloading certain file types does not work, check to make sure Waterfox is not set to handle those file types differently from others. See [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file) for instructions on how to view and change how different file types are handled.

## Configure Internet security software

Internet security software, including [firewalls](/support/configure-firewalls-so-waterfox-can-access-internet), antivirus programs, anti-spyware programs, and others can block certain file downloads. Check the settings in your security software to see if there is an setting that may be blocking downloads.

To diagnose whether Internet security software is causing problems, you can try temporarily disabling it, seeing if downloads work, and then re-enabling the software.

## Enable downloads blocked by Security Zone Policy

Downloading an executable file (e.g., an .exe or .msi file) may fail, with the [Downloads window](/support/where-find-and-manage-downloaded-files-waterfox) showing _Canceled_ under the file name.

This happens because Waterfox honors your Windows security settings for downloading applications and other potentially unsafe files from the Internet. To resolve this problem, use the solution given below.

### Reset system Internet Security settings

You can reset your system Internet security settings in Internet Explorer. See [How to reset Internet Explorer settings](http://support.microsoft.com/kb/923737) at Microsoft Support for instructions.

## Other solutions

You may be able to diagnose your download problem by following the steps given in the [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems) article.

**_Based on information from [Unable to save or download files (mozillaZine KB)](http://kb.mozillazine.org/Unable_to_save_or_download_files)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [What to do if you can’t download or save files](https://support.mozilla.org/en-US/kb/cant-download-or-save-files). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/cant-download-or-save-files#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
