---
slug: support/browser-crashes-troubleshoot-prevent-and-get-help
title: "Troubleshoot Waterfox crashes (closing or quitting unexpectedly)"
---

We understand how frustrating it is when Waterfox crashes (closes or quits unexpectedly). When Waterfox crashes, the [Waterfox Crash Reporter](/support/mozillacrashreporter) will allow you to submit a crash to us so we can continue making improvements to Waterfox. Here are also some things to try to get Waterfox up and running optimally.

**Before getting started:**

- If the page stops working because part of the page has crashed or stopped responding, try reloading the page to see if that fixes the problem.
- If Waterfox is open but won't respond to any of your actions, then this is a _hang_, not a crash. See [Waterfox hangs or is not responding - How to fix](/support/waterfox-hangs-or-not-responding) for solutions.
- If Waterfox crashes at startup:
  - [Check to see if the crash happens in Troubleshoot Mode](#check-to-see-if-the-crash-happens-in-troubleshoot-mode) (see below).
  - Try a clean reinstall (see [Waterfox keeps crashing at startup](/support/waterfox-keeps-crashing-startup)).

Otherwise, follow the steps below in order.

## Update your software

_The crash you're experiencing may have already been fixed in a new version!_

### Update Waterfox

Every Waterfox release includes a number of fixes for crashes that people have reported. Making sure you have the latest version may fix your crash. See [Update Waterfox to the latest release](/support/update-waterfox-latest-release) for details.

### Update Windows

Make sure you have all of the latest security and stability fixes.

### Update your drivers

Check if your graphics drivers are up-to-date. For more information, see [Upgrade your graphics drivers to use hardware acceleration and WebGL](/support/upgrade-graphics-drivers-use-hardware-acceleration).

If your crash happens while printing, check that your printer driver is up-to-date by going to your printer manufacturer's support website. The [Fix printing problems in Waterfox](/support/fix-printing-problems-waterfox) article may also help.

### Update your Internet Security software

Make sure you have the latest version of your Internet security software (including firewalls, antivirus programs, anti-spyware programs, and more).

## Check for viruses or spyware

A number of different viruses and spyware are known to crash Waterfox. For more information, see [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware).

## Check for third-party modules

Third-party applications (such as antivirus software, archiving software, and other tools) may load modules into Waterfox. Sometimes, these applications load harmful modules that cause Waterfox crashes, reduced performance, or compatibility issues. You may not notice that a malicious or unexpected module has been loaded and it may cause problems that appear to be Waterfox issues. For more information, see [Identify problems caused by third-party modules in Waterfox for Windows](/support/identify-problems-third-party-modules-waterfox-windows).

## Check to see if the crash happens in Troubleshoot Mode

If updating software didn't work or if Waterfox crashes on startup, use the steps below to test whether the crash happens in [Waterfox Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) or not and then follow the instructions in the recommended articles.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help, select Troubleshoot Mode… and click Restart in the _Restart Waterfox in Troubleshoot Mode?_ dialog.

:::note
You can also start Waterfox in Troubleshoot Mode by holding down the Shift key while starting Waterfox. 2. When the _Open Waterfox in Troubleshoot Mode?_ window appears, press the Open button.
![Fx88TroubleshootMode](/assets/docs/2021-03-31-17-39-57-bfee23.png)
:::

After Waterfox starts in Troubleshoot Mode, test for your problem.

:::note
The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.
:::

### The crash still happens in Troubleshoot Mode

If your crash still happens in Troubleshoot Mode, it is not being caused by an extension, theme or hardware acceleration. Try to [get help with your crash ID](#get-help-fixing-this-crash) (see below).

### The crash doesn't happen in Troubleshoot Mode

If your crash doesn't happen in Troubleshoot Mode, it is most likely because an extension, theme or hardware acceleration is causing the crash.

- Follow the steps in [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems) to determine the cause.

## Check your hardware

### Check your RAM for errors

If Waterfox crashes repeatedly, check your RAM for errors using for instance the following tool, [Memtest86+](http://www.memtest.org/).

**_Based on information from [Firefox crashes (mozillaZine KB)](http://kb.mozillazine.org/Firefox_crashes)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Troubleshoot Firefox crashes (closing or quitting unexpectedly)](https://support.mozilla.org/en-US/kb/browser-crashes-troubleshoot-prevent-and-get-help). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/browser-crashes-troubleshoot-prevent-and-get-help#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
