---
title: Let there be light
date: '2021-09-08'
tags: [first-post, introduction]
description: This is the first blog post and it's going to be about making a blog of course! .
permalink: posts/{{ title | slug }}/index.html
---

This is the first blog post and it's going to be about making a blog of course! I have __checked__ and almost every developer blog starts with 
> I built this blog you are reading now with xxx and here is why.

Now I am going to share my experience but don't expect a detailed step by step guide for each framework. Each one has one of those guides and they do it far better than I could.

## First things first
I am an engineer so naturally I did my research before making this crucial decision. In three days I re-did this blog in three different frameworks. Why you might ask? Because apparently I am horrible at researching how to make blogs. 


You see I could start by saying that I do this for a living. That is simply not true though. I am a backend engineer, I get hired and there is usually a whole bunch of code already there. I build new APIs, add a database table, do a risky migration or some other things but not really build blogs from scratch. 


> But but surely you know a few things here and there.

Yes and *No*. I know how to tinker and I obviously know how to do some various technical things that would help me do this rather quickly. I am also obsessive and that might explain why I ignored all the advice I read and still tried different things that I ended up hating anyway.

This humbling experience triggered my imposter syndrome and overwhelmed me quite a bit too. Here is why!

## Hosting

This is where is I started, don't ask me why but I first wanted to pick a domain. I chose [Netlify](https://www.netlify.com/) because it was free. Ok easy enough and it comes with a nice CI built in. I must admit they make it so easy to get up and running fast and they are also offering a ton of features on the free tier. I will certainly consider paying soon.

## How to build a blog?
So at that moment I faced a decision am I going to write a tech blog but use something like [WordPress](https://www.wordpress.com) ? People would eat me alive surely. It's scandalous! How am I to show my prowess if I don't build everything myself?!
> Stop! don't be like that. Building something fast and quickly is nice and if it's good enough for millions of people then it's good enough for me, right?

Wrong. 

![WordPress is slow](../../images/wordpress-slow.png)

Exhibit A. The word slow is featured many times. I don't know how others do it but that was it for me. I only helped out with WordPress sites twice in my life and they were indeed slow but I thought *naively* that they were setup badly or something. But the basic starter was slow.

So I had to do some research and let me tell you it's a dime dozen out there so it's alright to feel overwhelmed by all the choices. I landed on the decision to use a Static Site Generator which in layman terms means you are not trying to get data to change after you have generated the site. It's built with everything it needs baked in and can be quickly published.

Enter [Gatsby](https://www.gatsbyjs.com/). It says on their homepage that they are blazing fast, no they say they are the fastest. Alright, I am in.

**Two hours later**
> Why does it take so long to build three pages?

> Yes I know how to write React but why am I writing React for such a simple thing?

> Why on earth do they use GraphQL for a _static_ site?

> Oh let me add this minor thing, oh that needs another plugin?

To be fair I am sure some people like it but I just couldn't. It was so heavy and clunky and even if their documentation is great this was supposed to be two things **simple** and **fast**. It's neither of those things.

Enter [Eleventy](https://www.11ty.dev/). What a breeze of fresh air that was. It was actually fast! I found a [starter kit](https://eleventyduo.netlify.app/) that looked nice and it was working seamlessly. Much smaller files and it builds blazingly fast. It supports many templates even if it's a smaller community (which I like to be honest). Yes the documentation is not great, it assumes you know a lot and like I stipulated earlier I actually didn't but you can get by with some [help](https://www.11ty.dev/docs/getting-started/) and more [help](https://medium.com/@tarngerine/how-the-heck-do-i-use-eleventy-the-intro-guide-i-wish-i-had-84d9b2689031).



---
**NOTE**

I am sure I will try [Hugo](https://gohugo.io/) next time because it also looks great but I will settle in for now because I actually need to focus on more important things first :)


---



## Conclusion

I didn't start off with a clear goal in mind and I would be lying if I said that I didn't like trying different things even if they didn't pan out because that's half the fun. However my absolute recommendation is to go with a simple generator (there are others beside 11ty out there) in a combination with Netlify. 
## Blogs that helped me along the way

1. [The one I wish I listened to earlier](https://iainbean.com/posts/2020/your-blog-doesnt-need-a-javascript-framework/)
2. [One on Jekyll](https://mokacoding.com/blog/why-i-shouldnt-have-stopped-blogging-with-jekyll/)
3. [An honest review of Gatsby](https://cra.mr/an-honest-review-of-gatsby/)