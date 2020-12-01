// *************** Primitive Data Types ****************************************
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol

//*************** Numbers ******************************************************
4
9.3
-10

// type a number, number is spit back out
// basic math
4 + 100
40 - 6
76 * 2
9 / 3
// Modulo or "mod"
9 % 3
// JS follows the order of operations
7 * (8 + 11) - 3


//*************** Strings ******************************************************
"Salt and Pepper Kettle Chips"
"Hello world"
"100"

// single of double quotes
"Double"
'Single'

// concatenation (returns a single string)
"I made" + " a sentence!"
// escaping out of the quotes in a string
// "My mother said "do you want meatloaf?""
"My mother said \"do you want meatloaf?\" "


//*************** Booleans *****************************************************
True
False

// result of a query or comparison, etc.
// = vs == or ===
4 === 4
7 == 4
"4" == 4
"4" === 4
// Bang operator
"4" !== 4

// Null and Undefined
null
undefined

// *****************************************************************************
// *****************************************************************************
// *****************************************************************************
// *************** Variables ***************************************************
// Variables are like a piece of tupperware ...
var catName = "Raisins"
var age = 3
var isCute = true
"Have you met " + catName + "?"
// String interpolation. Same end result of concatenation, but less syntax in the end.
`Have you met ${catName}?`
`In 5 years, she will be ${( age + 5 )}`
// Rather than...
"In 5 years, she will be " + (age + 5)
// reassign variables (putting something else in the same tupperware)
var isCute = false



// ************** Built-in methods *********************************************
// Parentheses are a call to action ()
// lots of things can be executed in your code with a single call to action
alert("Hi!")
prompt("how old are you?")
"Raisins".charAt(5) // "n"
"Raisins".length() // 7
"Raisins".includes("sins") // true

// ************** MADLIBS ******************************************************



// ************** Comparison Operators *****************************************
// equality operator
true == false // false
3 == "3" // true

// strict comparison
true === false // false
3 === "3" // false

// ************** Relational Operators *****************************************
// greater than
2 > 0 // true

// less than
4 < 8 // true

// greater than or equal to
0 >= 2 // false

// less than or equal to
-4 <= 0.8 // true

// ************** Logical Operators ********************************************
// and
true && false // false
true && true // true

// or
true  || false // true
false || false // false

// not
!true // false
!false // true
true != false // true
true != true // false
!(true && false) // true
!(true && false) // true

// ************** Undefined ****************************************************
// If a variable is created but not assigned a value, the variable is undefined.

// ************** Null *********************************************************
// Null is equal to nothing else in your program. It is not zero, it is not false, it is nothing.

// We also have symbols, but we will touch on those later in the course

// ************** Type Coercion ************************************************
// Because JavaScript is a loosely typed language, it does a funky thing called type coercion. If we combine data from different types, JavaScript tries to be helpful and make sense of the operation. This can lead to strange and unpredictable behavior and is generally best to avoid.

"2" + 2 // "22"
!3 // false
!0 // true
true * 9 // 9
false * 9 // 0

// ************** if/else ************************************************
// age checker
// commenting in/out
// console.log() used for bug-fixing

if(myAge >= 21) {
  alert("You can drink and vote!")
} else if(myAge >= 18) {
  alert("You can vote!")
} else {
  alert("You're too young for it all")
}

// ************** WORLD DOMINATION *********************************************


// ************** functions ************************************************
// age checker REFACTORED
// Diagram a function
const ageChecker = (age) => {
  if(userAge >= 21) {
    // USE RETURN
    return "You can do it all (not at the same time)!"
  } else if(userAge >= 18) {
    return "You can drive and vote, but not drink!"
  } else if(userAge >= 16) {
    return "You can drive but not vote or drink!"
  } else {
    return "Go home!"
  }
}
ageChecker(17)

// Parentheses are a call to action
// Curly braces are an execution
// Passing an argument

const sayHello = () => {
  // we will probably need a prompt
  var userName = prompt("What is your name?")
  // put the name in our alert using interpolation
  // i want my alert to say "hello users name!"
  alert(`Hello ${ userName }!`)
}

// ************** MAGIC 8 BALL *************************************************


// ************** treasure hunt ************************************************

// Script tag, add an alert to make sure they're connected
// onclick with getElementById()
