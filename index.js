/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
	let timeArr = time.split(":")
	let hour = parseInt(timeArr)
	if (hour == NaN) {
		return "Incorrect format"
	}
	else if (hour < 12) {
		return "Good Morning"
	} 
	else if (hour > 17) {
		return "Good Evening"
	}
	else if (hour >= 12 && hour <= 17) {
		return "Good Afternoon"
	}
}

function displayMessage(string) {
	document.querySelector("#greeting").innerText = string
	return
}