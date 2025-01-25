---
slug: /support/warning-unresponsive-script
title: "Warning Unresponsive script - What it means and how to fix it"
---

Waterfox may give you a "Warning: Unresponsive script" prompt that says "_A script on this page may be busy, or it may have stopped responding. You can stop the script now, or you can continue to see if the script will complete._" This article describes why this could happen and possible solutions and workarounds.

This error is telling you that Waterfox thinks that a [script](/support/javascript-settings-for-interactive-web-pages#what-is-javascript) may be running out of control and would make Waterfox hang if nothing is done. The script could be something on a web page you're accessing, in an extension you installed, or even Waterfox itself.

## Letting the script run longer

If you find that pressing the Continue button brings up the same dialog again, letting the script run longer won't help you; it will just make Waterfox hang for longer. However, if you can use Waterfox normally after pressing Continue, then the script may just needs extra time to complete.

To tell Waterfox to let the script run longer:

**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference dom.max_script_run_time.
3. Click the _Edit_ <img alt="Fx71aboutconfig-EditButton" class="inline-image" src="/assets/docs/2019-10-29-08-54-56-1f86ca.png"> button and enter 20.
4. Press the checkmark <img alt="Fx71aboutconfig-Checkmark" class="inline-image" src="/assets/docs/2019-11-04-06-45-04-f67b18.png"> button to save the preference.

With scripts now allowed to run for longer times, you may no longer receive the prompt.

If you still receive the prompt (or if you want to see it again), you should set that preference back to the default value.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. In the about:config page, search for the preference dom.max_script_run_time.
3. Click the _Reset_ <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> button.

## Error happens when accessing certain websites

If the error happens only on a specific website, you can block scripts from running on that website. Many sites still function even if scripting is disabled.

1. Install the [JavaScript Toggle On and Off](https://addons.mozilla.org/firefox/addon/javascript-toggler) extension.
2. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />, click Add-ons and Themes and select Extensions.
3. Find the JavaScript Toggle On and Off entry and click the Options button.
4. Scroll down to the **Black-list** text box and enter the URL of the site that's giving you problems.
5. Click Save. The domain name of the site will be added to the list.

Now that the problematic site has been blocked from running scripts, it will no longer cause unresponsive script warnings.

Please reach out to the add-on developer directly, if you need help with a specific add-on.

## Other causes

An add-on could be causing the problem. See [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems).

**_Based on information from [Unresponsive Script Warning (mozillaZine KB)](http://kb.mozillazine.org/Unresponsive_Script_Warning)_**

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Warning Unresponsive script - What it means and how to fix it](https://support.mozilla.org/en-US/kb/warning-unresponsive-script). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/warning-unresponsive-script#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
