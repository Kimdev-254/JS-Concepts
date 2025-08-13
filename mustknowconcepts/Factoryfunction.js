// Factory function is a design pattern that allows you to create objects without specifying the exact class of object that will be created. It provides a way to encapsulate the creation logic and return an instance of an object.
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}
// Usage
const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am