# systematic record

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
