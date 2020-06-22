/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  // Get the time in the correct format
  const parsed = parseInt(timeString);
  if (isNaN(parsed)) { return timeString; }

  let hour = timeString.split(':')[0];


  if (hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon";
  } else if (hour > 17) {
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.querySelector('h1#greeting').textContent = string;
}
