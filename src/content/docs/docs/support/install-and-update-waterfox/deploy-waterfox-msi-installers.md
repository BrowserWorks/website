---
slug: support/deploy-firefox-msi-installers
title: "Deploy Waterfox on Windows (MSI and enterprise options)"
---

This article explains enterprise deployment options for installing Waterfox on Windows.

## MSI installers

- Waterfox does not currently provide official MSI packages. If your environment requires MSI, you can wrap the Waterfox installer in your software deployment tool or convert it to MSI using your organization’s packaging process.

## Silent install

- Use the standard Windows installer with silent switches in enterprise software deployment tools (for example, SCCM/Intune):
  - `/S` for silent install
  - Optional: custom install directory and profile handling via command‑line and policies

## Manage via Group Policy or policies.json

- Waterfox supports enterprise policies similar to Firefox:
  - Windows Group Policy: configure browser settings centrally.
  - `policies.json`: define policies for unmanaged environments.
- See:
  - [Customizing Waterfox using Group Policy (Windows)](/support/customizing-waterfox-using-group-policy-windows)
  - [Customizing Waterfox using policies.json](/support/customizing-waterfox-using-policiesjson)

## First‑run and default browser

- Use policy to suppress first‑run UI where needed and to set defaults.
- For default browser assignment on Windows, see [Make Waterfox your default browser on Windows](/support/how-change-your-default-browser-firefox-windows).

## Updates

- Background updates are disabled in Waterfox. Updates are checked and applied when Waterfox is open. See [Update Waterfox to the latest release](/support/update-waterfox-latest-release).

## Related

- [Profiles — where Waterfox stores user data](/support/profiles-where-waterfox-stores-user-data)
- [Dedicated profiles per Waterfox installation](/support/dedicated-profiles-waterfox-installation)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Deploy Firefox with MSI installers](https://support.mozilla.org/en-US/kb/deploy-firefox-msi-installers). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/deploy-firefox-msi-installers#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::

