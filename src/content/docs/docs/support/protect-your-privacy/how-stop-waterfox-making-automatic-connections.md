---
slug: /support/how-stop-waterfox-making-automatic-connections
title: "How to stop Waterfox from making automatic connections"
---

Some people are concerned about the connections Waterfox makes to the Internet, especially when those connections are made for no apparent reason (see Waterfox's [Waterfox Browser Privacy Notice](/docs/policies/privacy) for additional information). This article explains various reasons why Waterfox may make a connection to the Internet and how you can stop it from doing so, if you wish.

## Automatic updates and Security

### Auto-update checking

**Warning**: Disabling update checking is not recommended and will leave you open to security vulnerabilities that get fixed in newer versions.
Waterfox occasionally checks to see if any updates are available for itself and for your search engines. The ability to disable Waterfox update checking was removed in Waterfox 63. Advanced users and IT administrators can use a policy to disable Waterfox update checks. See [Managing Waterfox Updates](/support/managing-waterfox-updates).

Waterfox also checks to see if any updates are available for your add-ons (extensions, themes). To disable this check:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
2. At the top of the tab, click the "Tools for all add-ons" <img alt="Add-on Tools Icon" class="inline-image" src="/assets/docs/2011-03-18-04-38-39-afb3f4.png"> menu, uncheck **Update Add-ons Automatically** and then select **Reset All Add-ons to Update Automatically**.

### Blocklist updating

**Warning**: Disabling the blocklist is not recommended, as it may result in you using untrustworthy add-ons, revoked certificates or unstable graphics drivers.
Waterfox may be updating its blocklist, which is used to block malicious extensions, vulnerable plugins, revoked certificates and graphics drivers known to cause crashes. For more information, see [Blocklisting](https://wiki.mozilla.org/Blocklisting) (WaterfoxWiki), [Blocklisting/Graphics](https://wiki.mozilla.org/Blocklisting/Graphics) (WaterfoxWiki), the [Revoking Intermediate Certificates: Introducing OneCRL](https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/) blog post and the article [Add-ons that cause stability or security issues are put on a blocklist](/support/add-ons-cause-issues-are-on-blocklist). To disable this feature:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference extensions.blocklist.enabled.
3. Observe the **Value** column of the extensions.blocklist.enabled row.
   - If it is set to false then do nothing.
   - If it is set to true, double-click on it to set it to false.

### Anti-phishing and malware protection lists updating

**Warning**: Disabling phishing and malware protection is not recommended, as it will leave you vulnerable to malicious or unwanted downloads and to untrustworthy websites that try to steal your financial information and/or your identity.
[Phishing, unwanted software and malware protection](/support/how-does-phishing-and-malware-protection-work) lists may be updating. To turn this off:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. Uncheck **Block dangerous and deceptive content**.

In addition, when you download an application file, Waterfox will verify its signature. If it is signed, Waterfox then compares the signature with a list of known safe publishers. For files that are not identified by the lists as “safe” (allowed) or as “malware” (blocked), Waterfox asks Google’s Safe Browsing service if the software is safe by sending it some of the download’s metadata. To turn off this part of malware protection:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference browser.safebrowsing.downloads.remote.enabled.
3. Observe the **Value** Column of the browser.safebrowsing.downloads.remote.enabled row.
   - If it is set to false then do nothing.
   - If it is set to true then double-click on it to set it to false.

### Tracking protection list updating

The [tracking protection](/support/content-blocking) list may be updating itself. To turn this off:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select thePrivacy & Security panel.
3. Under Content Blocking, choose the **Custom** setting.
4. Uncheck **Trackers**.

### Secure website certificates

When you visit a secure website (i.e. "https"), Waterfox will validate the website's certificate. This may involve communicating with a third-party status provider specified by the certificate over a protocol named [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) to confirm that the certificate is still valid. To turn this off:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. In the _Security_ section under _Certificates_, uncheck **Query OCSP responder servers to confirm the current validity of certificates**.

### Login breach information

Waterfox Monitor warns you if your online accounts were involved in a known data breach.

For more information, see _[Waterfox Password Manager - Alerts for breached websites](/support/waterfox-password-manager-alerts-breached-websites)_.

To get the latest login breach information and more, Waterfox connects to `firefox.settings.services.mozilla.com`

## Prefetching

### Link prefetching

Waterfox will prefetch certain links if any of the websites you are viewing uses the special prefetch-link tag. For more information, please see the [Link Prefetching FAQ](https://developer.mozilla.org/en/Link_prefetching_FAQ). To disable Link prefetching:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference network.prefetch-next.
3. Observe the **Value** column of the network.prefetch-next row.
   - If it is set to false then do nothing.
   - If it is set to true, double-click on it to set it to false.

### DNS prefetching

In order to reduce latency, Waterfox will proactively perform domain name resolution on links that the user may choose to follow as well as URLs for items referenced by elements in a web page. For more information, please see the [DNS Prefetching blog post](http://bitsup.blogspot.co.at/2008/11/dns-prefetching-for-waterfox.html). To disable DNS prefetching:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference network.dns.disablePrefetch.
3. Observe the **Value** column of the network.dns.disablePrefetch row.
   - If it is set to true then do nothing.
   - If it is set to false, double-click on it to set it to true.

### Speculative pre-connections

To improve the loading speed, Waterfox will open predictive connections to sites when the user hovers their mouse over thumbnails on the New Tab Page or the user starts to search in the Search Bar, or in the search field on the Home or the New Tab Page. In case the user follows through with the action, the page can begin loading faster since some of the work was already started in advance. To disable this feature:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference network.http.speculative-parallel-limit.
3. Observe the **Value** column of the network.http.speculative-parallel-limit row.
   - If it is set to 0 then do nothing.
   - If it is set to a different value, double-click on it to set it to 0.

### Add-on list prefetching

Each time the Add-ons manager is opened, Waterfox prefetches a list of add-ons to improve responsiveness of the Get Add-ons pane. This connection is not made if the add-ons manager is not opened.

## User-invoked content

### Home page loading

Your home page may be loading. To change your home page to something that doesn't generate connections to the Internet:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Either set **When Waterfox starts** to **Show a blank page** or set it to **Show my home page** and click Restore to Default. Close the about:preferences page.

### Extensions

An extension you have installed may be making a connection to a website that it relies on. For example, a connection to a website to synchronize your bookmarks, a connection to a website to update a list of sites to block, etc. Or it is possible an extension could be changing the expected behavior of Waterfox in other ways. For example, FasterFox extension has an option to prefetch all links.
To disable or remove your extensions, see the [Disable or remove Add-ons](/support/disable-or-remove-add-ons) article.

Waterfox also checks to see if any updates are available for your add-ons (extensions, themes). To disable this check:

**Warning**: Disabling add-on update checking is not recommended and leaves you open to security vulnerabilities that get fixed in newer versions.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
2. At the top of the tab, click the "Tools for all add-ons" <img alt="Add-on Tools Icon" class="inline-image" src="/assets/docs/2011-03-18-04-38-39-afb3f4.png"> menu, uncheck **Update Add-ons Automatically** and then select **Reset All Add-ons to Update Automatically**.

### Downloads restarted

When you start Waterfox, any interrupted downloads from your previous browsing session may be automatically resumed.

1. Press Ctrl + J to open the [Downloads window](/support/where-find-and-manage-downloaded-files-waterfox).
2. Ensure nothing is currently being downloaded.

### Search plugin icon loading

When you [add a custom search plugin](/support/add-or-remove-search-engine-waterfox#add-a-search-engine) that doesn't come with an included icon, Waterfox might look up the icon at a remote address that is specified in the search plugin once and cache it for future use.

### Waterfox Sync

If you're using [Waterfox Sync](https://www.mozilla.org/firefox/sync/), it will establish regular connections in order to synchronize your data to Waterfox's Sync servers and across your connected devices.

## Waterfox content

:::note
The [Configuration Editor for Waterfox](/support/about-config-editor-waterfox) article describes in detail how to use _about:config_ to modify preferences.
:::

### Contextual feature recommendations and other notifications

Waterfox may make [feature recommendations](/support/recommendations-waterfox) specific to a type of website you're on or relevant to a current task. You can disable connections by setting _browser.newtabpage.activity-stream.feeds.asrouterfeed_ to **false**.

### Experiments or studies

- To disable new feature experiments, set **messaging-system.rsexperimentloader.enabled** to **false**.
- To disable the running of experiments, set **app.normandy.optoutstudies.enabled** to **false**. This is not necessary if **app.normandy.enable** is also set to false.
- To disable studies, feature rollouts and emergency hotfixes related to Normandy, set **app.normandy.enabled** to **false**.

### Snippets

If you use the built-in default homepage about:home, Waterfox will show some Waterfox related content around the search box ("Snippets"), which is updated once a day. If you'd like to disable connections to Waterfox's snippets server:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the _about:config_ page, search for the preference browser.aboutHomeSnippets.updateUrl.
3. Double-click on it and set its value to a blank string.

### Geolocation for default search engine

In order to set the right default search engine for your location, Waterfox will perform a geolocation lookup once by contacting Waterfox's servers and store the country-level result locally. This connection happens on the first start of Waterfox - in case you want to prohibit that, you will have to preconfigure the browser and set the browser.search.geoip.url preference to a blank string.

### "What's new" page

After a browser update, Waterfox might show an additional tab next to your usual homepage to offer more information on changes or new features included in the update. To disable this page from being shown:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference browser.startup.homepage_override.mstone.
3. Double-click on it and set its value to ignore.

### Add-on metadata updating

The Add-ons manager displays information about each add-on you have installed and provides personalized recommendations in the Get Add-ons panel. To keep this data updated, Waterfox will request information from the [Waterfox Add-ons gallery](https://addons.mozilla.org/) once a day (for more information, see [this blog post](https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/)). To disable these updates:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference extensions.getAddons.cache.enabled.
3. Observe the **Value** column of the extensions.getAddons.cache.enabled row.
   - If it is set to false then do nothing.
   - If it is set to true, double-click on it to set it to false.

## Diagnostics

Waterfox can submit certain diagnostics data, including [Telemetry](/support/share-data-waterfox-help-improve-waterfox) and [Crash Reports](/support/mozillacrashreporter) data to Waterfox, to provide information that helps improve the browser. You can disable sharing of this data in Waterfox Options
. To disable the sharing of this data:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel.
3. Uncheck the boxes under the section, _Waterfox Data Collection and Use_.

In addition, Waterfox will ask a small sample of users to rate their experience with Waterfox to get a better insight into the sentiment about the browser. For more information about this see <https://wiki.mozilla.org/Advocacy/heartbeat>. The rating feature will establish a connection to Waterfox's servers at startup, which you can turn off like this:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Find the preference app.normandy.enabled.
3. Set the preference value to false by double clicking on it.

## Media capabilities

### OpenH264 codec

Waterfox will make use of the OpenH264 codec provided by Cisco in order to support the H.264 video codec in WebRTC, a technology allowing for peer-to-peer video communication on the web. For more information about this, see the [OpenH264 Now in Waterfox](http://andreasgal.com/2014/10/14/openh364-now-in-waterfox/) blog post.
The OpenH264 codec is not distributed with Waterfox but gets downloaded at the first start of Waterfox. In case you want to prohibit that, you will have to preconfigure the browser and set the media.gmp-gmpopenh364.enabled preference to false.

### DRM content

To disable this feature, see [Watch DRM content on Waterfox](/support/enable-drm).

### WebRTC

[WebRTC](http://en.wikipedia.org/wiki/WebRTC) (Web Real-Time Communication) is a technology which provides direct browser-to-browser communication (audio, video, filesharing). As it is drafted and implemented at the moment, WebRTC can lead to your local IP address being exposed to websites even when you are behind a VPN or a NAT router - in the WebRTC API this data would be used to set up a peer-to-peer connection between two local clients.

For different methods and granular controls on how to mitigate this issue, see [Media/WebRTC/Privacy](https://wiki.mozilla.org/Media/WebRTC/Privacy) Waterfox Wiki page.

### Send Video To Device

Waterfox contains a "Send Video To Device" feature that is disabled by default, to send HTML5 video content to a Roku, Chromecast or similar device in the same network. When this feature is enabled, Waterfox will send [SSDP](http://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol) packages (Simple Service Discovery Protocol, multicast address 239.255.255.250, port 1900) to the local network, to discover and pair with such a device. This can trigger a firewall dialog asking you if you want to allow such connections.

To disable this feature:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference browser.casting.enabled.
3. Observe the **Value** column of the browser.casting.enabled row.
   - If it is set to false then do nothing.
   - If it is set to true, double-click on it to set it to false.

## Network Detection

Waterfox's captive portal feature tests whether your network connection requires logging in, for example, on a public wi-fi hotspot, by regularly connecting to <http://detectportal.firefox.com/success.txt>. Waterfox will also make connections to this URL to check if your current network supports IPv6.

To disable this feature:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference network.captive-portal-service.enabled (for example, you can type _portal_ in the search box above the list and pause while the list is filtered).
3. Observe the **Value** column of the network.captive-portal-service.enabled row.
   - If it is set to false then do nothing.
   - If it is set to true, double-click on it to set it to false.
4. In the about:config page, search for the preference network.connectivity-service.enabled (for example, you can type _connectivity_ in the search box above the list and pause while the list is filtered).
5. Observe the **Value** column of the network.connectivity-service.enabled row.
   - If it is set to false then do nothing.
   - If it is set to true, double-click on it to set it to false.

## Malware

If your computer is infected with a virus, trojan, spyware, or other malicious software, then Waterfox's Internet connection may be being piggybacked in order for the malware to communicate with its author or to deliver advertisements, etc. If you suspect this is the case, consider seeking advice from a forum specializing in malware removal. For more information, see [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware).

## Loopback connection

A loopback connection (to IP address 127.0.0.1) can be made by Waterfox on non-Unix machines. In this case the browser is communicating with itself as expected, and it is not recommended that this communication be blocked. See [bug 100154](https://bugzilla.mozilla.org/show_bug.cgi?id=100154) for more information.

**_Based on information from [Connections established on startup - Waterfox (mozillaZine KB)](http://kb.mozillazine.org/Connections_established_on_startup_-_Waterfox)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How to stop Firefox from making automatic connections](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
