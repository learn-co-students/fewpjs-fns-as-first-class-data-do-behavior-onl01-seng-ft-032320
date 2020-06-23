/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  e.preventDefault();
}

function greet(timeString) {
  let parsed = parseInt(timeString)
  if (isNaN(parsed)) { return timeString; }
  let hour = timeString.split(':')[0];
  
  if (hour < 12){

   return "Good Morning"    
  }
  else if (hour >=12 && hour < 18){
    return "Good Afternoon"

  }
  else {

    return "Good Evening"
  }
}

function displayMessage(string) {

  document.getElementById("greeting").innerText = string;

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
