---
slug: support/fix-common-audio-and-video-issues
title: "Fix common audio and video issues"
---

Sometimes, the video or audio content in a web page cannot be properly downloaded or played in Waterfox. This article will help you solve these problems.

## Check volume control for Waterfox in the Volume Mixer

The Volume Mixer has a specific volume control for Waterfox. [Check the Volume Mixer](/support/what-to-do-if-waterfox-wont-play-any-sounds#check-the-volume-mixer) and make sure the volume level for _Waterfox_ is not low or muted.

## Reload the website

Sometimes a change you make in the system settings, such as selecting another sound device in the Volume Mixer, may not be applied correctly in an already open tab. Try reloading the website to see if it solves the issue.

## Allow autoplay of media with sound

Waterfox may be blocking media with sound from playing automatically. To allow media autoplay, see [Allow or block media autoplay in Waterfox](/support/block-autoplay).

## HTML5 audio and video

Waterfox has built in support for open media formats usually associated with MP3, WebM, Ogg, and Wave containers. However, MP4 containers usually depend on platform decoders for AAC and H.264 audio and video streams. For more information, see [HTML5 audio and video in Waterfox](/support/html5-audio-and-video-waterfox).

## You may need the latest Media Feature Pack for N versions of Windows

Windows N versions are missing Windows Media Player and related software for media functions. You may need to install or update the Media Feature Pack from Microsoft. See [Fix video and audio problems on Waterfox for Windows N editions](/support/fix-video-audio-problems-waterfox-windows) for details.

## Digital Rights Management (DRM) protected videos

If you have problems playing DRM-controlled content from Amazon Prime, Netflix, Hulu, Disney+ and other streaming services, make sure that your Waterfox Options
General panel **Digital Rights Management (DRM) Content** setting, _Play DRM-controlled content_ is check marked and that the Google Widevine plugin is enabled. See [Watch DRM content on Waterfox](/support/enable-drm) for more information.

## Clear the cache

See [How to clear the Waterfox cache](/support/how-clear-waterfox-cache).

## Disable interfering extensions or ad-blocking software

Ad-blocking software, such as anti-banner filters of your Internet Security program, or extensions, such as uBlock Origin or Adblock Plus, can prevent audio or video content from playing.

- If the site works with ad-blocking disabled, you may want to add the site to your whitelist in your adblocker filter.
- If the video or audio plays when you disable all extensions, then one of your extensions was causing the problem. For more information, see [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

## Check some Waterfox settings

- Cookies:
  1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
  2.  Select the Privacy & Security panel and go to the **Cookies and Site Data** section.
  3.  Verify that cookies are enabled and that the site is not blocked in the _Exceptions_ list.
- History:
  1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
  2.  Select the Privacy & Security panel and go to the **History** section.
  3.  Make sure that Waterfox is set to Remember history.
- Pop-up windows:
  1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
  2.  Select the Privacy & Security panel and go to the **Permissions** section.
  3.  Allow the website as an exception to the _Block pop-up windows_ setting.

## Reset preferences

See [Reset Waterfox preferences to troubleshoot and fix problems](/support/reset-preferences-fix-problems).

## Remove specific entries in the hosts file (advanced users)

If you use a [hosts file](http://en.wikipedia.org/wiki/Hosts_%28file%29), you can temporarily disable it by renaming it Xhosts. Or, you can edit the hosts file to remove specific entries that may be causing videos on certain sites to fail (see [this thread](https://support.mozilla.org/questions/1275882) for an example). To apply changes to your hosts file, you may need to flush the DNS cache by entering the command: `ipconfig /flushdns` in the Run dialog box on Windows.

## Related links

- [I can’t play audio on a Remote Desktop Connection](/support/i-cant-play-audio-remote-desktop-connection)
- [Videos don't have sound on Citrix](/support/videos-dont-have-sound-citrix)

- [What to do if Waterfox won't play any sounds](/support/what-to-do-if-waterfox-wont-play-any-sounds)
- [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file)
- [Mixed content blocking in Waterfox](/support/mixed-content-blocking-waterfox)

**_Based on information from [Video or audio does not play (mozillaZine KB)](http://kb.mozillazine.org/Video_or_audio_does_not_play)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Fix common audio and video issues](https://support.mozilla.org/en-US/kb/fix-common-audio-and-video-issues). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/fix-common-audio-and-video-issues#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
