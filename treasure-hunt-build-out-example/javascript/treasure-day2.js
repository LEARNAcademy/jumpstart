//create a random number for the treasure and the bomb
var treasureLocation = Math.floor(Math.random()*16)
var bombLocation = Math.floor(Math.random()*16)

//make sure the bomb and the treasure aren't the same number
if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random()*16)
}
console.log(treasureLocation, bombLocation)

//set the initial counter value
var counter = 14

function treasure(location){
  counter = counter - 1
  document.getElementById("counter").innerHTML = counter

  if(treasureLocation === location){
    document.getElementById("outcome").innerHTML = "You WIN! &#x1f308"
    document.getElementById("gameboard").innerHTML = ""
  }
  else if(bombLocation === location){
    document.getElementById("outcome").innerHTML = "Sorry, you lose &#x2620"
    document.getElementById("gameboard").innerHTML = ""
  }
  else if(treasureLocation !== location && bombLocation !== location){
    document.getElementById(location).innerHTML = "❤️"
  }
  else if(counter === 0){
    document.getElementById("outcome").innerHTML = "Sorry, you lose &#x2620"
    document.getElementById("gameboard").innerHTML = ""
  }
}

//----------------Madlibs of the Amazon
// var adjective = prompt("Please enter an adjective.")
// var liquid = prompt("Please enter a liquid.")
// var bodyPart = prompt("Please enter a body part.")

// alert("Piranhas are more *adjective* during the day, so make sure you cross the *noun* at night. Piranhas are attracted to fresh *liquid* and will most likely take a bite out of your *body part* if you *verb*. Whatever you do, if you have an open wound try and find another way to get back to *place*. Good luck!")

//---------------World Domination
// var myName = prompt("What is your name?")
// var knowCode = prompt(myName + ", do you know how to write code?")
// if(knowCode.toLowerCase() === "yes"){
//   alert("You will rule the world, " + myName)
// } else {
//   alert("Well, good luck with that.")
// }

//--------------Magic 8
// var magic = () => {
//   prompt("Ask the magic 8 ball a question.")
//   var randomNum = Math.floor(Math.random() * 5)
//   if(randomNum === 0){
//       alert("Better not tell you now")
//   }else if(randomNum === 1){
//       alert("It is decidedly so")
//   }else if(randomNum === 2){
//       alert("Don’t count on it")
//   }else if(randomNum === 3){
//       alert("Signs point to yes")
//   }else if(randomNum === 4){
//       alert("Outlook not so good")
//   }else{
//       alert("Sorry, something went wrong.")
//   }
// }
// magic()

//-------------Old Enough

// var myAge = prompt("Please enter your age.")
// function ageChecker(age){
//   if(age >= 18 && age <= 21){
//     alert("You are old enough to vote, but not drink.")
//   } else if(age < 18){
//     alert("You are not old enough to vote or drink.")
//   } else if(age >= 21){
//     alert("You are old enough to vote and drink.")
//   } else {
//     alert("Your entry is invalid.")
//   }
// }
// ageChecker(myAge)
