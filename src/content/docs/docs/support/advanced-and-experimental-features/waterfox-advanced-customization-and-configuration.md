---
slug: /support/waterfox-advanced-customization-and-configuration
title: "Waterfox advanced customization and configuration options"
---

Waterfox supports a wide range of customization options that are well-suited to all skill levels. The [toolbar layout can be customized](/support/customize-waterfox-controls-buttons-and-toolbars), numerous [settings can be configured](/support/waterfox-options-preferences-and-settings), and the [Waterfox Add-ons](https://addons.mozilla.org) directory contains a massive library of [extensions](/support/find-and-install-add-ons-add-features-to-waterfox) and [themes](/support/use-themes-change-look-of-waterfox) to add additional functionality and make Waterfox reflect your own needs and personality.

Two additional forms of advanced configuration allow even further customization: _about:config_ and _userChrome.css_ modifications. However, Waterfox highly recommends that only the developers consider these customizations, as they could cause unexpected behavior or even break Waterfox.

Waterfox is a work in progress and, to allow for continuous innovation, Waterfox cannot guarantee that future updates won’t impact these customizations. For this reason, Waterfox does not officially support setting custom style rules with a userChrome.css file or using the _about:config_ configuration editor to change preference settings.

If Waterfox suddenly appears broken after an update, you may need to [use the Refresh feature](/support/refresh-waterfox-reset-add-ons-and-settings) to restore Waterfox to a default state while keeping important data. Alternatively, you can selectively reverse your advanced customization and configuration changes, as follows:

- To reverse changes you made to Waterfox with a userChrome.css file, use _about:config_ to [reset the preference](/support/about-config-editor-waterfox#resetting-or-deleting-preferences) toolkit.legacyUserProfileCustomizations.stylesheets to false and then remove (or rename) the userChrome.css file located inside the chrome folder in your Waterfox [profile folder](/support/profiles-where-waterfox-stores-user-data).
- To reset all preference modifications, either use _about:config_ to [reset all modified preferences](/support/about-config-editor-waterfox#resetting-or-deleting-preferences) or else delete the preference file(s) in your [profile folder](/support/profiles-where-waterfox-stores-user-data), as explained [here](/support/reset-preferences-fix-problems#solution-2-delete-waterfox-preference-files), to restore all preferences to default settings.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox advanced customization and configuration options](https://support.mozilla.org/en-US/kb/firefox-advanced-customization-and-configuration). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-advanced-customization-and-configuration#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
