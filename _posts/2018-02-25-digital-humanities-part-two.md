---
layout: post
title: "So You Want to Make a Digital Humanities Website"
subtitle: "Part Two: Choosing Your Platform"
excerpt: The platform you choose is an important part of the design process. It influences the flexibility you have in designing and deploying your site as well as how much work you have to put into creating the site.
postimage: script-image.png
date: 2018-02-25 11:50:00 -0500
categories: tutorial
---
*This tutorial is currently under construction. It will be a part of a digital humanities workshop with Rice University in early April 2018.*

[Part One][part-one] / [Part Two][part-two] / [Part Three][part-three] / [Part Four][part-four]

The platform you choose is an important part of the design process. It influences the flexibility you have in designing and deploying your site as well as how much work you have to put into creating the site.

#### CMS vs SSGs

“A Static Site Generator combines content and templates into static HTML files. Generation occurs once and the files can be hosted anywhere without server-side languages, frameworks or other dependencies.” -[Craig Buckler](https://www.cmswire.com/customer-experience/static-site-generators-vs-flat-file-cms-whats-the-difference/)

#### CMS

##### Squarespace, Wix, Weebly, and WordPress.com

These four sites are the main website builders in the business. These sites provide hosting as well as a platform for creating your website without needing to know any coding. Special features are accessed by buying a premium account and you have little control over the core structure and code. However, if you only need a simple website that will showcase essays and some associated images, these sites are simple, no-fuss, and a great way to get a good-looking site up and running in a few days. Each of these sites also has a ton of tutorials on how to achieve what you want, including many youtube videos.

A wonderful, in-depth comparison of these sites can be found here [Squarespace vs. Wix vs. Weebly vs. WordPress](https://www.tytonmedia.com/blog/squarespace-vs-wix-vs-weebly-vs-wordpress/).

##### WordPress.org

Although both are built with the same basic platform WordPress.org has to be hosted and deployed by *you* through an outside webhost provider. However, this allows you to have the freedom to augment and expand your website as much as you want without a paywall. It is free to download and utilizes all of the same resources, themes, and plugins as WordPress.com.

**Pros:**
1. Has tons of tutorials, documentation, plugins, and themes, allowing for a sliding scale of technical abilities as well as flexibility for interface and end product requirements.
2. Has a built in Admin/Contributor interface for creating posts, maintaining multiple contributor profiles and levels, etc.

**Cons:**
1. Security issues abound, they can be protected against but this is something WordPress has been and continues to be known for.
2. Bloated file load as a result of all its built in resources, in particular it's admin files and CMS files. If you aren't going to use half of it's resources and want a fairly streamlined package, it might be too unwieldy.

**A Few Resources for a WordPress.org Site:**
* [InstantWordpress](https://instantwp.com) is a wonderful application for local testing and was used to test and build Visualizing Abolition.
* [Layers](https://layerswp.com) is the WordPress theme Visualizing Abolition was built on. It has amazing associated documentation that makes expanding and manipulating the look and feel of the site that much easier.
* [WordPress Codex](https://codex.wordpress.org) and [WPBeginner](https://www.wpbeginner.com) are wonderful resources for any problems you may come across while building and deploying a WordPress site.

#### SSGs

##### Jekyll

If you want a streamlined, fast website static sites and the generators that help you create them, are the way to go. Jekyll is a great introduction to static sites. You will need to know basic HTML and CSS to create a Jekyll site, but as you learn more you can create a very complicated, interactive website with design and functionality created and controlled by you.

**Cons:**
One of the pitfalls of a static site is that there is no admin interface
1. Jekyll does not allow for several people to create and publish blog posts in a traditional manner like WordPress. Instead, either your team members and contributors will submit their raw content to you and you will add them to the site, or you will allow them to contribute to your site's code through a platform such as Github.
2. You can't adjust the look and feel of the site through an intuitive dashboard. Jekyll must be created, adjusted, and deployed through text-editing software such as [Atom](https://atom.io), the command line, and Github.
3. You will also have limited audience interaction as there is no native ability to store comments made by visitors.

**Pros:**
As stated on the landing page of [Jekyll][jekyll] there are "no more databases, comment moderation, or pesky updates to install..." with a static site. These sites keep things:
1. Streamlined. The files involved in building your site can be as numerous and complicated as you want or as simple as you want. A basic site will need only two files in all.
2. Protected. The files only talk to who and what you want. There is no comment moderation to deal with, no spam bots will infiltrate, because you don't have a place for comments at all. The site is completely contained.
3. Flexible. Jekyll produces a finished site that you can transfer wherever you want, and has a built in localhost for testing offline before making your site live. WordPress requires outside programs to create a localhost. Jekyll can also be hosted right in Github or elsewhere depending on your needs.

>I have chosen to create this website using Jekyll and Github Pages because it gives me the freedom to create and design the site I want. And, if I were to build Visualizing Abolition all over again I would choose to use Jekyll or a similar platform rather than WordPress. Visualizing Abolition does not utilize audience participation on the main site, instead rerouting most of our interaction through to Facebook. We have also moved the site multiple times across webhosts and institutions, changing the base domain in the process. Jekyll takes care of the mess involved with these moves and keeps the site fast and responsive by minimizing the unneeded code that a WordPress site comes with.

**A Few Resources for a Jekyll Site:**
Later on in the tutorial we will be creating a basic Github website. All Github sites are built with Jekyll. The following resources will get you started with using Jekyll separate from the Github interface with an option to deploy to github or to your own site.
* [Jekyll][jekyll] has amazing documentation that will get you set up right away. Always refer back to the main site if you get stuck, it will save you a lot of trouble.
* [Programming Historian's Jekyll Tutorial](https://programminghistorian.org/lessons/building-static-sites-with-jekyll-github-pages) is an amazing resource, as if the rest of the site. I found this website only very recently and I have absolutely fallen in love with it.

##### Other SSGs

#### Other Platforms

A word for Omeka:

#### On to Part Three: Sketching a Design

[Part Three: Sketching a Design][part-three]

[wordpress]: https://wordpress.org/
[jekyll]:   https://jekyllrb.com/
[part-one]: {{ site.baseurl }}{% post_url 2018-02-24-digital-humanities-website %}
[part-two]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-part-two %}
[part-three]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-part-three %}
[part-four]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-part-four %}
[visual]: https://visualizingabolition.org/
