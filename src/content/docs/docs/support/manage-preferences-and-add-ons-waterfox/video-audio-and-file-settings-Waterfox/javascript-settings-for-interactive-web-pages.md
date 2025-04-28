---
slug: support/javascript-settings-for-interactive-web-pages
title: "JavaScript settings and preferences for interactive web pages"
---

This article describes what JavaScript® is and how to allow or block it on certain websites.

## What is JavaScript?

[JavaScript](http://wikipedia.org/wiki/JavaScript) is a standard programming language that can be included in web pages to provide functionality such as menus, sounds, and other interactive features. By default, Waterfox enables the use of JavaScript and requires no additional installation.

## Allow and block JavaScript on certain domains

JavaScript can be used to do things that some people don't like. For better control, you can find and install [JavaScript extensions](https://addons.mozilla.org/en-US/search/?q=JavaScript) or [privacy extensions](https://addons.mozilla.org/firefox/search/?tag=privacy) that let you disable JavaScript, such as these add-ons:

- [NoScript](https://addons.mozilla.org/firefox/addon/noscript): allows JavaScript and other content to run only on websites of your choice.
- [Ghostery](https://addons.mozilla.org/firefox/addon/ghostery): allows you to block scripts from companies that you don't trust.

Note: Some websites use JavaScript for functions such as "on hover" drop-down menus, which may not work in Waterfox on touch-screen computers. A solution is to disable the "HID-compliant touch screen" setting in Windows Device Manager (visit a Windows forum if you need more help); however, this solution will effectively change the touch screen into a plain screen while disabled.

## Websites ask you to enable JavaScript

Websites may tell you that JavaScript is required or ask you to make sure that JavaScript is enabled, even though you don't want JavaScript to be blocked. Turn off any settings to disable JavaScript in your installed extensions or try [disabling your extensions](/support/disable-or-remove-add-ons#disabling-extensions) to see if you can find the problem. You should contact the developer or visit the website for the add-on, to get help with a specific extension.

### For advanced users

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.
JavaScript may be disabled for all websites in Advanced Preferences (_about:config_ page). You can confirm that JavaScript is enabled or reset the preference as follows:

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Find the javascript.enabled preference. It should be set to true by default.
3. If javascript.enabled is set to false, click the Toggle <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> or Reset <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> button to set it back to true.

JavaScript is a trademark or registered trademark of [Oracle Corporation](http://www.oracle.com) in the U.S. and other countries.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [JavaScript settings and preferences for interactive web pages](https://support.mozilla.org/en-US/kb/javascript-settings-for-interactive-web-pages). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/javascript-settings-for-interactive-web-pages#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
