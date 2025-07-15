// Global scope 
let globalVar = "I am a global variable";

function myFunction(){
    // Function/Local Scope 
    let functionVar = "I'm a function variable";
    console.log(functionVar); // Accessible here
    console.log(globalVar); // Accessible here

    if (true) {
        // Block Scope
        let blockVar = "I'm a block variable";
        console.log(blockVar); // Accessible here
    }
    console.log(blockVar); // Error: blockVar is not defined || Not accessible here
}

myFunction();

console.log(globalVar); // Accessible here
// console.log(functionVar); // Error: functionVar is not defined || Not accessible here
// console.log(blockVar); // Error: blockVar is not defined || Not accessible here
// console.log(myFunction); // Accessible here, but not recommended to log function definitions
