---
slug: support/https-only-prefs
title: "HTTPS-Only Mode in Waterfox"
---

This security-enhancing mode forces all connections to websites to use a secure encrypted connection called HTTPS. Most websites already support HTTPS; some support both HTTP and HTTPS. Enabling this mode guarantees that all of your connections to websites are upgraded to use HTTPS and hence secure. Learn more about the benefits and how to enable HTTPS-Only Mode.

## What is the difference between HTTP and HTTPS?

[HTTP](https://wikipedia.org/wiki/Hypertext_Transfer_Protocol) stands for _Hypertext Transfer Protocol_ and is the foundational protocol for the web and encodes basic interactions between browsers and web servers. The problem with the regular HTTP protocol is that the data transferring from server to browser is not encrypted, meaning data can be viewed, stolen, or altered. [HTTPS](https://wikipedia.org/wiki/HTTPS) protocols fix this by using an SSL (secure sockets layer) certificate, this creates a secure encrypted connection between the server and the browser which protects sensitive information.

## Enable HTTPS-Only Mode

When you use HTTPS-Only Mode, this ensures all of your connections are encrypted and secure. So you have peace of mind that no one can snoop on the content of the pages you visit or hack into your connection to a website to steal your passwords, credit card information, or other personal information. This is especially useful when you are using a public Wi-Fi, where you can’t be sure of the integrity of your internet connection.

For example, when HTTPS-Only Mode is active and a site is visited such as `http://example.com`, Waterfox will silently upgrade to `https://example.com`:

![ConnectionUpgradeExample](/assets/docs/2020-10-27-12-10-49-c7901b.gif)

### Enable/Disable HTTPS-Only Mode

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select Privacy & Security from the left menu.
3. Scroll down to **HTTPS-Only Mode**.
4. Use the radio button to select whether to enable or disable HTTPS-Only Mode, or select to only enable it for [private windows](/support/private-browsing-use-waterfox-without-history).
   ![Fx90HTTPS-OnlyModeSettings](/assets/docs/2021-07-26-15-12-54-a011a8.png)

## Secure Connection Not Available

Some websites only support HTTP and the connection cannot be upgraded. If HTTPS-Only Mode is enabled and an HTTPS version of a site is not available, you will see a _Secure Connection Not Available_ page:

![SecureConnectionNotAvailable](/assets/docs/2020-10-27-12-22-11-9c2095.png)

If you click Continue to HTTP Site you accept the risk and then will visit an HTTP version of the site. HTTPS-Only Mode will be turned off temporarily for that site.

Click the Go Back button if you want to avoid any unencrypted connections.

## Turn off HTTPS-Only Mode for certain sites

If HTTPS-Only Mode is enabled, and you frequently visit a website that does not support HTTPS or does not seem to be rendering certain elements of the page correctly, you can turn off HTTPS-Only Mode for a particular site.

1. Click the Lock icon in the address bar.
2. Use the dropdown under HTTPS-Only Mode and select Off.
   ![Fx83TurnOffHTTPSOnlyPerSite](/assets/docs/2020-10-28-17-27-47-5b8557.png)

## Add exceptions for HTTP websites when you’re in HTTPS-Only Mode

If a website isn’t displaying correctly, and it’s one you trust and want to visit, you can turn off HTTPS-Only Mode for that site. Exceptions allow you to visit an HTTP version of a website while you’re browsing in HTTPS-Only Mode. Exceptions can be applied temporarily for a single browsing session, or permanently. To add an exception for a website:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select Privacy & Security from the left menu.
3. Scroll down to **HTTPS-Only Mode**.
4. Select **Enable HTTPS-Only Mode in all windows**.
5. Click Manage Exceptions… to open the _Exceptions_ dialog.
   ![Fx90HTTPS-OnlyModeExceptions](/assets/docs/2021-07-26-15-14-03-e391da.png)
6. Type in the exact address of the HTTP website for which you want to turn off HTTPS-Only Mode.
7. Select Turn Off to permanently turn off HTTPS-Only Mode for that website, or select Turn Off Temporarily to turn it off for your current browsing session.
8. Click Save Changes.

:::note
Exceptions cannot be added for [private windows](/support/private-browsing-use-waterfox-without-history). If you want to learn more about HTTPS connections in private windows, visit [HTTPS by Default in Private Browsing Mode](https://blog.mozilla.org/security/2021/08/10/waterfox-91-introduces-https-by-default-in-private-browsing/).
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [HTTPS-Only Mode in Firefox](https://support.mozilla.org/en-US/kb/https-only-prefs). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/https-only-prefs#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
