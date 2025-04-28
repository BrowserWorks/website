---
slug: support/change-program-used-open-email-links
title: "Change the program used to open email links"
---

Waterfox normally uses your operating system's default mail program to send an email message. This article explains how you can change the program that is launched when you click on:

- The Email link menu item in the Waterfox Menu bar File menu (if the [Menu bar is enabled](/support/restore-menu-bar-waterfox)).

- The Email link toolbar button (if you [customize Waterfox controls, buttons and toolbars](/support/customize-waterfox-controls-buttons-and-toolbars)).
- The Email Image… (right-click) context menu item for an image on a web page.
- A "mailto" or email link on a web page (such as **[email@example.com](mailto:email@example.com)**).

## Setting the mail client used by Waterfox

1.  Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2.  In the General panel, go to the **Applications** section.
3.  Search for the Content Type **mailto** and select it.
4.  Click on the Action column in the mailto row to change the action.
    ![Fx62Settings-Mailto](/assets/docs/2018-09-27-14-51-46-258669.png)

        * **Always ask** will prompt you each time you use a mail function for which program or service to use.
        * **Use <Program> (default)** will automatically launch your operating system's email program (for example, Thunderbird, Outlook, Windows Live Mail Windows Mail) to its message composition window. For instructions on how to change your operating system's default e-mail program, see the [next section](#setting-your-operating-systems-default-mail-program) of this article.
        * **Use <Webmail>** will open the message composition page for your webmail service (such as Yahoo! Mail or Gmail) inside Waterfox. For more information about using webmail services, see the [Using webmail services](#using-webmail-services) section of this article.
        * **Use other...** will let you specify an external program for Waterfox to launch.
        * **Application Details...** will let you view information about or remove the webmail services that Waterfox can use.

5.  Close the _about:preferences_ page. Any changes you've made will automatically be saved.

:::note
If the **mailto** Content Type is missing, or if action items such as **Use Gmail** are missing, a Waterfox Refresh will restore all Content Types and actions to default settings. However, this will remove all customizations, including settings for other content types. See [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings) and [Manage file types and download actions in Waterfox](/support/change-waterfox-behavior-when-open-file) for more information.
:::

## Setting your operating system's default mail program

By default, Waterfox will use your system's default mail client to send email for the actions listed above. For Thunderbird, see the [Make Thunderbird the Default Mail Client](/support/make-thunderbird-default-mail-client) article for steps you can take to make it the default mail program. Check the online or in-product documentation for other mail programs.

In general, you can change the default mail program by following these instructions:

1. Open the **PC Settings** application (press and release the Windows Start button, then click the gear icon).
2. Select Search and apps from the sidebar.
3. Select Defaults from the sidebar.
4. Click the icon under the heading **Email** to show your choices.
5. Select the email program you want to use.

6. Click the Windows Start button, then click Settings.
7. Click the Apps icon, then click Default Apps the list.
8. Click the icon under the heading **Email** to show your choices.
9. Select the email program you want to use.

10. Right-click the Windows Start button, then click Settings.
11. Click Apps from the options to the left, then click Default apps.
12. Find the email program you want to use in the list of applications and click on it.
    - A _Set default file types or link types_ settings page will appear.
13. Underneath a file or link type (for example, **.eml** or **MAILTO**) click on the entry and select the email program you wish to use as the new default.
14. Do the same for the other file or link type entries.

15. Click the Windows Start button, then click the **Default Programs** item.
16. Click on **Set your default programs**.
17. Under **Programs**, click the email program you'd like to use (e.g., Thunderbird, Windows Live Mail, Outlook).
18. Click **Set this program as default**.
19. Click OK at the bottom of the window.

20. Click the Windows Start button, then click on the Control Panel icon to open the Windows Control Panel.
21. Click the **Add or Remove Programs** icon to open the Add or Remove Programs applet.
22. On the left side of the Window click the **Set Program Access and Defaults** icon.
23. In the Access and Defaults window, click on the **Custom** radio button to expand the Custom category.
24. Underneath **Choose a default e-mail program**, click the radio button next to the program you want to use (e.g., Thunderbird, Windows Live Mail, Outlook).
25. Click OK at the bottom of the window.

## Using webmail services

Waterfox allows you to use a webmail service such as Gmail (called _Google Mail_ in some locales) }or Yahoo! Mail for Waterfox's mail functions. Use the instructions in the [Setting the mail client used by Waterfox](#setting-the-mail-client-used-by-waterfox) section above to use a webmail service in Waterfox for mailto links or the _Email link_ feature.

If the webmail service you want to use is not available in your Waterfox Options
General panel's **Applications** section as a _mailto_ choice, you can try to find an extension that supports it, either by searching [addons.mozilla.org](https://addons.mozilla.org) for the specific webmail service or by doing a [**webmail search**](https://addons.mozilla.org/firefox/search?q=webmail) or a [**mailto search**](https://addons.mozilla.org/firefox/search?q=mailto) and browsing through the results.

**_Based on information from [Default mail client (mozillaZine KB)](http://kb.mozillazine.org/Default_mail_client), [How to change the default web browser or email application (Apple.com Support)](http://support.apple.com/kb/HT1637), [The KDE Control Center (KDE.org)](http://docs.kde.org/stable/en/kdebase-runtime/userguide/control-center.html), [Select Preferred Applications in Ubuntu (DebianAdmin.com)](http://www.debianadmin.com/select-preferred-applications-in-ubuntu.html) and [How to Set Your Default Email App in Windows 11 (howtogeek.com)](https://www.howtogeek.com/770923/how-to-set-your-default-email-app-in-windows-11/)._**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Change the program used to open email links](https://support.mozilla.org/en-US/kb/change-program-used-open-email-links). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/change-program-used-open-email-links#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
