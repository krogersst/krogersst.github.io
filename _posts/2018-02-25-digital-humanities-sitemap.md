---
layout: post
title: "So You Want to Make a Digital Humanities Website"
subtitle: "Part Three: Drafting a Sitemap"
excerpt: Now we get to the fun stuff! This is the step where we get to put pen to paper and draft our sitemap!
postimage: /tutorial/kelly-sikkema-251938-unsplash.jpg
leftimageone: /tutorial/kelly-sikkema-251938-unsplash.jpg
leftsourceone: https://unsplash.com/photos/cXkrqY2wFyc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
position: right
date: 2018-02-25 14:19:00 -0500
categories: tutorial
---
[Part One][part-one] / [Part Two][part-two] / [Part Three][part-three] / [Part Four][part-four] / [Part Five][part-five] / [Part Six][part-six]

Now we get to the fun stuff! This is the step where we get to put pen to paper and draft our sitemap! Sitemaps help give us an idea of the structure of our site. Every site starts with a homepage. From there your site grows much like a tree or a flow chart. Understanding what pages you need to make and how they connect to other pages helps keep your website on track.

#### What is a Sitemap?

A sitemap shows the basic structure of the pages of your website. All sites start with a homepage: yoursite.com. From there the structures can vary dramatically. Smaller sites have a single page requiring the user to simply scroll down to discover more content. For larger sites, especially those featuring DH projects, multiple pages are required to hold a variety of media and interactive modules. Keeping track of what pages you want to create and how they will link to each other is important for both user design and site maintenance.

Here are a few sample sitemaps to give you inspiration and to better understand how actual digital humanities sites are structured.

* [Sitemap](https://www.gloomaps.com/4MggK6Tt6E) of [Letters of 1916](http://letters1916.maynoothuniversity.ie/)
* [Sitemap](https://www.gloomaps.com/eQDYZwXn4j) of [To be continued . . . The Australian Newspaper Fiction Database](http://cdhrdatasys.anu.edu.au/tobecontinued/)
* [Sitemap](https://www.gloomaps.com/p2CAQA4iv3) of [What America Ate: Preserving America's Culinary History from the Great Depression](http://whatamericaate.org/index.php)
* [Sitemap](https://www.gloomaps.com/oQhZofcMKj) of [Visualizing Abolition][visual]

##### User Design

A streamlined site is a wonderful thing, but don't leave out important pages just for the sake of minimalism. An important element, especially for larger, data-heavy projects common in digital humanities is the **How To Page**. Some projects throw the user into the thick of things with twenty different controls without so much as a starting point to refer to. This may be okay if this site is directed towards a narrow audience that shares your knowledge and expertise. However, it completely alienates anyone else who may want to gain that knowledge. Each site above has a variety of how-to resources to guide a new user, or a returner who needs a refresher, through interacting and even contributing to the site and project. **Do not forget this page!**

##### Structuring a Sitemap

Many common elements can be made as separate pages, nested under other pages, or included on one single page. How you decide to set your site up depends on the importance of each element, the pathways you would like the user to take, and simple logic. For example, **About, Contact Us,** and **Copyright** can all be structured differently in relation to each other depending on a variety of situations:

[![About Page Setup One]({{ "/assets/images/tutorial/aboutpage1.png" | absolute_url }})]({{ "/assets/images/tutorial/aboutpage1.png" | absolute_url }})
**Contact Us** and **Copyright** are separate pages that the user navigates to through the **About** parent page, or through a drop-down menu. This creates a storybook route for the user where About _leads_ to the next page. Once the user reads about the project they may want to understand how they can use the project in their own work, or how to contact the authors.

[![About Page Setup Two]({{ "/assets/images/tutorial/aboutpage2.png" | absolute_url }})]({{ "/assets/images/tutorial/aboutpage2.png" | absolute_url }})
**Contact Us** and **Copyright** are their own pages nested right at the base of the site. The user navigates to these pages directly from the top layer of the menu, or from a link on the home page. This set-up is used when these elements are considered vital to the website's message. Top-layer pages are the next stop for the user after landing on the home page. Perhaps the user has enough information from the home page that they are eager to contact the authors or look into how to use the website in their own project.

[![About Page Setup Three]({{ "/assets/images/tutorial/aboutpage4.png" | absolute_url }})]({{ "/assets/images/tutorial/aboutpage4.png" | absolute_url }})
**Contact Us** and **Copyright** are subsections of the **About** page and are not linked to by any part of the website, but are merely a part of a larger page. This is good for when an element does not take up a lot of space both physically and productively. The website may not have require a lengthy contact form and merely a link to Facebook or an email. Similarly, a single, fair-use copyright may cover the entirety of the project and requires little explanation.

#### Building Your Own Sitemap

1. **Brainstorm.** Create a list of pages you want to include. Don't worry about order or structure yet. Just write. Common elements include:

    * About
    * Contact
    * Copyright
    * Outreach
    * Search
    * Examples
    * Contribute
    * How To Use
    * How To Cite
    * Sponsors

2. **Rank** the importance of each page

    * What is the role of each page in your project?
    * Which pages are more vital for the user to see first?
    * Are some pages necessary to be expressed as stand-alone pages?
    * Could some information be expressed in conjunction with other sections?

3. **Draft!**

    Now that you have an idea of the basics of how sites are structured and the pages your site requires, grab some scrap paper or fire up [GlooMaps](https://www.gloomaps.com/) to draft a sitemap.

#### On to Part Four: Sketching a Homepage

Now that you have a rough idea of how your site will be structured, let's tackle the page that all others flow from in [Part Four: Sketching a Homepage][part-four].

[wordpress]: https://wordpress.org/
[jekyll]:   https://jekyllrb.com/
[part-one]: {{ site.baseurl }}{% post_url 2018-02-23-digital-humanities-website %}
[part-two]: {{ site.baseurl }}{% post_url 2018-02-24-digital-humanities-platforms %}
[part-three]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-sitemap %}
[part-four]: {{ site.baseurl }}{% post_url 2018-02-26-digital-humanities-homepage %}
[part-five]: {{ site.baseurl }}{% post_url 2018-02-27-digital-humanities-github %}
[part-six]: {{ site.baseurl }}{% post_url 2018-02-28-digital-humanities-resources %}
[visual]: https://visualizingabolition.org/
