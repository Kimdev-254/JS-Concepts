// Inheritance in js

// example
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
} 
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}
// Usage
const dog = new Dog('Rex');
dog.speak(); // Rex barks.
const cat = new Cat('Whiskers');
