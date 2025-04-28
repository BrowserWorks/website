---
slug: support/certificate-pinning-reports
title: "Certificate Pinning Reports"
---

[HTTP Public Key Pinning](https://wikipedia.org/wiki/HTTP_Public_Key_Pinning) (HPKP) is a security feature that prevents attackers from using fraudulent or misused certificates to impersonate a site. It allows the owner of a site to specify who can issue valid certificates with that identity, rather than accepting any one of the hundreds of built-in root certificates that ship with your browser.

For more information, see [HTTP Public Key Pinning](https://developer.mozilla.org/docs/Web/HTTP/Public_Key_Pinning) at MDN Web Docs.

## What happens if I see a key pinning error page?

If a site uses key pinning and its certificate chain does not match the pin, Waterfox will reject the connection and show a Secure Connection Failed error page with the message,
_The server uses key pinning (HPKP) but no trusted certificate chain could be constructed that matches the pinset. Key pinning violations cannot be overridden. Error code: MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE_.

![Fx66SecureConnectionFailed-KeyPinning](/assets/docs/2019-03-09-10-13-07-2deb93.png)

This is done for your protection, so you don't inadvertently visit a site that's not authentic.

## What can I do if Waterfox rejects the connection?

If you believe that Waterfox rejected the connection in error, report it to us by checking the box next to _Report errors like this to help Waterfox identify and block malicious sites_. It is up to the website owner to update their key pinning.

:::note
Key pinning errors can also be caused by network issues. Powering off and then turning back on your modem/router or computer may resolve the problem.
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Certificate Pinning Reports](https://support.mozilla.org/en-US/kb/certificate-pinning-reports). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/certificate-pinning-reports#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
