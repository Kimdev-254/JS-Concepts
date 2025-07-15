// Lexical scope - also known as static scope is a fundamental concept in Js that determines how
// variable names are resolved in nested functions. In lexical scope, the scope of a variable is 
// determined by its physical location in the source code, and nested functions have access to variables declared in their outer scope.

function outerFunction() {
    let outerVar = "I am an outer variable";

    function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(outerVar); // Accessible here
        console.log(innerVar); // Accessible here
    }

    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined || Not accessible here
}

outerFunction();