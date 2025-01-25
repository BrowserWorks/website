---
slug: /support/dns-over-https
title: "Configure DNS over HTTPS protection levels in Waterfox"
---

DNS over HTTPS (DoH) is a by default enabled feature that enhances privacy for everyone. When you type a web address into your address bar, Waterfox sends a secure DNS request to look up the IP address for that website over the Internet. DNS over HTTPS protection can be configured in four different ways.

## Configure DoH protection settings

By default, Waterfox uses DNS over Oblivious HTTP (DoOH) which provides additional privacy protection compared to standard DNS over HTTPS. DoOH prevents DNS resolvers from seeing your IP address by routing queries through an intermediary proxy server, making it harder to track your browsing activity.

If you would like to modify the settings or select a different level of protection, please follow these steps:

1.  Click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button at the top right of the screen.
2.  Click Settings.
3.  Click Privacy & Security on the left.
4.  Scroll down to the _DNS over HTTPS_ section.

![DNS over HTTPS panel](/assets/docs/dns-over-https-pref.png)

## Protection levels explained

#### Default Protection

The Default Protection automatically enables secure DNS with DNS over Oblivious HTTP (DoOH) and falls back to standard DNS over HTTPS or default resolvers if there are issues. Default protection allows you to use local providers when possible. It disables DoH/DoOH when VPN, parental control or enterprise policies are active or when a network tells Waterfox not to use secure DNS.

#### Increased Protection

When Increased Protection is on, DoH is constantly active with the provider you select. We will only switch to a backup option if there are any issues with your chosen provider.

#### Max Protection

Max protection will always use secure DNS and a security warning will show if we can’t connect to the secure DNS resolver, or if the secure DNS resolver indicates there are no addresses for the domain you are trying to access. The warning page will give you an option of adding an exception for that domain if you want to use the system DNS resolver.

#### Off

When secure DNS is off, you’ll use your default DNS resolver.

## Add sites to the Exceptions list

1.  Click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button at the top right of the screen.
2.  Click `Settings`.
3.  Click `Privacy & Security` on the left.
4.  Scroll down to the _DNS over HTTPS_ section.
5.  Click the Manage Exceptions button.

![doh_manage_exceptions](/assets/docs/2025-01-22-10.41.48.png)

## Frequently asked questions

#### What is DNS over Oblivious HTTP (DoOH)?

DNS over Oblivious HTTP adds an extra layer of privacy protection to DNS queries by preventing DNS resolvers from seeing your IP address. It works by routing your DNS queries through an intermediary proxy server before they reach the DNS resolver. This means that the proxy knows your IP address but not your DNS queries, while the resolver knows your DNS queries but not your IP address. This separation makes it much harder for any single party to track your browsing activity.

#### What is a local provider?

A local provider, typically hosted within a user's local network or by their ISP, secures DNS queries for safer internet access. To detect a local provider, specific heuristics are used, which examine network configuration and DNS response patterns. Note that local providers are only employed in the _Default Protection_ mode of DNS settings. They are used only when all heuristics criteria are met, ensuring that the DNS resolver is local and suitable for secure, efficient query resolutions.

#### Why would a network tell Waterfox not to use secure DNS?

Some organizations restrict access to certain websites. If an organization has their own secure DNS, they will ask Waterfox not to bypass it.

#### What does my DoH status mean?

DoH status displays if Waterfox is performing secure DNS queries. Based on the protection level you choose, the status indicator will reflect either Active, Not active or Off.

- **Active:** When status is active, Waterfox is securely sending DNS queries to ensure your online activities are protected.
- **Not active:** Waterfox detects errors or certain network conditions like VPN, parental controls, enterprise policies that tell Waterfox not to use DoH.
- **Off:** DoH has been disabled.

#### Why is the secure DNS status not showing as active?

If you have enabled secure DNS and the status is Not Active, common reasons are as follows:

- Waterfox wasn't able to connect to the provider.
- The connection to the provider took longer than expected.
- You are not connected to the internet.
- There was a problem with the provider.
- The browser is configured to _Default protection_ but the network has signaled to Waterfox to not enable DNS over HTTPS.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [
Configure DNS over HTTPS protection levels in Firefox
](https://support.mozilla.org/kb/dns-over-https). Original by [Mozilla Contributors](https://support.mozilla.org//kb/dns-over-https#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
