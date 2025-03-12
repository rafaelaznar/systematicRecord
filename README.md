# systematic record

In 2023, I was mulling over creating a website on Github, but I didn't want to use Jekill. So, I decided to write an Angular program to transform Github pages into something similar to a wiki. To do this, I created the Systematic Record (SR) project, which is a simple proof of concept (I like simple frontends like HN's :)). SN uses the Angular router to access pages on Github. All requests are routed to the home component. In home component, an http get request is made for each page visited, to Github, to download the page coded in Markdown. SN parse it in the frontend, and render it. At the Angular level, everything happens in the home component, but at the Github level, pages can be edited separately. To do this, I've included a link on each page to the sources of the page you're viewing on Github, so it's as easy to edit as a wiki. Here's a link to the SR project: https://github.com/rafaelaznar/systematicRecord and another link to a working example of the program: https://rafaelaznar.github.io/ The program also displays images, as you can see at: https://rafaelaznar.github.io/blaster.md
As an extension, there are two things we need to do: currently, pages can only be set up at up to two levels, due to Angular's routing, which you can see in app-routing. It could be done in a different way to make it dynamic. Another thing I think is important to develop is syntax highlighting for displaying code on the website, using marked-highlight for example.
If you want to try it, you have the instructions at https://github.com/rafaelaznar/systematicRecord/blob/master/README.md
Let's see if we can refine it so you can use it, since it's very simple and convenient, and you don't have to worry about hosting. We can also rewrite it in vanilla JS to improve it.

## Features

* Systematic Record (SR) is a publication platform in github.
* It can be turned into your website or your blog.
* SR is tiny and simple.
* SR is made using Angular.
* The content of every page is requested via AJAX get to Github and then markdown parsed using https://marked.js.org/ (MIT).
* It also uses https://github.com/PrismJS/prism/ (MIT) to show code.
* Advantages:
  * Publish SR in your own project in your Github account.
  * When you create a page in the assets folder in Github it is showed in SR. So you can use Github editor to post.
  * Every page has a link to its source in Github.
  * Simplify: let Github be your host.
    * Very comfortable for edition: add, edit and remove directly markdown files from your GITHUB repository, like a wiki.
  * Modify headers & foorters as you wish.
  * Also create personalized markdown headers or footers for a page (commented in code).
* See example to learn about links in your site.
* TODO:
  * Pages can only be set up at up to two levels. Make it dynamic.
  * Show highlighted code.
  
## Try the program

* Clone SR repository
* In environment.ts change the first line: export const githubUser = "rafaelaznar"; // Change this to your github username
* Execute command npm install to install dependencies
* Execute command ng serve and test

## Use program

* Clone SR repository
* In environment.ts change the first line: export const githubUser = "rafaelaznar"; // Change this to your github username
* Execute command ng build --output-hashing none
* Create a new repositore in your account
* Copy dist folder of SR to root folder of your new repository
* Copy index.html and paste into 404.html in your new repository
* Push to your Github account
* Publish in Github pages. (Settings -> Pages -> Deploy from a branch, branch=master, / root -> save)
* Visit home page and begin to modify your site-blog
  
## Note

* For this version only 2 anidatiosn are alloweb (pendent to solve)

## Example (unfinished)

* [Github pages](https://rafaelaznar.github.io/)
* [Github site](https://github.com/rafaelaznar/rafaelaznar.github.io/blob/master/assets/home.md)

## License

* It's MIT licensed but if you use it please consider keep the link to this repository and collaborate to mantain and improve it.
