CSS - Part two


Background image: url()

Pseudo selectors

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user's pointer hovers over it.


button:hover {
  color: blue;
}

Animations
When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.
To get an animation to work, you must bind the animation to an element.
The following example binds the "example" animation to the <div> element. The animation will last for 4 seconds, and it will gradually change the background-color of the <div> element from "red" to "yellow":
@keyframes
@keyframes shake {
 0% { transform: translate(1px, 1px) rotate(0deg); }
 10% { transform: translate(-1px, -2px) rotate(-1deg); }
 20% { transform: translate(-3px, 0px) rotate(1deg); }
 30% { transform: translate(3px, 2px) rotate(0deg); }
 40% { transform: translate(1px, -1px) rotate(1deg); }
 50% { transform: translate(-1px, 2px) rotate(-1deg); }
 60% { transform: translate(-3px, 1px) rotate(0deg); }
 70% { transform: translate(3px, 1px) rotate(-1deg); }
 80% { transform: translate(-1px, -1px) rotate(1deg); }
 90% { transform: translate(1px, 2px) rotate(0deg); }
 100% { transform: translate(1px, -2px) rotate(-1deg); }
}

	h1{
 animation: shake 1s infinite;
 animation-direction: alternate;
 animation-timing-function: ease-in-out;
	 }
	
“Centering things is difficult”

https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties
The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kinds of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.


Flexbox froggy
Let all the students play flex box froggy for five minutes so they can get an idea of what to be looking for. 
Div tags 

Display : flex
Justify content : ____


text-align: center
align-items: center

Extra Info
LOL code
Flexbox froggy
