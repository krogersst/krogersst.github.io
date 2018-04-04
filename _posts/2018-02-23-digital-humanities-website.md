---
layout: post
title:  "So You Want to Make a Digital Humanities Website"
subtitle: "Part One: Q and A"
excerpt: Before you get to dive into the fun stuff like coding and designing the visuals of a digital humanities website, understanding what you want out of your website comes first. Brainstorming helps limit the problems that inevitably pop up along the way. Here are important questions that you should answer before attempting a project like this. This will give insight into the unique issues that face a project of this type, the ways in which planning can circumvent these issues, and how to kick-start your own project.
postimage: /tutorial/galymzhan-abdugalimov-181-unsplash.jpg
leftimageone: /tutorial/galymzhan-abdugalimov-181-unsplash.jpg
leftsourceone: https://unsplash.com/photos/ICW6QYOcdlg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
date:   2018-02-23 11:18:00 -0500
categories: tutorial
---
<!--TODO: proofread -->

[Part One][part-one] / [Part Two][part-two] / [Part Three][part-three] / [Part Four][part-four] / [Part Five][part-five] / [Part Six][part-six]

This tutorial will guide you towards the appropriate platforms, resources, and tutorials for your site. We will identify key aspects of the site such as the audience, the format of the information you want to present, the ability levels of the programmer/team members, and which platforms are best suited for your site. Then we will outline a link tree, sketch out a landing page design, and create a plan of attack for moving forward. By the end of the tutorial, you will have a solid base to build your website off of and a plethora of resources to keep the momentum going.

> Along the way, look for these info boxes for ways in which these steps were utilized in developing Visualizing Abolition as well as krogersst.github.com.

#### Part One: Q and A

Before you get to dive into the fun stuff like coding and designing the visuals of a digital humanities website, understanding what you want out of your website comes first. Brainstorming helps limit the problems that inevitably pop up along the way. Here are important questions that you should answer before attempting a project like this. This will give insight into the unique issues that face a project of this type, the ways in which planning can circumvent these issues, and how to kick-start your own project.

You can fill out this [worksheet](https://docs.google.com/document/d/1ZZNR-xy3G0h3cEl5fK6oO65McOVV8bFUIIobztxDE-8/edit?usp=sharing) as you follow along with the tutorial.

#### Primary Questions

The answers to these questions influence every level of the process. They will no doubt fluctuate and grow with your project, but even a rough idea that changes is better than going in blindly.

1. What is the goal of your website?

   * Sharing essays and interpretive resources
   * Presenting a collaborative project
   * Providing a searchable database
   * Creating a dialogue through forums and comments
   * Providing visualizations
   * Facilitating the growth of and wider collaboration on a larger project

   > Visualizing Abolition's main goal is to provide an integrated database and visualization system as well as essays and images to provide context and interpretation of the data.

2. Who is your audience? This influences both visual design, wording, and the basic layout of the site.

   * What is the tone of your content? Visualizing Abolition presents data on the African slave trade. This will require a different feel and tone than a site focused on the history of comfort food in the American South.
   * Will your audience be primarily professional academia? Will it be public history oriented? Or would you like your site to have resources for high school and middle school teachers interested in working with primary sources?

   > Visualizing Abolition's audience is mainly researchers interested in primary sources.

3. What is the format of the information you are presenting?

   * Video
   * Audio
   * Maps
   * Database
   * Visualizations
   * Photos/Images
   * Essays/text-based

   > Visualizing Abolition's primary format, when initially planned, was a database with visualizations. However, with the addition of other team members we were able to expand our formats to video, images, and essays. This expansion relied on the capabilities of our platform and our programming team.

4. What is the future of your site?

   * Will this be a static site presenting a project at a moment in time?
   * Will you be constantly adding new content to the site?
   * Will this site house one project or many related projects?
   * Will you be handing this site off to others, or keeping it under your care?

   > Visualizing Abolition's has gone through many changes, but throughout it's growth, it has remained a site presenting a single, mostly static project. It has changed hands this winter from the University of Missouri to Rice University, requiring it to be rather limber in where it can be housed.

#### Technical Questions

There are **three levels of user interface** that you can utilize: the programmer, the admin/contributor, and the end-user/audience/consumer. Different platforms lend themselves to different abilities and needs in each of these levels. Identifying key abilities and requirements for each level will inform which platform you choose and how you will structure your site on that platform.

1. Who is the programmer/designer and what are their abilities? If you're in charge of the design/programming, are you able to achieve the goals of your site with your skill level or will you need to add a designated programmer to your team?

   | Goal | Skills or Platform Requirements |
   | ---- | ------------------------------------------------------- |
   | Sharing essays and interpretive resources | built-in widgets or basic html and css |
   | Providing image slideshows, and basic keyword search for images | built-in widgets or basic custom jQuery and javascript |
   | Providing a searchable, multi-keyword database | intermediate to advanced custom jQuery and javascript |
   | Interactive visualizations | intermediate to advanced custom jQuery and javascript |
   | Creating a dialogue through forums and comments | CMS based platform |

2. Who, if any, are your collaborators?

   * What are their ability levels? Are they comfortable with coding such as basic html?
   * Will they contribute independently in adding site content or will they go through you in order to add information to the site?
   * Will you need a platform for individual access to the site? [WordPress][wordpress], [Squarespace](https://squarespace.com), and other platforms of their ilk have built-in, fairly intuitive contributor platforms.

   > Visualizing Abolition utilizes WordPress' contributor access and blogging features to allow team members to post images and essays as they see fit with intuitive fields for adding images, tags, and other features without needing to know advanced coding. The system also keeps track of each contributor's level of access and privileges to the site, allowing for oversight.

3. How much interaction do you require from your audience?

   | Interaction | Platform |
   | ----------- | -------- |
   | Basic contact form, a designated email, or linking to social media such as Facebook | a static site generator such as [Jekyll][jekyll] |
   | Comments, forums, multiple contact forms | CMS based site with a back-end database such as WordPress |

4. Will you be working with an IT team to help host your website? Your website will need to live on a server. This is sometimes the most difficult part of the process.

   * [WordPress.org][wordpress] and [Jekyll][jekyll] can be hosted and moved across webhosting services as well as offline on a local machine. But they also are the most difficult to juggle because of this flexibility.
   * Platforms such as [Squarespace](https://squarespace.com) and [WordPress.com](https://wordpress.com) are online only website platforms that leave you less flexibility on who owns and maintains the site but does not require you to mess around with hosting.

#### On To Part Two: Choosing a Platform

Now that we have a rough idea of what our requirements are for the site and the resources needed, let's take a look at what each platform can do for us in [Part Two: Choosing a Platform][part-two].


[wordpress]: https://wordpress.org/
[jekyll]:   https://jekyllrb.com/
[part-one]: {{ site.baseurl }}{% post_url 2018-02-23-digital-humanities-website %}
[part-two]: {{ site.baseurl }}{% post_url 2018-02-24-digital-humanities-platforms %}
[part-three]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-sitemap %}
[part-four]: {{ site.baseurl }}{% post_url 2018-02-26-digital-humanities-homepage %}
[part-five]: {{ site.baseurl }}{% post_url 2018-02-27-digital-humanities-github %}
[part-six]: {{ site.baseurl }}{% post_url 2018-02-28-digital-humanities-resources %}
[visual]: https://visualizingabolition.org/
