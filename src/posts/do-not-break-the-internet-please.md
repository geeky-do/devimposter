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

Sorry, not very helpful, so let's break it down a bit.

Sometimes we forget this but the internet is really just a big network of machines talking to one another. Every day new websites join this cosmic horror increasing the complexity. So a system was put in place to make this easier. 

Take this site for example, the domain name is `devimposter.tech` that's just an easy name to remember but the IP of the actual machine this points to is `161.35.218.98`. But we are human beings and not machines so everyone uses the domain name. So what does DNS routing do? It basically translates the domain name to the IP address so you can find the place you are looking for. So every time that you try to visit a site, your internet provider uses a `DNS resolver` to try and find out where you want to go. This is why when you acquire a domain it takes time for it be to discoverable because it takes time to tell all the DNS resolvers that there is a new IP address with this domain name.

BGP routing is another layer intended to help make the internet more manageable. It acts as a global map of the internet. The internet was basically broken into many smaller sections each controlled by an autonomous system (think your internet provider or tech giants like Facebook). These smaller sections can talk to neighboring sections to deliver information to the ones they can't reach themselves. Imagine passing a note in class to your friend who is sitting far away. If one of these systems is convinced that the best place for your message is the trash can then your message will be lost forever. 

So what happened to Facebook? Facebook told the rest of the networks that Facebook is gone. So every time someone tried to reach out to `facebook.com`, DNS resolvers were like 

> Facebook who?


But if you want the meaty technical details, then the [CloudFare blog](https://blog.cloudflare.com/october-2021-facebook-outage/) does a hell of an explanation.

# So how did this happen?
When the outage was two hours old, I was texting with my friend (on iMessage), and we were speculating on the root cause of the outage. Without a second thought, I said, "Configuration change that broke their DNS." I am not a genius, and I didn't troubleshoot why Facebook was down. But in the software industry, extensive outages are usually configuration changes. Why might you ask? We don't test them, and because a valid configuration doesn't mean it's correct or ensures your services remain working. Someone woke up that day and did what they thought would be a routine, non-breaking change. I am aware that there are theories that suggest this was sabotage but most outages are really just honest mistakes. 

# Why do companies make such decisions?
Facebook is huge, and so is its infrastructure. So they decided to become an autonomous system, which means that their network and its scale are extensive even by tech giants' standards. The more complex your systems are, the less predictability you can have when making such central changes.

What I find peculiar is that they locked themselves out as well because their internal tools where also residing in the same space. 
# How was it fixed?

They published an [incident report](https://engineering.fb.com/2021/10/04/networking-traffic/outage/) that gives away nothing. However, given the nature of the outage, the likely scenario is that they sent a team to their servers to manually reset because there was no other way to reach those servers.

![A man asking have you tried turning it off and on again]({{ site.imageRootURL }}/restart.jpeg "Live footage of engineers fixing things")
> Live footage of engineers fixing things

# Conclusion
Engineers will write incident reports([this](https://www.fastly.com/blog/summary-of-june-8-outage), [this](https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/) and [this](https://abcnews.go.com/Technology/wireStory/latest-twitter-appears-back-outage-64276132)) that give away nothing; they will tell you we couldn't have foreseen this disaster, but now that we have seen it, we are confident that it will never happen again. But, unfortunately, there are always things we don't know, and they will always catch us by surprise. Because two days later, they had yet **another** outage, albeit not as long.

The internet is held together with duct tape and every day that it works is a miracle. We should all be grateful.
