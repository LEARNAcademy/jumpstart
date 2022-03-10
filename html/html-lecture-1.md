# HTML - Part One

**no screen share**

What is computer programming?

History of HTML

- Hyper Text Markup Language: structure and content of a page. Not the styling, not the functionality. Basically the skeleton.Whenever you have looked at the internet and read something on a web page you have been looking at HTML. 

- In the early days of the internet, there was no standardized way of sending information and documents. The Internet was mostly used for communication between colleges and universities as well as the military. People wanted standard formatting to happen. Thus, HTML was made to handle it around 1989/1990.

- Some of the most basic formatting added included:  Headers, bold text or important italicized, bullet points, bigger and smaller text, etc

- Eventually moved onto more broad uses. Remember myspace? Probably used HTML/CSS to edit your page

Let’s look at some HTML through Chrome!

**yes screen share**

What is a tag
- Just a wrapper that tells our browser how to display content in a certain way. That means, generally, it has a starting tag that happens before our content and a closing tag, after the content.  
- I want to mention that sometimes, some tags do NOT need a closing tag, but don’t worry about that for right now, we’ll get to that later. 



**send in slack** 

GENERAL RULE
   <tagname> Some Content </tagname>
      ^		                		^                                  
 Opening tag			      Closing tag



**yes screen share**
Look at W3 schools or MDN for all types of elements/tags
https://www.w3schools.com/tags/default.asp
https://developer.mozilla.org/en-US/docs/Web/HTML


Code Editors and File Naming

**Open up Atom and create a new file called index.html**

- In order to create a file in Atom we need to go to the top of our screen where it says file and scroll down to where it says “Save As” and we want to name this file index.html.
"Index" is a specific word that the browser understands to mean "the first page".

- We can use different words to create an html file, but for starters we'll stick with index.
.html (dot html) is to signify the extension or type of file. Similar to how you might have worked with Word documents that end with .doc

- It's important to indicate the extension of a file because not all programs can process all kinds of files. Your web browser knows how to process an html file.
	

## Boilerplate 
- Let’s put some HTML into a new document and actually open it in the browser

**Use “html” shortcut**

- This is the underlying structure that every HTML document will always have.

```html
<!DOCTYPE html>   Ensures the most recent version of HTML
<html lang="en"> Everything You write goes between HTML tags
<head> One Head / Metadata and info / Things you don’t see on the screen
   <title>Document</title> Shows up in tab / Helps with SEO
</head> 
<body>
  	Everything we can see on the page
</body>
</html>
```
## Atom Blue Dot
- This is a good moment for us to stop and talk about saving our files. Up at the top we can see Atom has a small blue dot. This is letting us know that this file currently is not saved.

- It is very important to save frequently as developers. 

- We can save by going through the same process as before where we go up to file on the top of the screen and hit save from the drop down menu.

- Or we can use the key binding of cmd + s for mac and ctrl + s for windows. 

# Displaying the File in Chrome

- In order to display the changes we are going to make we are going to need to connect our file to our chrome browser. 

- At the top of Atom we’ll see a small google chrome symbol inside of a white document. If we drag and drop this chrome symbol into chrome our page will display.

- You have to be careful to grab the chrome symbol or else it won’t work. 

# Headings
- h1-h6

**1 is biggest 6 is smallest - use Hello World to demonstrate each of the h’s**

    “In order to get the changes we’ve made to display we have to save our file and refresh the screen”

- Finish demo with an h1 that says “Moms Meatballs”
- And an h2 that says “The Best Meatball Recipe”


# Planning

- Let’s plan out what we want our meatball page to look like. Pieces of the page… 

**look at a recipe online either google or use this link) (https://www.cookingclassy.com/meatball-recipe/**

- While looking over the recipe, explain each of the basic parts that we will want to bring into our site. 
  - Header 
  - Br, hr
  - Paragraph
  - Image


## Setting up the tags

<div>
  A div creates a division in our body and works really well as a container for other html elements. 
  We are going to use our div to contain our <p> tag.

  **Add some lorem to the p tag**
 
  Lorem Ipsum is a kind of fake latin that developers use to hold as a placeholder until something more permanent can be created. It was created in the 1500s as a way to test printing presses

### List
**UL Tag : meatball ingredients**
    A UL tag creates an unordered list which is perfect for setting out a list of ingredients needed for the meatballs
    
**LI Tag: for each ingredient.**
    Ground beef
    Bread crumbs
    Milk
    Salt
    Worcestershire
    Pepper
    Onion, finely chopped
    One egg

**OL tag: preparation steps**
    An OL tag creates a ordered list this will be useful for something like our steps to make the meatballs

**LI tag: for different steps of the cooking process.**
    Heat oven to 400^f
    Mix ingredients
    Form into balls
    Bake for 20 mins
  
  
# Image
  - Image for small picture
  - add height attributes (not height and width)
  - Non-commercial use pictures
    - Google image search -> tools -> Creative Commons
    -  https://cdn.pixabay.com/photo/2021/02/14/07/07/fry-6013647_1280.jpg
**<img> tag and introduce the src attribute**

# Attributes
  - What is an attribute?
    - HTML attributes are a modifier of an HTML element type
      - <a href="https://www.w3schools.com">This is a link</a>
      - <img src="img_girl.jpg">
      - <p style="color:red">This is a paragraph.</p>
  - Show how to create simple styles for different tags 
  
  **Be sure to fill out the src attribute on the image tag and the alt attribute**

**no screen share**
	
**TREASURE HUNT**

Let’s stop here for now and start work on our Treasure Hunt projects 

We’ll come back together in (30 minutes) for a break and then learn some more HTML
You will find the instructions for the Treasure Hunt project in the ‘Jumpstart Weekend Student Notes’ 

We’ll work down to the part where it says “Add an image tag with a picture to decorate your page.”



