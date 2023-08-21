// Question 1: Hoisting

// console.log(name);
// var name = "John";// undefined

// Question 2: Function Scope

// function greet() {
//   var message = "Hello, world!";
// }
// console.log(message);//ReferenceError: message is not defined

// Question 3: Block Scope

// if (true) {
//   var x = 10;
// }
// console.log(x);// 10

// Question 4: Block Scope with let

// if (true) {
//   let y = 20;
// }
// console.log(y);//ReferenceError: y is not defined

// Question 5: Function Scope and Hoisting

// function sayName() {
//   console.log(myName);
//   var myName = "Alice";
// }
// sayName();//undefined

// Question 6: Hoisting and Function Declaration

// sayHello();

// function sayHello() {
//   console.log("Hello there!");
// }                                //Hello there!

// Question 7: Function Expression and Scope

// var greet = function() {
//   console.log(message);
//   var message = "Hi!";
// };
// greet();//undefined

// Question 8: Block Scope and var

// if (true) {
//   var color = "blue";
// }
// console.log(color);//blue

// Question 9: Block Scope and let

// if (true) {
//   let animal = "cat";
// }
// console.log(animal);//ReferenceError: animal is not defined

// Question 10: Nested Scope

// var globalVar = "I am global";

// function outerFunction() {
//   var outerVar = "I am outer";

//   function innerFunction() {
//     var innerVar = "I am inner";
//     console.log(globalVar);
//     console.log(outerVar);
//     console.log(innerVar);
//   }

//   innerFunction();
// }

// outerFunction();//I am global
// I am outer
// I am inner

// question-11
// var x = 10;
// function test()
// {
// 	var x = 20;
// }

// test();
// console.log(x);//10

// question -12

// var x = 10;

// function test() {
//   var x = 20;
//   console.log(x);
// }

// test(); //20

// question-13

var x = 10;
function test() {
//   if (x > 20) {
//     var x = 50;
//   }

    // console.log(x);
    return x;
    
}
test(); //undefined

// quetion-14

// var x = 10;
// console.log(x);

// if (true) {
//   var x = 20;
//   console.log(x);
// }

// console.log(x);//10//20//20

// question -15
// var x = 10;
// console.log(x);

// if (true) {
//   (function () {
//     var x = 20;
//     console.log(x);
//   })();
// }

// console.log(x);//10//20//10

// question-16
// var x = 10;
// console.log(x);

// function test() {
//   var x = 20;
//   console.log(x);

//   if (x > 10) {
//     let x = 30;
//     console.log(x);
//   }

//   console.log(x);
// }

// test();
// console.log(x);//10//20//30//20//10

// question-17
// var x = 10;

// function test() {
//   if (x > 20) {
//     var x = 50;
//   }
//   console.log(x);
// }

// test();//undefined

// question-18
// var x;
// x = 10;

// function test() {
//   var x;
//   if (x > 20) {
//     x = 50;
//   }

//   console.log(x);
// }

// test();//undefined

// question-19
// function test() {
//   if (false) {
//     var x = 50;
//   }

//   console.log(x);
//   console.log(y);

//   var y = 100;
//   console.log(y);
// }
// test();//undefined//undefined//100

// question-20
// function test() {
//   if (false) {
//     let x = 50;
//   }

//   console.log(x);
//   console.log(y);

//   let y = 100;
//   console.log(y);
// }

// test();//ReferenceError: x is not defined

// question-21
// function test() {
//   foo();
//   bar();

//   function foo() {
//     console.log("foo");
//   }
//   var bar = function () {
//     console.log("bar");
//   };
// }

// test();
// //foo//TypeError: bar is not a function

// question-22
// function test() {
//   function foo() {}
//   var bar;
//   foo();
//   bar();
//   function foo() {
//     console.log("foo");
//   }
//   bar = function () {
//     console.log("bar");
//   };
// }
// test();
// foo
// TypeError: bar is not a function

// question-23
// var variable = 10;
// (()=>{
//    console.log(variable);
//    var variable = 20;
//    console.log(variable);
// })();
// output-undefined,20

// question-24
// var variable = 10;
// (()=>{
//    console.log(variable);
//    variable = 20;
//    console.log(variable);
// })();
// 10,20

// question-25
// var variable = 10;
// (()=>{
//    console.log(variable);
//    variable = 20;
//    console.log(variable);
// })();
// var variable = 30;
// console.log(variable);
// 10,20,30

// question - 26
// var variable = 10;
// (()=>{
//    console.log(variable);
//    variable = 20;
//    console.log(variable);
// })();

// console.log(variable);
// var variable = 30;
// 10,20,30


// question - 27
// var variable = 10;
// (()=>{
//    variable_3 = 35;
//    console.log(variable_3);
//    var variable_3 = 45;
//    variable_2 = 15;
//    console.log(variable);   
// })();

// console.log(variable_2);
// console.log(variable_3);
// var variable=30;