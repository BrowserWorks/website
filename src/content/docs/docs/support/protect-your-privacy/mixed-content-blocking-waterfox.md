---
slug: /support/mixed-content-blocking-waterfox
title: "Mixed content blocking in Waterfox"
---

Waterfox protects you from attacks by blocking potentially harmful, insecure content on web pages that are supposed to be secure. Keep reading to learn more about mixed content and how to tell if Waterfox has blocked it.

## What is mixed content and what are the risks?

HTTP is a system for transmitting information from a web server to your browser. HTTP is not secure, so when you visit a page served over HTTP, your connection is open for eavesdropping and [man-in-the-middle attacks](https://wikipedia.org/wiki/Man-in-the-middle_attack). Most websites are served over HTTP because they don't involve passing sensitive information back and forth and do not need to be secured.

When you visit a page fully transmitted over HTTPS, such as your bank, you'll see a padlock icon <img alt="Fx89Padlock" class="inline-image" src="/assets/docs/2021-05-06-04-33-33-7bdc86.png"> in the address bar (for details, see [How do I tell if my connection to a website is secure?](/support/how-do-i-tell-if-my-connection-is-secure)). This means that your connection is authenticated and encrypted, and thus safeguarded from both eavesdroppers and man-in-the-middle attacks.

However, if the HTTPS page you visit includes HTTP content, the HTTP portion can be read or modified by attackers, even though the main page is served over HTTPS. When an HTTPS page has HTTP content, we call that content “mixed”. The page you are visiting is only partially encrypted and even though it appears to be secure, it isn't. For more information about mixed content (active and passive), see [this blog post](https://blog.mozilla.org/tanvi/2013/04/10/mixed-content-blocking-enabled-in-waterfox-23).

**What are the risks of mixed content?** An attacker can replace the HTTP content on the page you're visiting in order to steal your credentials, take over your account, acquire sensitive data about you, or attempt to install malware on your computer.

## How can I tell if a page has mixed content?

There are two types of mixed content: mixed passive/display content and mixed active content. The difference lies in the threat level. Look for a padlock icon in your address bar to determine whether the page has mixed content.

![Fx89AddressBarPadlock](/assets/docs/2021-05-06-04-29-55-5507f4.png)

:::note
The shield icon <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> in the address bar tells you which trackers have been blocked on a website. See [Enhanced Tracking Protection in Waterfox for desktop](/support/enhanced-tracking-protection-waterfox-desktop) for more information.
:::

### No mixed content: secure

- ![Fx89Padlock](/assets/docs/2021-05-06-04-33-33-7bdc86.png): You’ll see a padlock when you are on a fully secure (HTTPS) page. To see if Waterfox has blocked parts of the page that are not secure, click the padlock. For more information, see the [Unblock mixed content](#unblock-mixed-content) section below.

### Mixed content is not blocked: not secure

- ![Fx89Padlock-RedLine](/assets/docs/2021-05-06-04-53-30-fe088c.png): If you see a padlock with a red line over it, the page contains mixed active content and Waterfox is not blocking insecure elements. That page is open to eavesdropping and attacks where your personal data from the site could be stolen. Unless you’ve unblocked mixed content using the instructions in the next section, you shouldn’t see this icon on a secure (HTTPS) website. **Note**: A padlock with a red line is also shown on unencrypted (HTTP) websites.

- ![Fx89Padlock-Triangle](/assets/docs/2021-05-06-04-55-22-88c82d.png): A padlock with a triangle indicates that Waterfox is not blocking insecure passive content, such as images. By default, Waterfox does not block mixed passive content; you will simply see a warning that the page isn't fully secure. Attackers may be able to manipulate parts of the page like displaying misleading or inappropriate content, but they should not be able to steal your personal data from the site.

For more information about mixed active and passive content, see [this Waterfox Developer Network article](https://developer.mozilla.org/docs/Web/Security/Mixed_content).

## Unblock mixed content

Unblocking insecure elements is not recommended but can be done, if necessary:

1. Click the padlock icon <img alt="Fx89Padlock" class="inline-image" src="/assets/docs/2021-05-06-04-33-33-7bdc86.png"> in the address bar.
2. Click the arrow in the [Site Information](/support/site-information-panel) panel:
   ![Fx89MixedContent](/assets/docs/2021-05-06-04-31-09-4f76e2.png)
3. Click Disable protection for now.
   ![Fx89MixedContent-Unblock](/assets/docs/2021-05-06-05-23-17-4fc4ea.png)

To enable protection, follow the preceding steps and click Enable protection.

:::caution
Unblocking mixed content can leave you vulnerable to attacks.
:::
**Developers:** If your website is generating security errors because of insecure content, see this MDN article on [how to fix a website with mixed content](https://developer.mozilla.org/docs/Security/MixedContent/How_to_fix_website_with_mixed_content).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Mixed content blocking in Firefox](https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
