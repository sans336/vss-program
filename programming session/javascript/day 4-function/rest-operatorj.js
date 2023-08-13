// function sans(...para) {
//     let sum = 0;
//   for (let i = 0; i < para.length; i++) {
//     sum += para[i];
//   }

//   return sum;
// }
// console.log(addNumbers(10, 20));



function showColors(primaryColor, ...otherColors) {
  console.log(`Primary Color: ${primaryColor}`);
  console.log(`Other Colors: ${otherColors.join(', ')}`);
}

showColors('Red', 'Blue', 'Green', 'Yellow');
// Output:
// Primary Color: Red
// Other Colors: Blue, Green, Yellow



// Usage in Array Destructuring:
// The rest operator can also be used to capture the remaining elements when destructuring an array.
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

const [firstFruit, ...remainingFruits] = fruits;

console.log(firstFruit); // Output: Apple
console.log(remainingFruits); // Output: ['Banana', 'Orange', 'Mango']