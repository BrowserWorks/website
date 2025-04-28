---
slug: support/secure-website-certificate
title: "Secure website certificate"
---

A secure website certificate helps Waterfox determine whether the site you are visiting is actually the site that it claims to be. This article explains how that works.

## Certificate hierarchy

When you visit a website whose web address starts with **https**, your communication with the site is encrypted to help ensure your privacy. Before starting the encrypted communication, the website will present Waterfox with a certificate to identify itself.

An https website is only secure to the extent that the website is operated by someone in contact with the person who registered the domain name, and the communication between you and the website is encrypted to prevent eavesdropping. No other surety is implied.

When you visit a secure website, Waterfox will validate the website’s certificate by checking that the certificate that signed it is valid, and checking that the certificate that signed the parent certificate is valid and so forth up to a [root certificate](https://wiki.mozilla.org/CA:UserCertDB) that is known to be valid. This chain of certificates is called the _certificate hierarchy_.

## View a certificate

You can quickly view the certificate details for the website that you are currently viewing, from the [Waterfox Page Info window](/support/waterfox-page-info-window).

When you have browsed to a website whose web address starts with **https**, there will be a lock icon at the beginning of the address bar. Do the following to view a certificate:

1. Click the Site Info ![Site Info button](/assets/docs/2016-02-25-12-29-33-78136e.png) icon in the address bar.
2. Click the right arrow in the [Control Center](/support/site-information-panel) drop-down panel.
3. In the next panel, which will show who verified the certificate, click the More Information button.
   ![Fx60SecureSite-MoreInfo](/assets/docs/2019-11-30-04-50-57-52aef3.png)
4. From the Security tab in the **Page Info** window that opens, click the View Certificate button.
   ![Fx60PageInfo-ViewCertificate](/assets/docs/2019-11-30-13-46-21-5c44a4.png)

The **Certificate Viewer** window that opens will display basic information about the certificate, such as issuer, period of validity and fingerprints. The Details tab will show the certificate hierarchy, certificate fields for the selected certificate on the hierarchy, and field value details for the selected field.

## Problematic certificates

When you browse to a website whose web address starts with **https** and there is a problem with the secure website certificate, you will see an error page. Some common certificate errors are described in the [What do the security warning codes mean?](/support/what-does-your-connection-is-not-secure-mean) article.

To view the problematic certificate, follow these steps:

1. On the **Your connection is not secure** warning page, click **Advanced**.
2. Click the Add Exception… button.
3. When the Add Security Exception dialog appears, click the View… button.
   The Certificate Viewer dialog displays.

## Reporting certificate errors

Certificate error pages include an option to report the error to Waterfox. Sharing the address and site identification (the secure website certificate) for the site that was untrusted will help Waterfox identify and block malicious sites to keep you better protected.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Secure website certificate](https://support.mozilla.org/en-US/kb/secure-website-certificate). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/secure-website-certificate#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
