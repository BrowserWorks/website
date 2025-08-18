---
slug: support/website-translation
title: "Translate websites in Waterfox"
---

Waterfox includes privacy-preserving, on-device translation so you can read pages written in other languages without sending page content to external services. You can translate full pages or just selected text, control when prompts appear, and manage language preferences.

## Translate an entire page

When you visit a page in a language different from your Waterfox interface language, Waterfox can offer to translate it.

- If a translation prompt appears, choose the language you want to translate into and click Translate.
- If you don’t see a prompt:
  1. Look for a translation option in the address bar or page controls.
  2. Click Translate page, then choose your target language.

Tips:
- Waterfox usually detects the page language automatically. You can change the detected language in the panel if it’s incorrect.
- The original page language and the translation target are remembered for the current tab until you reload or close it.

## Translate selected text only

You can translate part of a page without translating the whole thing:

1. Select the text you want to translate.
2. Open the selection’s context menu and choose Translate selection (wording may vary).
3. Waterfox shows the translation in a small popup or side panel.

This is useful on pages mixing multiple languages, or when you only need a quick snippet translated.

## Always or never translate a language or site

From the translation panel, you can fine-tune future prompts:

- Always translate [Language]: Automatically translate future pages in this language.
- Never translate [Language]: Don’t prompt for this language again.
- Never translate this site: Don’t prompt for this website again.

You can manage or undo these choices in Settings (see below).

## Change translation settings

- Windows and Linux:
  1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
  2. In the General panel, scroll to the Language section.
  3. Open Translations to manage:
     - Preferred target language
     - Whether to show translation prompts
     - Exceptions (sites/languages set to “always” or “never” translate)
     - Downloaded language resources
- macOS:
  1. From the menu bar, open Waterfox and choose Settings (or Preferences, depending on macOS version).
  2. In the Language section, open Translations and adjust the same options as above.

Changes apply immediately.

## Manage downloaded languages

Waterfox downloads translation resources on demand and keeps them for faster, offline-capable translations.

- Download a new language: Translate a page in that language once, or use the Translations settings to add it.
- Remove a language: In Translations settings, remove language resources you no longer need.

Note: Removing a language pack may require re-downloading resources the next time you translate that language.

## Disable or limit translation prompts

If you prefer manual control:

- Turn off “Offer to translate pages” in Translations settings.
- Keep the feature available but reduce prompts by using “Never translate [Language]” or “Never translate this site” from the panel.

You can still translate pages on demand even if automatic prompts are disabled.

## Troubleshooting

- No prompt appears:
  - The page might already be in your Waterfox interface language.
  - The language may not be supported yet, or Waterfox couldn’t detect it. Open the translation panel manually and pick the language.
  - Some pages render text in ways that are harder to detect (e.g., images, canvas, or highly dynamic content).

- The translation is incomplete or looks wrong:
  - Reload the page and try again.
  - Check if content loads after user interaction (e.g., clicking “Read more”); translate again once content is visible.

- A site stops working correctly after translation:
  - Use the panel’s “Never translate this site,” reload the page, and see if behavior improves.

- Private Windows:
  - Translation works in Private Windows. Resources are stored locally; regular Private Browsing rules for history/cookies still apply.

## Related articles

- [Recognize text (copy text from images and PDFs)](/support/text-recognition)
- [Total Cookie Protection](/support/total-cookie-protection)
- [Third-party cookies](/support/third-party-cookies)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Website translation](https://support.mozilla.org/en-US/kb/website-translation). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/website-translation#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::