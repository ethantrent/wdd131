// create a boolean variable called 'myBoolean' and set it to 'true'
const myBoolean = true;
// create a string variable called 'myString' and set it to 'hello world'
const myString = "hello world";
// create a number variable called 'firstNumber' and set it equal to 20
const firstNumber = 20;
// create another number variable called 'secondNumber' and set it equal to 40
let secondNumber = 40;
//reassign 'secondNumber' and set it equal to 80
secondNumber = 80;
// create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' art index 1
const myArray = [myBoolean, myString]
// create an object called 'myObject' and assign 'myArray' to a property called 'firstProperty';
// and the sum of the 'firstNumber' and 'secondNumber' to a property called 'sumProperty'
const myObject = {
	firstProperty: myArray,
	sumProperty: firstNumber + secondNumber
};
// print 'myObject' to the console
console.log(myObject);
//print the 'sumProperty' of 'myObject to the console
console.log(myObject.sumProperty);
// print the value at index 1 of 'firstProperty'
console.log(myObject.firstProperty[1]);