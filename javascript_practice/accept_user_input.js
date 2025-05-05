let username;

// Prompt the user for their name
// this is the easy way to get user input in JavaScript
//username = window.prompt("Enter your name: ");

//console.log(`Hello, ${username}!`);

// this is the professional way to get user input in JavaScript with an HTML text box

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}!`;
}