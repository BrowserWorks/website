---
slug: support/enhanced-tracking-protection
title: "Enhanced Tracking Protection in Waterfox for desktop"
---

Enhanced Tracking Protection in Waterfox automatically protects your privacy while you browse. It blocks trackers that follow you around online to collect information about your browsing habits and interests [without breaking site functionality](/support/smartblock-enhanced-tracking-protection). It also includes protections against harmful scripts, such as malware that drains your battery.

## Protections Dashboard

To see what’s been blocked on all sites over the past week, visit your Protections Dashboard. Click on the shield <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> to the left of the address bar and select Protections Dashboard or type **about:protections** into the address bar. This will open the _Protections Dashboard_ page in a new tab.

## What Enhanced Tracking Protection blocks

Waterfox uses a list of known trackers provided by [Disconnect](https://disconnect.me/trackerprotection). By default, Waterfox blocks the following types of trackers and scripts:

- Social media trackers
- Cross-site tracking cookies (also isolates remaining cookies)
- Fingerprinters
- Cryptominers
- Tracking content: These trackers are hidden in ads, videos, and other in-page content. In **Standard** mode, tracking content is blocked only in Private Windows. To add this protection to all windows, visit your privacy preferences and select **Strict** or **Custom** as [explained below](#adjust-your-global-enhanced-tracking-protection-settings).

[Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/) is enabled by default in Standard Browsing Mode. Total Cookie Protection confines every cookie to the website where it was created. This prevents cookies from tracking you across sites. [Strict Mode](#strict-enhanced-tracking-protection) also includes [Enhanced Cookie Clearing](https://blog.mozilla.org/security/2021/08/10/waterfox-91-introduces-enhanced-cookie-clearing/), which allows users to clear third-party cookies more effectively.
To learn more about trackers and scripts blocked by Waterfox, see [Trackers and scripts Waterfox blocks in Enhanced Tracking Protection](/support/trackers-and-scripts-waterfox-blocks-enhanced-track) and [SmartBlock for Enhanced Tracking Protection](/support/smartblock-enhanced-tracking-protection).

## How to tell when Waterfox is protecting you

The shield to the left of the address bar tells you if Waterfox is blocking trackers and scripts on a site.

![Shield Address bar](/assets/docs/2021-04-23-12-56-36-6bb740.png)

- <img alt="Fx91ShieldIcon-Blue" class="inline-image" src="/assets/docs/2021-09-04-07-27-48-6f4a69.png"> **Blocking:** Waterfox **blocked** trackers and harmful scripts on a site. Open the shield to see what was blocked.
- <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> **Active:** Enhanced Tracking Protection is turned **on** on a site, but Waterfox **didn't block** any trackers or scripts.
- ![Fx91shield-ETPoff](/assets/docs/2022-03-16-13-20-43-26a8c0.png) **Inactive:** Enhanced Tracking Protection is turned **off** on a site. Open the shield and toggle the switch to turn it back on.

## How to tell what’s being blocked on a site

Click on the shield to see what Waterfox has blocked.

![Shield_panel Fx88](/assets/docs/2021-04-23-13-40-58-be9cf5.png)

This panel will display different information depending on the site you’re on.

- **Blocked:** Waterfox blocked these trackers and scripts. Select each one to see a detailed list.
- **Allowed:** These are the trackers and scripts that were allowed to load on the page. This happens because some websites may require loading trackers and scripts to function properly. Waterfox only allows trackers and scripts needed for the site to work and blocks the rest. For more information, visit [SmartBlock for Enhanced Tracking Protection](/support/smartblock-enhanced-tracking-protection).
- **None Detected:** Waterfox looked for these trackers and scripts, but did not find them on this site.
- Select Protection Settings to adjust your global privacy settings.
- Select Protections Dashboard to view a personalized summary of your protections over the past week, including tools to take control of your online security.

## What to do if a site seems broken

If a site seems broken, try turning off Enhanced Tracking Protection. It allows trackers to load on that site only. Enhanced Tracking Protection will continue to block trackers on other sites.

1.  Click on the shield <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> to the left of the address bar.
2.  Toggle the switch ![Fx91ETPbluetoggle](/assets/docs/2022-03-16-12-56-21-3859dc.png) at the top of the panel.
    ![Fx91SiteFixedSendReport](/assets/docs/2022-03-16-13-01-56-7fcd80.png)

        * This will turn off Enhanced Tracking Protection for this site. The page will reload automatically and allow trackers on this site only.

Follow the same process to turn Enhanced Tracking Protection back on.

You may encounter breakage on some sites when you’re in **Strict** Enhanced Tracking Protection. This is because trackers are hidden in some content. For example, a website might embed an outside video or social media post that contains trackers. To block the trackers, Waterfox must also block the content itself.

Trackers are often hidden in the following types of content:

- Login fields
- Forms
- Payments
- Comments
- Videos

### Report a broken site

If a broken site starts working properly again after turning off the Enhanced Tracking Protection, you can click the shield ![Fx91shield-ETPoff](/assets/docs/2022-03-16-13-20-43-26a8c0.png) icon and select **Send report**. This will show the _Report a Broken Site_ panel.

![Fx98ETP-ReportBrokenSite](/assets/docs/2022-03-23-12-12-39-99d4dd.png)

The Send Report button will send site related data to Waterfox, so future Waterfox versions can load that site working properly with Enhanced Tracking Protection enabled for everyone. By filling the optional _Describe the problem_ field helps us fix the problem faster. See [Report breakage due to blocking](/support/report-breakage-due-blocking) for more details.

## Adjust your global Enhanced Tracking Protection settings

When you download Waterfox, all protections included in **Standard** Enhanced Tracking Protection are already enabled.

To view or change your Enhanced Tracking Protection settings for all sites, click the shield <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> to the left of the address bar on any webpage and select Protection Settings. This will open the Waterfox Options
_Privacy & Security_ panel in a new tab.

:::tip
These settings are also available from the Waterfox menu:
:::
Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
Then select Privacy & Security.

### Standard Enhanced Tracking Protection

By default, Waterfox blocks the following on all sites:

- Social media trackers
- Cross-site tracking cookies (other third-party cookies are isolated)
- Tracking content in [Private Windows](/support/private-browsing-use-waterfox-without-history) only.
- Cryptominers
- Fingerprinters

### Strict Enhanced Tracking Protection

To further increase privacy, select **Strict** Enhanced Tracking Protection. This will block the following:

- Social media trackers
- Cross-site cookies
- Tracking content in all windows
- Cryptominers
- Fingerprinters

1. Click on the shield <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> to the left of the address bar on any webpage.
2. Click on Protection Settings.
   The Waterfox Options
   _Privacy & Security_ panel will open.
3. Under _Enhanced Tracking Protection_, select Strict.
4. Select the ![reload all tabs retina](/assets/docs/2019-09-13-11-05-25-37ec1e.png) button to apply your new privacy settings.

### Custom Enhanced Tracking Protection

Want to block some trackers and scripts, but not others? Use **Custom** Enhanced Tracking Protection.

1. Click on the shield <img alt="Fx89ShieldIcon" class="inline-image" src="/assets/docs/2021-05-06-05-12-06-f2679d.png"> to the left of the address bar on any webpage.
2. Click on Protection Settings.
   The Waterfox Options
   _Privacy & Security_ panel will open.
3. Under _Enhanced Tracking Protection_, select Custom.
4. Choose which trackers and scripts to block by selecting those checkboxes.
5. Select the ![reload all tabs retina](/assets/docs/2019-09-13-11-05-25-37ec1e.png) button to apply your new privacy settings.

You can also turn off all protections in **Custom** by deselecting all checkboxes. This allows all trackers and scripts to load.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Enhanced Tracking Protection in Firefox for desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
