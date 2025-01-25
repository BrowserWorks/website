---
slug: /support/trackers-and-scripts-waterfox-blocks-enhanced-track
title: "Trackers and scripts Waterfox blocks in Enhanced Tracking Protection"
---

This article describes tracking protection features and settings available as of [Waterfox version](/support/find-what-version-waterfox-you-are-using) 70. [This Waterfox blog post](https://blog.mozilla.org/blog/2019/09/03/todays-waterfox-blocks-third-party-tracking-cookies-and-cryptomining-by-default/) describes enhancements to tracking protection in Waterfox version 69. For previous Waterfox versions, see the [Content blocking](/support/content-blocking) article.
Please [update your version of Waterfox](/support/update-waterfox-latest-release) for the latest features and security updates.
[Enhanced Tracking Protection in Waterfox](/support/enhanced-tracking-protection-waterfox-desktop) blocks many common trackers and harmful scripts. It reduces the ability of third parties to collect data about your browsing behavior.

## How tracking works

Tracking relies on invisible code embedded in web pages. This code records your visits to websites and collects data about how you interact with pages. When the same tracker appears across multiple websites, it can compile a detailed profile of what you do online. Tracking companies also package, share, and sell this data to users of their service or other third parties.

These tracking techniques occur independent of the browser you use. The following trackers are blocked by default in Waterfox, using a list of known trackers provided by [Disconnect](https://disconnect.me/trackerprotection).

## Social media trackers

Social networks place trackers on other websites to follow what you do, see, and watch online. This allows social media companies to collect data about your browsing history and improve their ad targeting. Even if you don’t use a social network, that site can still collect data about your browsing habits.

**Social media trackers Waterfox blocks and doesn’t block**

Waterfox blocks the most common trackers from Facebook, Twitter, and LinkedIn that appear on other websites.

- The Standard setting is balanced for protection and performance. Pages will still load normally.
- The Strict mode blocks more trackers. Go to your global privacy preferences to set your [Enhanced Tracking Protection settings to Strict](/support/enhanced-tracking-protection-waterfox-desktop#strict-enhanced-tracking-protection).

Social media companies will still be able to collect data about you on their own social networks, including Facebook-owned services like Instagram, WhatsApp, and Messenger. Logging in to sites using your Facebook or Twitter account is another way social networks can collect data about you.

**Want even more protection against Facebook?**
Facebook like and share buttons on other websites allow Facebook to track your browsing activity, even if you never click them. To strip these buttons of Facebook trackers, add the [Facebook Container extension](/support/facebook-container-prevent-facebook-tracking).

## Cross-site tracking cookies

Cross-site tracking cookies follow you from site to site to gather data about what you do online. This is most often done without your knowledge or consent. Data firms and analytics companies use these cookies to track you, profile you, make inferences about your interests, and retarget you with ads. Because these cookies are set by a different company than the website you’re on, they’re also referred to as third-party tracking cookies.

### Cookies Waterfox blocks and doesn’t block

By default, Waterfox blocks the cookies that track your browsing activity across multiple websites. This includes cross-site tracking cookies set by ad, social media, and analytics companies. Other cookies, such as those that remember your login credentials or items in your shopping cart, are still permitted by default.

## Cryptominers

Cryptominers are a type of malware that use your system’s computing power to mine digital money. Cryptomining scripts drain your battery, slow down your computer, and can increase your energy bill. When your privacy settings are set to Standard (the Waterfox default) or Strict, cryptominers are being blocked.

Generating cryptocurrencies usually requires solving a complex cryptologic puzzle, a resource-intensive process that takes a lot of computing energy and power. To evade the cost, cryptojackers deploy these scripts on other people’s computers without their consent to draw energy and power.

## Tracking content

Many websites load external ads, videos, and other content with tracking code from other companies. For example, a website may embed a video from a video platform. The code that loads the video contains trackers. Blocking tracking content can make sites load much faster, but parts of pages might not work correctly or appear at all.

Tracking content can include:

- Ads
- Login fields
- Forms
- Payments
- Comments
- Videos and photos
- Buttons

By default, tracking content is blocked in [Private Windows](/support/private-browsing-use-waterfox-without-history) only. To add this protection for all windows, go to the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Options
, select the Privacy & Security panel and choose Strict under **Enhanced Tracking Protection**.
If parts of a webpage don’t work or the site appears to be broken, click the shield ![etp 70 purple](/assets/docs/2019-09-04-13-35-45-f63cde.png) in the address bar to toggle off protections for that site. This will allow all content to load, including trackers. See [this article's section on how to turn off Enhanced Tracking Protection](/support/enhanced-tracking-protection-waterfox-desktop#what-to-do-if-a-site-seems-broken) for details, and for more information, visit [SmartBlock for Enhanced Tracking Protection](/support/smartblock-enhanced-tracking-protection).

## Fingerprinters

Fingerprinters collect settings from your browser and computer to create a profile of you. Using this digital fingerprint, they can create a unique profile of you to track you across different websites. When your privacy settings are set to Strict, domains that are known fingerprinters are being blocked. See [this blog post](https://blog.mozilla.org/security/2020/01/07/waterfox-72-fingerprinting/) for details.

These are some of the characteristics of your device and browser that fingerprints can collect:

- Extensions you use
- Operating system and model of your device
- Screen resolution and language
- Information about your network connection
- Fonts installed on your computer

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Trackers and scripts Firefox blocks in Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/trackers-and-scripts-firefox-blocks-enhanced-track). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/trackers-and-scripts-firefox-blocks-enhanced-track#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
