---
slug: support/about-config-editor-waterfox
title: "Configuration Editor for Waterfox"
---

The Configuration Editor, `about:config` lists Waterfox settings known as _preferences_ that are read from the `prefs.js` and `user.js` files in the [Waterfox profile](/support/profiles-where-waterfox-stores-user-data) and from application defaults. Many of these preferences are advanced settings that are not present in the Options panel. This article describes how to use the `about:config` page to view, change, or reset Waterfox preference settings, if you need to do so.

:::danger
Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.
:::

## Opening `about:config`

Type `about:config` in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter. A warning page may appear. Click Accept the Risk and Continue to go to the `about:config` page.

![Fx71aboutconfig](/assets/docs/2019-10-29-06-52-12-4bec57.png)

Click Show All to view all preferences currently set in the profile or use the _Search preference name_ box to filter the list.

## Searching for preferences

You can use the _Search preference name_ box at the top of the `about:config` page to quickly find specific preferences. For example, if you enter `ocsp` in the Search box, it will bring up the `security.OCSP.enabled` preference.

:::note
Preference names are case-sensitive. Search terms are not.
:::

If you enter a search term and a preference does not exist, you will have the option to add a new preference ([see below](#adding-preferences)).

## Modifying preferences

![Fx71aboutconfigShowAll](/assets/docs/2019-10-29-06-59-50-453560.png)

You can double-click on a preference to change its value or you can do the following:

For a boolean (true-false) preference, click the _Toggle_ <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> button.

For a string (text) or a number preference, click the _Edit_ <img alt="Fx71aboutconfig-EditButton" class="inline-image" src="/assets/docs/2019-10-29-08-54-56-1f86ca.png"> button and enter a new value.

![Fx71aboutconfig-editpref](/assets/docs/2019-10-29-07-17-37-f4876b.png)

Click on the checkmark <img alt="Fx71aboutconfig-Checkmark" class="inline-image" src="/assets/docs/2019-11-04-06-45-04-f67b18.png"> to save the change.

## Resetting or deleting preferences

To reset a preference to its default value, click the _Reset_ <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> button.

To remove an added preference, click the _Delete_ <img alt="Fx71aboutconfig-DeleteButton" class="inline-image" src="/assets/docs/2019-10-29-08-53-36-604f20.png"> button.

If you added the preference entry yourself, it will no longer be listed after restarting Waterfox.

:::note
A _Delete_ <img alt="Fx71aboutconfig-DeleteButton" class="inline-image" src="/assets/docs/2019-10-29-08-53-36-604f20.png"> button may be shown for some preferences that appear in bold type that you did not modify or add, such as preferences whose values are system-specific. Those preferences will be added back, as appropriate, if deleted.
:::

You can only reset or remove **modified** preferences, which are listed in bold type. (To reset all preferences, see the article [Reset Waterfox preferences to troubleshoot and fix problems](/support/reset-preferences-fix-problems)).

## Adding preferences

![Fx71aboutconfig-addnewpref](/assets/docs/2019-10-29-07-01-54-923482.png)

To add a new preference, enter its name into the _Search preference name_ box at the top of the about:config page. At the bottom of the search results (if any), there will be the option to create a new preference. To do so, specify the type of value that preference will store:

- **String** is any sequence of text
- **Number** is an integer
- **Boolean** is true or false

Click the _Add_ <img alt="Fx71aboutconfig-AddButton" class="inline-image" src="/assets/docs/2019-11-04-06-37-13-6f14d8.png"> button to create the new preference and set its value. Boolean preferences are set to true by default; use the _Toggle_ <img alt="Fx71aboutconfig-ToggleButton" class="inline-image" src="/assets/docs/2019-10-29-08-56-36-b0ab10.png"> button to change the value. For String or Number preferences, click the _Save_ <img alt="Fx71aboutconfig-Checkmark" class="inline-image" src="/assets/docs/2019-11-04-06-45-04-f67b18.png"> button. Click the _Delete_ <img alt="Fx71aboutconfig-DeleteButton" class="inline-image" src="/assets/docs/2019-10-29-08-53-36-604f20.png"> button to discard the new preference.

**Based on information from [About:config (mozillaZine KB)](http://kb.mozillazine.org/About:config)**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Configuration Editor for Firefox](https://support.mozilla.org/en-US/kb/about-config-editor-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/about-config-editor-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
