---
slug: support/identify-problems-third-party-modules-waterfox-windows
title: "Identify problems caused by third-party modules in Waterfox for Windows"
---

Third-party applications (such as antivirus software, archiving software, and other tools) may load modules into Waterfox. Sometimes, these applications load harmful modules that cause Waterfox crashes, reduced performance, or compatibility issues. You may not notice that a malicious or unexpected module has been loaded and it may cause problems that appear to be Waterfox issues.

The Waterfox _about:third-party_ page gives users information about third-party modules that have been injected into Waterfox.

## Accessing the about:third-party page

Type _about:third-party_ in the address bar and press Enter. You will be taken to the _Third-party module Information page_. This page shows users a list of modules that have been loaded into the browser, new modules loaded and modules that are slow to load.

If you see a Reload with system info button on top of the page, click on it to reload the page and see more useful information about any modules that are installed.

![ReloadSystemInfo_button](/assets/docs/2021-07-13-07-19-04-06f6a3.png)

The Copy raw data to clipboard button will copy a text version of all data shown in the list, in JSON format, to the clipboard. You can then paste the data to a text file to analyze or add it to a Waterfox Support question.

![ModuleSystem_Info](/assets/docs/2021-07-13-07-16-30-8c795f.png)

## Module information

The _about:third-party_ page shows the following information for each module:

- **Module name**.
- Application name/publisher, if provided by the third-party vendor or developer.
- File version.
- Vendor info.
- Number of occurrences.
- Average blocking time, in milliseconds.
- Optional module status icons and other information:
  - An **unsigned icon** ![Fx89Padlock-RedLine](/assets/docs/2021-05-06-04-53-30-fe088c.png) (padlock with a red strike over it) will appear next to the name of the module, if the module has not been digitally signed.
  - A **warning triangle** <img alt="Warning_icon" class="inline-image" src="/assets/docs/2021-07-07-14-00-54-aa662a.png"> will appear next to the name of a module, if it has been identified as causing a Waterfox crash with the current Waterfox profile.
  - Module type (“IME”, “Shell Extension”).
- A folder icon <img alt="folder" class="inline-image" src="/assets/docs/2021-08-07-07-06-28-851148.png"> to show the module’s file in Windows Explorer.
- A dropdown icon <img alt="arrow-dropdown" class="inline-image" src="/assets/docs/2021-08-07-07-13-13-402f96.png"> to expand **detailed table of loading events** which is collapsed by default:
  - Target process (the Waterfox process type, limited to “browser”, “tab”, or “RDD”).
  - Loading duration.
  - Background label if it was loaded in a background thread.
  - Status (Loaded or Blocked).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Identify problems caused by third-party modules in Firefox for Windows](https://support.mozilla.org/en-US/kb/identify-problems-third-party-modules-firefox-windows). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/identify-problems-third-party-modules-firefox-windows#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
