// ARRAYS - variable like strucutee that can hold more than 1 value

let fruits = ['apple', 'organge', 'banana']
console.log(fruits[0]); // returns 'apple' from index

let numOfFruits = fruits.length;
console.log(numOfFruits); // returns number of fruits

// ARRAY METHODS

// push () / pop() / shift() / unshift()
// slice()
// splice()
// findIndex() / indexOf()
// map
// forEach()
// includes()
// filter()
// reduce()

// Ex. pop, push, unshift, shift
const arr = [1, 2, 3, 5, 6];
arr.pop(); // removes 6
arr.pop(); // removes 5

arr.push(4, 5, 6); // adds 4, 5, 6

arr.unshift(0); // adds 0 to the beginning

arr.shift(0); //remove element from beginning


// Ex. Slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
arr.slice(2); //returns index starting at 2 on

// Ex. Splice

const numbers = [1, 2, 3, 4, 'oops', 6];
numbers.splice(3, 1, 5); // start at index, remove count, replace with

// Ex. map

const prices = [4, 8, 15, 16, 23, 42];
const discountPrices = prices.map(price => price * 0.5);
console.log(discountPrices); // creates a new array



const blogPostFromDatabase = [
    {
        title: 'How to use the map() function',
        category: 'uncategorized'
    },
    {
        title: 'What is JavaScript?',
        category: 'uncategorized'
    },
];

blogPostFromDatabase.map(arrItem => {
    arrItem.category = 'Web Development';
    return arrItem;
}); // updates the category to 'Web Development'

// Ex. filter

const blogTitle = blogPostFromDatabase.filter(title => title.title === "How to use the map() function");
console.log(blogTitle);

// Ex. reduce

const nums = [4, 8, 15, 16, 24, 42];
const totalNums = nums.reduce((sum, current) => {
    return sum + current;
}, 0);
console.log(totalNums); // turn list of values into one

// ITERATE THROUGH ARRAY

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}