// .innerHTML allows to get or set the HTML content within an element

const container = document.getElementById("container")

container.innerHTML = "<button>Buy!</button>"

container.addEventListener("click", () => {
    container.innerHTML  += "<p>Thank you for buying!</p>"
})