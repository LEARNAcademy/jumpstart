const diceRoll = () => {
  var dice = Math.ceil(Math.random() * 6)

  if(dice === 1) {
    return document.getElementById("output").innerHTML = "1"
  } else if(dice === 2) {
    return document.getElementById("output").innerHTML = "2"
  } else if(dice === 3) {
    return document.getElementById("output").innerHTML = "3"
  } else if(dice === 4) {
    return document.getElementById("output").innerHTML = "4"
  } else if(dice === 5) {
    return document.getElementById("output").innerHTML = "5"
  } else if(dice === 6) {
    return document.getElementById("output").innerHTML = "6"
  } else {
    console.log("Dice fell off the table.")
  }
}


// Step 1:
// var dice = Math.ceil(Math.random() * 6)
// if(dice === 1) {
//   console.log("1")
// } else if(dice === 2) {
//   console.log("2")
// } else if(dice === 3) {
//   console.log("3")
// } else if(dice === 4) {
//   console.log("4")
// } else if(dice === 5) {
//   console.log("5")
// } else if(dice === 6) {
//   console.log("6")
// } else {
//   console.log("Dice fell off the table.")
// }
