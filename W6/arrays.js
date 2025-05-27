// push () / pop() / shift() / unshift()
// slice()
// splice()
// findIndex() / indexOf()
// map
// forEach()
// includes()
// filter()
// reduce()

// Ex.
const arr = [1, 2, 3, 5, 6];
arr.pop(); // removes 6
arr.pop(); // removes 5

arr.push(4, 5, 6); // adds 4, 5, 6

arr.unshift(0); // adds 0 to the beginning


// Ex.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
arr.slice(2); //returns index starting at 2 on

// Ex.

const numbers = [1, 2, 3, 4, 'oops', 6];
numbers.splice(3, 1, 5); // start at index, remove count, replace with

// Ex.

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