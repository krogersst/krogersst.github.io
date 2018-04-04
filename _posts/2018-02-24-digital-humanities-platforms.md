---
layout: post
title: "So You Want to Make a Digital Humanities Website"
subtitle: "Part Two: Choosing Your Platform"
excerpt: The platform you choose is an important part of the design process. It influences the flexibility you have in designing and deploying your site as well as how much hands-on work you need to put into the creation of the site.
postimage: /tutorial/samuel-zeller-492568-unsplash.jpg
leftimageone: /tutorial/samuel-zeller-492568-unsplash.jpg
leftsourceone: https://unsplash.com/photos/KzFjOkBFjqM
date: 2018-02-24 11:50:00 -0500
categories: tutorial
---
<!--TODO: proofread-->

[Part One][part-one] / [Part Two][part-two] / [Part Three][part-three] / [Part Four][part-four] / [Part Five][part-five] / [Part Six][part-six]

The platform you choose is an important part of the design process. It influences the flexibility you have in designing and deploying your site as well as how much hands-on work you need to put into the creation of the site.

#### Why Do I Need a Platform In the First Place?

In order to create a website you must create, at the very least, a HTML file and upload it to a server so that others can view your site. If a website is larger than one page and/or has complex elements, it becomes quickly apparent that you will need some assistance. For example, most sites have the same header and footer for each page. You don't want to hand code the same header for each and every page you create. And if you do any sort of blogging, you would rather focus on writing instead of coding the post. This is why we use either **Content Management Systems** (CMS) or **Static Site Generators** (SSGs). You may already be familiar with [WordPress][wordpress], which is one of the most popular content management systems. This website, on the other hand was built with the static site generator [Jekyll][jekyll]. Each provides different shortcuts for creating and managing websites, making elements of your code easily replicated, updated, and managed.

#### Content Management Systems

Content Management Systems have become the standard for most websites. They are what almost every blog-style website is built on, almost any website built by anyone without a developer at hand, and even a powerful system for those who do have a development team. A CMS allows for the content creator to never see a scrap of code and create a website through premade themes, drag and drop elements, and fill-in-the-blank forms. It also allows for the creator to easily work with others on their team to create and upload content. However, for something this powerful, there's a lot of back-end upkeep and a limit on creativity. CMS-built websites can be slow, buggy, and quickly frustrating. But, as evidenced by their wide appeal, they are quick to deploy, especially for blog-like projects.

##### Squarespace, Wix, Weebly, and WordPress.com

These four sites are the main website builders in the business. These sites provide hosting as well as a platform for creating your website without needing to know any coding. Special features are accessed by buying a premium account and you have little control over the core structure and code. However, if you only need a simple website that will showcase essays and some associated images, these sites are simple, no-fuss, and a great way to get a good-looking site up and running in a few days. Each of these sites also has a ton of tutorials on how to achieve what you want, including many youtube videos.

