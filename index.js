/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time) {
  let x = parseInt(time)
  if (x < 12 ) {
    return 'Good Morning'
  }
  if (x >= 12 && x <= 17) {
    return 'Good Afternoon'
  }
  if (x > 17 ) {
    return 'Good Evening'
  }
}
    
function displayMessage(msg) {
  document.querySelector('#greeting').innerText = msg;
}