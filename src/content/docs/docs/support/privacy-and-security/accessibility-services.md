---
slug: /support/accessibility-services
title: "What is the Accessibility Service Indicator?"
---

## What is the Accessibility Service Indicator?

An ![accessibility 57](/assets/docs/2017-11-28-08-27-29-b0d1e5.png) icon displayed in the Waterfox tab bar which communicates to users that Waterfox Accessibility Service is enabled and in use.

## What is Waterfox Accessibility Service?

Waterfox Accessibility Service is a technology built into Waterfox that provides 3rd party applications running on the same device the ability to inspect, monitor, visualize, and alter web page content hosted within Waterfox.

### Assistive Technologies

Applications that provide access to web content hosted in Waterfox for users with physical impairments often enable Waterfox Accessibility Service. This is the intended use of Waterfox Accessibility Service.

### Anti-Virus and Anti-Malware Browser Plugins

Often described as "browser protections" promoting security improvements, these features rarely add valuable security to Waterfox and other browsers. Most are poorly designed and poorly tested, and can inadvertently disable more effective security measures built into Waterfox. These features also often cause problems during upgrades to Waterfox, triggering nasty startup crashes and other abnormalities.

Waterfox does not support or sanction this use of Accessibility Service and actively works with anti-virus vendors to migrate their Accessibility Service extensions to other Waterfox extension mechanisms designed for this use.

Waterfox recommends disabling these anti-virus features if they enable Waterfox Accessibility Service.

### Enterprise or Educational Monitoring and Access

Corporate sign-on assistive technologies, copyright protection, employee and student monitoring, and remote access through remote desktop technologies often turn Waterfox Accessibility Service on.

### Niche Shareware or Freeware applications

Waterfox Accessibility service is occasionally consumed by niche software applications that interact with your web browser to accomplish unique tasks or duties. Examples include: automatic web page form filling, time use tracking, and media managers.

Waterfox does not support or sanction this use of Accessibility Service and suggests these application vendors migrate their software to more appropriate browser extension mechanisms.

Waterfox recommends disabling or uninstalling these applications if they enable Waterfox Accessibility Service.

### Malware and Adware

Waterfox Accessibility Service can be abused by malware, if present, to monitor user behavior or access user information on the web.

If you suspect your device is infected with malware, consider purchasing and running a competent anti-malware software product to address the issue.

### What is the impact of having Waterfox Accessibility Service enabled?

- Waterfox Accessibility Service may negatively impact Waterfox browsing performance
- Third party applications may be monitoring your web surfing activity
- Waterfox stability may be adversely affected

### My Accessibility Service Indicator is visible, what should I do?

A 3rd party application is accessing your browser through Waterfox Accessibility Service. Investigate what software might be involved to determine if you feel this access is acceptable. If you do not, consider uninstalling or disabling the application accessing Waterfox Accessibility Service. If this is not possible, consider disabling Waterfox Accessibility Service within Waterfox.

1. Enter _about:support_ in the address bar. The Troubleshooting Information page will open.
2. Find the "Accessibility" section and look at the value in the "Accessibility Instantiator" entry.

- blank - No client information was retrieved
- An application path that points to a program that accessed Waterfox Accessibility Service.

| Example path information
| C:\Windows\System32\Magnify.exe
|

- An encoded value, for example: 'NVDA' indicating Waterfox recognized the application. Listed below are common values and a description of the client detected.

| Value
| Description
|
| 'NVDA'
| NVDA screen reader
|
| 'JAWS'
| A compatible version of JAWS screen reader
|
| 'OLDJAWS'
| An incompatible version of JAWS screen reader detected
|

## Should I disable Waterfox Accessibility Service?

### Assistive Technologies

Do not disable Waterfox Accessibility Service if you or someone who shares your device accesses the web through Waterfox using any type of physical impairment assistive software.

### Anti-Virus and Anti-Malware Browser Plugins

If you determine an anti-virus software extension is enabling Waterfox Accessibility Service Waterfox recommends you disable this 3rd party software feature. If a disable configuration option is not available Waterfox recommends disabling Waterfox Accessibility Service from within Waterfox.

### Enterprise or Educational Monitoring and Access

Users in enterprise or educational networks should contact their administrator about disabling Waterfox Accessibility Service.

### Niche Shareware or Freeware applications

If you determine a 3rd party desktop application is enabling Waterfox Accessibility Service and you are experiencing slowness or other performance related problems in Waterfox, Waterfox recommends you disable or uninstall the 3rd party application. If you are unable to disable or uninstall, Waterfox recommends disabling Waterfox Accessibility Service from within Waterfox as a work around.

## How do I disable Waterfox Accessibility Service?

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference accessibility.force_disabled.
3. Observe the **Value** column of the accessibility.force_disabled row.
   - If it is set to 1 then do nothing.
   - If it is set to 0, double-click on it to open an editing field, type 1, then click the blue check mark button or press the Enter key to complete the update.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [What is the Accessibility Service Indicator?](https://support.mozilla.org/en-US/kb/accessibility-services). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/accessibility-services#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
