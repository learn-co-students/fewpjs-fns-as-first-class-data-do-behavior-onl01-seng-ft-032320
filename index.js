/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
	// let timeArr = time.split(":")
	let hour = parseInt(time)
	if (hour == NaN) {
		return "Incorrect format"
	}
	  if (hour < 12) {
		return "Good Morning"
	} 
	  if (hour > 17) {
		return "Good Evening"
	}
	  if (hour >= 12 && hour <= 17) {
		return "Good Afternoon"
	}
}

function displayMessage(string) {
	document.querySelector("#greeting").innerText = string
	
}