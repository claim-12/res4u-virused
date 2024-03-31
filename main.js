let number = 0;

function increase() {
  number += 100;
  document.getElementById('number').textContent = number;
}

function decrease() {
  number -= 100;
  document.getElementById('number').textContent = number;
}

function increase2() {
  number += 100;
  document.getElementById('number2').textContent = number;
}

function decrease2() {
  number -= 100;
  document.getElementById('number2').textContent = number;
}

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Define the correct password
const correctPassword = "iwant6714882";

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const messageElement = document.getElementById("message");
    const contentElement = document.getElementById("content-2222");

    if (inputPassword === correctPassword) {
        messageElement.textContent = "Password correct!";
        messageElement.style.color = "green";
        contentElement.style.display = "block"; // Show the content
    } else {
        messageElement.textContent = "Incorrect password. Please try again.";
        messageElement.style.color = "red";
        contentElement.style.display = "none"; // Hide the content
    }
}

