---
slug: /support/webxr-permission-info-page
title: "WebXR Permission Info Page"
---

Please [update your version of Waterfox](/support/update-waterfox-latest-release) for the latest features and security updates.
This article explains Waterfox's virtual reality features and how to manage permissions for websites that ask to access your VR devices. These features are available starting in [Waterfox version](/support/find-what-version-waterfox-you-are-using) 73.

## Allowing access to Virtual Reality (VR) devices

Websites that feature content and can be displayed in VR will ask for access to your connected headset. Let’s say you find a 360° video or an immersive game that you want to play. If you’ve given the website permission, it can show the content right in your headset without you having to do anything such as download an app.

This service is totally optional. Waterfox doesn’t allow sites to access your headset without your permission to protect your privacy. And, like all elements of Waterfox, it’s being created using open standards to ease adoption by Web developers.

## How does it work?

When you visit a virtual reality-enabled website, Waterfox will ask you if you want to allow access to your VR devices.

If you allow access to your device, Waterfox will collect some information about your headset and send it to the website.

If you don't allow access, Waterfox won't do anything. You may still be able to access the content in your 2D browser depending on the website’s intended experience.

If you select the checkbox to remember this decision, Waterfox will always allow or always block access to your VR devices for that website without asking.

## What information is being sent and to whom? How is my privacy protected?

Your privacy is extremely important to us, and Waterfox won’t share information about your devices or information that comes from their sensors without your permission. When you visit a page that requests your information, you’ll be asked before any information is shared with the requesting website and our third-party service provider.

By default, Waterfox sends the following information related to your VR devices:

- The kind of VR headset and controllers that you have connected, including brand name, display resolution, frame rate and field of view.
- Buttons, joysticks, triggers, touch sensitive surfaces or other controls that your device provides for input.
- Input coming from controllers, such as button presses and movements of the joystick.
- Adjustments you may have made to the headset, such as the distance between your pupils (IPD) and the distance between the lens and your eye. These adjustments are unique to you.
- Dimensions of the space that you have defined for VR.
- Height of the headset above the ground, which can determine your height while being worn.
- Position, orientation and acceleration of the VR device in space relative to your environment.

This information is exchanged over an encrypted connection to protect your privacy. Once Waterfox has the information about your device, it passes it to the website that requested it. Websites use this information to render the VR environment on the headset displays properly, map controller inputs to actions, and help you stay inside your configured play area. Sharing this information with a website can increase its ability to uniquely identify you.

Granting access for VR devices allows the site to interact with the devices that the website will be able to:

- present a VR scene in the headset, covering the full field of view and obscuring any other VR scene in the headset.
- play audio through speakers built into the headset or plugged into the headset.
- control haptic feedback (such as rumble motors) in VR controllers.

Granting permission to access your VR devices doesn't provide direct access to all the sensors in the device. The following information isn't given to the website, even if it has permission to access devices:

- Images or video feeds captured by the cameras in the VR devices. Cameras are sometimes used to determine the position and orientation of the device, but only the position and orientation is shared with the website – the data used to calculate this position isn't shared.
- Geographic position or compass heading / orientation reference. All positions and orientations of VR devices are relative to the configured play area.
- Some VR headsets will show a pass-through video feed when you interact with system functions for safety purposes or when activated by the user directly. This may occur while the website is presenting its VR scene. Pass-through video isn't accessible to websites that have been granted access to the VR devices.
- Microphones even if they're built into the VR devices.

If a website wants to access the camera or microphone on your VR device, it must request specific permission. Requests made by a website will involve asking explicitly to share the “microphone” and/or “camera”. For more information on microphone and camera permissions, see [How to Manage your Camera and Microphone Permissions](/support/how-manage-your-camera-and-microphone-permissions).

For a complete description of information collected and used by Waterfox, please see the [Waterfox Privacy Notice](/docs/policies/privacy/).

For information about what the website asking access to your VR devices does with your information, please refer to that website’s privacy policy.

## How do I undo a permission granted to a website?

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Use the Options
   search field to search for "virtual reality" (or select the Privacy & Security panel and scroll down to the _Permissions_ section).
3. From the search results under **Permissions**, click the Settings button to the right of **Virtual Reality**.
   The **Settings - Virtual Reality Permissions** dialog box will open.
4. Review or change the list of websites with allowed or denied virtual reality permission.

## How do I stop all websites from asking to access my devices?

If a website indicates to Waterfox that it wants to access your VR devices, Waterfox asks whether you want to grant permission by default. You can give Waterfox the ability to automatically deny new permission requests to all websites without asking.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Use the Options
   search field to search for "virtual reality" (or select the Privacy & Security panel and scroll down to the _Permissions_ section).
3. From the **Permissions** section, click the Settings… button to the right of **Virtual Reality**.
4. From the **Settings - Virtual Reality Permissions** box that opens, select the Block new requests asking to access your virtual reality devices checkbox.
5. Click **Save Changes**.

This will prevent any websites from requesting new permission to access your devices. Only websites with permission granted in the **Virtual Reality Permissions** settings box will have access.

## How can I add support for VR content to my website?

You can integrate VR support into your service by following the [WebXR API guide](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) via the MDN web docs.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [WebXR Permission Info Page](https://support.mozilla.org/en-US/kb/webxr-permission-info-page). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/webxr-permission-info-page#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
