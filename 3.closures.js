// A closure is a function that "remembers" and retains access to variables from its lexical scope, even
// when the function is executed outside that scope.

// In simpler terms:
// A function inside another function can continue to access the outer function’s variables even after the
// outer function has finished running.

function outer() {
    let count = 0; // 'count' is in the lexical scope of 'outer'

    function inner() {
        count++; // inner() can access 'count'  
        console.log("Count:", count);
    }

    return inner; // return the inner function, creating a closure
}

const counter = outer(); // 'outer' runs and returns 'inner'
counter(); // Output: Count: 1
counter(); // Output: Count: 2
counter(); // Output: Count: 3
