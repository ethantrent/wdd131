// Objects - store data, key value pairs

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png"]
}

console.log(castle.price)

// Create a person object that contains three keys: name, age, and country.
let person = {
    name: "Ethan",
    age: 22,
    country: "USA"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()
// Call the logData() function to verify that it works


