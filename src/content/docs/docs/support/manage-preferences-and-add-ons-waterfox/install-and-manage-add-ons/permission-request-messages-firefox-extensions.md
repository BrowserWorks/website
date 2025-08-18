---
slug: support/permission-request-messages-firefox-extensions
title: "Permission request messages for extensions in Waterfox"
---

Extensions may ask for permissions so they can access certain browser features or website data needed to work properly. Waterfox shows clear permission request messages to help you understand what an extension can do. You can review, limit, or revoke these permissions at any time.

## Where to review an extension’s permissions

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Add-ons and themes.
2. Select Extensions.
3. Click an extension to open its details page. You’ll see its requested permissions and site access.

From an extension’s toolbar button, you can also control its site access quickly:
- Right-click the extension’s button and look for options such as:
  - This extension can read and change data:
    - On all sites
    - When you click the extension
    - On specific sites

## Types of permission request messages and what they mean

Waterfox groups permissions into a few common categories. Here are the messages you may see and what they allow:

- Access your data for all websites
  - The extension can read and modify data (for example, page content or network requests) on any site you visit. This is often required for content blockers, password managers, and productivity tools that run on many sites.

- Access your data for sites in the following domain(s)
  - The extension can read and modify data only on specific domains (for example, example.com). This limits scope versus all websites.

- Access your data for the following site(s)
  - The extension can read and modify data on one or more exact site URLs you approve.

- Read and modify bookmarks
  - The extension can create, read, edit, or remove your bookmarks.

- Read and modify browser settings
  - The extension can adjust certain Waterfox settings (for example, user preferences related to privacy or appearance).

- Read and modify privacy settings
  - The extension can change privacy-related preferences (for example, tracking protection exceptions or similar controls).

- Display notifications
  - The extension can show system or browser notifications.

- Download files and read and modify the browser’s download history
  - The extension can trigger downloads, and read or clear entries from the download list.

- Access browser tabs
  - The extension can read information about your open tabs (titles/URLs) and switch or close them.

- Access recently closed tabs
  - The extension can view or restore your recently closed tabs.

- Read and modify browsing history
  - The extension can read pages you’ve visited and potentially add or remove history entries.

- Control browser proxy settings
  - The extension can configure Waterfox to use a proxy. This is common for privacy or corporate networking tools.

- Exchange messages with native applications
  - The extension can communicate with an app on your computer (installed separately) via Native Messaging. Only allow if you trust both the extension and the app.

- Access your clipboard
  - The extension can read from or write to your clipboard.

- Run in Private Windows
  - Not a data permission, but a privacy control. When enabled, the extension can run in Private Windows. Keep this off unless you trust the extension with private browsing activity.

- Access browser activity during navigation
  - The extension can observe and act on navigation events (for example, when you open a new page), often used by tools that modify or analyze traffic.

Note: Extensions also declare “optional” permissions. Waterfox will prompt you the first time the extension needs them (for example, when you click a feature inside the extension). You can allow or deny on demand.

## Controlling site access for an extension

You can fine-tune site access for many extensions:

- On all sites
  - The extension can run automatically everywhere.

- When you click the extension
  - The extension runs only after you click its toolbar button on the current site. This is a good way to minimize automatic access.

- On specific sites
  - Enter specific site(s) where the extension should run automatically. It will not run elsewhere.

To set this:
1. Right-click the extension’s toolbar button.
2. Choose the site access option you prefer, or open Manage extension to configure site lists.

## Change or revoke permissions later

- Disable or remove an extension
  - Go to Add-ons and themes > Extensions. Use the toggle to disable, or click Remove.
- Adjust site access
  - Use the extension’s toolbar button menu or its details page to change between all sites, when clicked, or specific sites.
- Turn off Private Windows access
  - In the extension’s details page, disable “Run in Private Windows.”

## Install trusted extensions

:::caution
Only install extensions you trust. Permissions grant powerful access to browser features and site data. Review the permission prompts carefully and ensure the extension comes from a reliable source.
:::

- Prefer well-known publishers and check user ratings.
- Keep extensions updated.
- Review requested permissions after updates in case they change.
- Many high-quality extensions are available on the Firefox Add-ons website (addons.mozilla.org). Even when browsing there, review each extension’s details and requested permissions before installing.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Permission request messages for Firefox extensions](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::