/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(raw_string) {
  document.getElementById("greeting").innerText = raw_string;
}

function greet(timeStr) {

  const hour = parseInt(timeStr, 10);
  if (hour < 0 || hour > 24) "Invalid Time"
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}
