/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log(timeString)
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  //"13:00"
  let time = str.split(":");
  //1300
  console.log(time)
  let int = parseInt(time, 10);
  console.log(int);
  if(int < 12) return "Good Morning";
  if(int >= 12 && int <= 17) return "Good Afternoon";
  if(int > 17) return "Good Evening";
}
/* Write your implementation of displayMessage() */

function displayMessage(str){
  let greeting = document.getElementById('greeting');
  greeting.innerText = str;
}
