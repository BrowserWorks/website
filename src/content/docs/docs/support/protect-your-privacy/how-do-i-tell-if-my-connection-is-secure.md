---
slug: support/how-do-i-tell-if-my-connection-is-secure
title: "How do I tell if my connection to a website is secure?"
---

When you visit a website, the Site Identity button (a padlock) appears in the address bar to the left of the web address. You can quickly find out if the connection to the website you are viewing is encrypted, and in some cases who owns the website. This should help you avoid malicious websites that are trying to obtain your personal information.

![FF70 Gray Padlock](/assets/docs/2019-10-06-20-08-51-0f9463.png)

When viewing a secure website, the Site Identity button will be a gray padlock. In a few cases, however, you may see a gray padlock with a warning triangle ![orange triangle grey lock 42](/assets/docs/2015-10-21-18-54-26-fe01d6.png) or a gray padlock with a red strike over it ![unblocked mixed content 42](/assets/docs/2015-10-21-18-58-14-d85fc6.png).

Clicking the padlock ![Fx70GreyPadlock](/assets/docs/2019-11-03-04-09-15-1801e4.png) to the left of the address bar brings up the [Site Information panel](/support/site-information-panel), which allows you to view more detailed information about the connection's security status.
:::caution
You should never send any sensitive information (such as bank information, credit card data or social security numbers) to a website if the address bar shows a padlock with a warning triangle or red strike over it. In such cases, you may not be communicating with the intended website and your data isn't safe against eavesdropping!
:::

## Padlock

A gray padlock ![Fx70GreyPadlock](/assets/docs/2019-11-03-04-09-15-1801e4.png) with no warning triangle or red strike over it indicates that:

- You’re definitely connected to the website whose address is shown in the address bar and the connection hasn’t been intercepted.
- The connection between Waterfox and the website is encrypted to prevent eavesdropping.

Click the padlock to find out if the website is using an [Extended Validation (EV) certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate). An EV certificate is a special type of site certificate that requires a significantly more rigorous identity verification process than other types of certificates.

For sites using EV certificates, the legal company or organization name and location of the website owner displays when you click the gray padlock.

## Padlock with a warning triangle

A gray padlock with a warning triangle ![orange triangle grey lock 42](/assets/docs/2015-10-21-18-54-26-fe01d6.png) indicates that the connection between Waterfox and the website is only partially encrypted and doesn't prevent eavesdropping. By default, Waterfox does not block insecure passive content such as images; you will simply see a warning that the page isn't fully secure. For more information, see [Mixed content blocking in Waterfox](/support/mixed-content-blocking-waterfox).

Do not send any sensitive information to sites where the Site Identity button is a padlock with a warning triangle.
A gray padlock with a warning triangle also appears for [website certificate warnings](/support/what-does-your-connection-is-not-secure-mean), such as for sites with self-signed certificates or certificates that aren’t issued by a trusted authority. This is a problem the site developer needs to resolve.

## Padlock with a red strike over it

A gray padlock with a red strike over it ![unblocked mixed content 42](/assets/docs/2015-10-21-18-58-14-d85fc6.png) indicates that the connection between Waterfox and the website is either delivered using an insecure protocol (FTP or HTTP) or that it is only partially encrypted because you've manually deactivated [mixed content blocking](/support/mixed-content-blocking-waterfox). The site doesn't prevent against eavesdropping or [man-in-the-middle attacks](http://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Do not send any sensitive information to sites where the Site Identity button is a padlock with a red strike over it.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How do I tell if my connection to a website is secure?](https://support.mozilla.org/en-US/kb/how-do-i-tell-if-my-connection-is-secure). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/how-do-i-tell-if-my-connection-is-secure#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
