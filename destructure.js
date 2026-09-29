//OBJECT
const a = { x: 1, y: 2, z: 3 };
const { x, y, z } = a;
console.log(a);// { x: 1, y: 2, z: 3 }
console.log(x, y, z);  // Output: 1 2 3

//NESTED OBJECT
const b = { x1: 1, y1: { a: 2, b: 3 }, z1: 4 };
const { x1, y1: { a: a1, b: b1 }, z1, p1= 5 } = b;
console.log(b);// Output: { x1: 1, y1: { a: 2, b: 3 }, z1: 4 }
console.log(x1, a1, b1, z1);  // Output: 1 2 3 4


// default
const c = { x2: 1, y2: 2 };
const { x2, y2, z2 = 3 } = c;
console.log(c);

// rename
const d = { x3: 1, y3: 2 };
const { x3: newX, y3: newY } = d;
console.log(d);

//ARRAY
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(colors); //[ 'red', 'green', 'blue' ]
const [first, , third] = colors;
console.log(first, third); // red blue

//NESTED ARRAY
const nestedColors = ['red', ['green', 'lightgreen'], 'blue'];
const [firstNested, [secondNested, thirdNested]] = nestedColors;
console.log(nestedColors); //[ 'red', [ 'green', 'lightgreen' ], 'blue' ]

// Rest operator
const numbers = [1, 2, 3, 4, 5];
const [firstNum, secondNum, ...restNums] = numbers;
console.log(numbers); //[ 1, 2, 3, 4, 5 ]
console.log(firstNum, secondNum, restNums); // 1 2 [ 3, 4, 5 ]


//swapping variables
let S1 = 1;
let S2 = 2;
[S1, S2] = [S2, S1];
console.log(S1, S2); // Output: 2 1


//destrucuturing function parameters
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson({ name: "Alice", age: 30 }); // Output: Name: Alice, Age: 30