---
slug: /support/use-troubleshooting-information-page-fix-waterfox
title: "Use the Troubleshooting Information page to help fix Waterfox issues"
---

Waterfox includes a _Troubleshooting Information_ page with some problem-solving tools, details about your Waterfox installation and other technical data, such as any installed extensions, important modified preferences and graphics information. If you are [getting help on the subreddit](https://www.reddit.com/r/waterfox), content you provide from this page can help resolve your Waterfox issue.

**To access the Troubleshooting Information page:** Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select More Troubleshooting Information. You will be taken to a page with the address _about:support_. You can also access this page by entering **about:support** into the address bar.

![Fx88aboutsupport](/assets/docs/2021-04-21-05-00-34-dcb668.png)

## Give Waterfox a tune up

The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.

## Diagnose issues

You can restart Waterfox in Troubleshoot Mode to temporarily turn off hardware acceleration, reset some settings, and disable add-ons (extensions and themes) that might be causing problems. See [Diagnose Waterfox issues using Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) for more information.

## Try clearing the startup cache

Waterfox stores certain temporary data in a startup cache to improve startup speed. Clearing the startup cache and then restarting Waterfox can sometimes fix various issues, such as mixed languages in the user interface after an update. This will not change your profile data or add-ons.

## Copy to clipboard

You can copy the contents of this page to the Windows clipboard.
Clicking the Copy raw data to clipboard button will copy the source data in _Json format_. Clicking the Copy text to clipboard button will copy a version of the same data in _report format_ for further use. (For privacy reasons, the [Application Basics](#application-basics) **Profile Folder** line will not be copied.)

After copying, you can paste the information into another window for someone to see by clicking the Edit menu in the program you are using and then selecting Paste (or by holding down the Ctrl key and pressing V).

## Application Basics

- **Name**: Tells you the name of the product you are using. In most cases, it should say "Waterfox".
- **Version**: Tells you which version number of Waterfox you are using.
- **Build ID**: The code created automatically to identify the unique environment in which this Waterfox installation was built.
- **Distribution ID**: This field will appear blank to non-Linux users.
- **Update Folder**: Shows the path to the folder containing the files update-config.json, updates.xml, active-update.xml (if an update was downloaded but not yet applied) and the updates subfolder. Clicking on Open Folder will take you to the update folder.
- **Update History**: Clicking on Show Update History will open a window showing a history of Waterfox updates that have been installed.
- **Update Channel**: The [Update Channel](https://wiki.mozilla.org/Software_Update:Channels) is based on whether Waterfox is the standard release, an Extended Support Release (ESR), or a pre-release such as Beta, Developer Edition or Nightly.
- **User Agent**: In addition to your browser and its version number, the User Agent provides other details about your system, such as the operating system and version.
- **OS**: Shows your operating system.
- **Application Binary**: Shows where Waterfox is installed.
- **Profile Folder**: Your profile folder is a location on your computer where Waterfox stores your personal information such as bookmarks, passwords, and user preferences. Clicking on Open Folder will take you to your profile folder, where you can manage your files. For more information, see [Profiles - Where Waterfox stores your bookmarks, passwords and other user data](/support/profiles-where-waterfox-stores-user-data).
- **Enabled Plugins**: Clicking on _about:plugins_ will take you to a page that lists your installed plugins. For more information, see [Watch DRM content on Waterfox](/support/enable-drm) and [Use plugins to play audio, video, games and more](/support/use-plugins-play-audio-video-games).
- **Build Configuration**: Clicking on _about:buildconfig_ will take you to a page that will help someone understand if you are using a standard version of Waterfox or a custom version.
- **Memory Use**: Clicking on _about:memory_ will take you to a page that shows memory usage. For more information, see [this blog post](https://blog.mozilla.org/nnethercote/2013/04/26/recent-aboutmemory-improvements/).
- **Performance**: Clicking on _about:performance_ will take you to the _Task Manager_ page. For more information, see [Task Manager - see what tabs or extensions are slowing down Waterfox](/support/task-manager-tabs-or-extensions-are-slowing-waterfox).
- **Registered Service Workers**: Clicking on _about:serviceworkers_ will show you whether or not the [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) feature is enabled and if any current Worker URLs are registered. Service workers are used for web enhancements such as [push notifications](/support/push-notifications-waterfox).
- **Third-party Modules**: Clicking on _about:third-party_ will take you to a page with information about any modules that have been injected into Waterfox by third-party applications. To learn more, see [this article](/support/identify-problems-third-party-modules-waterfox-windows).
- **Launcher Process**: This shows the status of the security-related [Launcher Process](https://wiki.mozilla.org/Platform/Integration/InjectEject/Launcher_Process/) for Waterfox on Windows (enabled by default). For more information, see [this article](/support/windows-administrator-launcher-process-error-fix).
- **Multiprocess Windows**: This shows you the number of [Multiprocess Waterfox](http://billmccloskey.wordpress.com/2013/12/05/multiprocess-waterfox/) windows (if any) and the total number of windows that are open.
- **Fission Windows**: This shows you the number of [Site Isolation (Fission)](https://hacks.mozilla.org/2021/05/introducing-waterfox-new-site-isolation-security-architecture/) windows (if any), the total number of windows that are open and the reason this feature is enabled or disabled. For example, when Waterfox is in [Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) and one window is open, the entry will show _0/1 Disabled by safe mode_.
- **Enterprise Policies**: This shows you if your browser is being managed by [Windows Group Policy](/support/customizing-waterfox-using-group-policy-windows) or a [policies.json file](/support/customizing-waterfox-using-policiesjson). If enterprise policies are managing Waterfox, clicking on _Active_ will show you a list of the policies that are currently active on Waterfox.
- **Safe Mode**: This tells you whether or not Waterfox is currently in [Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode).
- **Profiles**: Clicking on _about:profiles_ will take you to the [Profile Manager](/support/profile-manager-create-remove-switch-waterfox-profiles).

## Waterfox Features

Some features included in Waterfox, such as [Waterfox Screenshots](/support/take-screenshots-waterfox), are installed as extensions so that they can be updated separately from Waterfox. These extensions (sometimes called _system add-ons_) are not listed in the Add-ons Manager.

## Add-ons

[Extensions](/support/find-and-install-add-ons-add-features-to-waterfox) are Waterfox add-ons that provide additional functionality to Waterfox. This section lists the name of each extension, its version, whether it is enabled, and its ID string. For more information about troubleshooting extensions you have installed, see [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

## Security Software

This section displays information about the security software installed on your computer. This includes most antivirus and antispyware software, as well as your firewall. Not having security software installed on your system can leave your system vulnerable. For more information about troubleshooting issues that may be caused by malware, see [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware).

## Graphics

Waterfox can use your computer's graphics processor to speed up the display of some pages with video and animation, which is called [hardware acceleration](https://en.wikipedia.org/wiki/Hardware_acceleration), and to display [WebGL](http://en.wikipedia.org/wiki/WebGL) content. This section provides information about your computer's graphics device and driver and will tell you whether hardware acceleration and WebGL are enabled or not in Waterfox. Note that graphics features may be disabled because of outdated graphics drivers. For help updating your graphics drivers, see [Upgrade your graphics drivers to use hardware acceleration and WebGL](/support/upgrade-graphics-drivers-use-hardware-acceleration).

## Media

This section displays information about your system audio. The displayed information will include your operating system's preferred audio settings, as well as the audio input (such as microphones) and output (such as speakers or headphones) devices. From here you can also see the state of each device and some information about the audio format settings. For more information on fixing audio issues in Waterfox, see [What to do if Waterfox won't play any sounds](/support/what-to-do-if-waterfox-wont-play-any-sounds).

## Environment Variables

In this section, you will see [environment variables](https://wikipedia.org/wiki/Environment_variable) utilized by Waterfox and their values, such as the MOZ_CRASHREPORTER_DATA_DIRECTORY variable that shows where crash report data is stored on your computer. Other environment variables, if set, can change how Waterfox behaves. For example, Waterfox downgrade protection can be bypassed by setting the environment variable MOZ_ALLOW_DOWNGRADE, as described in [this Waterfox for Enterprise article](/support/understanding-depth-profile-installation).

## Important Modified Preferences

In this section, you will see a list of settings that have been changed from their defaults. This information will help someone know how you have adjusted your installation of Waterfox. For instructions on how to reset preferences to default, see [Reset Waterfox preferences to troubleshoot and fix problems](/support/reset-preferences-fix-problems).

## Important Locked Preferences

In Waterfox, it's possible to lock certain preferences so that they cannot be changed by the end user. This is common in enterprise environments. For more information about locking preferences, see the [Customizing Waterfox Using AutoConfig](/support/customizing-waterfox-using-autoconfig) documentation.

## Places Database

Waterfox periodically performs maintenance tasks on your bookmarks and history database (also known as Places database). Use the Verify Integrity button to perform those tasks on-demand. If you're having any problems with bookmarks and history, the Verify Integrity tool _might_ help.

## Accessibility

This section shows if you have accessibility software enabled in Waterfox.

## Library Versions

This section tells you which versions of some runtime libraries are used.

## Sandbox

For security and performance purposes, Waterfox created Project Electrolysis (often referred to as e10s) to implement a practice called sandboxing into Waterfox. This ensures that web content is run in a seperate process from the main Waterfox program. This section of the troubleshooting information shows details about the sandbox security levels. See [the Sandbox page on the Waterfox Wiki](https://wiki.mozilla.org/Security/Sandbox) for more information on sandboxing in Waterfox.

## Internationalization & Localization

This section shows information about the language and regional preferences in Waterfox and your operating system. For information about using Waterfox language packs, see [Use Waterfox in another language](/support/use-waterfox-another-language).

## Printing

The Clear saved print settings button in this section allows you to reset all modified print preferences. This _might_ help [fix printing problems in Waterfox](/support/fix-printing-problems-waterfox).

## Modified print settings

This section lists modified print preferences.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Use the Troubleshooting Information page to help fix Firefox issues](https://support.mozilla.org/en-US/kb/use-troubleshooting-information-page-fix-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/use-troubleshooting-information-page-fix-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
