---
slug: support/error-codes-secure-websites
title: "How to troubleshoot security error codes on secure websites"
---

For websites that are securely encrypted (the URL begins with "http**s**://"), Waterfox must verify that the certificate presented by the website is valid. If the certificate cannot be validated, Waterfox will stop the connection to the website and show a "Warning: Potential Security Risk Ahead" error page instead. Clicking the Advanced button, you can view the specific error Waterfox encountered.

This article explains why you might see the error codes SEC_ERROR_UNKNOWN_ISSUER, MOZILLA_PKIX_ERROR_MITM_DETECTED or ERROR_SELF_SIGNED_CERT on an error page and how to troubleshoot it.

For other error codes on the "Warning: Potential Security Risk Ahead" error page, see the [What do the security warning codes mean?](/support/what-does-your-connection-is-not-secure-mean) article. For _Secure Connection Failed_ or _Did Not Connect: Potential Security Issue_ error pages, see the article [Secure connection failed and Waterfox did not connect](/support/secure-connection-failed-waterfox-did-not-connect).

## What does this error code mean?

During a secure connection, a website must provide a certificate issued by a trusted [certificate authority](https://wikipedia.org/wiki/Certificate_authority) to ensure that the user is connected to the intended target and the connection is encrypted. If you click the Advanced button on a "Warning: Potential Security Risk Ahead" error page and you see the error code SEC_ERROR_UNKNOWN_ISSUER or MOZILLA_PKIX_ERROR_MITM_DETECTED, it means that the provided certificate was issued by a certificate authority that is not known by Waterfox and, therefore, cannot be trusted by default.

![Fx66WarningSEC_ERROR_UNKNOWN_ISSUER](/assets/docs/2019-03-11-10-35-01-7dc26c.png)

## The error occurs on multiple secure sites

If you get this problem on multiple unrelated HTTPS-sites, it indicates that something on your system or network is intercepting your connection and injecting certificates in a way that is not trusted by Waterfox. The most common causes are security software scanning encrypted connections, or malware listening in and replacing legitimate website certificates with their own. In particular, the error code MOZILLA_PKIX_ERROR_MITM_DETECTED indicates that Waterfox detected connection interception.

### Antivirus products

Third-party antivirus software can interfere with Waterfox's secure connections. You could try reinstalling it, which might trigger the software into placing its certificates into the Waterfox trust store again.

We recommend uninstalling your third-party software and using the security software offered for Windows by Microsoft:

- Windows 8 and Windows 10 - Windows Defender ([built-in](https://www.microsoft.com/windows/comprehensive-security))

If you do not want to uninstall your third-party software, you could try reinstalling it, which might trigger the software into placing its certificates into the Waterfox trust store again.

Here are some alternative solutions you can try:

### Avast/AVG

In Avast or AVG security products you can disable the interception of secure connections:

1. Open the dashboard of your Avast or AVG application.
2. Go to Menu and click on Settings > Protection > Core Shields.
3. Scroll down to the Configure shield settings section and click on Web Shield.
4. Uncheck the box next to Enable HTTPS Scanning and confirm this by clicking OK.
   In older versions of the product you'll find the corresponding option when you go to Menu > Settings > Components and click Customize next to Web Shield

See the Avast support article [Managing HTTPS scanning in Web Shield in Avast Antivirus](https://support.avast.com/en-us/article/189/) for details. More Information about this feature is available on this [Avast Blog](https://blog.avast.com/2015/05/25/explaining-avasts-https-scanning-feature/).

### Bitdefender

In Bitdefender security products you can disable the interception of secure connections:

1. Open the dashboard of your Bitdefender application.
2. Go to Protection and in the Online Threat Prevention section click on Settings.
3. Toggle off the Encrypted Web Scan setting.
   In older versions of the product you can find the corresponding option labelled Scan SSL when you go to Modules > Web Protection

In Bitdefender Antivirus Free it's not possible to control this setting. You can try to [repair or remove the program](https://www.bitdefender.com/support/repairing-or-removing-bitdefender-free-edition-1160.html) instead when you're having problems accessing secure websites.

For corporate Bitdefender products, please refer to this [Bitdefender Support Center page](http://www.bitdefender.com/support/how-to-enable-ssl-https-scanning-in-cloud-security-for-endpoints-1117.html).

### Bullguard

In Bullguard security products you can disable the interception of secure connections on particular major websites like Google, Yahoo and Facebook:

1. Open the dashboard of your Bullguard application.
2. Click on Settings and enable the Advanced view on the top right of the panel.
3. Go to Antivirus > Safe browsing.
4. Uncheck the Show safe results option for those websites which are showing an error message.

### ESET

In ESET security products you can try to disable and re-enable SSL/TLS protocol filtering or generally disable the interception of secure connections as described in [ESET’s support article](http://support.eset.com/kb3126/).

### Kaspersky

Affected users of Kaspersky should upgrade to the most recent version of their security product, as Kaspersky 2019 and above contain mitigations for this problem. The [Kaspersky Downloads page](https://www.kaspersky.com/downloads) includes "update" links that will install the latest version free of charge for users with a current subscription.

Otherwise, you can also disable the interception of secure connections:

1. Open the dashboard of your Kaspersky application.
2. Click on Settings on the bottom-left.
3. Click Additional and then Network.
4. In the Encrypted connections scanning section check the Do not scan encrypted connections option and confirm this change.
5. Finally, reboot your system for the changes to take effect.

### Family Safety settings in Windows accounts

In Microsoft Windows accounts protected by Family Safety settings, secure connections on popular websites like Google, Facebook and YouTube might be intercepted and their certificates replaced by a certificate issued by Microsoft in order to filter and record search activity.

Read this [Microsoft FAQ page](http://windows.microsoft.com/en-us/windows/family-features-remove-uninstall-faq) on how to turn off these family features for accounts. In case you want to manually install the missing certificates for affected accounts, you can refer to this [Microsoft support article](https://support.microsoft.com/en-us/kb/2965142#bookmark-2).

### Monitoring/filtering in corporate networks

Some traffic monitoring/filtering products used in corporate environments might intercept encrypted connections by replacing a website's certificate with their own, at the same time possibly triggering errors on secure HTTPS-sites.

If you suspect this might be the case, please contact your IT department to ensure the correct configuration of Waterfox to enable it to work properly in such an environment, as the necessary certificate might have to be placed in the Waterfox trust store first. More information for IT departments on how to go about this can be found in the Waterfox Wiki page [CA:AddRootToWaterfox](https://wiki.mozilla.org/CA:AddRootToWaterfox).

### Malware

Some forms of malware intercepting encrypted web traffic can cause this error message - refer to the article [Troubleshoot Waterfox issues caused by malware](/support/troubleshoot-waterfox-issues-caused-malware) on how to deal with malware problems.

## The error occurs on one particular site only

In case you get this problem on one particular site only, this type of error generally indicates that the web server is not configured properly. However, if you see this error on a legitimate major website like Google or Facebook or sites where financial transactions take place, you should continue with the [steps outlined above](#the-error-occurs-on-multiple-secure-sites).

### Certificate issued by an authority belonging to Symantec

After a number of irregularities with certificates issued by Symantec root authorities came to light, browser vendors, including Waterfox, are gradually removing trust from these certificates in their products. Waterfox will no longer trust server certificates issued by Symantec, including those issued under the GeoTrust, RapidSSL, Thawte and Verisign brands. For more information, see [this Waterfox blog post](https://blog.mozilla.org/security/2018/10/10/delaying-further-symantec-tls-certificate-distrust/).

MOZILLA_PKIX_ERROR_ADDITIONAL_POLICY_CONSTRAINT_FAILED will be the primary error, but with some servers, you may see the error code SEC_ERROR_UNKNOWN_ISSUER instead. If you come across such a site you should contact the owner of the website to inform them of the problem.

Waterfox strongly encourages operators of affected sites to take immediate action to replace these certificates. DigiCert is providing [certificate replacements for free](https://www.digicert.com/replace-your-symantec-ssl-tls-certificates/).

### Missing intermediate certificate

On a site with a missing intermediate certificate you will see the following error description after you click on Advanced on the error page:

The certificate is not trusted because the issuer certificate is unknown.
The server might not be sending the appropriate intermediate certificates.
An additional root certificate may need to be imported.
The website's certificate might not have been issued by a trusted certificate authority itself and no complete certificate chain to a trusted authority was provided either (a so-called "intermediate certificate" is missing).

You can test if a site is properly configured by entering a website's address into a third-party tool like [SSL Labs' test page](https://www.ssllabs.com/ssltest). If it is returning the result "Chain issues: Incomplete", a proper intermediate certificate is missing.
You should contact the owner of the website you're having troubles accessing to inform them of that problem.

### Self-signed certificate

On a site with a self-signed certificate you will see the error code ERROR_SELF_SIGNED_CERT and the following error description, after you click on Advanced on the error page:

The certificate is not trusted because it is self-signed.
A self-signed certificate that wasn't issued by a recognized certificate authority is not trusted by default. Self-signed certificates can make your data safe from eavesdroppers, but say nothing about who the recipient of the data is. This is common for intranet websites that aren't available publicly and you may bypass the warning for such sites.

### Bypassing the warning

:::caution
You should never add a certificate exception for a legitimate major website or sites where financial transactions take place – in this case an invalid certificate can be an indication that your connection is compromised by a third party.
:::
If the website allows it, you can bypass the warning in order to visit the site, even thought its certificate is not being trusted by default:

1. On the warning page, click Advanced.
2. Click Accept the Risk and Continue.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [How to troubleshoot security error codes on secure websites](https://support.mozilla.org/en-US/kb/error-codes-secure-websites). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/error-codes-secure-websites#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
