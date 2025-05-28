// callback - function passsed as an argument to another function

hello(goodbye);

function hello(callback) {
    console.log("Hello");
    callback(); // guarentee argument gets passed next
}

function goodbye() {
    console.log("Goodbye");
}

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
    let result = x+ y; // calculate result first
    callback(result); // then display result to console
}

function displayConsole(result) {
    console.log(result);
}