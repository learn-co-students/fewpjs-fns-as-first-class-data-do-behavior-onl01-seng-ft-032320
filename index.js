/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
    let newTime = time.split(':')
    if (newTime[0] < 12) {
        return "Good Morning"
    } else if (newTime[0] >= 12 && newTime[0] < 17) {
        return "Good Afternoon"
    } else {
        return "Good Evening"
    }
}



/* Write your implementation of displayMessage() */

function displayMessage(str) {
    let content = document.getElementById("greeting")
    content.innerText = str
}