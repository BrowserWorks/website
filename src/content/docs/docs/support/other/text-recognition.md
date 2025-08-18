---
slug: support/text-recognition
title: "Recognize text from images and PDFs in Waterfox"
---

Waterfox can extract text from images and PDFs so you can copy, search, and reuse content without retyping. This works locally on your device and, when available, uses on-device recognition resources for privacy.

Notes:
- Availability and language support can vary by operating system and language packs installed on your system.
- On macOS, Waterfox integrates with system capabilities like Live Text (when supported).
- On Windows and Linux, Waterfox uses platform and browser resources where available; results can vary based on clarity of the source.

## Copy text from an image on a web page

1. Right-click the image that contains the text.
2. Choose Copy text from image (wording may vary by platform).
3. Waterfox analyzes the image and copies recognized text to your clipboard.
4. Paste where you need it.

Tips:
- For small or partial selections, use your system’s text selection tools if available (e.g., macOS Live Text).
- For complex images, try zooming in or opening the image in a separate tab to improve recognition.

## Copy text from a PDF

Waterfox’s built-in PDF viewer supports selecting and copying text in most text-based PDFs.

If the PDF is a scanned document or an image-based PDF:
1. Open the PDF in Waterfox.
2. Try selecting text directly. If text isn’t selectable, use your OS’s text recognition tools on the visible page area (e.g., system-level selection on macOS or a screen snip + OCR workflow on Windows), or download the file and use a dedicated OCR tool.
3. When selection is available, copy and paste as usual.

## Improve recognition results

- Increase zoom: Make the text larger and clearer before running recognition.
- Use a higher-quality source: Low-resolution, skewed, or blurry images reduce accuracy.
- Check contrast: Text over busy or low-contrast backgrounds is harder to read.
- Prefer text-based PDFs: When possible, export or download PDFs with embedded text.

## Language support and resources

- Recognition quality depends on the languages supported by your OS and any local recognition resources available.
- If results are wrong or incomplete, verify that your system has support installed for the language in the image/PDF and try again.

## Privacy

- Text recognition runs locally; page contents are not sent to a server for OCR.
- Recognized text is placed on your clipboard only when you choose to copy it.

## Troubleshooting

- I don’t see “Copy text from image”
  - The menu item may not be available for certain image types or platforms. Try opening the image in a new tab, zooming in, or using your system’s selection/OCR tools.
- The selection misses characters or punctuation
  - Improve the source visibility (zoom, better contrast) and try again. Manually correct minor mistakes after pasting.
- The PDF won’t let me select text
  - It’s likely a scanned PDF. Use OCR via your OS or a dedicated OCR tool to extract text.
- Private Windows
  - Recognition still runs locally. Your history/cookies remain governed by normal Private Browsing rules.

## Related articles

- [Translate websites in Waterfox](/support/website-translation)
- [Take screenshots in Waterfox](/support/take-screenshots-waterfox)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Text Recognition](https://support.mozilla.org/en-US/kb/text-recognition). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/text-recognition#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::