// constants = variable that doesn't change

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value; // get the value from the input field with id "myText"
    radius = parseFloat(radius); // convert string to number
    circumference = 2 * PI * radius; // calculate circumference

    document.getElementById("myH3").textContent = circumference + "cm"; // display the result in the h3 element with id "myH3"
}