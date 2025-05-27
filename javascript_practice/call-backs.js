hello();
goodbye();

// the goodbye function is processed first due to time restraint
function hello() {
    setTimeout(function () {
    console.log("Hello!");
    }, 3000);
}

hello(wait); // ensures wait follows after hello

function hello1(callback) {
    console.log("Hello!")
    callback();
}

function wait () {
    console.log("Wait!")
}

function leave () {
    console.log("Leave!")
}

function goodbye() {
    console.log("Goodbye!")
}


sum(displayConsole, 1, 2);


function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}