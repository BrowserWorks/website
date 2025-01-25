---
slug: /support/credit-card-autofill
title: "Automatically fill in credit card data on Web forms"
---

:::note
The [credit card autofill feature](https://wiki.mozilla.org/Firefox/Features/Form_Autofill/Credit_Cards) is available to users in Canada and the U.S.
:::
Waterfox lets you automatically fill in your saved credit card information on Web forms (for example, when you're ordering something online). As a precaution, your [CVV number](https://en.wikipedia.org/wiki/Card_security_code) is **not** saved. You can also choose to password protect your credit card data for an additional layer of protection. Follow these steps to learn how to manage this feature.

## Turn credit card autofill on or off

This feature is recommended for private computers **only**.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Click the Privacy & Security panel and scroll down to the **Forms and Autofill** section.
3. Click the checkbox next to **Autofill credit cards** to turn it on, or uncheck the box to turn it off.

### Advanced: Disable credit card autofill in about:config

This feature can also be disabled manually by modifying the following preferences via the [Configuration Editor](/support/about-config-editor-waterfox) (_about:config_) to false and then restarting Waterfox:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.
extensions.formautofill.creditCards.enabled

extensions.formautofill.creditCards.available

## Require authentication for autofill

To add further protection, you can select to require authentication before autofilling the credit card information. This requires your operating system password (or authenticate using your fingerprint, face, or voice login, if enabled) this is usually the password used to unlock your computer. Please note, this is **not** your Mozilla Account password.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Click the Privacy & Security panel and scroll down to the **Forms and Autofill** section.
3. Click the checkbox next to **Require Windows authentication to autofill, view, or edit stored credit cards** to turn it on, or uncheck the box to turn it off.

### What if I don't have an OS password?

- **Windows:** If you aren't using a Windows password, you will not be prompted to enter it.
- **macOS:** If you don't have a password, click the OK twice to continue. :::note
  This is a known issue and will be fixed in a future update.
  :::

## Edit your saved credit cards

Use this setting to add, remove or change saved credit card data in Waterfox.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Click the Privacy & Security panel and scroll down to the **Forms and Autofill** section.
3. Click the Saved Credit Cards… button.
4. Choose one of the following:
   - **Add…**: Enter a new credit card using this button.
   - **Edit…**: Select the credit card you want to change, then click Edit to change it.
   - **Remove**: Select the credit card you want to delete, then click Remove.
5. Click the ✕ to save your changes and close the window.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Automatically fill in credit card data on Web forms](https://support.mozilla.org/en-US/kb/credit-card-autofill). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/credit-card-autofill#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
