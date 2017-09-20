// let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// let secretMessage = animals.map(function (animal) {
//   return animal.substring(0, 1);
//   // return animal[0];
// });

// console.log(secretMessage.join(''));

// let bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// let smallNumbers = bigNumbers.map(function (number) {
//   return number / 100;
// }); 

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(number => number / 100); 