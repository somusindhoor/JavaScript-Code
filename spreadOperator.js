
// Spread Operator
const a = [1,2,3];
const b = [...a];
console.log(b); // Output: [1, 2, 3]

const c = [4,5,6];
const d = [...c, 7, 8, 9];
console.log(d); // Output: [4, 5, 6, 7, 8, 9]


//Object
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, age: 31, city: 'New York' };
console.log(updatedUser); // Output: { name: 'John', age: 31, city: 'New York' }


//Rest Operator
function displayUser(...args) { 
    console.log(args);
}

displayUser('Alice', 25, 'Engineer'); // Output: [ 'Alice', 25, 'Engineer' ]


//Default parameter
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!

function sum(a, b = 5) {
    return a + b;
}
sum(1) // Output: 6