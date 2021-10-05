---
title: Adding SEO to your blog
date: "Created"
tags: [SEO, eleventy, tags, breadcrumbs, robots, optimize, google, bing, permalinks ]
description: How to add SEO tags to an eleventy based site 
excerpt: How to add SEO tags to an eleventy based site
permalink: posts/{{ title | slug }}/index.html
---
  
# What is SEO?

SEO or search engine optimization spelled out is a way to make sure other users of the internet can find you. To navigate the huge internet you don't usually go around typing websites or domains directly (that used to happen before but that's a story for another time). What you (and everyone else) do is you use your favorite search engine and you type a bunch of keywords to look for the topic you want.

> A search engine is software that is scanning the internet by crawling and indexing the content served by websites

So search engines are pretty important for your audience to be able to find you and this is where SEO comes in where you optimize *for* search engines. 

# How do you "optimize"?

Tags and proper content structuring in a nutshell. First, almost all site generators will create a sitemap that basically lists all the possible URLs that can be visited on the site, this is important for search engines. Equally important is the `robots.txt` file which can help the search engine find out what you deem as important to index. This one is usually good for dictating what to disallow, see [Twitter's file.](https://twitter.com/robots.txt) There is also [Robots Meta Directives.](https://www.searchenginejournal.com/technical-seo/meta-robots-tags-robots-txt/)

A relatively nice thing to add is making sure you use permalinks (something that Eleventy does out of the box). Perma stands for permanent so basically, you make sure that whatever links are pushed to the internet aren't going to change anytime soon. So less chance for those who already shared it to end up seeing a 404 or not found page. 

> Important tip even if you make your 404 page terribly cute you still don't want your audience to end up there. Seriously check out my [404 page](https://www.devimposter.tech/404.html)


But ultimately what SEO is about is making sure you add the relevant keywords that make it easy to find your content. The more you have this in the title, description and tags the better the chances that your target audience will use those words.

## SEO and Eleventy
You can add the tags yourself to your base template or you can use a [plugin](https://github.com/artstorm/eleventy-plugin-seo). In any case, you will need to use the right terms in your front matter as well. 


# Ok, done. Now what?

Well, that's the thing with SEO, there is no easy way to see how well you are doing. First, it takes time for it to work because well the internet is pretty big. Second, you need to keep churning out content. Third, is that you need have analytics in places to see where your traffic comes from. But primarily you try to input your keywords in a search engine and hope that your website is in the first page because when was the last time you went looking past the first page. So if it's not there what do you do? Well, you try again. Better keywords, different content, and maybe social media.

You will notice that I stayed clear of social media and that's on purpose. First of all I am not a big fan and also not the best of experts but it is hard to gain traction without it. So by all means dive in headfirst. For me, that's not anytime soon as I still haven't even shared this with friends let alone social media! 😨