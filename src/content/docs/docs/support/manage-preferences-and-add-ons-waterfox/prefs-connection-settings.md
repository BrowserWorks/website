---
slug: /support/prefs-connection-settings
title: "Connection settings in Waterfox"
---

Your organization or Internet service provider may offer or require you to use a [proxy](https://wikipedia.org/wiki/Proxy_server). A proxy acts as an intermediary between your computer and the Internet. It intercepts all requests to the Internet to see if it can fulfill the request using its cache. Proxies are used to improve performance, filter requests, and hide your computer from the Internet to improve security. Proxies are often part of corporate firewalls.

Connection settings to use a proxy can be set in Waterfox Options
as follows:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go to the **Network Proxy** section.
3. Click Settings…. The **Connection Settings** dialog will open.
   ![Fx63ConnectionSettings](/assets/docs/2018-12-06-05-05-17-d5969d.png)

- **No proxy**: Choose this if you don't want to use a proxy.
- **Auto-detect proxy settings for this network**: Choose this if you want Waterfox to automatically detect the proxy settings for your network.
- **Use system proxy settings**: Choose this if you want to use the proxy settings configured for your operating system.
- **Manual proxy configuration**: Choose this if you have a list of one or more proxy servers. Ask your system administrator for the configuration information. Each proxy requires a hostname and a port number.
  - If the same proxy name and port number are used for all protocols, check **Use this proxy server for all protocols**.
  - **No Proxy For**: List of hostnames or IP addresses that will not be proxied. Use <local/> to bypass proxying for all hostnames which do not contain periods.
- **Automatic proxy configuration URL**: Choose this if you have a [proxy configuration](http://en.wikipedia.org/wiki/Proxy_auto-config) (.pac) file. Enter the URL and click okay to save changes and load the proxy configuration. _file:_ and _data:_ schemes can also be used here (e.g. _file:///c:/proxy.pac_ or _data:,function FindProxyForURL(){return "HTTPS example.com:3443";}_).
  - Reload: The reload button will load the currently available proxy configuration.

:::note
The **Connection Settings** dialog will also show extensions that control how Waterfox connects to the internet. You can disable these extensions by clicking Disable Extension.
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Connection settings in Firefox](https://support.mozilla.org/en-US/kb/connection-settings-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/connection-settings-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
