---
slug: support/captive-portal
title: "Captive portal detection"
---

## Captive portal checks

Waterfox's [captive portal](https://en.wikipedia.org/wiki/Captive_portal) detector tests whether the network connection requires you to log in. This is sometimes the case when using a public Wi-Fi hotspot. Waterfox does this by regularly connecting to http://detectportal.firefox.com/canonical.html. Waterfox will also make connections to this URL to check if your current network supports certain technologies such as IPv6.

## What to do after the captive portal check

If the page was left open by Waterfox, you may simply close it.

**If this happens frequently please file a [Networking bug](https://bugzilla.mozilla.org/enter_bug.cgi?product=Core&component=Networking&short_desc=Captive+portal+tab+was+left+open&comment=Steps+to+reproduce&blocked=1198508&bug_type=defect)** and describe what happened (requires creating a Bugzilla account).

## How captive portals work

A captive portal is what we call a network that requires your action before it allows you to connect to the Internet. This action could be to log in using a username and password, or just to accept the network's terms and conditions.

The way most networks do this is by redirecting you to such a page. Waterfox will make automatic connections to detect these redirects. When those happen, you will see a notification indicating that you may need to log into the network. Normally, after you do this, the tab will be closed automatically. Occasionally, it will be kept around to display a message from the network's owners.

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Captive portal detection](https://support.mozilla.org/en-US/kb/captive-portal). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/captive-portal#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
