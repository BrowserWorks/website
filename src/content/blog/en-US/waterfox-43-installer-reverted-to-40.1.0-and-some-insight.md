---
title: Waterfox 43.0 & 43.0.1 (Installer Only) Reverted back to 40.1.0 and some Insight into Waterfox
pubDate: January 9 2016
author: Alex Kontos
authorTitle: Founder
authorUrl: https://github.com/MrAlex94
authorImageUrl: /images/alex.jpg
---

Waterfox 43 for Mac, Portable Edition and existing Waterfox/Firefox users unaffected. Just a delay on the installers until the bugs get fixed.

I've got a bit of a conundrum here. So with the latest Firefox 43 codebase, Intel's C++ has been causing havoc, creating a difficult time for me.

For the last two months since the release of 40.1.0, I've been working every single day (I wish I was exaggerating..) waking up and going to bed doing nothing but trying to get Intel's C++ compiler to build Firefox. Debugging wasn't fruitful as almost every variable would read `<Error reading register value>` or `<Unable to read memory>`. Almost impossible to follow where this was occurring or why.

As mentioned in a previous blog post Intel has a compiler bug causing an internal error with the use of Mozilla's own Tuple header. After a week of messing around I realised I could just use the std::tuple to replace Mozilla's Tuple calls and it worked! But alas, Firefox 43 was finalised and I though to myself if I released Waterfox 42 this late...what would be the point?

So..lets get Waterfox 43 done and out the gate, we've got a week until release I'm sure I can get it done since I've gotten 42 to build! Oh boy was I wrong. After applying the relevant patches to get IC++ to build Firefox, the application would exit straight away. No crashes, nothing. Just a clean exit. Debugging wasn't helpful either. Crap, what now?

I did the only thing I found plausible at the time...and that was to rummage through **every patch** between Firefox 42 -> Firefox 43 ([changelog here](https://bugzilla.mozilla.org/buglist.cgi?j_top=OR&f1=target_milestone&o3=equals&v3=Firefox%2043&o1=equals&resolution=FIXED&o2=anyexact&query_format=advanced&f3=target_milestone&f2=cf_status_firefox43&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&v1=mozilla43&v2=fixed,verified&limit=0)).

As you can see...no clear indicator of what would be the contributions of Firefox 42 compiling fine with IC++ but Firefox 43 to not. So I went to [Mozilla's mercurial repository](http://hg.mozilla.org/releases/mozilla-release/) and started downloading each changelog between 42->43 and compiling each one until it would break. After about two weeks straight of doing this, **[Bug 1197316](https://bugzilla.mozilla.org/show_bug.cgi?id=1197316) - remove PR_snprintf calls in xpcom/** was found to be the first reason Waterfox would quit straight after being launched.

Progress! Or...not so much. When using any optimisation flag that wasn't O1 (optimize for size), the UI would be malformed. Oh boy, time to start carrying on through that changelog. After another week, **[Bug 1157984 - Incorrect CSS 3D](https://bugzilla.mozilla.org/show_bug.cgi?id=1157984)** display was found to be the reason IC++ was causing bad code.

Christmas was here! Unfortunately apart from having dinner with my parents on the day (and still trying to find the bugs) I spent every other waking hour preparing Waterfox. A few days ago I had whole build ready (and released as you could see)...but there was a bug cropping up that just didn't make any sense. Every now and then some users would message me that v43 would crash right on launch. Ouch...why?

Turns out that for whatever reason, if Waterfox doesn't have access to an already existing Firefox or Waterfox profile, it will crash straight away. GREAT. If you run Waterfox without a profile but with the -p flag it'll run as well. Just not when no clear profile is available or created for it.

So we're to where am I now. What do I do? I'm dreading that I'm going to spend the next few more weeks of my life waking up and doing nothing but downloading changesets...compiling...finding if the bug exists and then going to an older changeset below and repeating untill I get a changeset that works. **Then** I have to **_hope to all that is good_** that this changeset is an isolated bug patch that other patches don't rely on it, because if they do I'd have to rever them as well and that could go on forever.

As of now I'm talking to Intel's support forum, but it's difficult trying to isolate the issue with just a few chats and some screenshots. I'm not particulary great at debugging something so complex either...but here's to trying my best to get this release out for everyone.

If I have the same issues with Firefox 44...I'm not sure if health wise (for my mental sanity) I'll be able to carry this on. I think I'll be looking at IC++ alternative. But for now...onwards.

All the best,
Alex
