// Prototypal inheritance is a way to add methods and properties to an object

function Person(name, age) {
    this.name = name;
    this.age = age;
}  
// Adding a method to the prototype of Person
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
// Usage
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
// person1 is an instance of Person, and it has access to the greet method defined on
// the Person prototype. This allows all instances of Person to share the same method,  