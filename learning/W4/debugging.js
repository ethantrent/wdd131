/* const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;

console.log(area) */

const PI = 3.14;
let area = 0;

function circleArea(radius) {
    debugger;
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log("Area", area);