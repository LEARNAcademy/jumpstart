// ******ROLES WHILE PAIRING*********************
// Driver: hands on the wheel, avoiding potholes, aware of traffic around them, following traffic laws, maintaining speed, etc.
// Navigator: Has the map, looking ahead.
// Navigator: "Your exit is in 2 miles. You'll need to change lanes in a little bit."
// Driver: "Thanks! I'm making sure to use my blinker, checking for other cars, etc."
// Both are actively participating the entire time. Both roles are necessary.

// ******DEMO QUESTION***************************
// Solve the following. John is playing a dice game. The rules are as follows :
// Roll 2 dice
// Add the numbers of the dice together
// Keep a running total of John’s dice rolls for 3 rolls
// If John rolls doubles at any point, his score is wiped to 0
// Find his total score after 3 rolls

// ******DEMO SOLUTION***************************
// ******PSEUDOCODE FIRST************************
// wrap this in a single function
const diceGame = () => {
  // anchor variable to keep track of the total
  let anchor = 0
  // repeat some code 3 times
  // brute force loop for 3 iterations
  for(let i=0; i<3; i++){
    // two random numbers 1-6
    let num1 = Math.ceil(Math.random() * 6)
    let num2 = Math.ceil(Math.random() * 6)
    // console.log(num1, num2, i)
    // conditional to check if both numbers are equal
    // if so, set anchor to 0
    // otherwise, add to total
    if(num1 === num2) {
      console.log("Wiped to 0");
      anchor = 0
    } else if(num1 !== num2) {
      console.log(num1, num2);
      anchor += num1 + num2
    } else {
      return "error"
    }
  }
  // return anchor
  return anchor
}
