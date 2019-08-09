---
layout: post
title:  "So You Want to Make a Digital Humanities Website"
subtitle: "Part Five: Welcome to the Sandbox"
excerpt: Let's take a look at the technical aspects of website building by getting our hands dirty!
postimage: /tutorial/luca-bravo-217276-unsplash.jpg
leftimageone: /tutorial/luca-bravo-217276-unsplash.jpg
leftsourceone: https://unsplash.com/photos/XJXWbfSo2f0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date:   2018-02-27 11:18:00 -0500
categories: tutorial
---

*This section is under construction.*

[Part One][part-one] / [Part Two][part-two] / [Part Three][part-three] / [Part Four][part-four] / [Part Five][part-five] / [Part Six][part-six]

While WordPress gives you a beautiful and responsive website right out of the gate, playing around with Github Pages shows you how websites function at the base level. For the last part of our tutorial we're going to set up a github repository and create a live website.

#### What is Github?

* Git is a version control system.

    * Keep track of revisions and modifications
    * Allow for fall-backs should a revision fail
    * Facilitate collaboration → download current version, modify, submit new revision

* Github takes Git online

    * Collaborate with others
    * View and “fork” other projects
    * Display the code behind your projects

*  Github Pages

      Github Pages allows you to create your own website through a repository. Simply create a new repository labeled “yourusername.github.io” and github will automatically build a website based on the files you ‘push’ to your repository. Github Pages is also built on Jekyll natively.

#### Making Edits on Github
1. Navigate to your file
2. Click the pen icon to edit
3. Make your edits
4. Scroll down to commit changes
5. Type a brief description of changes
6. Commit!


#### Getting Started With Github Pages and Jekyll

1. Create a [github.com](https://github.com) account.
2. Navigate to [Jekyll-Now](https://github.com/barryclark/jekyll-now)
3. Fork Jekyll-Now to your User Repository
4. Go To Settings → Rename Repo to “username.github.io”
5. Visit https://username.github.io to see your empty site

##### Basic Elements

* `_config.yml` takes care of basic site build information
* `index.html` is where your homepage lives
* `about.md` is where you about page lives and is written in Markdown

##### Building Blocks
* `_layouts/` houses page templates
* `_includes/` houses files that Liquid can hook into such as
* `_posts/` houses your blog - style pages
* `_sass/` houses stylesheets written in SASS or SCSS

#### Writing a Post

* Naming a Post
* Front Matter
    * Layout:
    * Title:
    * Date:
* Markdown
    * Displayed through html
    * Written and read intuitively
    * [prose.io](https://prose.io)


#### On to Part Six: Resources
Now that you have an idea of where you want to take your site, have a look at a collection of resources to help you on your way in [Part Six][part-six].

[wordpress]: https://wordpress.org/
[jekyll]:   https://jekyllrb.com/
[part-one]: {{ site.baseurl }}{% post_url 2018-02-23-digital-humanities-website %}
[part-two]: {{ site.baseurl }}{% post_url 2018-02-24-digital-humanities-platforms %}
[part-three]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-sitemap %}
[part-four]: {{ site.baseurl }}{% post_url 2018-02-26-digital-humanities-homepage %}
[part-five]: {{ site.baseurl }}{% post_url 2018-02-27-digital-humanities-github %}
[part-six]: {{ site.baseurl }}{% post_url 2018-02-28-digital-humanities-resources %}
[visual]: https://visualizingabolition.org/
