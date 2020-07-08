/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(greeting) {
  let times = greeting.split(':');
  if (parseInt(times[0], 10) < 12) {
    return "Good Morning"
  }
  
  if (parseInt(times[0], 10) > 12 && parseInt(times[0]) < 17) {
    return "Good Afternoon"
  }

  return "Good Evening"

}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.querySelector("h1").innerText = message

}
