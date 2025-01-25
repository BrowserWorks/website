---
slug: /support/webauthn-direct-attestation
title: "Protecting Privacy while using Web Authentication"
---

[Web Authentication](https://developer.mozilla.org/docs/Web/API/Web_Authentication_API) is a powerful [anti-phishing technology](https://developer.mozilla.org/docs/Waterfox/Phishing) that uses hardware authenticators and public-key cryptography to protect your accounts.

![hardware authenticator](/assets/docs/2018-03-13-09-09-57-87f2b2.png)
**A sample of Web Authentication Authenticators**

Websites that support Web Authentication are showing a commitment to very high security standards by asking for additional information about your authenticator when you register.

## Should I use one authenticator for multiple accounts?

Using an authenticator for one account is safe, but allowing a website to ask for extended information for multiple accounts using the same authenticator can permit that website to identify a link between those accounts.

If you are concerned about having accounts linked together in this way, you should either deny extended information when prompted, or use different authenticators for the different accounts.

This linkability is based on the authenticators, and not on your browser. If you use the same authenticator with different browsers, websites can still identify a link between multiple accounts.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Protecting Privacy while using Web Authentication](https://support.mozilla.org/en-US/kb/webauthn-direct-attestation). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/webauthn-direct-attestation#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
