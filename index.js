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
  let parsedTime = time.split(':').join('');

  if (parsedTime < 1200) {
  return 'Good Morning'
  } else if (parsedTime > 1200 && parsedTime < 1659) {
  return 'Good Afternoon'
  } else if (parsedTime > 1700) {
  return 'Good Evening'
  };
};

function displayMessage(string) {
  
  document.getElementById("greeting").innerText = `${string}`;
  
};