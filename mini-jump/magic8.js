const magic = () => {
  var randomNum = Math.floor(Math.random() * 5)
  if(randomNum === 0){
    return document.getElementById("answer").innerHTML = "As I see it, yes."
  } else if(randomNum === 1) {
    return document.getElementById("answer").innerHTML = "It is certain."
  } else if(randomNum === 2) {
    return document.getElementById("answer").innerHTML = "Better not tell you now."
  } else if(randomNum === 3) {
    return document.getElementById("answer").innerHTML = "Concentrate and ask again."
  } else if(randomNum === 4) {
    return document.getElementById("answer").innerHTML = "Don't count on it."
  } else {
    return document.getElementById("answer").innerHTML = "Try again."
  }
}

// JavaScript - history, etc
// Goal - need to generate a random answer
// data types - number, string, Boolean (19th century mathematician, he created a branch of math called Boolean algebra - true and false were represented by the numbers 1 and 0 and the focus was on logical operations, this was basically a thought experiment for him and it ended up being the math that drove technology and computer science)
// variables
// Math.random
// Functions
// Equality operators - returns a Boolean value
