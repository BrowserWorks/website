---
slug: support/advanced-panel-settings-in-waterfox
title: "Advanced panel - Accessibility, browsing, network, updates, and other advanced settings in Waterfox"
---

This article explains the settings available in the **Advanced** panel of the Waterfox Options page. These are settings that aren't used very often, such as proxy settings and various other advanced settings that only some people need.

## General tab

![Fx52AdvancedPanel-General](/assets/docs/2017-11-24-05-16-25-c7ab1b.png)

### Accessibility

- **Always use the cursor keys to navigate within pages**: When this setting is enabled, Waterfox will display a movable cursor in web pages, allowing you to select text with the keyboard. This mode is known as Caret Browsing and you can toggle this mode by pressing F7.

- **Search for text when I start typing**: When this setting is enabled, Waterfox will find within the current web page what you type as you type it. While you are finding typed text in the page, the Find Toolbar will automatically display at the bottom of the window to show information about what you've found.

- **Warn me when websites try to redirect or reload the page**: When this setting is enabled, Waterfox will prevent websites from redirecting you to another page, or automatically reloading.

### Browsing

- **Use autoscrolling**: Autoscrolling is a useful feature which allows you to scroll the page by clicking the middle mouse button (usually the scroll wheel) and moving the mouse up or down. Some people find this annoying, so autoscrolling can be disabled with this setting.

- **Use smooth scrolling**: Smooth scrolling can be very useful if you read a lot of long pages. Normally, when you press Page Down, the view jumps directly down one page. With smooth scrolling, it slides down smoothly, so you can see how much it scrolls. This makes it easier to resume reading from where you were before.

- **Use hardware acceleration when available**: Waterfox can use your computer's graphics processor to display some pages with video and animation. This makes Waterfox faster since your computer's graphics processor is much better than your computer's main processor at displaying these types of things. This box is checked by default but the feature isn't available for all graphics processors. Waterfox will enable it when possible. [Read more about hardware acceleration.](https://hacks.mozilla.org/2010/09/hardware-acceleration/)If you change this setting you must restart Waterfox. To restart Waterfox:

  1.  Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
  2.  Start Waterfox the way you normally do.

- **Check my spelling as I type**: When this setting is enabled, Waterfox will check your spelling and offer possible corrections as you type in web forms. Note that you may need to download a dictionary; to do so, right-click on any text field, enable spellchecking if necessary, and then use the Languages menu to download a dictionary.

## Data Choices tab

![Fx38AdvancedPanel-DataChoices](/assets/docs/2015-07-05-16-15-45-63eca3.png)

- **Enable Waterfox Health Report**: The Waterfox Health Report ([learn more](/support/waterfox-health-report-understand-your-browser-perf)) provides you with information about your browser’s performance and stability over time. This setting is enabled by default. Waterfox uses this data to provide you with meaningful comparisons and tips. Waterfox also aggregates the data that everyone shares to help improve Waterfox.

- **Share additional data (i.e., Telemetry)**: Also enabling this setting will send anonymous data ([learn more](/support/share-data-waterfox-help-improve-waterfox)) to Waterfox about the real world performance of Waterfox. This information will be used to make Waterfox better.

- **Enable Crash Reporter**: If Waterfox crashes, the [Waterfox Crash Reporter](/support/mozillacrashreporter) will appear, asking you if you want to report the crash to Waterfox. When this setting is enabled, the _Tell Waterfox about this crash so they can fix it_ check box in the Waterfox Crash Reporter window will be checkmarked by default.

## Network tab

![Fx38AdvancedPanel-Network](/assets/docs/2015-07-05-16-17-04-42dc03.png)

### Connection

Your organization or Internet service provider may offer or require you to use a proxy, which acts as an intermediary between your computer and the Internet. Proxies are used to improve performance, filter requests, and hide your computer from the Internet to improve security. Proxies are often part of corporate firewalls. For more information on changing your Waterfox connection settings to use a proxy, see [Connection settings in Waterfox](/support/connection-settings-waterfox).

### Cached Web Content

Pages you view are normally stored in a special cache folder for quicker viewing the next time you visit the same page. You can specify the amount of disk space the cache can use here. You can also immediately clear the contents of the cache.

- Clear Now: Immediately clears the current contents of the cache, freeing the disk space used by the cache.
- **Override automatic cache management**: Checking this box allows you to specify the maximum size, in megabytes, of the cache on your computer.

### Offline Web Content and User Data

- Clear Now: Immediately clears data that is being saved by websites for use when you are offline.
- **Tell me when a website asks to store data for offline use**: Allows websites to store data necessary to be used without an internet connection. If you have previously blocked a website from storing data for offline use and changed your mind, you can click the Exceptions… button. Select the site you want to stop blocking, and click Remove. To remove all websites in the list, click Remove All Sites.

## Update tab

### Waterfox updates

- **Automatically install updates (recommended: improved security)**: Waterfox automatically downloads and installs found updates.

  - **Warn me if this will disable any of my add-ons:** If you wish to be prompted if the downloads will disable any installed add-ons, select that setting.

- **Check for updates, but let me choose whether to install them:** Waterfox lets you choose if you want to download and install updates. If you do not choose to do so, you can download them at a later time.
- **Never check for updates (not recommended: security risk):** Waterfox will not check for updates. :::caution
  If you select this setting, you will not receive critical security updates that may keep you safe online unless you frequently do a manual check for updates.
  :::
- To review the history of updates that have been downloaded and installed, click Show Update History.
- **Use a background service to install updates:** Waterfox will use the [Waterfox Maintenance Service](/support/what-waterfox-maintenance-service) when installing updates. This will remove the need to authorize Waterfox to make changes to your computer through the User Account Control dialog in Windows 7 and Vista.

:::note
You must be running Waterfox as an administrator or as the user who originally installed Waterfox to install Waterfox updates.
:::

### Automatically update

- **Search Engines:** Check this to receive automatic updates to your search engines.

## Certificates tab

![Fx38AdvancedPanel-Certificates](/assets/docs/2015-07-05-16-19-52-5e984a.png)

[Certificates](http://en.wikipedia.org/wiki/Public_key_certificate) help perform encryption and decryption of connections to websites.

- **When a server requests my personal certificate:** Some servers ask you to identify yourself with a personal certificate. In order to do so, they ask Waterfox to generate one for you. When you visit the site in the future, Waterfox will ask you for which certificate to use. If you wish to have Waterfox automatically choose a certificate for you, select the **Select one automatically** setting. :::note
  A personal certificate can contain personally identifiable information, such as your name or address. It may therefore harm your privacy if you select the **Select one automatically** setting. If you do, you will not be alerted when a website request your personal certificate, and you may lose the ability to control who can access your personal information.
  :::

- **Query OCSP responder servers to confirm the current validity of certificates**: Waterfox may ask an OCSP (Online Certificate Status Protocol) server to confirm that a certificate is still valid. By default, Waterfox validates a certificate if the certificate provides an OCSP server. You will most likely only need to change this if your Internet environment requires it.

- View Certificates: Click this button to view stored certificates, import new certificates, and back up or delete old certificates in Waterfox.

- Security Devices: Security devices can encrypt and decrypt connections and store certificates and passwords. If you need to use a security device other than the one in Waterfox, click the Security Devices button.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Advanced panel - Accessibility, browsing, network, updates, and other advanced settings in Firefox](https://support.mozilla.org/en-US/kb/advanced-panel-settings-in-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/advanced-panel-settings-in-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
