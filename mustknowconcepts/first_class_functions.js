// first-class functions

// A function can be assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// A function can be passed as an argument to another function
function processUserInput(callback) {
    const name = 'Alice';
    console.log(callback(name));
}

// A function can return another function
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

// Example usage
console.log(greet('Bob')); // Hello, Bob!
processUserInput(greet); // Hello, Alice!
const double = multiplier(2);
console.log(double(5)); // 10 25 years old.
// Output: Hello, my name is Bob and I am 25 years old.
// Output: Hello, my name is Alice and I am 30 years old.
// Output: Hello, my name is Bob and I am 25 years old.
// Output: Hello, my name is Alice and I am 30 years old.