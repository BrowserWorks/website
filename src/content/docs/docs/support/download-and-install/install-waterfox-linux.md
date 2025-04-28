---
slug: support/install-waterfox-linux
title: "Install Waterfox on Linux"
---

**This article only applies to Linux.** For instructions to install Waterfox on Windows, see [How to install Waterfox on Windows](/support/how-install-waterfox-windows).

## Install from your distribution package manager (Recommended)

To install Waterfox using your distribution package manager, please refer to your Linux distribution's documentation.

This method is recommended because it ensures Waterfox and all the required libraries are installed and configured optimally for your distribution. However, there may be a small delay between the official release of a new version of Waterfox and the moment when your distribution updates the version it distributes. Your distribution may also distribute it without the Waterfox branding.

## Install from Flatpak

To install Waterfox from Flatpak, [install and configure Flatpak](https://flatpak.org/setup/) on your computer. Once Flatpak is installed, go to the [Waterfox Flathub's page](https://flathub.org/apps/details/net.waterfox.waterfox) and click the Install button. Alternatively, you can type the following command in a terminal:

`flatpak install flathub net.waterfox.waterfox`

## Install Waterfox from Waterfox builds (For advanced users)

- **Before you install Waterfox**, make sure that your computer has the **[required libraries](https://www.waterfox.net/download/)** installed. Missing libraries will cause Waterfox to be inoperable.
- To install Waterfox with this method, you **must be** able to login as root or execute `sudo` commands.
- This installation will have priority over the Waterfox version installed through your package manager. To run the version installed with your package manager, you will need to execute the binary from a terminal. To do so in most distributions, open a terminal and type: `/usr/bin/waterfox`.

1. Go to the [Waterfox download page](https://www.waterfox.net/download/) and click on the Download button.

2. Open a terminal and go to the folder where your download has been saved. For example:

`cd ~/Downloads`

3. Extract the contents of the downloaded file by typing:

`tar xjf waterfox-*.tar.bz2`

The following commands must be executed as root, or preceded by `**sudo**`.

4. Move the uncompressed Waterfox folder to /opt:

`mv waterfox /opt`

5. Create a symlink to the Waterfox executable:

`ln -s /opt/waterfox/waterfox /usr/local/bin/waterfox`


To verify that the installation was successful, you can open the [Troubleshooting Information](/support/use-troubleshooting-information-page-fix-waterfox) page. In the _Application Basics_ section, the value of Application Binary should be `**/opt/firefox/waterfox-bin**`.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Install Firefox on Linux](https://support.mozilla.org/en-US/kb/install-firefox-linux). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/install-firefox-linux#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
