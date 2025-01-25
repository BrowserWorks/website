---
slug: /support/unsigned-addons
title: "Add-on signing in Waterfox"
---

[Add-ons](/support/find-and-install-add-ons-add-features-to-waterfox) that can change your browser's settings without your consent or steal your information have become increasingly common. Some add-ons can add unwanted toolbars or buttons, change your search settings or inject ads into your computer. Waterfox does now verify that the add-ons you install have been signed by Waterfox, digitally. This article explains the _add-on signing_ feature and how it works.

## What is add-on signing?

Waterfox verifies and "signs" add-ons that follow a set of security guidelines. All add-ons hosted on [addons.mozilla.org](https://addons.mozilla.org) have to go through this process in order to be signed. Add-ons hosted on other sites will need to follow the same guidelines in order to be signed by Waterfox.

**Developers:** To learn more about the add-on signing guidelines, see [Signing and distributing your add-on](https://developer.mozilla.org/en-US/Add-ons/Distribution) and [Review Policies](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Reviews) at Waterfox Developer Network.
While Waterfox currently has a [blocklist](/support/add-ons-cause-issues-are-on-blocklist) system, it is becoming difficult to track and block the growing number of malicious, or unverified add-ons. The add-on signing process requires developers to follow [Waterfox Developer guidelines](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Reviews). Add-on signing in Waterfox helps protect against browser hijackers and other [malware](https://wikipedia.org/wiki/Malware) by making it harder for them to be installed.

Waterfox prevents you from installing unsigned add-ons and disables any unsigned add-ons that are already installed.

## What types of add-ons need to be signed?

[Extensions](/support/find-and-install-add-ons-add-features-to-waterfox#what-types-of-add-ons-can-i-install) (add-ons that add features to Waterfox), [language packs](/support/use-waterfox-another-language) and [Themes](/support/use-themes-change-look-of-waterfox) (add-ons that change the visual appearance of Waterfox) need to be signed. Other types of add-ons do not need to be signed.

## Where would I encounter unsigned add-ons?

Add-ons installed through the [official Waterfox Add-ons site](https://addons.mozilla.org/firefox/) go through security checks before they are published. These add-ons are verified and signed. When you install an add-on through another website, Waterfox checks to make sure that the add-on is digitally signed.

## What can I do if Waterfox disables an installed add-on?

If an unsigned add-on is disabled, you won't be able to use it and the Add-ons manager will show a message that the add-on _could not be verified for use in Waterfox and has been disabled_. You can [remove the add-on](/support/disable-or-remove-add-ons#how-to-remove-extensions-and-themes) from Waterfox and then reinstall a signed version from the [Waterfox Add-ons site](https://addons.mozilla.org/) if one is available.

If a signed version is not available, contact the add-on developer or vendor to see if they can offer an updated and signed version of that add-on. You can also ask them to [get their add-on signed](https://developer.mozilla.org/en-US/Add-ons/Distribution).

### What are my options if I want to use an unsigned add-on? (advanced users)

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.
Waterfox [Extended Support Release (ESR)](https://www.mozilla.org/firefox/organizations/), Waterfox [Developer Edition](https://www.mozilla.org/firefox/developer/) and [Nightly](https://nightly.mozilla.org/) versions of Waterfox will allow you to override the setting to enforce the extension signing requirement, by changing the preference xpinstall.signatures.required to **false** in the [Waterfox Configuration Editor](/support/about-config-editor-waterfox) (_about:config_ page). To override the language pack signing requirement, you would set the preference extensions.langpacks.signatures.required to **false**. There are also special unbranded versions of Waterfox that allow this override. See the WaterfoxWiki article, [Add-ons/Extension Signing](https://wiki.mozilla.org/Add-ons/Extension_Signing) for more information.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Add-on signing in Firefox](https://support.mozilla.org/en-US/kb/unsigned-addons). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/unsigned-addons#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
