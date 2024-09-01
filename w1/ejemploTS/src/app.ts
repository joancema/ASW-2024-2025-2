// Variables Definition
const nameUser: string = 'John Doe';  // Constant variable
let age: number = 30;             // Let variable
let isStudent: boolean = true;    // Let variable (using let instead of var in TypeScript)

// Arrays
const hobbies: string[] = ['reading', 'coding', 'hiking'];

// Literal Objects
interface User {
    name: string;
    age: number;
    isStudent: boolean;
    hobbies: string[];
}

const user: User = {
    name: 'John Doe',
    age: 30,
    isStudent: true,
    hobbies: ['reading', 'coding', 'hiking'],
};

// Spread Operator to Copy an Object
const userCopy: User = { ...user };

console.log(userCopy); // { name: 'John Doe', age: 30, isStudent: true, hobbies: ['reading', 'coding', 'hiking'] }

// Modify the copy without affecting the original
userCopy.name = 'Jane Doe';
console.log(userCopy.name); // Jane Doe
console.log(user.name); // John Doe

// Rest Operator to Omit Object Attributes
const { name, ...userWithoutName } = user;

console.log(userWithoutName); // { age: 30, isStudent: true, hobbies: ['reading', 'coding', 'hiking'] }

// Classes Definition
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person('John Doe', 30);
console.log(john.greet());

// Functions Definition
function sum(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b; // Arrow function

console.log(sum(5, 10)); // 15
console.log(multiply(5, 10)); // 50

// Spread Operator with Arrays
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const combinedArr: number[] = [...arr1, ...arr2];

console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

// Rest Operator with Arrays
function printNumbers(...numbers: number[]): void {
    numbers.forEach(number => console.log(number));
}

printNumbers(1, 2, 3, 4, 5); // 1 2 3 4 5

// API Fetch (Using Node.js built-in fetch with TypeScript)
async function getUserData(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data: any = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getUserData();

// Callbacks
function doSomething(callback: () => void): void {
    console.log('Doing something...');
    callback();
}

function done(): void {
    console.log('Done!');
}

doSomething(done); // Doing something... Done!

// Export and Import Variables and Functions

// file1.ts
export const myName: string = 'John';
export function greet(): string {
    return `Hello, ${myName}`;
}

// file2.ts
// import { myName, greet } from './file1';
// console.log(greet()); // Hello, John
