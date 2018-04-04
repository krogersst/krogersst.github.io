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

#### Getting Started With Github Pages

Here are a few guides to get started.

* [Setting Up Your Site - A Github Guide](https://pages.github.com/)
* [Setting Up Your Site - Johnathon McGlone](http://jmcglone.com/guides/github-pages/)

Here is an example of what we will make today: [Test Site](https://krogersst.github.io/workshop-site)

<!--TODO: Spruce Up Test Site Links-->

1. Create a [github.com](https://github.com) account.
2. Create a repository with the name: **yourusername.github.io**
3. Click "Create New File" and name it **index.html**

<p class="post-quote">Github looks for index.html to build your landing page. Don't worry, our other pages can be named about.html, contact.html, etc.</p>

4. Copy and paste this code into your new file.

    ```html
    <!DOCTYPE html>
    <html>

      <head>
        <title>This is a test site for a DH website workshop.</title>
      </head>

      <body>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/images">Images</a></li>
            <li><a href="/essays">Essays</a></li>
          </ul>
        </nav>

        <div class="container">
          <div class="blurb">
            <h1>Hi there, this is my amazing new digital humanities website!</h1>
            <p>With some html and a little bit of css and javascript I've made a  
              great lookin DH website.
              <a href="/about">Read more about this cool project...</a>
            </p>
          </div><!-- /.blurb -->
        </div><!-- /.container -->

       <footer>
         <ul>
           <li>This site is published under a  
             <a href="https://creativecommons.org/licenses/by/4.0/">  
               Creative Commons Attribution 4.0 International License.
             </a>
           </li>
           <li>Find my main site at:  
             <a href="https://krogersst.github.io">
               krogersst.github.io
             </a>
           </li>
         </ul>
       </footer>

      </body>

    </html>
    ```

5. Write a commit message such as "create index.html file" and hit commit new-file.
6. Visit your new site at **yourusername.github.io**! Oh no, it looks pretty ugly right now and those links don't work because you haven't made those pages yet. But your site is live and you have a github repository set up.

    * A repository contains all of your site files, as well as the history of the changes you've committed. If you've hit commit on something you didn't want or you've decided you like an old version of the site better, you can revert to previous editions of your site.
    * A few resources and introductions to git and github: <!--TODO: Add git resource links-->

Now let's make your homepage pretty!

#### The Wonderful World of CSS

1. Create a new file **css/main.css**, as you can see, as soon as you typed the slash github created a new folder. You have a css folder to store all your styles in now should you build off of your main.css file.
2. While you're at it, let's open up the index.html file you just made in a new window and place the main.css window beside it. Our .css file talks with your .html so it's nice to be able to see what your .html file says while you're working with your .css file.
3. The first tag (the words between < >) we can style is `<body>`. In your main.css file we will type:

    ```css
    body {
      margin: 60px auto;
      width: 70%;
    }
    ```

    This ensures the content inside `<body>` and `</body>` takes up only 70% of the screen, with 60 pixels between the edge of the screen and the content.
4. The rest of the styles follow a similar pattern, nesting inside each other and talking to specific parts of the .html file. Take a look at the code below and copy/paste into your main.css file:

    ```css
    nav ul, footer ul {
        font-family:'Helvetica', 'Arial', 'Sans-Serif';
        padding: 0px;
        list-style: none;
        font-weight: bold;
    }
    nav ul li, footer ul li {
        display: inline;
        margin-right: 20px;
    }
    a {
        text-decoration: none;
        color: #999;
    }
    a:hover {
        text-decoration: underline;
    }
    h1 {
        font-size: 3em;
        font-family:'Helvetica', 'Arial', 'Sans-Serif';
    }
    p {
        font-size: 1.5em;
        line-height: 1.4em;
        color: #333;
    }
    footer {
        border-top: 1px solid #d5d5d5;
        font-size: .8em;
    }

    ul.posts {
        margin: 20px auto 40px;
        font-size: 1.5em;
    }

    ul.posts li {
        list-style: none;
    }
    ```

5. Commit the main.css file just as you did with index.html
6. Go to your index.html and add the line below right after your `<title>` tag. This will make sure your index.html and your main.css can talk to each other:


      ```HTML
      <link rel="stylesheet" href="https://github.io/yourusername.io/main.css">
      ```

      <p class="post-quote">The `head` tag does two things. It ensures everything inside the tags is not shown by the browser. Instead it contains information that the browser uses to grab other files it needs to display your html correctly, as well as any extra information to display or utilize outside of your page such as the title of the webpage as displayed in your tab.</p>

7. Commit the changes to your index.html

8. Take a look at your site! Navigate to **yourusername.github.io** and see how adding CSS has changed the look of your HTML.

     <!-- TODO: Add CSS resource links-->


<!-- TODO: Add more exercises?#### You Can Do A Lot With a Little

1. Add an about page
2. Add a header file?
3. Add a footer file?
4. Add some javascript
-->

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
