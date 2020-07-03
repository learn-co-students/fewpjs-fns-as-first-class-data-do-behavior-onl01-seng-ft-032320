/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// The greet function should take one argument, 
// a String which specifies the 24-hour time in the format HH:MM.

function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  // If the time is earlier than 12pm, return "Good Morning".
  if (hour < 12) return "Good Morning"
  // If the time is later than 5pm, return "Good Evening".
  if (hour > 17) return "Good Evening"
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg;
}