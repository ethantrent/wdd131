const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

// document.getElementById is used to select an HTML element by its ID and set its text content
// document is a global object that represents the HTML document loaded in the browser
// getElementById is a method that returns the element with the specified ID
// textContent is a property that sets or returns the text content of the specified node and all its descendants

// document.getElementById("myAppleElement") selects the element with ID "myAppleElement"
document.getElementById("myAppleElement").textContent = myApples;
// document.getElementById("friendAppleElement") selects the element with ID "friendAppleElement"
document.getElementById("friendAppleElement").textContent = friendApples;
// document.getElementById("totalApplesElement") selects the element with ID "totalApplesElement"
document.getElementById("totalApplesElement").textContent = total;

/* For example, we should get the element with the id of myAppleElement and change the textContent 
of that element to be whatever is in the myApples variable. Then we do the same for the other elements. */