
const themeSelector = document.getElementById("theme-select"); // get the theme selector element
const body = document.body; // get the body element
const logo = document.getElementById("logo"); // get the logo element

function changeTheme() {
    // check to see what the current value of our select is.
    if (themeSelector.value === "dark") {
        body.classList.add("dark"); // add the dark class to the body
        logo.src = "byui-logo_white.png"; // change the logo to white
    } else{
        body.classList.remove("dark"); // remove the dark class from the body
        logo.src = "byui-logo_blue.webp"; // change the logo to blue
    }
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener("change", changeTheme);

