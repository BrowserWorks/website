---
slug: /support/waterfox-protection-against-fingerprinting
title: "Waterfox’s protection against fingerprinting"
---

Like other browsers, Waterfox’s functionality is influenced by your operating system, hardware, graphics cards, additional software, and even the fonts you install. Some website technologies, like HTML5 Canvas, can even uniquely identify you based on how your computer draws images.

Some websites, particularly those using HTML5 Canvas, look at this unique combination of factors and assign you a number, or a “fingerprint”, which makes you identifiable across the Web. This “fingerprint” is potentially used to profile you for targeted content without the use of cookies.

Waterfox already has an [Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop) feature that blocks a list of known "fingerprinters" when your privacy settings are set to Standard (the default) or Strict. **Fingerprinting Protection** is a different, experimental feature under heavy development in Waterfox. It is likely that it may degrade your Web experience so we recommend it only for those willing to test experimental features.

## How am I protected?

If a website tries to extract your data, Waterfox will warn you with a prompt in the address bar. You can choose whether to allow the website to extract your data. This is the most common way to observe this protection.

![Fx75-HTML5Canvas](/assets/docs/2020-04-24-10-28-54-496d8e.png)

However, the Canvas Permission Prompt is not the only thing that Fingerprinting Protection is doing. Fingerprinting Detection changes how you are detected online:

- Your timezone is reported to be UTC
- Not all fonts installed on your computer are available to webpages
- The browser window prefers to be set to a specific size
- Your browser reports a specific, common version number and operating system
- Your keyboard layout and language is disguised
- Your webcam and microphone capabilities are disguised
- The Media Statistics Web API reports misleading information
- Any Site-Specific Zoom settings are not applied
- The WebSpeech, Gamepad, Sensors, and Performance Web APIs are disabled

This is not an exhaustive list - other features may be altered or disabled.

## How do I enable or disable this protection?

Currently, Fingerprinting Protection is an experimental feature enabled by a confirmation flag set in about:config. It can also be enabled by Web Extensions.

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Search for privacy.resistFingerprinting and see if it is bolded and set to true. If so, you, or an extension you installed, has enabled this preference. You can double-click the preference to toggle the setting.

If you discover the setting has become re-enabled, it is likely a Web Extension you have installed is setting it for you.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox’s protection against fingerprinting](https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
