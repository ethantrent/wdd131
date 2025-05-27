// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // return element for new_array
// }[, thisArg])

// ACTIVITY 1

const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return '<li>${step}<li/>' //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML

// ACTIVITY 2

// Declare an array with letter grades in it: ['A', 'B', 'A']
const letterGrades = ['A', 'B', 'A'];

// Write a function that will take one letter grade, and return the appropriate gpa points for that grade.

const letterToPoints = (letterGrades) => {
    let points = 0;
    if (letterGrades === 'A') {
        points = 4;
    }
    else if (letterGrades === 'B') {
        points = 3;
    }
    return points;
}

// Use map and our conversion function to convert the array in step 1 to gpa points.
const gpaPoints = letterGrades.map(letterToPoints);

// ACTIVITY 3

// Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
const gpasPoints = letterGrades.map(letterToPoints);

// Using reduce calculate the GPA from the array of gpaPoints.
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// ACTIVITY 4

// Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// Using filter keep only the fruits that are smaller than 6 characters.

const sixChar = fruits.filter(function (fruit) {
    return fruit.length < 6;
});

// ACTIVITY 5

// Declare an array with the following value: [12, 34, 21, 54]
const numbers = [12, 34, 21, 54];

// Declare a luckyNumber variable with the value 21;
const luckyNumber = 22;

// Use indexOf to see if the luckyNumber is in the Array.
let luckyIndex = numbers.indexOf(luckyNumber);

