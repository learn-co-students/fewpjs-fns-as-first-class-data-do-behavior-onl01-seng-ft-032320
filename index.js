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
  const timeInts = time.split(':');
  if (timeInts[0] < 12) {
    return 'Good Morning'
  } else if (timeInts[0] < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
 }

 function displayMessage(newString) {
  const greetingElement = document.querySelector('#greeting');
  greetingElement.innerText = newString;
 }