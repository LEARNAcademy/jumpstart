CSS - Part one 

All values supplied are for your consideration

What is CSS?
Cascading Style Sheets
CSS (Cascading Style Sheets) is a styling language that describes how elements should be rendered in the browser, the dressup of coding languages
The CSS code is for describing how content is presented (e.g. colors, fonts, font-sizing, shapes).
The current version of CSS we'll be using is CSS3
CSS3 improvements involve responsive-support or mobile-friendly support.


**Yes Screen Share**

Creating a CSS file
Just like we did with the other files we've made we are going to create a file in the project called styles.css
In atom -> in the project folder create a file named styles.css
The extension .css denotes that this page utilizes the css language and only that language.
While we will be making things that impact our HTML the syntax used in our CSS file is different. 

Linking a CSS file
In order to link a css file we are going to create a link tag in the Head of our HTML file. This link tag will have two attributes 
rel - The rel attribute defines the relationship between a linked resource and the current document.
href - For <link> elements, the href attribute specifies the location (URL) of the external resource (most often a style sheet file)


<head>
  <link rel="stylesheet" href="styles.css">
</head>

Css Objects
Object Name {} 
Key: value pairs
Target the key (what I want to change) :
You can think of the key as unlocking a certain attribute of the way something is displayed
If you want to change the color of some text you can use the key “color”
set the value (what I want it changed to
Choosing a value can be as simple as choosing a color or it can be a bit more complicated depending on which key I have unlocked 

color: blue
So if we wanted to set the color of some text to blue we use the key color: and the value blue


Tag selector - redefining the entire HTML tag
We are already familiar with the HTML tags, but what if we could change how they showed up on the web page 
<h1,2,3,4> ->  h1,2,3,4{}
We’re already familiar with what the h1 looks like but what if we updated it a bit and changed its color?
Color: #337eee; (a bluish- green color if you want it)

We could even go about changing something about the font like making it bold. 
font-weight: bold;
Make changes for the other h’s if you are displaying them
<p> -> p{}
background-color: rgba(255, 250, 205, 0.7);
text-align: center;

<body> -> body{}
When we use the body selector we are going to be targeting everything that displays to our user on the web page. 
background-color: #fff88f;

<div>  -> div{} 




Attribute Assignment 
	
We can also come up with custom css selectors and assign them to HTML elements as we like 
When we want to create a unique selector that can be reused a number of times we want to create a class
class = “purple”  <—--->   .purple{}
To connect a class from HTML to css we call on the same name the class was set to and use the “.” to denote this is a class item


When we want to create a unique selector that will only be used once we want to use the “id” selector just like we did with JS
id = “blue” <-----> #blue{}
To connect an id from HTML to css we call on the same name as the id was set to and use the “#” to denote this selector is attached to an id

Font
https://fonts.google.com/
Select the font
Copy the html link
Paste in the <head>
Copy the css element

Borders: 		
Radius
4px
Width
2px
Style
dotted
Color
red
Width Style Color
2px solid black

