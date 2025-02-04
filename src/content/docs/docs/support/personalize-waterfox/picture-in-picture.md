---
slug: /support/picture-in-picture
title: "About Picture-in-Picture in Waterfox"
---

The Picture-in-Picture feature allows you to pop videos out of their webpages into floating, always on top, windows, so you can watch while continuing to work in other tabs.

You can have multiple Picture-in-Picture windows open and move or resize them to your liking.

## Using picture-in-picture

### Toggle

The Picture-in-Picture _toggle_ appears when you hover over videos with the mouse cursor. Clicking on this will open the underlying video in the Picture-in-Picture player window:

- If you have never used Picture-in-Picture before, it will appear as a small blue rectangle that slides out when you hover over it to explain the feature:
  ![PiPv2](/assets/docs/2020-09-21-10-54-44-2992de.png)
- Once you have used Picture-in-Picture, it will appear as an icon over the video:
  <img alt="PiPIcon" class="inline-image" src="/assets/docs/2020-09-21-10-57-23-d753c9.png">

This feature is designed to work on most web videos. Though some videos will not display the toggle hovering over it. We only show it for videos that include an audio track, and that are also of sufficient size and play length.

:::note
The toggle doesn't appear when a video is on full screen.
:::

### Full-screen view

Double-click the picture-in-picture player window to view the video in full-screen. Double-click again to exit full-screen.

### Subtitles and captions

If you are using subtitles and captions while watching videos on the supported websites, they will also be viewable in Picture-in-Picture. It’s as simple as turning on the subtitles or captions on the in-page video player, and they will appear in Picture-in-Picture when launched.

Subtitles and captions for Picture-in-Picture are available on: YouTube, Netflix, Disney +, Amazon Prime Video, Funimation, Dailymotion, Khan Academy, BBC.co.uk, Washington Post, Nebula, Tubi, Hotstar, and SonyLIV — plus websites that support [WebVTT format](https://www.w3.org/TR/webvtt1) like Coursera and Twitter. We’re working to expand the feature to more sites.

### Context Menu

Another way to access Picture-in-Picture is via the context menu. If right-click on a web video, you’ll sometimes see the media context menu that looks like this:
![context picture in picture](/assets/docs/2019-11-30-14-48-47-943359.png)

There’s a **Picture-in-Picture** menu item in that context menu that you can use to toggle the feature.

Many sites, however, make it difficult to access the context menu for web videos: YouTube, for example, overrides the default context menu with their own. You can get to the default native context menu by either holding Shift while right-clicking, or double right-clicking.

When a video is on full screen, the Picture-in-Picture menu item is not included in the context menu. You have to exit full screen to switch to Picture-in-Picture through the toggle or the context menu. (Note: The keyboard shortcut works on full screen.)

### Keyboard shortcuts

To access via the keyboard, press the combination Ctrl + Shift + ]. Waterfox will attempt to launch the most relevant video on the page into a Picture-in-Picture window or will close it if already open.

The following shortcuts are available for playback and volume controls:

- Ctrl + ↓: Mute
- Ctrl + ↑: Unmute
- ↓: Volume decrease
- ↑: Volume increase
- ←: Seek back 15 seconds
- →: Seek forward 15 seconds
- Ctrl + ←: Seek back 10%
- Ctrl + →: Seek forward 10%
- Home: Seek to beginning of video
- End: Seek to end of video
- Space: Pause/Continue

## Player window

The Picture-in-Picture window also gives you the ability to quickly ![picture-in-picture play control](/assets/docs/2019-12-11-10-57-40-a57dbe.png) play or ![picture-in-picture pause control](/assets/docs/2019-12-11-10-58-21-6a2e29.png) pause the video — hovering the video with your mouse will expose that control, as well as a control for ![picture-in-picture close control](/assets/docs/2019-12-11-11-09-26-b19eac.png) closing the window, and ![picture-in-picture close-and-go-to-tab control](/assets/docs/2019-12-11-11-09-45-82adc8.png) closing the window while returning you to the tab that the video came from. For information about how to hide these controls, see [Turn picture-in-picture mode controls on and off](/support/turn-picture-picture-mode).

## Video placeholder on the page

When a video is in Picture-in-Picture view, the video placeholder on the page shows the message _This video is playing in Picture-in-Picture mode._ You can still use the video controls on the placeholder, such as play/pause, volume and full screen.
![playing in picture-in-picture](/assets/docs/2019-12-11-10-44-23-46e24b.png)

## Disabling the Picture-in-Picture toggle

If you prefer to disable the toggle, so it does not appear over top of videos, there are two easy ways to do that: either on a site that has a supported video or in the settings.

### Using the Picture-in-Picture toggle to disable it

1. Find a video where you can see the Picture-in-Picture toggle.
2. Right click on the toggle.
3. Click Hide Picture-in-Picture toggle.
   <img alt="PictureInPicture_icon" class="inline-image" src="/assets/docs/2021-11-08-12-21-37-911af7.png">

### Enabling / disabling the Picture-in-Picture toggle in Settings

If you don’t want to see the controls while hovering, you can hide that option in Waterfox. (Note: You can still turn on picture-in-picture view by right-clicking on a video.) Or you can use this to re-enable the control when you want to use it again.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, scroll down to the _Browsing_ section.
3. Clear the check mark for “Enable picture-in-picture video controls”.
   ![FXsettings-UncheckPIP](/assets/docs/2019-12-02-13-31-56-1bbaed.png)

If you later want to re-enable the controls, simply add back the check mark.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [About Picture-in-Picture in Firefox](https://support.mozilla.org/en-US/kb/about-picture-picture-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/about-picture-picture-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
