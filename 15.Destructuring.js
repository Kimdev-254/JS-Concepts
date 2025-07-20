// Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays 
// or properties from objects into distinct variables.

// Object Destructuring
const user = {
  name: "Boniface",
  age: 22,
  country: "Kenya"
};

// Destructure the object
const { name, age } = user;
console.log(name); // "Boniface"
console.log(age);  // 22
