/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
let c = time.split(":")
let d = parseInt(c[0])
if (d < 12) {
  return "Good Morning"
  }
else if (d >= 17){
    return "Good Evening"
  }
 else {
   return "Good Afternoon" 
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(testContent){
  let content = document.getElementById('greeting')
  content.innerText = testContent
}