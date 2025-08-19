---
title: Waterfox Features
label: Features
description: Highlights of Waterfox’s user-facing features and defaults compared to Firefox ESR 140.
---

Waterfox focuses on power‑user features, sensible defaults, and customization —
while remaining compatible with modern sites and extensions.

## Quick Highlights

- Legacy add‑ons (XUL/bootstrapped) + Chrome/Opera store compatibility
- Private Tabs in the same window
- Vertical Tabs and a restored, customizable Status Bar
- New Tab Wallpapers (solid colors, custom colors, user uploads)
- Clean Link Sharing that strips tracking parameters
- JPEG XL image format support
- Privacy‑friendly defaults (no sponsored content or promos)
- Seamless Firefox profile import (Win/macOS/Linux incl. Flatpak/Snap)

## Extensions & Add‑ons

Waterfox embraces extensibility. It keeps classic XUL/bootstrapped add‑ons
working alongside modern WebExtensions and lets you install from the Chrome
Web Store and Opera Addons. Conversions happen safely under the hood, with
unsupported APIs blocked so the browser stays stable.

- What you get:
    - Legacy add‑on support (themes, overlays, bootstrapped extensions).
    - Install from Chrome/Opera stores; CRX files are converted to XPI.
    - Always‑on custom styling via userChrome.css and userContent.css.
    - Always‑on custom styling via userChrome.css and userContent.css.
- Notes:
    - Third‑party store add‑ons don’t auto‑update from those stores.
    - Not all Chrome‑specific APIs are supported.

## Tabs & Sidebar

Browsing is faster when your tools fit how you work. Waterfox adds pragmatic tab
features and a modern sidebar so you can organize without fighting the UI.

- Private Tabs
    - Open private tabs inside your normal window (no separate Private Window).
    - Private tabs avoid history, form data, and suggestions; they’re cleaned up
on restart.
    - Keyboard shortcuts included for toggling/opening private tabs.
    - Keyboard shortcuts included for toggling/opening private tabs.
- Vertical + Tree Tabs
    - Native vertical tabstrip integrated into the sidebar.
    - Activate Tree Vertical Tabs to organize tabs in nested trees with
    collapsible groups.
        - Group tabs from common sources (e.g., pinned tabs or Firefox View) under
    “group tabs”.
        - Options for auto‑grouping behavior, tree rendering in group tabs, and
    appearance tweaks.
    - Place the sidebar left or right; auto‑expand/behavior options available.
    - A “Customize Sidebar” view for quick tweaks.
- Automatic Tab Grouping
    - New tabs can auto‑group near their source tab.
    - Controls for placement (first/last/after) and delay with a cancel
shortcut.
- Handy Tab Tools
    - Copy Tab URL and Copy All Tab URLs (skips internal pages).
    - Unload Tab (discard) to free memory on background tabs.
    - Optional Restart Browser menu item (supports confirm + purge cache).

Why it matters: You keep your focus in one place (one window), keep memory usage
in check, and tailor the tabstrip to large/tab‑heavy workflows.

## Status Bar & UI

Miss the classic status bar? It’s back. Waterfox restores a true, customizable
status bar that shows link targets on hover and hosts widgets you can arrange.

- Built‑in polish:
    - Compact density is the default for a tighter UI.
    - Move the tab bar (top‑above/top‑below/bottom) and the bookmarks bar (top/
bottom).
    - Rich theme/layout toggles: tab shapes, spacing, separators, Photon/
Lepton‑style options.
    - Platform refinements like Windows Mica/backdrop and macOS titlebar/sidebar
blending.

The result: a familiar, flexible UI that’s efficient on space and feels native.

## New Tab & Address Bar

New Tab should feel like home — and yours can.

- Wallpapers (enabled by default)
    - Choose curated solid colors, use a custom color, or upload your own image.
    - Uploads are stored in your profile and apply instantly; removal is one
click.
    - Categories and preferences update the experience live (no restart
required).
    - Categories and preferences update the experience live (no restart
required).
- Address Bar conveniences
    - Double‑click selects all (Linux) for faster editing.
    - Built‑in calculator and unit conversion in results.
    - Trending/promotional suggestions are disabled by default.

Prefer your own start page? Waterfox still supports a custom about:newtab URL.

## Clean Link Sharing

When copying or sharing links, Waterfox can remove known tracking/decorative
query parameters (e.g., “utm_…”) in both the URL bar and page context menus.

- Benefits:
    - Cleaner, privacy‑friendly links by default.
    - Backed by built‑in lists so rules stay current.

## Media & Formats

- JPEG XL support is on by default.
    - .jxl images open natively.
    - Windows/MSIX/NSIS installers register file associations where supported.

Why you care: better quality‑to‑size image handling for the modern web and photo
workflows.

## Privacy & Defaults

Waterfox trims noisy content and promotions, and tightens a few privacy screws
out of the box.

- Defaults that respect your time and attention:
    - No Pocket/Discovery Stream on New Tab, no sponsored Top Sites.
    - No CFR (contextual recommendations), no “More from Mozilla” promo section.
    - No CFR (contextual recommendations), no “More from Mozilla” promo section.
- Smarter protections:
    - Cookie‑banner handling aims to reject when “reject all” is available.
    - DoH/TRR tuned with Oblivious HTTP support and a Waterfox relay.
    - The about:config warning is disabled for advanced users.

These choices reduce friction and “surprise features” without breaking
compatibility.

## Migration

Moving from Firefox is straightforward. You can import bookmarks, history,
passwords, form data, and cookies — including profiles from Flatpak/Snap
installs on Linux.

- What it covers:
    - Windows/macOS/Linux (with Flatpak/Snap paths).
    - The most commonly needed data types for a clean switch.

## Extra About Pages

- about:cfg: A power‑user friendly configuration page for advanced preferences.
- about:passwords: All-in-one page for your passwords, as you would be familiar with in old Firefox
