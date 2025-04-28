---
slug: support/control-audio-or-video-playback-your-keyboard
title: "Control audio or video playback with your keyboard"
---

This article describes the media control feature that's available in [Waterfox version](/support/find-what-version-waterfox-you-are-using) 81 and above.

Please [update your version of Waterfox](/support/update-waterfox-latest-release) for the latest features and security updates.

## What is the media control feature?

You control media (audio or video) playback inside Waterfox without clicking on the video or audio itself. You can now control it by pressing the hardware control buttons on a keyboard or headset, pressing the button on the virtual control interface or by sending commands via specific protocol, such as [MPRIS](https://specifications.freedesktop.org/mpris-spec/2.2).

This depends on website developers using the [MediaSession API](https://w3c.github.io/mediasession/).

## What platform supports this feature?

You can use this feature on MacOS (OSX 10.12.1 or above), Windows (Windows 8.1 or above), and Linux (gtk-based distributions).

## How are media control supported?

- Physical hardware media control keys.
- Virtual media control keys, each platform has different virtual controller interfaces, which are implemented by different platform frameworks:
  - [Interface on Windows](https://bug1615665.bmoattachments.org/attachment.cgi?id=9129321) (using [SMTC](https://docs.microsoft.com/en-us/uwp/api/windows.media.systemmediatransportcontrols))
  - [Interface on Linux](https://user-media-prod-cdn.itsre-sumo.mozilla.net/uploads/gallery/images/2020-10-27-11-53-36-8ebdd3.png) (using [MPRIS](https://specifications.freedesktop.org/mpris-spec/2.2/))
  - [Interface on MacOS touch bar](https://media.idownloadblog.com/wp-content/uploads/2016/10/MacBook-Pro-Touch-Bar-Control-Strip-005.jpg) (using [MediaPlayer](https://developer.apple.com/documentation/mediaplayer))
- Using an app which uses platform specific API to involve controlling media.

## What kinds of media can be controlled by this feature?

Currently we only support controlling media playing from **audio** and **video**, so it **cannot** control media from web-audio and web-speech.

- If an audible media is playing from audio and video, then it’s able to be controlled
- If a playable media enters fullscreen
- If a playable media enters picture-in-picture mode

## What kinds of media can NOT be controlled by this feature?

Mediafrom **web-audio** and **web-speech** cannot be controlled. There are some exceptions:

- Inaudible media (silent videos that don't have an audio track, such as GIF-like images)
- Notification sounds

## If I have multiple tabs playing media, which tab would be controlled?

If there are multiple tabs playing at the same time, you could control the last tab playing media, unless you are playing in [Picture-in-Picture mode](/support/about-picture-picture-waterfox). In this case, the tab the picture-in-picture video belongs to would always be the tab that is being controlled.

## Why sometimes when I press media control keys, it controls other apps but not Waterfox? Or, other apps are also being controlled at the same time?

Each platform has its own mechanism for which applications control audio. In some cases, multiple applications might try to control the media keys at the same time. If this happens, try to close any other apps that are trying to control your media control keys.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Control audio or video playback with your keyboard](https://support.mozilla.org/en-US/kb/control-audio-or-video-playback-your-keyboard). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/control-audio-or-video-playback-your-keyboard#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
