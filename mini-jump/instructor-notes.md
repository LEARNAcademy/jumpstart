# Instructor Notes

### Topics

**HTML**
- DOCTYPE, head, body, title
- h1, h2, p (inner HTML)
- br, hr (self closing tags)
- input, button
- image (attributes: height, alt)
- commenting code
- STRETCH - favicon

**JavaScript**
- primitive data types - string, number, Boolean
- equality operators
- if/else statements
- Math.random
- functions (with no arguments)
- onclick
- document.getElementById
- HTML id attribute
- console.log()

**CSS**
- id/class
- background color
- centering content
- box model - margin, padding, border
- Google fonts
- pseudo selectors
- STRETCH - animation

### Instructor Process
Short intro slide deck with discussion of pair programming.

Build out the project in incremental pieces while discussing the fundamentals. After each language, students will go to breakout room in pairs to replicate the challenge. Students will use the Zoom chat to exchange files.


### Student Notes

**Magic8 Ball Challenge**
- As a user, I can see a title on my Magic8 Ball game
- As a user, I can see a subtitle on my Magic8 Ball game
- As a user, I can see an text input field
- As a user, I can see a button that will reveal my future
- As a user, I can click the button and see text appear that will reveal the Magic8 Ball's answer to my question
- As a user, I can see pleasant styling on the page


### Schedule

10:00 - 10:15 Intro slides  
10:15 - 10:45 HTML Lecture  
10:45 - 11:00 Break  
11:00 - 11:30 HTML pairing  
11:30 - 12:30 JavaScript Lecture  
12:30 - 1:00 Lunch  
1:00 - 2:00 JavaScript pairing  
2:00 - 2:30 CSS Lecture  
2:30 - 2:45 Break  
2:45 - 3:30 CSS pairing  
3:30 - 4:00 Demo and wrap up  


### Resources
- [Code Pen Magic8 Ball](https://codepen.io/finnhvman/pen/wrLPJz)


### Dice Game Lecture Notes

HTML Lecture
- Brief overview of HTML
- User stories
- DOCTYPE
- what is a tag
- h1, h2 - what is a tag and what is innerHTML
- Opening the file in Chrome
- button
- what is an attribute
- image - creative common license, src, alt attributes, height attribute
- ul, li with the game rules**
- Tag with the output label
- Tag with space for the output and no innerHTML
- Setting expectations for the magic8 ball project - show a "finished" project
- Note talk about inputs**

To Do:
- Check to make sure input is in the student notes
- Come up with a theme for the instructor example

JavaScript Lecture
- Brief overview of JavaScript
- Console in Chrome
- Data types - string, number, Boolean
- Math.random()
- Math.ceil()
- Store the random number in a variable
- console.log
- Build out if statements - one if, lots of else if, else is the catchall
- Check if statements in the console, run a few times - note that in order to get a number out come you have to run the entire code
- Wrap in a function so it is reusable
- Run the function in the console and then call it multiple times
- Need the button in HTML to call the function
- script tag with src attribute
- onclick attibute
- Check to make sure they are connected with alert() outside the function
- Make sure the button is calling the function with an alert in the function
- Seeing the console log in the browser
- Add an id to the output tag
- Replace all console.logs with `return document.getElementById("id-name").innerHTML = "answer here"`


CSS
- Can style an id, class, tags
- Connecting the file
- text-align center on the h1
- Want to center the h2 but there are multiple h2s so add an id
- Center the img - try and center the tag, fail, look at the dev tools
- Wrap the img in a div, center the content
- Add a Google Font - link and CSS code in a * to apply to all tags
- STRETCH: background img
