---
slug: support/profile-manager-create-remove-switch-firefox-profiles
title: "Profile Manager — Create, remove or switch Waterfox profiles"
---

Profiles keep your Waterfox data separate (bookmarks, passwords, settings, and extensions). Use the Profile Manager to create, rename, remove, or switch profiles.

## About profiles

- Each profile has its own data and settings. Multiple profiles let you separate work and personal browsing or test changes safely.
- Waterfox uses a [dedicated profile per installation](/support/dedicated-profiles-waterfox-installation). Switching channels or downgrading creates or requires a different profile to protect your data.

## Open the Profile Manager

Option A — From about:profiles
- Type about:profiles in the address bar and press Enter. The About Profiles page opens.
- Click Create a New Profile to add one. Use the Launch profile in new browser button to open another profile.

Option B — Command line (Waterfox closed)
- Windows: Press Windows+R, type `waterfox.exe -P` and press Enter.
- macOS: Quit Waterfox, open Terminal, run `/Applications/Waterfox.app/Contents/MacOS/waterfox -P`.
- Linux: Quit Waterfox, run `waterfox -P` from a terminal.

:::caution
Close all running Waterfox windows before using the command-line Profile Manager option.
:::

## Create a profile

1. Open about:profiles and click Create a New Profile.
2. Enter a name and finish the wizard.
3. Click Launch profile in new browser to start using it.

## Rename or remove a profile

- Open about:profiles.
- Use Rename to change the profile name.
- Use Remove to delete a profile. Deleting files removes the profile’s data permanently; keep files if you just want to hide it from the list.

## Switch profiles

- From about:profiles, click Launch profile in new browser next to the profile you want to use.
- You can run multiple profiles at the same time; each opens in its own window set.

## Troubleshooting

- Waterfox started with default data
  - You may be in a new profile. Open about:profiles and switch back, or restore data from a backup.
- Downgraded Waterfox and lost data
  - Waterfox uses downgrade protection. See [What happens to my profile if I downgrade](/support/dedicated-profiles-waterfox-installation#what-happens-to-my-profile-if-i-downgrade-to-a-previous-version-of-waterfox).

## Related

- [Profiles — where Waterfox stores user data](/support/profiles-where-waterfox-stores-user-data)
- [Recovering important data from an old profile](/support/recovering-important-data-from-an-old-profile)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Profile Manager — Create, remove or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::

