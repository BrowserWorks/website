---
slug: /support/troubleshoot-extensions-themes-to-fix-problems
title: "Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems"
---

This article will help you determine whether an extension, theme or hardware acceleration is causing your Waterfox problem and, if so, describes what you can do to make Waterfox run normally again.

The [Refresh Waterfox feature](/support/refresh-waterfox-reset-add-ons-and-settings) can fix many issues by restoring Waterfox to its default state while saving your essential information. Consider using it before going through a lengthy troubleshooting process.

## Start Waterfox in Safe Mode

Safe Mode temporarily disables all extensions, uses the default theme, and turns off hardware acceleration. Running Waterfox in Safe Mode can help determine if one of these is causing your problem. To learn more, see [this article](/support/diagnose-waterfox-issues-using-troubleshoot-mode). To start Waterfox in Safe Mode:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Help, select Troubleshoot Mode… and click Restart in the _Restart Waterfox in Troubleshoot Mode?_ dialog.

:::note
You can also start Waterfox in Troubleshoot Mode by holding down the Shift key while starting Waterfox.
![Fx68SafeMode](/assets/docs/2020-01-22-04-20-22-f4cb3b.png) 2. When the Waterfox Safe Mode window appears, click the Start in Safe Mode button.
:::

:::caution
Clicking the Refresh Waterfox button will restore Waterfox to its default state while saving your essential data. See [Refresh Waterfox - reset add-ons and settings](/support/refresh-waterfox-reset-add-ons-and-settings) for more information.
:::
After you click Start in Safe Mode and Waterfox starts, test for your problem.

### The problem still occurs in Safe Mode

If your problem persists in Safe Mode, it is not being caused by an extension, theme or hardware acceleration. Other possible causes include changes made to Waterfox preference settings, which are not disabled in Safe Mode. For additional troubleshooting suggestions, see these articles:

- [Troubleshoot and diagnose Waterfox problems](/support/troubleshoot-and-diagnose-waterfox-problems)
- [Reset Waterfox preferences to troubleshoot and fix problems](/support/reset-preferences-fix-problems)

### The problem does not occur in Safe Mode

If your problem did not occur in Safe Mode, the likely cause is an extension, theme or hardware acceleration. Continue following the steps in this article to determine whether one of these is the problem.

## Turn off hardware acceleration

With some graphics processors and graphics driver setups, Waterfox may crash or have trouble showing text or objects on pages when using hardware acceleration. You can try turning off hardware acceleration to see if it fixes the problem.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the General panel.
3. Under **Performance**, uncheck Use recommended performance settings.
   Additional settings will be displayed.
   ![Fx55Performance-disableHWA](/assets/docs/2017-08-27-03-46-52-fd0019.png)
4. Uncheck Use hardware acceleration when available.
5. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
6. Start Waterfox the way you normally do.

If the problem is no longer happening, then hardware acceleration was likely the cause. You can try [updating your graphics drivers](/support/upgrade-graphics-drivers-use-hardware-acceleration) to see if that fixes it or simply run without hardware acceleration. Otherwise, your problem is likely related to extensions or themes. Continue with the steps in this article to see if they help.

## Switch to the default theme

If you are using a theme other than the default Waterfox theme:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Themes.
2. Find the _Default (disabled)_ theme, click the ellipsis (3-dot) icon and then click the Enable button to make Waterfox switch to that theme.
3. Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
4. Start Waterfox the way you normally do.

Test for your problem. If it no longer occurs, the theme you were using was causing it. If it still occurs, continue following the steps in this article.

## Disable all extensions

To determine whether a faulty extension is causing your problem, you can disable all of your installed extensions:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
2. For any extension listed as **Enabled**, click the blue toggle ![Fx72BlueToggle](/assets/docs/2020-01-22-10-45-08-919f78.png) for the corresponding extension.
   The extension will be moved to the **Disabled** list.
3. Repeat this for each of the other extensions.
4. When all extensions are disabled, close Waterfox:Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
5. Start Waterfox the way you normally do.

When you restart Waterfox, all extensions will be disabled.

Test for your problem. If the problem no longer occurs with all extensions disabled, one of your extensions was causing it. To find the extension that was causing your problem, continue as follows:

### Test for faulty extensions

To determine which of your disabled extensions was causing your problem, you can re-enable each extension one at a time.

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
2. Click the corresponding toggle to enable the extension. The toggle turns blue when enabled.
3. Close Waterfox:Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
4. Start Waterfox the way you normally do.

After you restart Waterfox, test for your problem. If the problem comes back, the extension you just enabled was causing it.

:::note
If you have a large number of extensions, it may be quicker to enable more than one extension at a time. The method with the fewest number of restarts required is: Enable half the extensions in this list, then restart Waterfox and test for the problem. If the problem reoccurs, you know that the faulty extension is one of the ones you just enabled. If the problem does not occur, you know the faulty extension is one of the disabled ones. Repeat the process until the faulty extension is found.
:::

After you find the extension that was causing your problem, disable or uninstall the faulty extension and re-enable the other extensions in the Add-ons Manager.

## Updating extensions

If an extension was causing your problem, it may have an update available that will fix it:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
2. Click the gear icon <img alt="gear" class="inline-image" src="/assets/docs/icons/settings.svg" /> at the top of the Add-ons Manager Extensions panel and select Check for Updates.
3. If updates are found, install them by clicking Install Updates.
4. When the installation is complete, close Waterfox:Click the Waterfox menu <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Exit.
5. Start Waterfox the way you normally do.

After Waterfox restarts, your extensions will be updated. If the extension that was causing your problem had an update, re-enable it and test for your problem again.

## Checking extension settings

Some problems are caused if the settings of an extension override Waterfox settings (e.g. problems with toolbars). Therefore you may want to check the extension's settings to see if you can find the option that is causing your problem:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
2. For the extension that is causing your problem, click the ellipsis (3-dot) icon and click the Options button.
3. Click your way through the settings to see if there is an option that may solve your problem.
4. If you found a suitable option, click Save and then restart Waterfox.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Troubleshoot extensions, themes and hardware acceleration issues to solve common Firefox problems](https://support.mozilla.org/en-US/kb/troubleshoot-extensions-themes-to-fix-problems). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/troubleshoot-extensions-themes-to-fix-problems#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
