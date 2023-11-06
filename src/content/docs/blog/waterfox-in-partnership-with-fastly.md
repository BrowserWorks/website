
---
title: Waterfox in Partnership with Fastly
date: 2023-11-06
description: Waterfox is independent again, allowing the community and founder to shape its future. The founder remains committed to delivering a privacy-focused, customisable browser and thanks the community.
author: Alex
---

We've teamed up with the stellar folks at Fastly to help power a new privacy technology, DNS over Oblivious HTTP (DoOH).
​
Whenever you browse the web, your DNS queries get exposed to your ISP or anyone else watching your web traffic. That means they can easily see which sites you visit and profile your interests. Rather invasive, isn't it?
​
Waterfox has partnered with Fastly to integrate secure Oblivious HTTP relays into the browser's DNS resolution — by partnering with Fastly, we were able to use a world-class implementation of this privacy-respecting protocol, that’s also used by many of the world’s leading platforms, including many top internet browsers. This encrypts and relays your DNS traffic through remote servers in a way that completely hides the target of your DNS queries -– and ultimately the site where your browser is planning to connect. Your DNS requests become 100% private.
​
It is important that at every stage of the connection each service is run by an independent third party. This prevents any one party from collating data together and unmasking who is making the requests.
​
Fastly operates a huge global network of edge compute locations that make this privacy relay work fast and reliably, which means there will hardly be a performance penalty when using DoOH.
​
The DNS resolver will be Cloudflare’s https://1.1.1.1 service, which is also an independent third party.
​
For us, this is a huge step in our mission to make Waterfox one of the most privacy-respecting browsers out there. Your data belongs to you, and we'll keep working nonstop to protect it. Teaming up with Fastly brought some serious privacy superpowers to the table. We can't wait for you to try it out!
​
Let us know what you think once DNS over Oblivious DNS rolls out in the next Waterfox update. And as always, keep spreading the word to anyone who cares about internet privacy in this age of surveillance. We've got your back!
​
## FAQ
**Q:** Do you have access to the relay?
**A:** No, Fastly will independently manage the relay, and we don't have direct control over the code, the service configuration or the TLS certificates. This is critical from a privacy hygiene standpoint.
**Q:** Will Fastly have access to my data? 
**A:** No, due to the double-blinded nature of the OHTTP service. One layer, Fastly, handles end user identifying metadata (the Relay) while another handles the end user's request data (the Gateway). These two layers communicate but do not collude, and do not pass identifying details about the Client to each other.
**Q:** Is this slower than making normal DNS requests?
**A:** Slightly, but not by much. Cloudflare ran tests and found that the penalty is consistently less than 1ms at the 99th percentile[^2],.
**Q:** I still don't understand - why must the relay and resolver be run by independent parties?
**A:** As explained by Fastly[^1], the privacy guarantees relies on one fundamental property — that **the proxy and the target servers do not collude**. So long as there is no collusion, an attacker succeeds only if both the proxy and target are compromised.
​
[^1]: https://www.fastly.com/blog/enabling-privacy-on-the-internet-with-oblivious-http  
[^2]: https://blog.cloudflare.com/oblivious-dns/
