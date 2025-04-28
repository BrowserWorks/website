---
slug: support/waterfox-doesnt-save-web-form-entries
title: "Waterfox doesn’t save web form entries"
---

Waterfox can remember what you've entered in forms on web pages, also known as text fields. After you've entered something into a form on a web page (such as a search box), the next time you visit that page, your previous entry should be available to re-use. If you find that you can't re-use your form entries, follow the instructions in this article.

- For more information on the form autocompletion feature, see the [Control whether Waterfox automatically fills in forms](/support/control-whether-waterfox-automatically-fills-forms) article.

## Autocomplete does not work on certain forms

If you find that Waterfox will save form entries for forms on only some websites, but not on others, the site might be telling Waterfox to not save form history. This is especially common on email and banking websites.

## Autocomplete doesn't work on any forms

If you find that Waterfox will not save any text you enter into forms, follow the instructions below.

### Check Waterfox settings

Make sure that Waterfox is set to remember form entries and that saved form entries are not being automatically cleared:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. Select the Privacy & Security panel and go to the **History** section.
3. In the drop-down menu next to **Waterfox will** choose Use custom settings for history.
4. Make sure that **Remember search and form history** is selected.
   - Enabling form autocomplete also makes Waterfox store search history for the Search bar.
5. Find **Clear history when Waterfox closes**. If it is selected:
   1. Click on the Settings... button.
   2. Make sure that **Form & Search History** is **not** selected.
   3. Click OK.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

If either of those options were not set properly, setting them as above should enable form autocomplete.

### Check for conflicting extensions

If you find that Waterfox's settings were correct, but autocomplete still doesn't work on any forms, a Waterfox extension may be causing the problem. See [Troubleshoot extensions, themes and hardware acceleration issues to solve common Waterfox problems](/support/troubleshoot-extensions-themes-to-fix-problems) for how to troubleshoot extension issues.

If a conflicting extension was present, form autocomplete should work again after disabling it and starting Waterfox again.

### Check other programs' settings

Some Internet security software (including antivirus, antispyware, firewall, and privacy programs) will clear Waterfox's form history. Check the settings for these programs if you have one or more of them.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox doesn’t save web form entries](https://support.mozilla.org/en-US/kb/firefox-doesnt-save-web-form-entries). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/firefox-doesnt-save-web-form-entries#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
