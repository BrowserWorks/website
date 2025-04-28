---
slug: support/what-does-your-connection-is-not-secure-mean
title: "What do the security warning codes mean?"
---

When Waterfox connects to a secure website (the URL begins with [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/https)), it must verify that the [certificate](/support/secure-website-certificate) presented by the website is valid and that the encryption is strong enough to adequately protect your privacy. If it is unable to verify this, Waterfox stops connecting to the site and will show you an error page with the message, _Warning: Potential Security Risk Ahead_.

![Fx66Warning-SecurityRisk](/assets/docs/2019-03-11-08-10-33-1665c0.png)

Click the Advanced... button to view the error code and other information about the error. Common errors are described in this article.

:::note
If Waterfox shows you a _Secure Connection Failed_ or _Did Not Connect: Potential Security Issue_ error page instead, see the article [Secure connection failed and Waterfox did not connect](/support/secure-connection-failed-waterfox-did-not-connect).
:::

## What to do if you see these errors?

If you see a _Warning: Potential Security Risk Ahead_ message, you may:

- Contact the website owner and ask them to correct their certificate.
- Click Go Back (Recommended), or visit a different website.
- If you are on a corporate network or using antivirus software, reach out to the support teams for assistance.

After viewing the error code and other information about the error, click the Accept the Risk and Continue button to load the site at your own risk. This will add a security exception for the website certificate.

**Warning!** Do not proceed to the website unless you understand the reasons for the security warning. Legitimate public sites will **not** require you to add a security exception for their certificate. An invalid certificate can be an indication of a web page that will defraud you or steal your identity.

## MOZILLA_PKIX_ERROR \_ADDITIONAL_POLICY_CONSTRAINT_FAILED

This error indicates that the website's certificate has not complied with security policies in [Waterfox's CA Certificate Program](https://wiki.mozilla.org/CA). Most browsers, not just Waterfox, do not trust certificates by GeoTrust, RapidSSL, Symantec, Thawte and VeriSign because these certificate authorities failed to follow security practices in the past.

The owners of the website need to work with their certificate authority to correct the policy problem. Waterfox's CA Certificate Program publishes a list of [upcoming policy actions affecting certificate authorities](https://wiki.mozilla.org/CA/Upcoming_Distrust_Actions) which contains details that might be useful to the website owners.

For more information, see the Waterfox Security Blog post, [Distrust of Symantec TLS Certificates](https://blog.mozilla.org/security/2018/03/12/distrust-symantec-tls-certificates/).

## SEC_ERROR_EXPIRED_ISSUER_CERTIFICATE

The certificate will not be valid until _date_ (...)

The error text will also show the current date and time of your system. In case this is incorrect, set your system clock to today's date and time (double-click the clock icon on the Windows Taskbar) in order to fix the problem. More details about this are available in the support article [How to troubleshoot time related errors on secure websites](/support/troubleshoot-time-errors-secure-websites).

## SEC_ERROR_EXPIRED_CERTIFICATE

The certificate expired on _date_ (...)

This error occurs when a website's identity certification has expired.

The error text will also show the current date and time of your system. In case this is incorrect, set your system clock to today's date and time (double-click the clock icon on the Windows Taskbar) in order to fix the problem. More details about this are available in the support article [How to troubleshoot time related errors on secure websites](/support/troubleshoot-time-errors-secure-websites).

## SEC_ERROR_UNKNOWN_ISSUER

The certificate is not trusted because the issuer certificate is unknown.
The server might not be sending the appropriate intermediate certificates.
An additional root certificate may need to be imported.

For more on this error, see the support article [How to troubleshoot security error codes on secure websites](/support/error-codes-secure-websites).

## MOZILLA_PKIX_ERROR_MITM_DETECTED

The certificate is not trusted because the issuer certificate is unknown.
The server might not be sending the appropriate intermediate certificates.
An additional root certificate may need to be imported.

MOZILLA_PKIX_ERROR_MITM_DETECTED is a special case of the SEC_ERROR_UNKNOWN_ISSUER error code when a [man-in-the-middle attack](https://developer.mozilla.org/docs/Glossary/MitM) is detected.

You may have enabled SSL scanning in your security software such as Avast, Bitdefender, ESET or Kaspersky. Try to disable this option. More details are available in the support article [How to troubleshoot security error codes on secure websites](/support/error-codes-secure-websites).

You may also see this error message on major sites like Google, Facebook, YouTube and others on Windows in user accounts protected by Microsoft family settings. To turn these settings off for a particular user, see the Microsoft support article [How do I turn off family features?](http://go.microsoft.com/fwlink/p/?LinkId=627342).

## ERROR_SELF_SIGNED_CERT

The certificate is not trusted because it is self-signed.

Self-signed certificates make your data safe from eavesdroppers, but say nothing about who the recipient of the data is. This is common for intranet websites that aren't available publicly and you may bypass the warning for such sites. More details are available in the support article [How to troubleshoot security error codes on secure websites](/support/error-codes-secure-websites).

## SSL_ERROR_BAD_CERT_DOMAIN

Waterfox does not trust this site because it uses a certificate that is not valid for that particular site. Information sent over this site could be at risk, so the best thing for you to do is contact the website owners to correct the problem.

## SEC_ERROR_OCSP_INVALID_SIGNING_CERT

The site is not configured correctly and failed a security check. If you visit this site, attackers could try to steal your private information, like passwords, emails or credit card details.

The issue is with the website, and there is nothing you can do to resolve it. You can notify the website’s administrator about the problem.

## Corrupted certificate store

You may also see certificate error messages when the file in your profile folder that stores your certificates cert9.db has become corrupted. Try to delete this file while Waterfox is closed to regenerate it:

:::note
You should only perform these steps as a last resort, after all other troubleshooting steps have failed.
:::

1. Open your profile folder:

   - Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help and select Troubleshooting Information. The **Troubleshooting Information** tab will open.
   - Under the **Application Basics** section next to _Profile Folder_, click Open Folder. Your profile folder will open.
     :::note
     If you are unable to open or use Waterfox, follow the instructions in [Finding your profile without opening Waterfox](/support/profiles-where-waterfox-stores-user-data#finding-your-profile-without-opening-waterfox).
     :::

2. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
3. Click on the file named cert9.db.
4. Press Delete.
5. Restart Waterfox.

:::note
cert9.db will be recreated when you restart Waterfox. This is normal.
:::

## Bypassing the warning

:::note
Some security warnings cannot be bypassed.
:::

You should only bypass the warning if you're confident in both the identity of the website and the integrity of your connection - even if you trust the site, someone could be tampering with your connection. Data you enter into a site over a weakly encrypted connection can be vulnerable to eavesdroppers as well.

In order to bypass the warning page, click Advanced:

- On sites with a weak encryption you will then be shown an option to load the site using outdated security.
- On sites where the certificate cannot be validated, you might be given the option to add an exception.

Legitimate public sites will **not** ask you to add an exception for their certificate - in this case an invalid certificate can be an indication of a web page that will defraud you or steal your identity.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [What do the security warning codes mean?](https://support.mozilla.org/en-US/kb/what-does-your-connection-is-not-secure-mean). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/what-does-your-connection-is-not-secure-mean#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
