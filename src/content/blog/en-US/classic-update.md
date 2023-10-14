---
title: An Update on Waterfox Classic
pubDate: October 28 2021
author: Alex Kontos
authorTitle: Founder
authorUrl: https://github.com/MrAlex94
authorImageUrl: /images/alex.jpg
---

Since Waterfox Classic and Waterfox Current (now G4) diverged, they have both have separate goals.

G4 has its eyes set to the future - a modern browser, focusing on modern web compatibility without sacrificing speed, or the balance of privacy and usability.

Classic has focused on keeping the tried but tested available. Unfortunately, due to the rapid nature that the web is now expanding at, keeping Classic up to date with that is difficult.

To make sure the projects aren't falling over each other, Waterfox Classic will now be moved out of the main Waterfox development repository and into its own separate repository - updating the previously archived "Waterfox Old", now named [Waterfox-Classic](https://github.com/WaterfoxCo/Waterfox-Classic).

This has the following benefits by not having two versions of Waterfox sharing resources:

* Contributors can clearly see what Classic development is ongoing
* GitHub Actions will be clearly segregated, allowing easy viewing of ongoing builds
* Waterfox Classic will have its own simple landing page
* Issues can be opened in a separate tracker, not getting closed for not focusing on G4
* An organised, clear list of what security patches haven't been fixed

A fair warning will be presented to all those who want to use Classic, that it may be vulnerable to multiple security issues - but the choice is given to the user to proceed at their own discretion.

This will keep Classic ongoing for as long as possible - but the success of this project will still rely on contribution.

Over the next week, infrastructure will be put in place for Classic to keep it running properly. We will let you know when this is complete.