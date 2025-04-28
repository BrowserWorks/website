---
slug: support/configure-firewalls-so-waterfox-can-access-internet
title: "Configure firewalls so that Waterfox can access the Internet"
---

A personal firewall is a security program that oversees all of your computer's connections to the Internet. It may be included as part of an Internet security suite, or it may be a freestanding program. Most personal firewalls will deny Internet access to any program, or a new version of any program, unless you have specifically allowed access. This article will help you find information about configuring your firewall to work with Waterfox.

:::note
In some cases, disabling an Internet security program or firewall does not stop all of its parts from being active. A program that reports that it is disabled may still be able to block Waterfox.
:::

## Find out which firewall is installed

If you know which firewall or Internet security suite you are running, skip to [the next section](#configuring-firewalls).

Depending on your Windows version, do the following:

- **Windows 10**: Find it in Windows Control Panel, Security and Maintenance under the Security section.
- **Windows 7/8**: Find it under the Security section in Windows Action Center.

If you can't still detect your firewall with the above steps, try to run **Enum Process** (_not created by Waterfox_) that is an application that detects many common firewalls:

1. Download [Enum Process](http://www.trolly.homepage.t-online.de/EnumProcess.exe).
2. After downloading, double-click EnumProcess.exe.
3. Select Run.
4. In the drop-down menu to the right, select **Simple**.

![simple_enumprocess.PNG](/assets/docs/simple_enumprocess.png) 5. Click List Processes.

![listprocesses_enumprocess.PNG](/assets/docs/listprocesses_enumprocess.png)

## Configuring firewalls

For Windows Firewall, see [Configure Windows Firewall to allow Waterfox access to the Internet](/support/configure-windows-firewall-allow-waterfox-access). Contact the software provider for other installed firewalls.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Configure firewalls so that Firefox can access the Internet](https://support.mozilla.org/en-US/kb/configure-firewalls-so-firefox-can-access-internet). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/configure-firewalls-so-firefox-can-access-internet#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
