// Variables Definition
const name = 'John Doe';  // Constant variable
let age = 30;             // Let variable
var isStudent = true;     // Var variable

// Arrays
const hobbies = ['reading', 'coding', 'hiking'];

// Literal Objects
const user = {
    name: 'John Doe',
    age: 30,
    isStudent: true,
    hobbies: ['reading', 'coding', 'hiking'],
};

// Classes Definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person('John Doe', 30);
console.log(john.greet());

// Functions Definition
function sum(a, b) {
    return a + b;
}

const multiply = (a, b) => a * b; // Arrow function

console.log(sum(5, 10)); // 15
console.log(multiply(5, 10)); // 50

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];

console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

// Rest Operator
function printNumbers(...numbers) {
    numbers.forEach(number => console.log(number));
}

printNumbers(1, 2, 3, 4, 5); // 1 2 3 4 5

// API Fetch (Using node-fetch)
const fetch = require('node-fetch');

async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getUserData();

// Callbacks
function doSomething(callback) {
    console.log('Doing something...');
    callback();
}

function done() {
    console.log('Done!');
}

doSomething(done); // Doing something... Done!

// Export and Import Variables and Functions

// file1.js
const myName = 'John';
function greet() {
    return `Hello, ${myName}`;
}
module.exports = { myName, greet };

// file2.js
const { myName, greet } = require('./file1');
console.log(greet()); // Hello, John
