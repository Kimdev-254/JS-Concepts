// Asynchronous JavaScript allows code to run without blocking the main thread 
// — meaning the rest of the program can continue running while waiting for tasks like:
//      1.API calls
//      2.Timers (setTimeout, setInterval)
//      3.File reading
//      4.Database queries
// async behavior prevents blocking operations that could freeze your UI or app.

// Main Tools For Async in Javascript:
// a.Callbacks
// b.Promises
// c.Async/Await

// example
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data); // Simulating an API call with a delay
    }, 2000);
}

// Using the fetchData function with a callback
fetchData((data) => {
    console.log('Data received:', data); // Output after 2 seconds: Data received: { id: 1, name: 'John Doe' }
});

// This example shows how asynchronous code allows the program to continue running while waiting for data to be fetched.
// thus saving memory and improving performance.
// thus saving memory and improving performance.