/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let parsedTime = time.split(":");
  let timeNumber = parseInt(parsedTime[0]);

  if (timeNumber < 12) {
     return "Good Morning";
  }
  else if (timeNumber > 17) {
    return "Good Evening";
  }
  else if (timeNumber > 12 && timeNumber < 17) {
    return "Good Afternoon";
  }
}

function displayMessage(timeString) {
  document.getElementById("greeting").innerText = timeString;
}