function getGrades(inputSelector) {
  // get elements from the input box and user input
  const grades = document.querySelector(inputSelector).value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const cleanGrades = gradesArray.map(grade => grade.trim().toUpperCase());
  // return grades
  return cleanGrades;
}

function lookupGrade(grade) {
    let gpaPoints = 0;
  // converts the letter grade to it's GPA point value and returns it
  switch (grade) {
    case "A": 
      gpaPoints = 4.0;
      break;
    
    case "B":
      gpaPoints = 3.0;
      break;
    
    case "C":
      gpaPoints = 2.0;
      break;

    case "D":
      gpaPoints = 1.0;
      break;
    
    case "F":
      gpaPoints = 0.0;
      break;

    default:
    gpaPoints = null;
  }
  return gpaPoints;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
    const points = grades.map(grade => lookupGrade(grade));
  // calculates the GPA
    const total = points.reduce((sum, gradePoint) => sum + gradePoint);
    const average = total / points.length;
    const gpa = average.toFixed(2);
  // return the GPA
    return gpa;
}

function outputGpa(gpa, selector) {
  // takes a gpa value
    const outputElement = document.querySelector(selector);
  // display in the HTML in the element identified by the selector
    outputElement.innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const grades = getGrades('#grades');
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grades);
  // display the gpa
  outputGpa(gpa, '#output');
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);