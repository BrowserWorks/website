---
slug: /support/server-not-found-connection-problem
title: "Server Not Found - Troubleshoot connection problems"
---

If you have a problem connecting to a website, you may see error messages like **Server Not Found**. This article describes how to troubleshoot problems that cause this error.

- For troubleshooting other error messages, see [Error loading websites](/support/websites-dont-load-troubleshoot-and-fix-errors).

## Try another browser

To begin, try opening a website in another browser (such as Internet Explorer).

- If all other browsers cannot load the website, move on to the [No browsers can load websites](#no-browsers-can-load-websites) section.
- If the other browsers can load the website, skip ahead to the [Waterfox cannot load websites but other browsers can](#waterfox-cannot-load-websites-but-other-browsers-can) section.

## No browsers can load websites

If neither Waterfox nor your other browser can load websites, your problem is not in Waterfox so you should seek help elsewhere. [Microsoft support](https://support.microsoft.com) includes these articles:

- [Fix Wi-Fi connection issues in Windows](https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c)
- [Fix network connection issues in Windows](https://support.microsoft.com/en-us/windows/fix-network-connection-issues-in-windows-166a28c4-14c1-bdb1-473c-09c1571455d8)

You should also check the following:

- Make sure your modem and/or router are both on and are not indicating errors.
- If you are using a wireless connection, make sure that you are connected to the right access point.
- Make sure your Internet security software (including firewalls, antivirus programs, anti-spyware programs, and more) is not blocking connections to the Internet. For instructions on how to configure these programs, see the [Configure firewalls so that Waterfox can access the Internet](/support/configure-firewalls-so-waterfox-can-access-internet) article.
- If you use a proxy server, make sure that the proxy server can connect to the Internet. For instructions on configuring proxy settings in Waterfox, see [Waterfox connection settings](#waterfox-connection-settings) below.

## Waterfox cannot load websites but other browsers can

If Waterfox cannot load websites, but your other browser can, follow the instructions below.

### Cannot load websites after updating Waterfox

If you were able to load websites until you updated Waterfox, your Internet security software (including firewalls, antivirus programs, anti-spyware programs, and more) is likely preventing Waterfox from connecting to the Internet. Some Internet security programs can block Internet access even when they are in a "disabled" state.

In general, you should remove Waterfox from your program's list of trusted or recognized programs, then add it back. For instructions on how to configure these programs, see the [Configure firewalls so that Waterfox can access the Internet](/support/configure-firewalls-so-waterfox-can-access-internet) article.

### Waterfox connection settings

If you connect to the Internet through a proxy server that is having connection problems, you will not be able to load websites. To check your [connection settings in Waterfox](/support/connection-settings-waterfox):

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Scroll down to **Network Settings** and click Settings....
4. Change your proxy settings:
   - If you don't connect to the Internet through a proxy (or don't know whether you connect through a proxy), select **No Proxy**.
   - If you connect to the Internet through a proxy, compare Waterfox's settings to another browser's (such as Internet Explorer - see [Microsoft's guide to proxy settings](https://docs.microsoft.com/en-us/internet-explorer/ie11-deploy-guide/auto-configuration-and-auto-proxy-problems-with-ie11)).
5. Click OK to close the Connection Settings window.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

### DNS Prefetching

[DNS Prefetching](https://developer.mozilla.org/En/Controlling_DNS_prefetching) is a technique Waterfox uses to speed up loading new websites. To disable DNS Prefetching:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the **Search** field at the top of the page, enter network.dns.disablePrefetch.
3. If the preference does not already exist, select **Boolean** and click the _Add_ <img alt="Fx71aboutconfig-AddButton" class="inline-image" src="/assets/docs/2019-11-04-06-37-13-6f14d8.png"> button to create the preference.
4. Change the preference value from false to **true** by pressing the _Toggle_ <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> button.

### IPv6

Waterfox supports [IPv6](http://en.wikipedia.org/wiki/IPv6) by default, which may cause connection problems on certain systems.
To disable IPv6 in Waterfox:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the **Search** field, enter network.dns.disableIPv6
3. In the list of preferences, click the _Toggle_ <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> button next to network.dns.disableIPv6 to change its value from false to **true**.

## Waterfox cannot load certain websites

If you find that Waterfox can load some websites but not others, first clear your Waterfox cookies and cache:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

### Check for malware

If clearing your cookies and cache did not enable you to load the websites that did not work in Waterfox, you should check your computer for [malware](http://en.wikipedia.org/wiki/Malware). Certain types of malware are known to target Waterfox and can prevent it from loading various websites:

- If you have an antivirus or Internet security program, update its detections database and do a full scan of your system.
- If you still have problems, see [How do I get rid of malware?](/support/troubleshoot-waterfox-issues-caused-malware#how-do-i-get-rid-of-malware).

**_Based on information from [Error loading websites (mozillaZine KB)](http://kb.mozillazine.org/Error_loading_websites)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Server Not Found - Troubleshoot connection problems](https://support.mozilla.org/en-US/kb/server-not-found-connection-problem). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/server-not-found-connection-problem#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
