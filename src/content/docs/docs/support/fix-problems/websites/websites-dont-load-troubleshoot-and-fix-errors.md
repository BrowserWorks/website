---
slug: support/websites-dont-load-troubleshoot-and-fix-errors
title: "Websites don’t load - troubleshoot and fix error messages"
---

**Are you having trouble getting a website to load?** Don't worry — we're here to help. This article will show you how to fix the problem so you can get back to surfing the web.

:::note
If you're having trouble with a website, click the padlock icon <img alt="padlock" class="inline-image" src="/assets/docs/icons/security.svg"> in the address bar to see if Waterfox has blocked insecure parts of the page. See [Mixed content blocking in Waterfox](/support/mixed-content-blocking-waterfox) for details.
:::

## First, let's figure out where the problem is

_With a little detective work, we can narrow down the cause of the problem._

1. Open a new tab and check to see if you can load another website like google.com or mozilla.org.
   - If you can open another site, skip down to [The problem only happens with certain websites](#the-problem-only-happens-with-certain-websites).
   - If you can't open another site, continue on to the next step.
2. Launch another browser, like Internet Explorer or Microsoft Edge, and try to open the site you were having problems with.
   - If the site works in another browser, see [The problem only happens in Waterfox](#the-problem-only-happens-in-waterfox).
   - If the site doesn't work in another browser, check out [The problem happens in all web browsers](#the-problem-happens-in-all-web-browsers).

## The problem only happens with certain websites

If you see any of these error messages, it might just be a problem with Waterfox's cache:

- **The connection was interrupted**
- **The connection was reset**
- **The connection has timed out**

### Try clearing Waterfox's cookies and cache

_Do these steps and then reload the website you're having trouble with._

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

If clearing Waterfox's cookies and cache didn't work, it's probably a sign that there is a problem with the website itself. In that case you'll just have to wait for it to get fixed. With big sites like Twitter or Facebook this may only be a few minutes.

**If you don't see any of the error messages above, check to see if any of the specific problems below match what you see:**

### The website loads but doesn't work properly

If the website doesn't look right or doesn't work the way it's supposed to, you should check out the following articles:

- [Websites look wrong or appear differently than they should](/support/websites-look-wrong-or-appear-differently)
- [Fix problems that cause images to not show](/support/fix-problems-images-not-show)
- [Fix common audio and video issues](/support/fix-common-audio-and-video-issues)
- [Websites show a spinning wheel and never finish loading](/support/websites-show-spinning-wheel-never-finish-load)
- [Fix login issues on websites that require a username and password](/support/fix-login-issues-on-websites-require-passwords). You may receive an error similar to _We were unable to process your login request_ or _An unspecified error has occurred_ when you attempt to sign in to websites with your username and password, or the login may simply fail.

### The problem only happens on a secure (https) website

Look at the web address in the location bar. Does it start with **https://** (notice the "**s**")? If so, check if you see one of the following error messages:

- For a "Warning: Potential Security Risk Ahead" error page, see the articles [What do the security warning codes mean?](/support/what-does-your-connection-is-not-secure-mean) and [How to troubleshoot security error codes on secure websites](/support/error-codes-secure-websites).
- For a "Secure Connection Failed" or "Did Not Connect: Potential Security Issue" error page, see [Secure connection failed and Waterfox did not connect](/support/secure-connection-failed-waterfox-did-not-connect).
- For a "Your Computer Clock is Wrong" error page, see [How to troubleshoot time related errors on secure websites](/support/troubleshoot-time-errors-secure-websites).

## The problem only happens in Waterfox

If another web browser works just fine, one of following solutions should fix things:

- [Waterfox can't load websites but other browsers can](/support/waterfox-cant-load-websites-other-browsers-can) - if you can view websites in browsers other than Waterfox.
- [Fix problems connecting to websites after updating Waterfox](/support/fix-problems-connecting-websites-after-updating) - if you experience connection problems after updating Waterfox.

If you see the following error messages, Waterfox is trying to access the Internet through a [proxy server](http://en.wikipedia.org/wiki/Proxy_server):

- **The proxy server is refusing connections**
- **Unable to find the proxy server**

If you connect to the Internet through a proxy, compare Waterfox's settings to Internet Explorer's — see [Microsoft's guide to proxy settings](https://docs.microsoft.com/en-us/internet-explorer/ie11-deploy-guide/auto-configuration-and-auto-proxy-problems-with-ie11).

To check your [connection settings in Waterfox](/support/connection-settings-waterfox):

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to the **Network Settings** section.
3. Click Settings…. The **Connection Settings** dialog will open.
4. Change your proxy settings:
   - If you don't connect to the Internet through a proxy (or don't know whether you connect through a proxy), select **No Proxy**.
5. Close the Connection Settings dialog.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## The problem happens in all web browsers

This is probably a problem with your Internet connection. See [Waterfox and other browsers can't load websites](/support/waterfox-and-other-browsers-cant-load-websites) for some troubleshooting suggestions.

## Other, less common problems

- **A website reports that Waterfox is outdated, incompatible or not supported** - see [How to reset the default user agent on Waterfox](/support/how-reset-default-user-agent-waterfox).
- **Malicious website errors** - if you see a "Suspected Attack Site!" or "Suspected Web Forgery!" warning, Waterfox has blocked access to the website you're visiting to protect you from [malware](http://en.wikipedia.org/wiki/Malware) or [web forgery (phishing)](http://en.wikipedia.org/wiki/Phishing).
- **Offline mode** - if you see a message about offline mode, you may have set Waterfox not to use your network connection. Make sure your computer has a network connection and then:
  - Click the menu icon <img alt="New Fx Menu" class="inline-image" src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/placeholder.688345f843bb37ed.gif">, click More and make sure Work Offline is unchecked.
- **The page isn't redirecting properly** - this problem can be caused by problems with cookies. See [Websites say cookies are blocked - Unblock them](/support/websites-say-cookies-are-blocked-unblock-them) for more information.
- If you get a **File not found** error, try the troubleshooting steps in these articles:
  - [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems)
  - [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware)
- **Content Encoding Error** - if you get the error message _Content Encoding Error_ or _The page you are trying to view cannot be shown because it uses an invalid or unsupported form of compression_, use these steps to diagnose and fix them:
  1.  Check the settings of any Internet security applications you use (including firewalls, anti-virus or anti-spyware programs, and privacy protection programs). You should try to remove any permissions those applications have for Waterfox, and then add them again. For program-specific instructions for a number of applications, see [Configure firewalls so that Waterfox can access the Internet](/support/configure-firewalls-so-waterfox-can-access-internet).
  2.  Follow the [Standard troubleshooting steps](/support/troubleshoot-and-diagnose-waterfox-problems).
- **This address is restricted** - this error occurs when you are attempting to connect to a web server on a [port](http://en.wikipedia.org/wiki/Port_%28computer_networking%29) that is reserved for another application. If the website you are trying to visit contains a colon followed by a number in its address (for example, *http://website.com:23*), try removing that portion (*http://website.com*) or replacing it with _:80_ (*http://website.com:80*). If this doesn't work, you may have been given an incorrect address.
- **DNS cache is invalid** - DNS is the service that converts a website's domain name into the IP address that Waterfox uses to connect to a website. This information is saved to your computer's DNS cache in order to improve speeds. However, if the DNS cache record is corrupt or the website has changed IP address, Waterfox may be directed to the incorrect server. The [Waterfox and other browsers can't load websites](/support/waterfox-and-other-browsers-cant-load-websites#dns-cache) article explains how to flush the DNS cache. For additional information, see <https://www.whatsmydns.net/flush-dns.html>.

**_Based on information from [Error loading websites (mozillaZine KB)](http://kb.mozillazine.org/Error_loading_websites)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Websites don’t load - troubleshoot and fix error messages](https://support.mozilla.org/en-US/kb/websites-dont-load-troubleshoot-and-fix-errors). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/websites-dont-load-troubleshoot-and-fix-errors#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
