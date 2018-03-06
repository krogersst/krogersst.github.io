---
layout: post
title:  "So You Want to Make a Digital Humanities Website"
subtitle: "Part Five: Welcome to the Sandbox"
excerpt: Let's take a look at the technical aspects of website building by getting our hands dirty!
postimage: script-image.png
date:   2018-02-27 11:18:00 -0500
categories: tutorial
---
*This tutorial is currently under construction. It will be a part of a digital humanities workshop with Rice University in early April 2018.*

[Part One][part-one] / [Part Two][part-two] / [Part Three][part-three] / [Part Four][part-four]

While WordPress gives you a beautiful and responsive website right out of the gate, playing around with Github Pages shows you how websites function at the base level. For the last part of our tutorial we're going to set up a github repository and create a live website.

#### Getting Started With Github Pages

[Setting Up Your Site - A Github Guide](https://pages.github.com/)
[Setting Up Your Site - Johnathon McGlone](http://jmcglone.com/guides/github-pages/)

Here is an example of what we will make today: [Test Site](https://krogersst.github.io/workshop-site)

1. Create a [github.com](https://github.com) account.
2. Create a repository with the name: yourusername.github.io
3. Click "Create New File" and name it index.html
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
6. Visit your new site at yourusername.github.io! Looks pretty ugly right now and those links don't work yet because you haven't made those pages yet. But your site is live and you can see your editing history and revert to previous editions of your site through the wonderful land of github. Now let's make it pretty!

#### The Wonderful World of CSS

1. Create a new file css/main.css, as you can see, as soon as you typed the slash github created a new folder. You have a css folder to store all your styles in now should you build off of your main.css file.
2. While you're at it, let's open up the index.html file you just made in a new window and place the main.css window beside it. Our .css file talks with your .html so it's nice to be able to see what your .html file says while you're working with your .css file.
3. The first tag (the words between < >), we can style is `<body>`. In your main.css file we will type

    ```css
    body {
      margin: 60px auto;
      width: 70%;
    }
    ```

    This makes the content inside `<body>` and `</body>` take up only 70% of the screen, with 60 pixels between the edge of the screen and the content of the body.
4. The rest of the styles follow a similar pattern, nesting inside each other and talking to specific parts of the .html file.

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
6. Take a look at your site!


#### You Can Do A Lot With a Little






[wordpress]: https://wordpress.org/
[jekyll]:   https://jekyllrb.com/
[part-one]: {{ site.baseurl }}{% post_url 2018-02-24-digital-humanities-website %}
[part-two]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-part-two %}
[part-three]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-part-three %}
[part-four]: {{ site.baseurl }}{% post_url 2018-02-25-digital-humanities-part-four %}
[visual]: https://visualizingabolition.org/
