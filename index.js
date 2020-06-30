/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
    let now = new Date();
    let noon = new Date();
    let evening = new Date();
    if (time.length == 4) {
      now.setHours(time.substring(0,1));
    } else {
      now.setHours(time.substring(0,2));
    }
    noon.setHours("12");
    evening.setHours("17");
    if (now.getHours() < noon.getHours()) {
        return 'Good Morning'
    } else if (now.getHours() >= noon.getHours() && now.getHours() < evening.getHours()) {
        return 'Good Afternoon'
    } else {
        return 'Good Evening'
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
    greeting = document.querySelector('#greeting');
    greeting.innerText = string;
}
