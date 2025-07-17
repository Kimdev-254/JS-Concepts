//reduce method

// const Numbers = [1, 2, 3, 4, 5];

// const sum = Numbers.reduce((acc, currentValue) => {
//     return acc + currentValue
// })

// console.log(`Total sum: ${sum}`);


const numbers = [1, 2, 3, 4, 5];

// Summing all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Finding the maximum value
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(max); // Output: 5