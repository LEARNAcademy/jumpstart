const rollDice = () => {
  var dice = Math.ceil(Math.random() * 6)
  if(dice === 1) {
    document.getElementById("dice").innerHTML = dice
    alert("Game over")
  } else if(dice === 2) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 3) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 4) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 5) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 6) {
    document.getElementById("dice").innerHTML = "6 Extra Life"
  } else {
    alert("Ooops, the dice fell off the table!")
  }
}