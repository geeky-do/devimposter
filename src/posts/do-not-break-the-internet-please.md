---
title: Do not break the internet please
date: "2021-10-27"
tags: [Facebook, outage, DNS, BGP, networks, configuration]
description: The Facebook outage shows how little control we have over the Internet 
excerpt: The facebook and other outages we have been seeing highlight how fragile the underlying infrastructure for the internet is. 
permalink: posts/{{ title | slug }}/index.html
---
  
 
# What happened with the Facebook outage?
So if you live on our planet, it would have been pretty difficult not to be aware of or impacted by the Facebook outage earlier in the month. However, if you didn't feel the impact, rejoice; you are better than everyone else.  

Even without impact, it's hard to miss when everyone was talking about it because these services, whether we like them or not, have become essential for many people. 

I waited to write about it for two reasons, one I am busy. But to truly understand what happened, I needed to do some digging, which took some time. 

# Not Technically speaking
Ok, so some phrases that would help you navigate this landmine.

- DNS: Domain Name System
- BGP: Border Gateway Protocol

Sorry, not very helpful, so let's break it down a bit with an example. So DNS is an address that helps you find where a dentist is because you have a toothache. So you Dentist Tooth is at Dentist Street. So BGP is the actual physical sign on the road of Dentist Street that says here resides Dentist Tooth. So if you go down to  Dentist Street, you can't find the location of  Dentist Tooth. So what does this mean with Facebook? They effectively took themselves offline, the way we all dream about but can't do. So they still existed, but as far as the internet is concerned, they didn't because there was no way to find them. 

But if you want the meaty technical details, then the [CloudFare blog](https://blog.cloudflare.com/october-2021-facebook-outage/) does a hell of an explanation.

# So how did this happen?
When the outage was two hours old, I was texting with my friend (on iMessage), and we were speculating on the root cause of the outage. Without a second thought, I said, "Configuration change that broke their DNS." I am not a genius, and I didn't troubleshoot why Facebook was down. But in the software industry, extensive outages are usually configuration changes. Why might you ask? We don't test them, and because a valid configuration doesn't mean it's correct or ensures your services remain working. Someone woke up that day and did what they thought would be a routine, non-breaking change. I am aware that there are theories that suggest this was sabotage but most outages are really just honest mistakes. 

# Why do companies make such decisions?
Facebook is huge, and so is its infrastructure. So they decided to become an autonomous system, which means that their network and its scale are extensive even by tech giants' standards. The more complex your systems are, the less predictability you can have when making such central changes. Their extensive network isn't the only problem but the fact that the internet runs on solutions that have been around since the moment of its inception, but they were never supposed to live this long.

What I find peculiar is that they locked themselves out as well because their internal tools where also residing in the same space. 
# How was it fixed?

They published an [incident report](https://engineering.fb.com/2021/10/04/networking-traffic/outage/) that gives away nothing. However, given the nature of the outage, the likely scenario is that they sent a team to their servers to manually reset because there was no other way to reach those servers.

![A man asking have you tried turning it off and on again](../../images/restart.jpeg "Live footage of engineers fixing things")
> Live footage of engineers fixing things

# Conclusion
Engineers will write incident reports([this](https://www.fastly.com/blog/summary-of-june-8-outage), [this](https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/) and [this](https://abcnews.go.com/Technology/wireStory/latest-twitter-appears-back-outage-64276132)) that give away nothing; they will tell you we couldn't have foreseen this disaster, but now that we have seen it, we are confident that it will never happen again. But, unfortunately, there are always things we don't know, and they will always catch us by surprise. Because two days later, they had yet **another** outage, albeit not as long.

The internet is held together with duct tape and every day that it works is a miracle. We should all be grateful.