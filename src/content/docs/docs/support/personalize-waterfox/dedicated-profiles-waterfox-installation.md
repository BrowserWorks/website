---
slug: /support/dedicated-profiles-waterfox-installation
title: "Dedicated profiles per Waterfox installation"
---

## What are profiles?

Waterfox saves information such as bookmarks, passwords and user preferences in a set of files called a profile. This profile is stored in a location separate from the Waterfox program files. See [this article](/support/profiles-where-waterfox-stores-user-data) for details.

## What happens if I have more than one installation of Waterfox?

Some users have multiple installations of Waterfox, each in separate program folders. Waterfox uses a dedicated profile for each installation of Waterfox. This makes Waterfox more stable when switching between installations on the same computer and also allows you to run different Waterfox installations at the same time.

If you install a new, additional installation of Waterfox, a new profile will be created. You will not lose the personal data or customizations you had before, since your old profile data is saved and associated with the previous Waterfox installation.

## What are my options?

You don't need to do anything. Your profile data will be different for each installation of Waterfox.
If you would like the information you save to Waterfox to be the same on all installations, you can [use a Mozilla Account to keep them in sync](/support/how-do-i-set-sync-my-computer).
Sync is the easiest way to make your profiles consistent on all of your installations of Waterfox. You also get additional benefits like sending tabs and secure password storage. Get started with Sync [here](https://accounts.firefox.com/).

## Can I change which Waterfox installation uses a previous profile?

Yes. You can use the Profile Manager for each installation, to set a new default profile. Directions are available in the [Profile Manager article](/support/profile-manager-create-remove-switch-waterfox-profiles) and in the [Recover user data missing after Waterfox update](/support/recover-user-data-missing-after-waterfox-update) article.

## I am a Sync user, will my saved data still remain synced?

Yes. Once you sign in to your Mozilla Account on Waterfox, any data saved to Sync from other installation of Waterfox should appear.

## What happens to my profile if I downgrade to a previous version of Waterfox?

You’ll have to create a new profile to avoid corruption issues.

Starting with [Waterfox version](/support/find-what-version-waterfox-you-are-using) 67, each Waterfox installation requires a separate profile. Any previous [profile data](/support/profiles-where-waterfox-stores-user-data) is saved and associated with the first Waterfox installation opened after the change.

If you try to launch a Waterfox installation with a profile that was last used in a more recent version, you'll see a warning that using an older version of Waterfox can corrupt profile data such as bookmarks and browsing history:

![Fx68DowngradeProtection-prompt](/assets/docs/2019-10-09-10-10-45-17e924.png)

Click the Create New Profile button to start Waterfox with a new profile.

When you downgrade Waterfox and use a new profile, any profile that was used in the higher version is still available in the [Profile Manager](/support/profile-manager-create-remove-switch-waterfox-profiles), for use in a more recent version of Waterfox.

:::note
Downgrade protection can be overridden by [launching Waterfox through the command line](https://web.archive.org/web/20210530092017/https://developer.mozilla.org/en-US/docs/Waterfox/Command_Line_Options) with the **--allow-downgrade** parameter.
:::

## I already use separate profiles for my different Waterfox installations

If you have already manually created separate profiles for different installations, you will not notice the change (this has been the recommended procedure on Nightly for a while).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Dedicated profiles per Firefox installation](https://support.mozilla.org/en-US/kb/dedicated-profiles-firefox-installation). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/dedicated-profiles-firefox-installation#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
