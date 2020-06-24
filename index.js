/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const convertedTime = parseInt(time.split(":")[0]);
  let greeting = "";

  switch (true) {
    case convertedTime < 12:
      greeting = "Good Morning";
      break;
    case convertedTime >= 17:
      greeting = "Good Evening";
      break;
    case convertedTime >= 12:
      greeting = "Good Afternoon";
      break;
    
  } 
  return greeting;
}

/* Write your implementation of displayMessage() */

function displayMessage(message_string) {
  document.getElementById('greeting').innerText = message_string
}