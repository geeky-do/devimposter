---
title: Adding SEO to your blog
date: "Created"
tags: [SEO, eleventy, tags, breadcrumbs ]
description: How to add SEO tags to an eleventy based site 
excerpt: How to add SEO tags to an eleventy based site
permalink: posts/{{ title | slug }}/index.html
---
  
# What is SEO?

SEO or search engine optimization spelled out is basically a way to make sure other users of the internet can find you. To navigate the internet which is huge you don't usually go around typing websites or domains directly (that used to happen before but that's a story for another time). What you (and everyone else) does is you use your favorite search engine and you type a bunch of keywords to look for the topic you want.

> A search engine is basically software that is searching the internet by crawling and indexing the content served by websites

So search engines are pretty important for your audience to be able to find you and this is where SEO comes in where you optimize *for* search engines. 

# How do you "optimize"?

Tags and proper content structuring in a nutshell. First almost all site generators will create a sitemap which basically lists all the possible urls that can be visited on the site, this is important for search engines. Equally important is the `robots.txt` file which can help search engine find out what you deem as important to index. This one is usually good for dictating what to disallow, see [Twitter's file.](https://twitter.com/robots.txt) There is also [Robots Meta Directives.](https://www.searchenginejournal.com/technical-seo/meta-robots-tags-robots-txt/)


But ultimately what SEO is about is making sure you add the relevant keywords that make it easy to find your content. The more you have this in the title, description and the tags the better the chances that your target audience will use those words.

# SEO and eleventy
You can add the tags yourself to your base template or you can use a [plugin](https://github.com/artstorm/eleventy-plugin-seo). In any case you will need to use the right terms in your front matter as well. 


# Ok, done. Now what?

Well that's the thing with SEO, there is no easy way to see how well you are doing. First it takes time for it to work because well the internet is pretty big. Second you need to keep churning out content. Third is that you need have analytics in places to see where your traffic comes from. 