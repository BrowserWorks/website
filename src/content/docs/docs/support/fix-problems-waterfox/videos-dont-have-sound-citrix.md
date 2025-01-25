---
slug: /support/videos-dont-have-sound-citrix
title: "Videos don’t have sound on Citrix"
---

If you are on a Citrix Server on Windows, you may have problems with sound when you play videos on Waterfox. This is due to an issue with increased security restrictions and we are working hard to resolve this.

In the meantime, you can reduce the sandbox security level by following these steps:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Search for security.sandbox.content.level.
3. Click the _Edit_ <img alt="Fx71aboutconfig-EditButton" class="inline-image" src="/assets/docs/2019-10-29-08-54-56-1f86ca.png"> button for the preference and set its value to 1.
4. Click on the checkmark <img alt="Fx71aboutconfig-Checkmark" class="inline-image" src="/assets/docs/2019-11-04-06-45-04-f67b18.png"> to save the change.
5. Restart Waterfox on the remote device.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Videos don’t have sound on Citrix](https://support.mozilla.org/en-US/kb/videos-dont-have-sound-citrix). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/videos-dont-have-sound-citrix#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
