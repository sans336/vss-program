// const addNumV1 = (a, b) => {
//   return a + b;
// };

// const addNumV2 = (a, b) => a + b;

// console.log(addNumV1(10, 20));
// console.log(addNumV2(100, 20));

let addnumber = (...para) => {
    return para;
}
console.log(addnumber(10, 20, 40));


// function makeUpperCase(input) {
//   return input.toUpperCase();
// }

// const makeUpperCaseV2 = (input) => input.toUpperCase();

// const trimAndMakeUpperCase = (input) => {
//   const uc = makeUpperCaseV2(input);
//   return uc.trim();
// };
