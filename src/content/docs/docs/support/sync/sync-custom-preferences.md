---
title: "Sync custom preferences"
---

:::danger
Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.
:::

Waterfox Sync allows you to [choose the types of data to sync](/support/how-do-i-choose-what-information-sync-waterfox) across devices. Please note that syncing Waterfox preference settings is only supported in Waterfox Desktop. We’ve chosen the list of preferences that can be synced so that the average user can sync those settings directly from the Waterfox Desktop user interface (UI). Advanced users who want more control over which preferences are synced, however, will benefit the most from this article.

## Preferences that Waterfox will sync

Waterfox whitelists the preferences that it will sync. Every preference that is synced appears in this whitelist. The whitelist itself is also stored in preferences, which includes every preference starting with `services.sync.prefs.sync.` (also known as a “control preference”). These preferences will only be synced if their control preferences have been set to `true` in the [Configuration Editor for Waterfox](/support/about-config-editor-waterfox) (`about:config` page). For example, the `browser.urlbar.suggest.history` preference will be synced only if the `services.sync.prefs.sync.browser.urlbar.suggest.history` control preference has been set to true.

## Disable sync for a default preference

Waterfox automatically creates a default whitelist, which is how it determines the default list of preferences to sync. If you don’t want to sync a default preference, you can change its control preference to `false`. For example, if you set `services.sync.prefs.sync.*some preference*` to false, then its related preference won’t be synced.

## Sync custom preferences

For safety reasons, only preferences that already have a local control preference will be applied locally. For example, if you want to sync a new preference that isn’t in the default list, you will need to ensure the new control preference has been created on every device. Waterfox Sync won’t automatically copy custom control preferences to new devices.

This can be an issue for users who have many custom preferences synced. When adding a new device, they will need to ensure all the custom control preferences are set up on the new device before those preferences are synced.

To assist setting up new devices, there’s another preference, `services.sync.prefs.dangerously_allow_arbitrary`, which controls this behavior. If you set this preference to true, then all preferences will be synced to the new device and not just those with an existing control preference. Therefore, users with many custom preferences can set the `services.sync.prefs.dangerously_allow_arbitrary` preference to true, perform the sync once, and then set this preference back to false. This will cause all remote preferences to be applied.

This behavior changed in later Waterfox version. Prior, Waterfox always acted as if the preference `services.sync.prefs.dangerously_allow_arbitrary` was set to true.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Sync custom preferences](https://support.mozilla.org/en-US/kb/sync-custom-preferences). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/sync-custom-preferences#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
