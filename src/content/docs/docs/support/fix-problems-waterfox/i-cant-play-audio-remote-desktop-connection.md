---
slug: support/i-cant-play-audio-remote-desktop-connection
title: "I can’t play audio on a Remote Desktop Connection"
---

If you are on a Remote Desktop Connection (RDP) on Windows, audio playback will be disabled due to increased security restrictions. This is a known issue since Waterfox version 56 that we are working hard to fix.

In the meantime, you can reduce the sandbox security level by following these steps:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Search for the security.sandbox.content.level preference.
3. Click the _Edit_ <img alt="Fx71aboutconfig-EditButton" class="inline-image" src="/assets/docs/2019-10-29-08-54-56-1f86ca.png"> button next to the preference and set its value to 2.
4. Click on the checkmark <img alt="Fx71aboutconfig-Checkmark" class="inline-image" src="/assets/docs/2019-11-04-06-45-04-f67b18.png"> to save the change.
5. Restart Waterfox on the remote device.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [I can’t play audio on a Remote Desktop Connection](https://support.mozilla.org/en-US/kb/i-cant-play-audio-remote-desktop-connection). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/i-cant-play-audio-remote-desktop-connection#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
