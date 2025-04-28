---
slug: support/html5-audio-and-video-waterfox
title: "HTML5 audio and video in Waterfox"
---

Waterfox handles many types of audio and video content on web pages, and can also open links to MP3 files and some other types of media. This article explains which media formats you can play and how to control, save, and open them.

## Supported formats

Since the use of certain audio and video file types is restricted by patents, a third-party application is required to use them. Waterfox, however, is able to play natively open media and some types of patented media.

### Open media

Waterfox can play the [WAV](http://en.wikipedia.org/wiki/WAV) [container format](http://en.wikipedia.org/wiki/Digital_container_format) (.wav, .wave file types) containing uncompressed audio in [PCM](http://en.wikipedia.org/wiki/Linear_pulse_code_modulation) at 8 or 16 bits per sample.

[Vorbis audio](http://en.wikipedia.org/wiki/Vorbis), [Opus audio](http://en.wikipedia.org/wiki/Opus_%28audio_format%29), [Theora video](http://en.wikipedia.org/wiki/Theora), and [VP8 video](http://en.wikipedia.org/wiki/VP8) are free [audio](http://en.wikipedia.org/wiki/Data_compression#Audio)/[video compression](http://en.wikipedia.org/wiki/Data_compression#Video) formats for use without patent restrictions. They can be viewed in Waterfox if they are embedded in the following [container formats](http://en.wikipedia.org/wiki/Digital_container_format): [Ogg](http://en.wikipedia.org/wiki/Ogg) (.ogg, .oga, .ogv, .ogx, .spx, .opus file types) or [WebM](http://en.wikipedia.org/wiki/WebM) (.webm file type).

Waterfox also supports [FLAC](https://en.wikipedia.org/wiki/FLAC) (Free Lossless Audio Codec) playback (.flac file type) and [MP3](https://en.wikipedia.org/wiki/MP3) playback (.mp3 file type).

### Patented media

[AAC](http://en.wikipedia.org/wiki/Advanced_Audio_Coding) and [H.264/MPEG-4 AVC](http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC) are patented [audio](http://en.wikipedia.org/wiki/Data_compression#Audio)/[video compression](http://en.wikipedia.org/wiki/Data_compression#Video) formats. They can be viewed in Waterfox using built-in OS libraries (so neither Waterfox nor you need to pay a fee) if embedded in the [MP4](http://en.wikipedia.org/wiki/MPEG-4_Part_14) [container format](http://en.wikipedia.org/wiki/Digital_container_format) (.mp4, .m4a, .m4p, .m4b, .m4r, .m4v file types).

Waterfox supports WebM/VP9 video on systems that don't support MP4/H.264.

:::tip
In order to test your system, some sample video files are available in the [“Video For Everybody” Test Page](http://camendesign.com/code/video_for_everybody/test.html) at [camendesign.com](http://camendesign.com).
:::

## Audio and video controls

### Control bar

When you follow a link to open a supported audio or video file in Waterfox or when you visit a website that includes supported media, you will see controls for managing playback. Controls for video will appear when you hold the mouse pointer over the media on the page.

![Video Controls](/assets/docs/2013-07-04-03-15-49-795a6c.png)

- **Play button**: ![Video Play](/assets/docs/2013-07-04-03-16-44-310ec9.png) Starts playback.
- **Pause button**: ![Video Pause](/assets/docs/2013-07-04-03-17-34-3f7455.png) Stops playback once it has started.
- **Position slider**: ![Video Progress Slider](/assets/docs/2013-07-04-03-18-15-15b1c0.png) Indicates how much time has elapsed since the beginning of the file. Drag the slider left or right to go back or forward.
- **Volume control**: Click to mute or unmute. Hover and drag the slider up or down to adjust the volume.
  ![Video Sound Slider](/assets/docs/2013-07-04-03-18-57-c7ea61.png)
- **Full-screen button**: ![Video Fullscreen](/assets/docs/2013-07-04-03-20-07-713d0e.png) Toggles full screen when in default size.
- **Default size button**: ![Video Default Size](/assets/docs/2013-07-04-03-25-43-6f64f9.png) Restores the default size when in fullscreen.

### Context menu controls

The context menu (accessible via right-click) includes the above controls except the sliders, and also let you:

- **Accelerate or reduce the playback rate**: Select Play Speed and then one of the available speeds.
- **Play video over and over**: Select Loop so that the video will play over and over automatically.
- **Hide controls**: Select Hide Controls so that the bottom control bar never show up. To show them, select Show Controls.

### Keyboard controls

After you click on the media on a web page, to give it focus, you can control the playback with your keyboard.

| Command
| Shortcut
|
| --- | --- |
| Toggle Play / Pause
| Space bar |
| Decrease volume
| ↓ |
| Increase volume
| ↑ |
| Mute audio
| Ctrl + ↓ |
| Unmute audio
| Ctrl + ↑ |
| Seek back 15 seconds
| ← |
| Seek back 10 %
| Ctrl + ← |
| Seek forward 15 seconds
| → |
| Seek forward 10 %
| Ctrl + → |
| Seek to the beginning
| Home |
| Seek to the end
| End |

## Saving media files

To save an audio file from a web page to your computer:

1. Right-click
   on the audio controls and select Save Audio As….
2. Select a location on your computer to save the file.

To save a video file from a web page to your computer:

1. Right-click
   on the video controls and select Save Video As….
   - Select Save Snapshot As… if you only want to save the video snapshot.
2. Select a location on your computer to save the file.

## Opening saved files

The media files you save from web pages may not play in your normal media player. To open these types of files:

1. Open Waterfox.
2. Click Ctrl + O.
3. Navigate to the folder that contains the file you want to play and click Open.

## Troubleshooting

If you are having problems with audio or video files, see:

- [Fix common audio and video issues](/support/fix-common-audio-and-video-issues)
- [What to do if Waterfox won't play any sounds](/support/what-to-do-if-waterfox-wont-play-any-sounds)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [HTML5 audio and video in Firefox](https://support.mozilla.org/en-US/kb/html5-audio-and-video-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/html5-audio-and-video-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
