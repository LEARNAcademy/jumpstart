# Welcome to Jumpstart

## JavaScript

- JavaScript background
- camelCase (no spaces!)
- Inspect the page, console
- concatenation
- script tag, add an alert to make sure they're connected
- id the tags, onclick with the argument of the id

```javascript
function treasure(location){
  alert(location)
}
```
- add the random numbers
- alert the location of the win/lose/location

```javascript
var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)

function treasure(location){
  if(treasureLocation === location){
    alert("you win")
  }
  else if(bombLocation === location){
    alert("you lose")
  }
  else if(treasureLocation !== location && bombLocation !== location){
    alert(location)
  }
}
```
```javascript
function treasure(location){
  if(treasureLocation === location){
    document.getElementById(location).innerHTML = "&#x1f308"
  }
  else if(bombLocation === location){
    document.getElementById(location).innerHTML = "&#x2620"
  }
  else if(treasureLocation !== location && bombLocation !== location){
    document.getElementById(location).innerHTML = "&#x1f332"
  }
}
```
console.log("%cHey", "color: blue;") will set CSS in console.log
