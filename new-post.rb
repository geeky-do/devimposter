require "erb"
require 'fileutils'

title = ARGV[0]

# Create template.
template = %q{
---
title: <%= title %>
date: "Created"
tags: []
description: xxx 
excerpt: fun-for-seo 
permalink: posts/{{ title | slug }}/index.html
---
  
}.gsub( /^$\n/, '')

message = ERB.new(template, 0, "%<>")


# Produce result.
email = message.result
puts email


dirname = "src/posts/"
file_name = title.strip + ".md"
FileUtils.mkdir_p(dirname) unless Dir.exists?(dirname)
f = File.open(File.join(Dir.pwd, dirname, file_name),"w+")
##fill the content
f.write(email)
f.close