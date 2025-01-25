---
slug: /support/change-fonts-and-colors-websites-use
title: "Change the fonts and colors websites use"
---

This article describes how to customize the way you see web pages by choosing your preferred font styles and colors.

## Changing Font

To change the font:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to _Language and Appearance_.
3. Under _Fonts and Colors_, use the drop-down menus to select the font and font size of your choice.
   ![Fx68settings-FontsAndColors](/assets/docs/2020-02-11-01-41-04-d1540a.png)
4. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

### Custom Fonts

Some websites have custom fonts; to disable them:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to _Language and Appearance_.
3. Under _Fonts and Colors_, click the Advanced… button.
   ![Fx68settings-FontsAndColors-Advanced](/assets/docs/2020-02-11-01-42-32-bd9365.png)
4. In the Fonts dialog that opens, uncheck **Allow pages to choose their own fonts, instead of your selections above.**
   ![Fx54ContentPanel-Fonts](/assets/docs/2017-08-06-18-48-49-1f8a15.png)
5. Click OK to close the _Fonts_ window.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

### Other settings for Fonts

1. From the **Fonts for** drop-down list in the Fonts dialog, choose a language group/script.
   - For instance, to set default fonts for the West European languages/scripts (Latin), choose **Latin**. For a language/script not in the list, choose **Other Writing Systems**.
2. Select whether proportional text should be serif (like “Times New Roman”) or sans-serif (like “Arial”). Then specify the font size you want for proportional text.
3. Specify the font to use for Serif, Sans-serif and Monospace fonts. You can also change the size for `Monospace fonts`.

You can also set the minimum web page font size. This is useful to prevent sites from using overly small fonts that are barely readable.

- **Text Encoding for Legacy Content**: The text encoding selected here will be used to display pages that don't specify which encoding to use.

## Change Font Color

To change the font color:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to _Language and Appearance_.
3. Under _Fonts and Colors_, click the Colors… button.
4. Clicking on any of the colored rectangles will show you the possible colors you can choose from. Select the color you want by clicking one of the colored rectangles.

5. Click OK to close the _Colors_ window.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

### Custom Font Color

Some websites have custom font colors, to disable them:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to _Language and Appearance_.
3. Under _Fonts and Colors_, click the Colors… button.
4. In the window that opens, use the drop-down menu to set **Override the colors specified by the page with my selections above** to Always.

5. Click OK to close the _Colors_ window.
6. Close the _about:preferences_ page. Any changes you've made will automatically be saved.

### Other settings for Colors

**Text and Background**: Here you can change the default text and background color to be used on web pages that haven't specified that information. Click on the color samples to select colors.

- **Use system colors**: Check this setting to use the colors defined in your operating system settings instead of the colors specified above.

**Link Colors**: Here you can change the default colors for Web links. Click on the color samples to select colors.

- **Underline links**: By default, links are underlined on web pages. Uncheck this setting to disable this. Note that many sites specify their own styling rules, and this setting has no effect on those sites.
- **Override the colors specified by the page with your selections above**:
  - **Always**: Select this setting to force all sites to use your default colors.
  - **Only with High Contrast themes**: This setting will make Waterfox use the colors specified by the web page author, except when you are using a High Contrast Windows theme.
  - **Never**: Select this setting to make Waterfox use the colors specified by the web page author.

**Note**: If you later want to restore the default colors:
**Warning**: Changing advanced preferences can affect Waterfox's stability and security. This is recommended for **advanced users only**.

1. Type **about:config** in the [address bar](https://wikipedia.org/wiki/Address_bar) and press Enter.
   A warning page may appear. Click Accept the Risk and Continue to go to the _about:config_ page.
2. Enter **browser\*color** in the Search field.
3. Click the _Reset_ <img alt="Fx71aboutconfig-ResetButton" class="inline-image" src="/assets/docs/2019-10-29-08-51-03-fee2fd.png"> button next to the **modified** preferences (displayed in bold font).

## Zoom

Waterfox also includes a Zoom. This allows you to increase the size of text on any web page. For instructions, see [Font size and zoom - increase the size of web pages](/support/font-size-and-zoom-increase-size-of-web-pages).

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Change the fonts and colors websites use](https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
