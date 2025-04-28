---
slug: support/password-manager-remember-delete-edit-logins
title: "Password Manager - Remember, delete and edit logins and passwords in Waterfox"
---

Waterfox securely stores your usernames and passwords for accessing websites, automatically fills them in for you the next time you visit a website, and lets you manage your stored logins with its built-in password management feature. This article will show you how to remember, view, edit, manage, remove and protect your logins in Waterfox and also how to disable this feature.

- To get your passwords everywhere you use Waterfox, [turn on sync](/support/how-do-i-set-sync-my-computer).
- If you use the Waterfox Lockwise app on your Android or iOS mobile device: Waterfox's support for this app ended on December 13, 2021. See [End of support for Waterfox Lockwise](/support/end-of-support-waterfox-lockwise) for details.

## Make Waterfox remember usernames and passwords

When you enter a username and password that you haven't already saved for a website, Waterfox will ask if you want to save it.

![FF70 Password](/assets/docs/2019-10-06-21-03-14-92afab.png)

:::tip
Clicking outside of the Save prompt will hide it. To bring it back, just click the key icon on the left side of the address bar. If Waterfox does not prompt you to save passwords, see the article [Usernames and passwords are not saved](/support/usernames-and-passwords-are-not-saved).
:::
In the prompt:

- **To have Waterfox remember your username and password**, click on Save. The next time you visit the website, Waterfox will automatically enter your username and password for you.

  - If you've stored the wrong username or password, just type the right one into the website and Waterfox will prompt you to save it. To save the new username and password, click on Update.

- **To tell Waterfox to never remember usernames and passwords for the current website**, click the drop-down menu and select Never Save. In the future, when you log in to the website you won't be prompted to save the username and password.

  - If you later change your mind and would like Waterfox to ask you to save usernames and passwords for this site, you'll need to go into your Waterfox Options
    and remove the site's entry from the Privacy & Security panel Exceptions list.

- **To skip saving your username and password this time**, click Don't Save. You'll be prompted to save your username and password the next time you visit the site.

:::note
Some websites offer to keep you logged in by clicking a check box on the site. This is a feature of the website and will work whether or not you have saved your username and password in Waterfox.
:::
You can also manually add website logins. Click the menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> button and select Passwords. Select the Create New Login button at the bottom left side of the about:logins page to manually add a website address, login, and password.

## Managing multiple accounts for a site

If you have more than one account for a site, Waterfox can save all your logins. Each time you log in to a site, you can choose the login information you would like Waterfox to use.

**Add another login account**: To save an additional login for a site, enter the login credentials and click **Save** when prompted. Use the drop-down arrow to see a list of saved usernames for that site. You can also start typing to narrow the results.
![Fx81AddLogins](/assets/docs/2020-09-16-15-48-15-ad973c.png)

If more than one login is stored for a website, the list of usernames will appear when you click the login field. Select the username you want to log in with.

![SavedLoginsFx81](/assets/docs/2020-09-16-15-31-30-ffa911.png)

**To view passwords for a specific site**, click the username field for that site, then click View Saved Logins (see above).

## Managing usernames and passwords

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click Logins and Passwords.
   The Waterfox Lockwise _about:logins_ page will open in a new tab.
   ![fx96aboutlogins](/assets/docs/2021-12-11-09-17-12-f5dc5f.png)

From here, you can view, copy, edit or remove your saved logins.

:::note
You can enter a site, username or password in the _Search logins_ text box, to filter the logins listed on the left.
:::
After you select an entry from the list of logins, you can perform these actions:

- Click Copy to copy a username or password.
- Click ![FF70 Unhide Password](/assets/docs/2019-10-06-21-22-05-57ecea.png) to see the password.
- Click **Edit** to change the username or password.
- Click **Remove** to remove the login from Waterfox.

See [this article](/support/edit-or-delete-login-waterfox-password-manager) for more information.

### Remove all saved logins

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> to open the menu panel.
2. Click Logins and Passwords.
3. Click the 3-dot menu on the top right corner.
4. Choose Remove All Logins.
   ![RemoveLogins](/assets/docs/2022-07-22-10-43-06-0784ab.png)

## Exporting login data

If you want to back up your saved usernames and passwords or move them to a different application, you can export this data to a `.csv` (comma separated values) file. See [this article](/support/export-login-data-waterfox) for more information.

## Protecting your passwords

If you use the same simple password for everything you will be more susceptible to [identity theft](http://wikipedia.org/wiki/Identity_theft). The [Create secure passwords to keep your identity safe](/support/create-secure-passwords-keep-your-identity-safe) article shows you an easy method for creating secure passwords and managing your passwords, as described above, to help you remember them all.

Even though Waterfox stores your usernames and passwords on your hard drive in an [encrypted](http://wikipedia.org/wiki/Encrypted) format, someone with access to your computer user profile can still see or use them. The [Use a Primary Password to protect stored logins and passwords](/support/use-primary-password-protect-stored-logins) article shows you how to prevent this and keep you protected in the event your computer is lost or stolen.

## Disable the Waterfox password management feature

Waterfox offers to remember usernames and passwords by default. To change your settings:

1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2.  Select the Privacy & Security panel and go to the **Logins and Passwords** section.
    ![Fx80settings-LoginsAndPasswords](/assets/docs/2020-08-06-18-34-01-fe57ab.png)

        * To prevent Waterfox from saving logins and passwords for a certain website, click the Exceptions… button to the right of **Ask to save logins and passwords for websites** and add the website URL.
        * To prevent Waterfox from saving logins and passwords for all websites, remove the check mark next to **Ask to save logins and passwords for websites**.

3.  Close the _about:preferences_ page. Any changes you've made will automatically be saved.

**Note**: If the **Ask to save logins and passwords for websites** setting is greyed out, Waterfox may be set to never remember history or to always use [private browsing mode](/support/private-browsing-use-waterfox-without-history). To restore normal browsing, go to your Privacy & Security settings under **History** and remove the check mark next to _Always use private browsing mode_, or select _Remember history_ from the drop-down menu, and then restart Waterfox.

## Having problems with usernames and passwords?

These articles will help you solve any problems you might be having with usernames and passwords:

- [Autofill logins on Waterfox](/support/autofill-logins-waterfox)
- [Usernames and passwords are not saved](/support/usernames-and-passwords-are-not-saved)
- [Reset your Primary Password if you've forgotten it](/support/reset-your-primary-password-if-youve-forgotten-it)
- [Create secure passwords to keep your identity safe](/support/create-secure-passwords-keep-your-identity-safe)
- [Waterfox Password Manager - Alerts for breached websites](/support/waterfox-password-manager-alerts-breached-websites)
- [How to generate a secure password in Waterfox](/support/how-generate-secure-password-waterfox)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Password Manager - Remember, delete and edit logins and passwords in Firefox](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-edit-logins). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-edit-logins#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
