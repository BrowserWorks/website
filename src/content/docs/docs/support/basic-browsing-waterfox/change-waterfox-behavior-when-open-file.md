---
slug: support/change-waterfox-behavior-when-open-file
title: "Manage file types and download actions in Waterfox"
---

This article describes how Waterfox handles downloaded files for different types of content, such as saving a file or opening an application installed on your computer, and how you can change that behavior.

- For help with problems downloading files, see [What to do if you can't download or save files](/support/cant-download-or-save-files).
- For help with embedded media on web pages, see [Fix common audio and video issues](/support/fix-common-audio-and-video-issues).
- For help changing the e-mail program Waterfox uses, see [Change the program used to open email links](/support/change-program-used-open-email-links).

## File types and download actions

When you click on a link to download a file, you may see a dialog asking whether you want to save the file or open it with a specific application, if there is no download action already set for that file type. The [Media type](https://wikipedia.org/wiki/Media_type), also called the MIME type or [Content type](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Type), as configured by the web server, will determine what action Waterfox will take.

Waterfox will not be able to properly handle a file if a misconfigured web server sends it with an incorrect content type. For example, Waterfox may display the content as plain text instead of opening the file in an application. To learn more, see [Properly configuring server MIME types](https://developer.mozilla.org/docs/Learn/Server-side/Configuring_server_MIME_types) and [Common MIME types](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) at MDN web docs. You can contact the website in such cases, or you can try a Waterfox add-on such as [Content-Type Fixer](https://addons.mozilla.org/firefox/addon/content-type-fixer) to work around the problem. (If you use an add-on and need help with it, you should visit the add-on site or contact the add-on developer for support.)

When you tell Waterfox to open or save a file and also check the option "Do this automatically for files like this from now on" in the "What should Waterfox do with this file?" prompt, ([see below](#adding-download-actions)) a new Content Type and Action entry will be added to the General panel _Applications_ section of Waterfox settings.

:::note
Waterfox treats links to some types of media files, such as .mp3 files, the same way it treats .txt and .html links, by handling them internally. You will not be asked what to do with the file (unless the file is assigned "Content-Disposition: attachment" by the web server). Instead, the file will open and play in Waterfox, with a control bar displayed to manage playback (see [this article](/support/html5-audio-and-video-waterfox) for details). Waterfox only uses _Applications_ settings to determine what action is taken when a file is treated as a download ([see below](#changing-download-actions)).
:::

## Changing download actions

You can change what action Waterfox takes for defined content types. This will not affect media embedded in a web page – only links to the files themselves.

1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2.  In the General panel, go to the _Applications_ section.
3.  Select the _Content Type_ entry for action you want to change. (You might see more than one entry for the same [file format or extension](http://wikipedia.org/wiki/File_format) because some types of files include multiple content types.)
4.  The Action column will give you a drop-down menu, with options on the action to take.

        * **Open in Waterfox**: Select this if you want Waterfox to display the content. It only applies to a limited number of content types that Waterfox is able to decode (PDF, XML, SVG, and WebP Image).
        * **Always ask**: This will show you a prompt asking *What should Waterfox do with this file?* ([see below](#what-should-waterfox-do-with-this-file-prompt)) so that you can choose the action you want to take. This can be useful if Waterfox is automatically saving that type of file or is always opening it with a certain application, and you want to be asked what to do.
        * **Save File**: This will always save the file to your computer, when you download that type of file. To learn more, see [Where to find and manage downloaded files in Waterfox](/support/where-find-and-manage-downloaded-files-waterfox).
        * **Use Windows default application**: This will open the file with the default application configured in your operating system. This is only shown for content types that include the *Open in Waterfox* option (PDF, XML, SVG, and WebP Image files) and is available when your system has another application set to open that type of file by default.
        * **Use <*application name*>**: Open the file or handle the protocol with this application. (Some Content Types, such as mailto, irc and ircs, are [protocols](https://developer.mozilla.org/en-US/docs/Waterfox/Add-ons/WebExtensions/manifest.json/protocol_handlers), not types of files.) Options can include one or more web applications to handle the protocol or an installed application.
        * **Use other…**: This opens the *Select Helper Application* dialog, where you can choose the application you wish to use.
        * **Application Details…**: If web applications, or if installed applications other than the system default are listed, this opens a dialog where you can learn the location of those applications or remove an application as an available option.

5.  Close the _about:preferences_ page. Any changes you've made will automatically be saved.

## Adding download actions

When you click on a link and Waterfox doesn't have a content type and download action set up for that type of file, Waterfox will ask you how to handle the file by showing you the following prompt:

### "What should Waterfox do with this file?" prompt

:::note
You will also see this prompt for download actions set to _Always ask_ in Waterfox _Applications_ settings ([see above](#changing-download-actions)). For content types that can be set to _Open in Waterfox_ (PDF, XML, SVG, and WebP Image files), an **Open with Waterfox** option will also be available, in addition to the other options described below.
:::

- **Open with**: Saves the file to a temporary folder and opens it in the operating system's default application for that file type. (You can also use the drop-down menu to choose another application.)
- **Save File**: Saves the file to the download folder (specified in your Waterfox Options
  in the General panel _Downloads_ section).
- **Do this automatically for files like this from now on**: Check mark this option to always take the selected action and then click OK. This will add a new entry to the Content Type list of download actions.

**Is _Do this automatically for files like this from now on_ disabled?** This can happen if the website's server incorrectly specifies the Internet Media type of the file. It also can happen if the server assigns "Content-Disposition: attachment" to the file.
:::caution
Do not choose Waterfox as a helper application to always open the file type, as this can cause a problem where [Waterfox repeatedly opens empty tabs or windows after you click on a link](/support/waterfox-repeatedly-opens-empty-tabs-or-windows).
:::

### "What should Waterfox do with this file?" prompt does not show an application

The "What should Waterfox do with this file?" prompt may not show a default application for some file types you download in the _Applications_ section of Waterfox settings. You can click the Browse… button to choose an application installed on your computer to open the file.

## Resetting download actions for all content types

If you are having problems with how Waterfox is handling file downloads that you can't resolve, or if you just want to start fresh, you can restore the default content types and actions by refreshing Waterfox. To learn more, see [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Manage file types and download actions in Firefox](https://support.mozilla.org/en-US/kb/change-firefox-behavior-when-open-file). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/change-firefox-behavior-when-open-file#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
