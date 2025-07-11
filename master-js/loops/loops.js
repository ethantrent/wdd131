let largeCountries = ["China","India","United States","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}

// ALTERNATIVE: Use forEach to log the same output

// largestCountries.forEach(country => {
//     console.log("- " + country);