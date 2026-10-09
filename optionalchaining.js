// Optional chaining (?.) in JavaScript lets you access an object's properties safely without throwing an error when a value is null or undefined.

const user = {
  name: "Somu"
};

//Without optional chaining
// console.log(user.address.city); // TypeError: Cannot read properties of undefined (reading 'city')
// Why? user.address is undefined, so JavaScript cannot access .city.

//With optional chaining
console.log(user.address?.city); // Output: undefined



//NULLISH COALESCING(??)
let userName;
console.log(userName ?? "Guest"); // Output: Guest

let userAge = 0;
console.log(userAge ?? 18); // Output: 0