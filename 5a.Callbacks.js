// A callback is a function passed into another function

//example
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}   