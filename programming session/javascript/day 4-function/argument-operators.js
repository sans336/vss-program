// without arguments




// with using arguments operators
// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(5, 10, 15)); // Outputs: 30
// console.log(sum(2, 4, 6, 8, 10)); // Outputs: 30


// function multiply() {
//     let c = 1;
//     for (i = 0; i < arguments.length; i++){
//         c=c*arguments[i]
//     }
//     return c;

// }onsolce.log(multiply(10, 20, 2))


// function concatenate() {
//   let result = '';
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// console.log(concatenate('Hello', ' ', 'world')); // Outputs: "Hello world"
// console.log(concatenate('This', ' ', 'is', ' ', 'a', ' ', 'test.'));

function calculateAverage() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {  
      total += arguments[i];
      
  }
  return total / arguments.length;
}

console.log(calculateAverage(10, 20, 30));