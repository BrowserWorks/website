---
slug: /support/drm-content
title: "Watch DRM content on Waterfox"
---

Digital Rights Management (DRM) is technology that enables online video and audio services to enforce that the content they provide is used in accordance with their requirements. This technology may restrict some of the things you can do in the browser. Many services are moving towards HTML5 video that requires a different DRM mechanism called a Content Decryption Module (CDM).

## Playing DRM-controlled content in Waterfox

Waterfox for desktop supports the Google Widevine CDM for playing DRM-controlled content. Waterfox downloads and enables the Google Widevine CDM by default to give users a smooth experience on sites that require DRM. The CDM runs in a separate container called a sandbox, and you will be notified when a CDM is in use.

You can also disable a CDM and opt out of future updates by following the steps below. Once you disable a CDM, however, sites using this type of DRM may not operate properly.

## Disable the Google Widevine CDM without uninstalling

Disabling Google Widevine from the Add-ons Manager prevents it from running on your computer and prevents future updates from downloading. To disable this CDM plugin:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Plugins.
2. In the Add-ons Manager Plugins panel, click the ellipsis (3-dot) icon next to **Widevine Content Decryption Module provided by Google Inc.** and select Never Activate from the drop-down menu.
   ![Fx89WidevineMenu](/assets/docs/2021-05-04-06-41-17-bf51b5.png)

You may encounter sites where content playback is not possible without Google Widevine enabled. You may always turn Google Widevine on again by selecting Always Activate in the menu next to **Widevine Content Decryption Module provided by Google Inc.**

## Opt out of CDM playback, uninstall CDMs and stop all CDM downloads

You have the choice to globally opt out of HTML5 DRM playback. Once you opt out, Waterfox will delete any downloaded CDMs from your hard drive, cease all future CDM downloads and disable DRM playback. This affects only DRM-controlled HTML5 audio and video. To opt out of HTML5 DRM playback completely, follow these steps:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go to the _Digital Rights Management (DRM) Content_ section.
3. Remove the check mark next to **Play DRM-controlled content**.

You may encounter sites where content playback is not possible without DRM enabled. You can always turn DRM playback on again by opening the Waterfox Options
General panel and, under _Digital Rights Management (DRM) Content_, putting a check mark next to **Play DRM-controlled content**. After checking the checkbox, HTML5 DRM playback will be re-enabled and the Google Widevine CDM will download automatically.

## Supported platforms

**Google Widevine**

- Windows Vista and higher
- Mac OS X 10.11 and higher
- x64 Linux

Similar opt-out capabilities will be offered on all new platforms where Waterfox supports DRM.

## Troubleshooting

If DRM content does not play in Waterfox, first make sure that DRM content is enabled:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go to the _Digital Rights Management (DRM) Content_ section.
3. Make sure the box next to **Play DRM-controlled content** is check marked.

Also make sure that the Google Widevine plugin is activated:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Plugins.
2. In the Add-ons Manager Plugins panel, click the ellipsis (3-dot) icon next to **Widevine Content Decryption Module provided by Google Inc.**
3. Ensure that Always Activate is selected in the drop-down menu.

If you have confirmed these settings and DRM content does not play, try these solutions:

### Toggle DRM content off then on again

Follow the steps [above](#opt-out-of-cdm-playback-uninstall-cdms-and-stop-all-cdm-downloads) to remove the check mark next to **Play DRM-controlled content** in the _Digital Rights Management (DRM) Content_ section of Waterfox settings, then add back the check mark. This will make Waterfox reload DRM components.

### Disable Avast AntiTrack

Avast AntiTrack is known to cause issues with DRM content in Waterfox. Follow [this article from Avast](https://support.avast.com/en-us/article/Use-AntiTrack/) for instructions on how to disable AntiTrack.

### Reset the user agent

Resetting the user agent may also solve the issue. See [How to reset the default user agent on Waterfox](/support/how-reset-default-user-agent-waterfox).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Watch DRM content on Firefox](https://support.mozilla.org/en-US/kb/enable-drm). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/enable-drm#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
