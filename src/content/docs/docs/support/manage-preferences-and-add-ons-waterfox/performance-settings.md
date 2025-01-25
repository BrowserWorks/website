---
slug: /support/performance-settings
title: "Waterfox’s performance settings"
---

Waterfox automatically uses settings that work best with your computer. You can modify these settings in your Waterfox Options
page:

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" /> and select Settings.
2. In the General panel, go down to the **Performance** section.
3. Uncheck the box next to _Use recommended performance settings_.

You will then be able to change the following:

**Use hardware acceleration when available:** This setting allows Waterfox to use your computer's graphics processor, if possible, instead of the main processor, to display graphics-heavy web content such as videos or games. This frees up resources on your computer so it can run other applications, like Waterfox, faster. This box is checked by default but the feature isn't available for all graphics processors. You must restart Waterfox after changing this setting, before it will take effect.

**Content process limit:** With [Multiprocess Waterfox](https://developer.mozilla.org/Firefox/Multiprocess_Waterfox), also called electrolysis or _e10s_ , Waterfox runs web content for all tabs separately from the main Waterfox process for increased security and performance. Using [multiple content processes](https://wiki.mozilla.org/Electrolysis/Multiple_content_processes) can further increase performance and minimize the impact of content process crashes. You can modify this setting to increase or decrease the content process limit.

![Fx89PerformanceSettings](/assets/docs/2021-12-07-05-27-43-72c169.png)

You can set between one and eight content processes. The default is eight. Having more content processes can improve performance when using multiple tabs, but it will also use more memory. You can reduce the number of content processes if your computer is running out of memory.

:::tip
If your computer's system information shows more than 8 GB of RAM, you would likely benefit from a high content process limit.
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Firefox’s performance settings](https://support.mozilla.org/en-US/kb/performance-settings). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/performance-settings#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
