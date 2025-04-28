---
slug: support/waterfox-page-info-window
title: "Waterfox Page Info window"
---

The Waterfox **Page Info** window gives you technical details about the page you're on and also allows you to change various permissions for that website. To open the _Page Info_ window, use one of these methods:

- If the [Menu bar is enabled](/support/restore-menu-bar-waterfox), click Tools and select Page Info from the drop-down menu.
- Use the keyboard shortcut Ctrl + I.

You can also open the _Page Info_ window by following these steps:

1. Click the padlock ![Fx89Padlock](/assets/docs/2021-05-06-04-33-33-7bdc86.png) to the left of a web page's address.
2. Click the right arrow in the [Site Information](/support/site-information-panel) drop-down panel.
   ![Fx89SiteInfoPanel](/assets/docs/2021-05-11-08-33-48-7804c0.png)
3. Click the More Information button in the next prompt.

The _Page Info_ window that opens is organized into different panels. Each panel is described below.

## General

![Fx89PageInfo-General](/assets/docs/2022-01-03-07-30-11-2312ea.png)

The _General_ panel includes basic information about the page such as its title, address and content type, as well as more technical data from the page source.

- **Title**: Displays the title of the page you're visiting.
- **Address**: Displays the URL (Uniform Resource Locator) of the page you're visiting.
- **Type**: Displays the content type (MIME type) of the page you're visiting. This type is determined by the web server. To learn more, see [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file).
- **Render Mode**: Displays whether the page conforms to web coding standards (_Standards compliance mode_) or if Waterfox must display the page in a way that is compatible with non-standard code (_Quirks mode_).
- **Text Encoding**: Displays what [character encoding](https://wikipedia.org/wiki/Character_encoding) the page uses. For more information, see [Text Encoding no longer available in the Waterfox menu panel](/support/text-encoding-no-longer-available-waterfox-menu).
- **Modified**: Displays the date and time the page was last changed.

### Meta

The _Meta_ field displays any [metatags](https://wikipedia.org/wiki/Metadata#Web_pages) located in the page's source code (the number of tags are in parentheses). These can include specifications on file type, character encoding, author, keywords, and more.

## Media

![Fx73PageInfo-Media](/assets/docs/2020-04-20-02-28-03-75c2b7.png)

The _Media_ panel displays the URL and type of all the backgrounds, images, and embedded content (including audio and video) that loads with the page. You can click on any item to find out more about it, including its:

- **Location**: The URL of the specified item.
- **Type**: The file type of the specified item.
- **Size**: The size in kilobytes (and bytes) of the specified item.
- **Dimensions**: The size of the item on the screen in pixels.
- **Associated Text**: For images, the "alternate" text that displays if the image is not loaded.

For any item, you can choose to save it to your hard drive by clicking the Save As… button.

## Permissions

![Fx73PageInfo-Permissions](/assets/docs/2020-01-12-09-12-12-6d662e.png)

The _Permissions_ panel lets you override options for the domain listed after **Permissions for**. Uncheck the **Use Default** box to specify whether the page is allowed or blocked from doing the indicated action.

### Access Virtual Reality Devices

Specifies whether the listed domain is allowed to use your connected virtual reality headset. This applies to sites that have immersive experiences, such as 360° videos and games. You can set this to **Always Ask**, **Allow**, or **Block**. To learn more, see [WebXR Permission Info Page](/support/webxr-permission-info-page).

### Access Your Location

Specifies whether Waterfox is allowed to tell the listed domain where you're located, using Location-Aware Browsing.

### Autoplay

Specifies whether the listed domain is allowed to autoplay audio and video. For more information, see [Allow or block media autoplay in Waterfox](/support/block-autoplay).

### Install Add-ons

Specifies whether the listed domain is allowed to launch the extension or theme installation dialog box. Installation permission for websites can be added or removed in the _Privacy & Security_ panel of [Waterfox Settings](/support/waterfox-options-preferences-and-settings), under _Permissions_.

### Open Pop-up Windows

Specifies whether the listed domain may launch pop-ups. See [Pop-up blocker settings, exceptions and troubleshooting](/support/pop-blocker-settings-exceptions-troubleshooting) for instructions on how to add or remove pop-up permissions for sites.

### Override Keyboard Shortcuts

Specifies whether the listed domain may replace built-in keyboard shortcuts; for example, assigning Ctrl + B to a Bold command instead of the Bookmarks Sidebar.

### Send Notifications

Specifies whether the listed domain is allowed to send [Push notifications](/support/push-notifications-waterfox).

### Set Cookies

Specifies whether the listed domain may set [cookies](/support/cookies-information-websites-store-on-your-computer). See [Websites say cookies are blocked - Unblock them](/support/websites-say-cookies-are-blocked-unblock-them) and [Block websites from storing cookies and site data in Waterfox](/support/block-websites-storing-cookies-site-data-waterfox) for instructions on how to add or remove cookie permissions for sites.

### Share the Screen

Websites can ask your permission to share your computer screen. You can set this to **Always Ask** or **Block**. For more information, see [Share browser windows or your screen with sites you trust](/support/screenshare-safety).

### Store Data in Persistent Storage

Specifies whether the listed domain is allowed to store data on your computer for later use. Waterfox keeps data from websites with persistent storage until you delete it. For more information, see [Manage local site storage settings](/support/storage).

### Switch to this Tab

Specifies whether the listed domain is allowed to change the focus to its own tab. You can set this to **Always Ask** or **Allow**.

### Use the Camera

Specifies whether the listed domain is allowed to use your camera. This applies to sites that have video or image capture capabilities, such as video chat sites. You can set this to **Always Ask**, **Allow** or **Block**. For more information, see [How to manage your camera and microphone permissions with Waterfox](/support/how-manage-your-camera-and-microphone-permissions).

### Use the Microphone

Specifies whether the listed domain is allowed to use your microphone. This applies to sites that have audio recording capabilities, such as voice conferencing sites. You can set this to **Always Ask**, **Allow** or **Block**. For more information, see [How to manage your camera and microphone permissions with Waterfox](/support/how-manage-your-camera-and-microphone-permissions).

## Security

![Fx64PageInfo-Security](/assets/docs/2018-10-28-13-30-16-08f552.png)

### Website Identity

- **Website**: Lists the domain of the page.
- **Owner**: Displays the site's owner, if the page's identity can be verified.
- **Verified by**: Displays the agency that issued the security certificate the site uses, if there is one. Click the View Certificate button to see the [website certificate](/support/secure-website-certificate).

### Privacy & History

- **Have I visited this website before today?**: Displays whether you've visited the site before today, and if so, how many times.
- **Is this website storing information on my computer?**: Displays whether the site is storing [cookies](/support/cookies-information-websites-store-on-your-computer) or other [site data](/support/storage). Click the Clear Cookies and Site Data button to remove the stored data from all sites in that domain, if any. For example, if you ask to clear at _blog.mozilla.org_, cookies and data from all sites in the _mozilla.org_ domain will be removed.
- **Have I saved any passwords for this website?**: Displays whether you've saved login information for this site. Click the View Saved Passwords button to view the passwords you've saved for the site.

### Technical Details

The _Technical Details_ section displays whether the connection is encrypted for privacy reasons, and if so, what type or strength of encryption was used.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox Page Info window](https://support.mozilla.org/en-US/kb/firefox-page-info-window). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-page-info-window#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
