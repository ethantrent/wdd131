// arrow function - concise way to write function expressions (parameters) => code

function hello() {
    console.log("Hello");
}

hello();

const hello = function() {
    console.log("Hello");
}

hello();

// put in variable, determine parameters, then insert code
const hello = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} years old`)};

hello("Ethan", 22);

setTimeout(goodbye, 3000);

function goodbye () {
    console.log("Goodbye");
}

setTimeout(function () {
    console.log("Goodbye");
}, 3000);

setTimeout(() => console.log("Goodbye"), 3000);

// using map, filter, and reduce

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element % 2 === 0);
const totals = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares); // displays numbers squared
console.log(evenNums); // displays even numbers
console.log(totals); // displays total of numbers

