---
slug: support/how-reset-default-user-agent-waterfox
title: "How to reset the default user agent on Waterfox"
---

A [user agent](https://wikipedia.org/wiki/User_agent) tells websites what type of browser and operating system you're using. This information helps the web server deliver content that's compatible with your browser. If websites tell you that your browser is outdated or incompatible even though Waterfox is up to date, an incorrect user agent may be the cause. This article explains how to fix problems with your Waterfox user agent so that websites work properly.

## User agent issues

You can change Waterfox's user agent to trick websites into thinking that you're using a different browser or operating system. Web developers might do this to see how their websites will appear on different systems and browsers. Sometimes, add-ons and other installations can change your user agent without your knowledge.

Websites may not display correctly or may show a message that your browser is outdated or incompatible, based on the detected user agent. It's important to switch Waterfox back to the _default user agent_ so that websites work properly.

## View your user agent

To view your user agent, click the Waterfox menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select More Troubleshooting Information. This will open a page with the address _about:support_. The _Application Basics_ section will show your current Waterfox version and will include a **User Agent** entry. For example, the _default user agent_ entry for Waterfox on Windows 10 (64-bit) would appear as:

`Waterfox/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Waterfox/83.0`

:::note
If your user agent shows a previous Windows version, such as Windows NT 6.1 (Windows 7) instead of Windows NT 10.0 (Windows 10), make sure you are not running Waterfox in Compatibility mode. You can open the Properties of the Waterfox desktop shortcut from the right-click context menu. Check the _Compatibility_ tab and make sure that the compatibility mode option is not selected.
:::

Sites such as [What is my user agent? (WhatIsMyBrowser.com)](https://www.whatismybrowser.com/detect/what-is-my-user-agent) and [What's my user agent? (whatsmyua.info)](https://www.whatsmyua.info/) can also show you the user agent detected by websites.

## Add-on issues

Add-ons such as the [User-Agent Switcher](https://addons.mozilla.org/firefox/addon/uaswitcher/) extension can change the user agent that websites detect. See if you can restore the default user agent in your extension settings. You can also temporarily restart Waterfox with all add-ons disabled (see [Diagnose Waterfox issues using Troubleshoot Mode](/support/diagnose-waterfox-issues-using-troubleshoot-mode) for details) and, if the problem goes away, [disable or remove any add-on](/support/disable-or-remove-add-ons) you think may be the cause. If you can't resolve the problem this way, follow the steps below to reset the default user agent.

## Reset the default Waterfox user agent

You can reset your user agent as follows:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Search for **useragent** by typing it into the _Search preference name_ field.
3. Click the _Reset_ <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> or _Delete_ <img alt="Fx71aboutconfig-DeleteButton" class="inline-image" src="/assets/docs/2019-10-29-08-53-36-604f20.png"> button on each of these preferences, if they exist:

- general.useragent.extra.firefox
- general.useragent.extra._productName_ – where _productName_ can be the name of some third party software (e.g., _microsoftdotnet_)
- general.useragent.locale
- general.useragent.override
- general.useragent.security

See [Configuration Editor for Waterfox](/support/about-config-editor-waterfox) for more information about using the _about:config_ page to reset or delete preferences.

:::note
If the above solution doesn't resolve the problem, check whether you have the privacy.resistFingerprinting preference set to true and, if so, double-click on the preference to reset it to false. This setting can change the user agent and cause this type of issue. For more information, see [Waterfox's protection against fingerprinting](/support/waterfox-protection-against-fingerprinting).
:::

After resetting your user agent, you may need to restart Waterfox and clear your cookies and cache:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click History and select Clear Recent History…
3. In the _Time Range to clear:_ drop-down, select **Everything**.
4. Below the drop-down menu, select both **Cookies** and **Cache**. Make sure other items you want to keep are not selected.
5. Click OK.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How to reset the default user agent on Firefox](https://support.mozilla.org/en-US/kb/how-reset-default-user-agent-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/how-reset-default-user-agent-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
