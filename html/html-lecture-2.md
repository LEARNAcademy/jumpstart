
# HTML - Part two


** yes screen share **

## Footer
- A footer is a standard section of any web page and generally hold some information regarding 
- the authors of the site
- where more information can be found
- possibly a link to some external resource
- To create a footer we simply make a tag with the word footer
  ```html
  - <footer> </footer>
  ```
- In this tag I can put 
  - a copyright logo © with the names of my team
- What would make this footer even better would be a link to take me back to the top of the page

## Anchor Tags and Navigation
- So let's make a navigation link in footer to the top of the page so people don’t have to scroll all the way up. 
- The anchor tag is how we create those famous blue links in HTML
- The Anchor tag is simply an HTML tag made with the letter “a”
```html
  - <a></a>
```
- The Anchor tag takes an attribute of href and then the place we want the link to go
href =’#top’
```html
<a>Back to the top</a>
```
- And we also need to add an id=’top’ to the first element in our <body> tag
- Link to external website
```html
  - A <a> tag with link to where I got the recipe from 
   https://www.cookingclassy.com/meatball-recipe/
  ```

## Table
- This next section to go over is going to end up being part of your treasure hunt game board. It doesn’t quite fit neatly into the recipe page but it is important to know.

** Explore nesting HTML elements by creating a basic table. **
```html
  Table <table>
  Table Row <tr>
  Table Data <td>
```
** 3 rows of 3 table data **

And if we want to add some temporary style to our table we can use the attribute
```html
 <table border = 1>
```

# Favicon
  - A favicon is a small image that sits on the chrome tab.
  - Back in the head tag we need to add a special tag called link

```html
<link>
```
- Link takes three attributes
    - rel="icon" 
    - type="image/x-icon"
    - href=""
    - The href will link to an image address of something like a ladle
    - https://cdn-icons-png.flaticon.com/512/2728/2728598.png

Button
Lastly Let’s make a button on the top of the page to take our user to the recipe if they just want the information.
First we’ll set up a div around the recipe and give it the id of recipe
```html
<div id=’recipe’></div>
```
Next we’ll create an anchor tag at the top of the page that will send us to the recipe
```html
<a href=’#recipe’></a>
```
And then inside that a tag we’ll create a button tag that will show the words take me to the recipe

```html
<button>Take me to the recipe <button>
```
** no share screen **

Okay let's break into our pairs again and finish up the section on HTML in the ‘Jumpstart Weekend Student Notes’ 
We’ll come back together for checkout at 8:40pm
