---
slug: /support/task-manager-tabs-or-extensions-are-slowing-waterfox
title: "Task Manager - see what tabs or extensions are slowing down Waterfox"
---

Waterfox's Task Manager feature lets you see which tabs or extensions are using a lot of memory or energy. This feature can be useful when diagnosing [high CPU or memory usage](/support/waterfox-uses-too-much-memory-or-cpu-resources) in Waterfox.

![taskmanager_fx68](/assets/docs/2019-07-17-10-21-50-86260d.png)

## Open the Task Manager

1. Click the menu button <img alt="menu button" class="inline-image" src="/assets/docs/icons/menu.svg" />.
2. Click More Tools.
3. Click Task Manager. The Task Manager will open in a new tab.

:::tip
You can also type in _about:performance_ in the address bar to open the Task Manager page.
:::

## Use the Task Manager

The Task Manager can display useful information about the tabs and extensions actively running on Waterfox. This information is displayed in multiple columns:

- **Name** displays the name of the tabs and extensions currently running within Waterfox. Extension IDs will also be included in this column.
- **Type** indicates whether the item listed is a tab or an add-on.
- **Energy Impact** shows the processing power being used by the CPU. Tasks with a higher energy impact will drain your battery quicker and may slow down the performance of your system.
- **Memory** shows the amount of RAM that the given task uses currently on your system.

### View subtasks

Some tabs have additional subtasks that can be viewed from the Waterfox Task Manager. These may include subframes, trackers or service workers associated with the tab.

To view subtasks select the right-arrow on the left side of the task's name. You can hide the subtasks again by selecting the down-arrow on the left side of the main task's name.

### Perform actions

Hovering over an item in the Task Manager will show more details about the performance of this tab or extension. The action button will also appear on the right side of the task.

The action button can perform the following:

- **On Tab Tasks:** Close the associated tab.
- **On Add-on Task:** Open the add-on page in a new tab.

:::note
Actions cannot be performed on subtasks.
:::

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Task Manager - see what tabs or extensions are slowing down Firefox](https://support.mozilla.org/en-US/kb/task-manager-tabs-or-extensions-are-slowing-firefox). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/task-manager-tabs-or-extensions-are-slowing-firefox#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
