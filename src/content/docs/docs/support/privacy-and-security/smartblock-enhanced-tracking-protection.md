---
slug: /support/smartblock-enhanced-tracking-protection
title: "SmartBlock for Enhanced Tracking Protection"
---

[SmartBlock](https://blog.mozilla.org/security/2021/03/23/introducing-smartblock/) stands in for common tracking scripts, which are blocked by [private browsing mode](/support/private-browsing-use-waterfox-without-history) and [strict tracking protection](/support/enhanced-tracking-protection-waterfox-desktop#adjust-your-global-enhanced-tracking-protection-settings). By doing so, it lets pages load more fully, with less breakage, without you having to do anything — all while keeping those tracking scripts blocked.

The difference can be dramatic:

![Smartblock off](/assets/docs/2021-03-16-12-13-52-8d8508.png)![Smartblock on](/assets/docs/2021-03-16-12-14-49-5b9cd4.png)

## Log in with Facebook when you visit third-party sites

SmartBlock lets you log in with your Facebook account when visiting third-party sites in Private Browsing Mode without compromising your privacy while avoiding website breakages. Just click the Facebook login button to log in as you normally would, and SmartBlock will allow only the required Facebook scripts, only when you log in by clicking the login button, and will only allow them for that website.

<img alt="FacebookLoginButton" class="inline-image" src="/assets/docs/2021-07-13-07-34-51-41e9d6.png">

## Disabling SmartBlock

If you're a website developer or advanced user and you wish to disable SmartBlock, you may do so from the [Waterfox Configuration Editor](/support/about-config-editor-waterfox) (about:config page):

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Find the extensions.webcompat.enable_shims preference.
3. Click the _Toggle_ <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> button next to the preference to set it to false.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [SmartBlock for Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/smartblock-enhanced-tracking-protection). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/smartblock-enhanced-tracking-protection#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
