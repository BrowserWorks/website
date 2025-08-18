---
slug: support/insecure-password
title: "Insecure password warning in Waterfox"
---

If a login page you're viewing does not have a secure connection, Waterfox will display a lock icon with a red strike-through <img alt="red strikethrough icon" class="inline-image" src="/assets/docs/2015-11-17-12-13-18-2faa61.png"> in the address bar. If you enter a password on such a page, eavesdroppers or attackers could steal it.

You will also see a warning message when you click inside the login box to enter a username or password.

![Fx52insecurePW](/assets/docs/2017-04-21-23-52-53-ba340d.png)

:::note
When you start entering your login information, the warning message can obscure the password entry box. To dismiss the warning, either press the Tab key or click on the page background after you type in your username.
:::

## What can I do if a login page is insecure?

If the login page is insecure, check if a secure version exists by adding _https://_ in front of the website address. You can also contact the website administrator and ask them to secure the connection. Otherwise, it is not recommended that you submit any information through the page.

![FF70 Gray Padlock](/assets/docs/2019-10-06-20-08-51-0f9463.png)

## About insecure pages

Insecure pages do not provide secure connections for visitors. Instead, they use an unencrypted connection (HTTP) and any information shared with these pages is at risk. Pages that need to transmit private information (such as credit cards, personal information and passwords) need to have a secure connection to help prevent attackers from stealing your information.

:::tip
A secure connection will have ["HTTPS" in the address bar, along with a gray lock icon](/support/how-do-i-tell-if-my-connection-is-secure#padlock)
:::
Pages that don’t transmit any private information can have an unencrypted connection. But it is advised not to enter private information, such as passwords. The information you enter can be stolen over this insecure connection.

## Note for developers

For developers looking to learn more about this warning, please see [this page](https://developer.mozilla.org/docs/Web/Security/Insecure_passwords). The page explains when and why Waterfox shows this warning, and will also provide some details on how to fix the issue. For more information, see [this blog post](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Insecure password warning in Firefox](https://support.mozilla.org/en-US/kb/insecure-password-warning-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/insecure-password-warning-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
