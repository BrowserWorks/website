---
title: Waterfox 4th Generation Release
date: 2021-10-19
author: Alex
---

View Release Notes for [G4.0.0](/en/docs/releases/g400)

Today marks the soft release of the 4th Generation of Waterfox. After enough time has elapsed, the automatic update will be seeded out to all users.

### New Website

You may have noticed a new website - much more information, with a more practical structure. This website also allows us to add documentation, support documents and better ways to convey information.

We will be optimising the website over the next few weeks as well as setting up redirects for any old pages that have been missed.

### New Browser

Waterfox has returned to its roots with performance at the forefront. We have aggressively optimised Waterfox for as much performance as possible. Unfortunately this means we have to leave older systems behind - but any computer from the last decade should work.

ARM builds are now available for macOS and these are also optimised, taking advantage of the new hardware Apple has to offer. Windows and Linux ARM builds will also follow in due course.

We have also changed the way we make changes to the underlying Gecko platform, meaning we can now track releases faster and in a more automated way. Over the next few months we will track the `central` branch of Gecko. If our features apply cleanly each release, we will then stop tracking the [Extended Support Releases](https://support.mozilla.org/en-US/kb/switch-to-firefox-extended-support-release-esr) and instead start a rolling release for Waterfox. The idea behind this change is that not only will Waterfox be incredibly performant, but also be at the forefront of supporting the latest HTML standards.

Mobile browsers are also in the pipeline, but are dependent on us having our own Sync service primed. Once that has been achieved, mobile browsers will follow. We will keep you updated on progress.
