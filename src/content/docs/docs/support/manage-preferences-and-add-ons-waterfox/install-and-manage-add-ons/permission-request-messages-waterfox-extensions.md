---
slug: support/permission-request-messages-waterfox-extensions
title: "Permission request messages for Waterfox extensions"
---

When you install an extension into Waterfox, you may be presented with a message similar to this one:

![permissions request](/assets/docs/2018-01-18-11-56-58-0c8fc7.png)

This is an extension asking your permission to tap into Waterfox’s inner framework (via APIs) to alter your browser’s behavior. These APIs might ask to read or write data you enter in webpages, read data from or access features on your computer, or alter the settings in your browser. If you don't see one of these messages that means the extension won't try to access any of your data or change the settings in your browser.

So you can better understand what these messages mean in terms of practical impact on your browsing experience and your data, this article provides details about each of the messages.

(You're also encouraged to check out [Tips for assessing the safety of an extension](/support/tips-assessing-safety-extension) for further guidance on evaluating extensions.)

## Access your data for all websites

The extension could read the content of any web page you visit as well as data you enter into those web pages, such as usernames and passwords.

Extensions requesting this permission might:

- Read product and price information from a page to help find you the best price on items you're shopping for
- Offer a password manager that reads and writes details of your username and password
- Provide an ad blocker by reading the content of each web page you open to find and remove ad code

## Access IP address and hostname information

When you visit a website, you generally see or entered the hostname (e.g. [amazon.com](http://amazon.com)). A service called DNS transforms the hostname into an IP address, a number that identifies the device connecting to the network. This is also true for devices in your local work or home network. This permission enables the extension to transform hostnames into IP addresses.

Extensions requesting this permission might:

- Use information about your current location
- Determine if you are on a local network, and gather information about it

## Access your data for sites in the “named” domain

The extension could read the content of web pages you visit in the specified domain, as well as data you enter into those web pages, such as usernames and passwords.

Extensions requesting this permission might:

- Update the look of some or all pages within the domain
- Block content, such as advertising or content using certain tags, from a domain’s content feed

## Access your data in # other domains

Used in conjunction with the named domain message (above) when the extension is requesting access to five or more domains; the first three are listed and the other domain requests counted.

## Access your data for a specific site

The extension could read the content of any web pages you visit at the specified website, as well as any data you enter into those web pages, such as usernames and passwords.

Extensions requesting this permission might:

- Update the look of some or all pages within the website
- Block content, such as advertising or content labeled with certain tags

## Access your data on # other sites

Used in conjunction with the named website message (above) when the extension is requesting access to five or more websites—the first three are listed and the other website requests counted.

## Read and modify bookmarks

The extension could create, modify, or remove bookmarks or change the folder structure in which bookmarks are stored.

Extensions requesting this permission might:

- Add bookmarks for their features or for certain web pages
- Provide enhanced bookmark management features

## Read and modify browser settings

The extension could do one or more of the following:

- Enable or disable the display of popups
- Enable or disable the caching of web pages
- Set the browser to deny or prompt for all new requests to display notifications
- Read the URL of the browser’s home page
- Read the URL used in new tabs
- Determine how the browser displays animated images—plays as normal, once, or not at all

## Clear recent browsing history, cookies, and related data

Extensions requesting this permission might offer enhanced features to clean up your browsing history.

The extension could clear any or all of:

- Browser cache
- Cookies
- Downloads
- History
- Local storage
- Plugin data
- Saved form data
- Saved passwords

## Get data from the clipboard

The extension could retrieve data from the clipboard: The equivalent of "paste".

Extensions requesting this permission might:

- Let you submit copied text into a translation tool
- Use a copied image to perform a lookup in a visual search engine

## Input data to the clipboard

The extension could write data to the clipboard: The equivalent of “copy” or “cut”.

Extensions requesting this permission might add content to the clipboard so you can use it elsewhere in your browser or computer.

## Extend developer tools to access your data in open tabs

The extension could add a new panel to the developer tools and will be given access to all data in all tabs.

Extensions requesting this permission will usually deliver new [developer tools](https://developer.mozilla.org/son/docs/Tools). However, some ordinary extensions use the developer tools to provide additional diagnostic or informational features. One example is [Adblock Plus](https://addons.mozilla.org/firefox/addon/adblock-plus/), which provides a feature in developer tools where you can see details of the ads and content it’s blocking.

## Download files and read and modify the browser’s download history

The extension could save a file from the web or one created in the extension using the browser’s download manager. The extension could also access and update details of downloaded files stored in the download manager.

:::note
The extension has to obey the settings in the download manager, putting you in control of where the files are saved.
:::
Extensions requesting this permission might:

- Save data from the extension to your computer (extensions aren’t allowed to write directly to your computer’s file system)
- Save files from a website or remote server
- Provide a feature to manage download history

## Open files downloaded to your computer

The extension could request that the application on your computer that handles files of a specific type opens a downloaded file. For example, if you have Microsoft Word installed on your computer, the extension could request it to open file with ".docx".

Extensions requesting this permission might:

- Open audio files in your computer’s music player
- Open documents, images, or other files in an editor

## Read the text of all open tabs

The extension could perform a search of the text content of any tab.

Extensions requesting this permission might provide an enhanced 'find' feature.

## Access your location

The extension could obtain your location from your computer, GPS, the location associated with your IP address, or some other method.

Extensions requesting this permission might:

- Provide information about your current location
- Record your location with data maintained in the extension

## Access browsing history

The extension could do one of the following with your browser history:

- Search for pages
- Remove some or all pages
- Add pages
- Retrieve or remove details of visits to a page
- Access the list of “Top Sites” that are shown in the browser's new tab page

Extensions requesting this permission might:

- Offer features to remove browsing history for certain websites or domains
- Provide enhanced reporting on your browsing history

## Monitor extension usage and manage themes

The extension could:

- Get information about installed add-ons (extensions and themes)
- Enable and disable themes
- Uninstall itself
- Get notifications of add-ons being installed, uninstalled, enabled, or disabled

Extensions requesting this permission might:

- Monitor add-on installation to check for any potential conflicts
- Change or manage themes

## Exchange messages with programs other than Waterfox

The extension could send messages to and receive them from a complementary native app on your computer.

The complementary app needs to be installed on your computer independently of the extension. This usually happens in one of two ways:

- The extension will provide a guide to the steps you should follow to install the app
- You would have installed an app that then suggests you install an extension in Waterfox

Please note that Waterfox has not vetted or reviewed the complementary app. You should approach the installation of the complementary app with the same caution you would apply when installing any third party software from the internet.

Extensions requesting this permission might:

- Use a complementary app to communicate with hardware attached to your computer
- Store usernames and passwords using a secure method not available to a browser
- Perform extensive computations in a complimentary app

## Display notifications to you

The extension could issue notifications through the standard notifications system offered by your computer’s operating systems.

Extensions requesting this permission might:

- Alert you to the completion of background or long-running tasks in the extension
- Aggregate messages from one or more web services

## Provide cryptographic authentication services

The extension could access software on your computer for generating and validating security keys and certificates using the PKCS #11 standard. (Note the extension can't install the PKCS #11 software on your computer; you’ll be prompted to install the software separately.)

Extensions requesting this permission might:

- Offer features to use securely encrypted single sign-on mechanisms
- Provide a smartcard reader

## Read and modify privacy settings

The extension could change privacy related settings controlling:

- Network behavior
- Whether passwords are stored in the browser’s password manager
- The way the browser interacts with websites

Extensions requesting this permission might:

- Disable browser storage of passwords as part of an enhanced password manager
- Help protect your privacy by managing the information made available in real-time chat and video applications
- Offer additional tracking protection features

## Control browser proxy settings

The extension could direct some or all of your web browsing traffic to another computer (a proxy) on the internet.

Extensions requesting this permission might:

- Block access to certain websites or domains
- Provide access to certain websites and domains through proxy servers, for example, to enable browsing where it might otherwise be limited by geography

## Access recently closed tabs

The extension could access a list of recently closed windows and tabs, reopen those tabs and windows, and remove details of these tabs and windows from the lists.

Extensions requesting this permission might:

- Provide an enhanced browser history manager
- Offer the ability to clean up or remove history for specific websites or domains
- Deliver features to reopen closed tabs

## Access browser tabs

The extension could obtain the URL, title, and icon from any tab.

Extensions requesting this permission might:

- Access tab details to enable bookmarking
- Order and group tabs
- Move tabs between windows
- Provide an alternative way of listing tabs

## Store unlimited amount of client-side data

The extension could store an unlimited amount of data using your browser’s data storage features.

Extensions requesting this permission might:

- Store large files, such as images, locally in your browser
- Offer an extensive local database of information

## Access browser activity during navigation

The extension could listen for the steps the browser takes to navigate from a link to another page. The extension could then provide new features for the content on the page.

Extensions requesting this permission might:

- Detect when streamed videos are about to play and provide a download feature
- Look for and prevent ad pop-ups from opening

## Access MIDI devices with SysEx support

The site permission extension enables a website to communicate with MIDI devices and send and receive SysEx data. SysEx data is arbitrary, often specific to a particular device model or manufacturer. Websites granted this permission can tamper with the device. While there are many legitimate use-cases for SysEx messages, a malicious website could corrupt the device's memory. The consequences of malicious action range from losing all the data stored in the device to rendering the device useless by overwriting the device’s program memory.

Extensions requesting this permission might:

- Back up a MIDI device's configuration data (presets, samples, etc.) for archival
- Restore the configuration of a MIDI device to a previously backed-up copy, or restore it to factory default
- Configure a MIDI device using a web interface
- Upgrade the firmware version of a MIDI device
- Communicate with the device, sending and receiving more complex, advanced messages than standard MIDI notes or CC messages. For example, setting an LED color, writing text on a screen, etc

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Permission request messages for Firefox extensions](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
