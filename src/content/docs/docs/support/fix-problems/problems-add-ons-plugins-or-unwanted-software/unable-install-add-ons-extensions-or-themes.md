---
slug: support/unable-install-add-ons-extensions-or-themes
title: "Unable to install add-ons (extensions or themes)"
---

An inability to install an extension can be the result of problems with the extension, Waterfox preferences, or the version of Waterfox you are using. This article describes various causes of install problems and what you can do to address them.

## Add-on is not compatible

An internal file in each add-on indicates the range of Waterfox versions with which the extension is compatible. In the [Waterfox Add-ons](https://addons.mozilla.org/) area of Waterfox, you can review version compatibility information on the page for each available extension.

If your installed version of Waterfox does not fit within that range, installing the add-on results in an error, indicating that the add-on is not compatible. If your version of Waterfox is incompatible with the add-on, you can:

- Update to the latest version of Waterfox. For more information, see [Update Waterfox to the latest release](/support/update-waterfox-latest-release).
- Find a version of the add-on that is compatible with your version of Waterfox. The [Waterfox Add-ons](https://addons.mozilla.org/) website usually has the most up to date version of each add-on.
- Use a different extension. For many extensions, there are similar extensions that provide the same functionality. For more information, see [Waterfox Add-ons](https://addons.mozilla.org/).
- Contact the author of the add-on at the support site listed on its add-on page. (Note: posting a review is not effective and will not reach the author.)

## Add-on has a high risk of causing stability or security problems and can't be installed

Certain add-ons have been blocklisted by Waterfox for being unsafe. For more information, see [Add-ons that cause stability or security issues are put on a blocklist](/support/add-ons-cause-issues-are-on-blocklist).

## Waterfox prevented the site from asking you to install software

By default, Waterfox permits you to install add-ons only from trusted websites. If the website from which you are installing add-on is not on the trusted websites list, a yellow bar appears across the top of the web page with a message similar to the following:

Waterfox prevented this site (www.example.com) from asking you to install software on your computer.
To allow the site, click Allow in the yellow bar.

To add the site to the trusted sites list:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel and go down to the _Permissions_ section.
3. At the right of _Warn you when sites try to install add-ons_, click Exceptions….
4. In the **Allowed Websites - Add-ons Installation** dialog, the list of permitted sites is displayed. The current site URL is inserted into the text field.
5. To allow the site, click Allow. Then, click Save Changes.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## You are asked to download the add-on, rather than installing it

Some websites serve add-ons as downloads, requiring you to download the file to your computer, before installing it.

- These files are usually [.xpi](http://en.wikipedia.org/wiki/XPInstall) or [.jar](http://en.wikipedia.org/wiki/JAR_%28file_format%29) files.

1. Download the file to your local computer.
2. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
3. To add the downloaded add-on to the list of available add-ons, drag and drop the file into the Add-ons window. The add-on is added to the list.
4. The installation process should begin.

## Nothing happens when you click the install link

If you click an install link and nothing happens, you should verify that JavaScript is enabled. For more information, see [JavaScript settings and preferences for interactive web pages](/support/javascript-settings-for-interactive-web-pages).

## Corrupt extension files

Corrupt extension configuration files can cause problems when trying to install an extension. Deleting these files will make Waterfox recreate them (removing any corruption) the next time it starts. You won't lose your extensions or their settings by deleting these files.

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Delete the following files:
   - extensions.sqlite
   - extensions.sqlite-journal (if found)
   - extensions.ini
   - extensions.json
4. Restart Waterfox.

## Conflict with other extensions

Another installed extension may interfere with the installation of new extensions. Install the new extension in Waterfox [Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) as a workaround.

**_Based on information from [Unable to install themes or extensions - Waterfox (mozillaZine KB)](http://kb.mozillazine.org/Unable_to_install_themes_or_extensions_-_Waterfox)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Unable to install add-ons (extensions or themes)](https://support.mozilla.org/en-US/kb/unable-install-add-ons-extensions-or-themes). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/unable-install-add-ons-extensions-or-themes#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
