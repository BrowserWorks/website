---
slug: /support/waterfox-uses-too-much-memory-or-cpu-resources
title: "Waterfox uses too much memory or CPU resources - How to fix"
---

At times, Waterfox may require significant system resources in order to download, process, and display web content. If you are experiencing periods of sustained high resource usage while using Waterfox, this article presents some options for you to review.

- The CPU (Central Processing Unit) is the "brain" of the computer.
- The RAM (Random Access Memory) or Memory helps your computer perform multiple tasks at the same time.
- When your system resources are being heavily used, the overall performance and stability of the computer can be impacted.
- Depending on your operating system, you can review and monitor resource usage through specific tools. See the **Use additional troubleshooting tools** section below for more information.

## Update to the latest version

The latest Waterfox version may include performance improvements. [Update Waterfox to the latest release](/support/update-waterfox-latest-release).

## Restart Waterfox

Waterfox may use more system resources if it's left open for long periods of time. A workaround for this is to periodically restart Waterfox. You can configure Waterfox to save your tabs and windows so that when you start it again, you can start where you left off. See [Restore previous session - Configure when Waterfox shows your most recent tabs and windows](/support/restore-previous-session) for details.

## Restart your computer

Waterfox may grind to a halt due to operating system issues, such as a pending Windows update, that can be resolved by restarting your computer.

## Disable resource consuming extensions and themes

Extensions and themes can cause Waterfox to use more system resources than it normally would.

To determine if an extension or theme is causing Waterfox to use too many resources, [start Waterfox in Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) and observe its memory and CPU usage. In Troubleshoot Mode, extensions and themes are disabled, so if you notice a significant improvement, you can try disabling or uninstalling extensions.

- For more information on starting Waterfox in Troubleshoot Mode and on how to find which extension or theme is causing your problem, see [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

## Hide intrusive content

Many web pages have content you don't need, but which still use system resources to display its content. Waterfox's built-in content blocking can help save resources by preventing third-party tracking content from loading. See the [Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop) article for details.

Some extensions allow you to block unnecessary content; for example:

- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) allows you to hide ads on websites.
- [NoScript](https://addons.mozilla.org/firefox/addon/noscript) allows you to selectively enable and disable scripts running on websites.

Please reach out to the add-on developer directly, if you need help with a specific add-on.

## Use fewer tabs

Each tab requires Waterfox to store a web page in memory. If you frequently have **more than 100 tabs open**, consider using a more lightweight mechanism to keep track of pages to read and things to do, such as:

- [To-do list applications](http://lifehacker.com/378062/five-best-gtd-applications).

## Close tabs that use too many system resources

Some websites use scripts that use a lot of memory and/or CPU to keep them up to date, such as online mail client pages. If these scripts are not optimized, they can lead to the use of too many system resources. You can see which tabs are using the most system resources by opening the [Waterfox Task Manager](/support/task-manager-tabs-or-extensions-are-slowing-waterfox) (_about:performance_ page). If you do not need these tabs open all the time, you can close them to reduce system resources usage.

## Check Waterfox hardware acceleration

Waterfox hardware acceleration eases memory and CPU usage in many cases.
Check in [Waterfox's performance settings](/support/performance-settings) that hardware acceleration is turned on. Also make sure that [your graphics drivers are up-to-date](/support/upgrade-graphics-drivers-use-hardware-acceleration).

## Reduce the content process limit

With [Multiprocess Waterfox](https://developer.mozilla.org/Firefox/Multiprocess_Waterfox), also called electrolysis or _e10s_ , Waterfox runs web content for all tabs separately from the main Waterfox process for increased security and performance. Using [multiple content processes](https://wiki.mozilla.org/Electrolysis/Multiple_content_processes) can further increase performance and minimize the impact of content process crashes. You can modify [Waterfox's performance settings](/support/performance-settings) to change the content process limit.

You can set between one and eight content processes. The default is eight. Having more content processes can improve performance when using multiple tabs but it will also use more memory. You can reduce the number of content processes if your computer is running out of memory.

## Close other applications

Having many applications running simultaneously may cause your computer to run slowly and other applications to do so as well. By closing down some of the unnecessary applications, system usage will be reduced.

## Delete content-prefs.sqlite file

Waterfox stores your data in various files in your profile folder. The file used for saving individual website settings might be corrupt. If you delete (or rename) that file, your zoom level settings will be reset but it could decrease CPU usage.

1. - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::
2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. In your profile folder, delete the file content-prefs.sqlite. It will be recreated next time you open Waterfox.

## Refresh Waterfox

The _Refresh Waterfox_ feature can fix many issues by restoring your [Waterfox profile](/support/profiles-where-waterfox-stores-user-data) to its default state while saving your essential information.
See [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings) for details.

## Use additional troubleshooting tools

There are a variety of troubleshooting tools that can be used both in Waterfox and on your operating system to troubleshoot elevated system resource usage.

### Waterfox tools

- The [Waterfox Task Manager](/support/task-manager-tabs-or-extensions-are-slowing-waterfox) (not to be confused with Windows Task Manager) is a great tool to see what tabs and extensions are using the most system resources.
- The **about:memory** page allows you to troubleshoot specific issues relating to memory (for instance, caused by a website, an extension, a theme, etc.) and sometimes its Minimize memory usage button may help you instantly reduce memory usage. For guidance on use of **about:memory** visit [about:memory](https://firefox-source-docs.mozilla.org/performance/memory/about_colon_memory.html).
- Even if you're not a programmer, you can try your hand at some other [tools and tips Firefox developers use to debug leaks](https://firefox-source-docs.mozilla.org/performance/index.html#memory-profiling-and-leak-detection-tools).

### Operating system tools

- View how system resources are being used by checking [the Windows Task Manager](<https://wikipedia.org/wiki/Task_Manager_(Windows)>) _Performance_ tab (click on "More details" in the Task Manager to show all tabs). See [this Windows blog post](https://blogs.windows.com/windowsexperience/2013/06/06/windows-8-task-manager-in-depth/) at Microsoft's site for more information.

:::caution
There are a variety of third-party programs that promise to increase your computer's performance. You should exercise caution when installing third-party software and only use reputable software provided by an official source.
:::

## Add RAM to your computer

If you exhausted all tips in the previous sections and your memory usage is still close to the maximum, maybe it's time for you to add more memory to your computer. Adding RAM will provide a huge performance boost.

## Upgrade your computer

If you exhausted all tips in the previous sections and you are still experiencing high system resource usage, it may be time to upgrade your computer. As technology progresses, software is becoming more advanced and requires more powerful computers to run effectively.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox uses too much memory or CPU resources - How to fix](https://support.mozilla.org/en-US/kb/firefox-uses-too-much-memory-or-cpu-resources). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-uses-too-much-memory-or-cpu-resources#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
