/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */



function greet(timey){
  // let time_split = time.split(":")
  let time_split = parseInt(timey)
  if(time_split < 12) {
    return "Good Morning"
  }
  if(time_split >= 12 && time_split <= 17 ) {
    return "Good Afternoon"
  }
  if(time_split > 17 ) {
    return "Good Evening"
  }
  // return time_split
}

function displayMessage(test) {
  let content = document.getElementById("greeting")
  content.innerText = test

}