A wonderful, in-depth comparison of these sites can be found here [Squarespace vs. Wix vs. Weebly vs. WordPress](https://www.tytonmedia.com/blog/squarespace-vs-wix-vs-weebly-vs-wordpress/).

[Quiapography](https://updigitalhumanities.wixsite.com/quiapography) is a DH project created through Wix.

##### WordPress.org

Although both are built with the same basic platform WordPress.org has to be hosted and deployed by *you* through an outside webhost provider. However, this allows you to have the freedom to augment and expand your website as much as you want without a paywall. It is free to download and utilizes all of the same resources, themes, and plugins as WordPress.com.

**Pros:**
* Has tons of tutorials, documentation, plugins, and themes, allowing for a sliding scale of technical abilities as well as flexibility for interface and end product requirements.
* Has a built-in Admin/Contributor interface for creating posts, maintaining multiple contributor profiles and levels, etc.

**Cons:**
* Security issues abound, they can be protected against but this is something WordPress has been and continues to be known for.
* Bloated file load as a result of all its built in resources, in particular it's admin files and CMS files. If you aren't going to use half of it's resources and want a fairly streamlined package, it might be too unwieldy.

<blockquote style="margin-left: 0px;"><p>Visualizing Abolition was built through Wordpress.org because I was already familiar with the WordPress.com framework. I came onto the project without any other web development knowledge so it seemed like a natural jumping off point. It also allowed for others in my team to add content, such as the images and the essays, without any need for code on their end. WordPress.org allowed for each team member to have their own log-in and role within the site structure.</p></blockquote>

**A Few Resources for a WordPress.org Site:**
* [InstantWordpress](https://instantwp.com) is a wonderful application for local testing and was used to test and build Visualizing Abolition.
* [Layers](https://layerswp.com) is the WordPress theme Visualizing Abolition was built on. It has amazing associated documentation that makes expanding and manipulating the look and feel of the site that much easier.
* [WordPress Codex](https://codex.wordpress.org) and [WPBeginner](https://www.wpbeginner.com) are wonderful resources for any problems you may come across while building and deploying a WordPress site.

#### SSGs

SSGs takes the files you code yourself and combines them together when you 'build' your site. You then push the finished project to your server. For example, on the HTML side, I have separate files called header.html, footer.html, post.html, and then finally the [markdown](https://daringfireball.net/projects/markdown/) file of the raw text of this particular post. I then have SCSS files that compile into a single main.css file which informs how my site will look. I also have a few Javascript files as well. Each of these files are combined into the single page you see right now.

<p class="post-quote">“A Static Site Generator combines content and templates into static HTML files. Generation occurs once and the files can be hosted anywhere without server-side languages, frameworks or other dependencies.” -<a href="https://www.cmswire.com/customer-experience/static-site-generators-vs-flat-file-cms-whats-the-difference/">Craig Buckler</a></p>

##### Jekyll

If you want a streamlined and fast website, static sites and the generators that help you create them are the way to go. Jekyll is a great introduction to static sites. You will need to know basic HTML and CSS to create a Jekyll site, but as you learn more you can create a very complicated, interactive website with design and functionality created and controlled by you.

**Pros:**
As stated on the landing page of [Jekyll][jekyll] there are "no more databases, comment moderation, or pesky updates to install..." with a static site. These sites keep things:
* **Streamlined.** The files involved in building your site can be as numerous and complicated as you want or as simple as you want. A basic site will need only two files in all.
* **Protected.** The files only talk to who and what you want. There is no comment moderation to deal with, no spam bots will infiltrate, because you don't have a place for comments at all. The site is completely contained.
* **Flexible.** Jekyll produces a finished site that you can transfer wherever you want, and has a built in localhost for testing offline before making your site live. WordPress requires outside programs to create a localhost. Jekyll can also be hosted right in Github or elsewhere depending on your needs.

**Cons:**
One of the pitfalls of a static site is that there is no admin interface
* Jekyll does not allow for several people to create and publish blog posts in a traditional manner like WordPress. Instead, either your team members and contributors will submit their raw content to you and you will add them to the site, or you will allow them to contribute to your site's code through a platform such as Github.
* You can't adjust the look and feel of the site through an intuitive dashboard. Jekyll must be created, adjusted, and deployed through text-editing software such as [Atom](https://atom.io), the command line, and Github.
* You will also have limited audience interaction as there is no native ability to store comments made by visitors.

<blockquote style="margin-left: 0px;"><p>I have chosen to create this website using Jekyll and Github Pages because it gives me the freedom to create and design the site I want. And, if I were to build Visualizing Abolition all over again I would choose to use Jekyll or a similar platform rather than WordPress. Visualizing Abolition does not utilize audience participation on the main site, instead rerouting most of our interaction through to Facebook. We have also moved the site multiple times across webhosts and institutions, changing the base domain in the process. Jekyll takes care of the mess involved with these moves and keeps the site fast and responsive by minimizing the unneeded code that a WordPress site comes with.</p></blockquote>

**A Few Resources for a Jekyll Site:**
Later on in the tutorial we will be creating a basic Github website. All Github sites are built with Jekyll. The following resources will get you started using Jekyll separate from the Github interface with an option to deploy to github or to your own site.
* [Jekyll][jekyll] has amazing documentation that will get you set up right away. Always refer back to the main site if you get stuck, it will save you a lot of trouble.

    > Keep in mind that Windows machines require special steps to set up Jekyll properly but it's not too much of a hassle. I've used Jekyll on my Windows machine exclusively while I was still learning the program AND learning the command line. Take a look [here](https://jekyllrb.com/docs/windows/) for more information.

* [Programming Historian's Jekyll Tutorial](https://programminghistorian.org/lessons/building-static-sites-with-jekyll-github-pages) is an amazing resource, as if the rest of the site. I found this website only very recently and I have absolutely fallen in love with it.

##### Other SSGs
<!--TODO: discuss Other SSGs-->
Just like there are a lot of CMS platforms for you to choose from, more and more SSGs are starting to pop up. A few, like Jekyll, have great documentation and some tutorials already produced so the set-up time is less frustrating than other, lesser known SSGs. [**Hugo**](https://gohugo.io) is Jekyll's main competitor. It's speedy and sleek, allowing for even large sites to be built in seconds.

For a list of other SSGs, [Netlify](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/) has a robust list to choose from.

#### Other Platforms

You aren't limited to the usual spread of SSGs and CMS platforms. Some platforms are created especially to host certain types of projects. They may limit what you can do with presentation, flexibility, and growth, but they provide valuable tools right out of the box without the need for coding.

* [Omeka](http://www.omeka.net/): "Omeka is a web publishing platform for sharing digital collections and creating media-rich online exhibits." You can expand your Omeka site with various plugins:

   * [Neatline](http://neatline.org/): "Neatline allows scholars, students, and curators to tell stories with maps and timelines. As a suite of add-on tools for Omeka, it opens new possibilities for hand-crafted, interactive spatial and temporal interpretation."
   * [Scholars' Lab Plugins](http://scholarslab.org/research/omeka-plugins/): Scholars' Lab produced Neatline, as well as a suite of other Omeka add-ons.
   * [Scripto](http://scripto.org/documentation/omeka-scripto/): "A free, open source tool enabling community transcriptions of document and multimedia files."
   * [Incite](http://incite.cs.vt.edu/incite_download.html): "Incite is a free, open source tool for crowdsourced exploration of document archives."

* [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), and other Wiki-style platforms can be an interesting and useful approach to certain projects. It is best used for large, text-heavy projects that are expected to grow and change as more information, team-members, and research is added.
* [Mukurtu](http://mukurtu.org/): "The free, mobile, and open source platform built with indigenous communities to manage and share digital cultural heritage." This is a CMS platform designed with digital humanities in mind. It will require an IT team to set-up but it is free to use and is a exciting project overall.
* [Contentful](https://www.contentful.com/r/knowledgebase/contentful-api-cms-static-site-generators/): a step above SSGs, combines the simplicity and speed of a static site generator with the collaborative dashboard of a CMS based builder like WordPress.
* [Ghost](https://ghost.org/features/) and [Cockpit](https://getcockpit.com/): open source platforms that bridge the gap between CMS and SSGs.

#### On to Part Three: Drafting a Sitemap

Now that you've chosen your platform, it's time to get to the fun stuff. You can finally start figuring out how you want your website to look, and how it will be structured. So grab your brainstorming sheet, some scrap paper and a pencil, and head on over to  [Part Three: Drafting a Sitemap][part-three].

[wordpress]: https://wordpress.org/
[jekyll]:   https://jekyllrb.com/
[part-one]: {{ site.baseurl }}{% post_url 2018-02-23-digital-humanities-website %}
[part-two]: {{ site.baseurl }}{% post_url 2018-02-24-digital-humanities-platforms %}
[part-three]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-sitemap %}
[part-four]: {{ site.baseurl }}{% post_url 2018-02-26-digital-humanities-homepage %}
[part-five]: {{ site.baseurl }}{% post_url 2018-02-27-digital-humanities-github %}
[part-six]: {{ site.baseurl }}{% post_url 2018-02-28-digital-humanities-resources %}
[visual]: https://visualizingabolition.org/
