//1. print 1 to 10 

function print(n){
    for(i=0;i<=n;i++)
    console.log(i)
}print(10)

 

// 2 printArray(arr) //1 2 3 4 5 6

var arr = [[1, 2],
           [3, 4],
           [5, 6]];

let row=" ";
function printarray(arr)
{
    for(i=0;i<arr.length;i++){
        for (j=0;j<arr[0].length;j++){
          row = row + arr[i][j] + ' ';
        }
    }console.log(row)
}printarray(arr)

// 3. // Write a JS code to print Even numbers in given array


function printEven(array) {
    for (let i=0;i<array.length;i++){
      if(array[i]%2==0){
        console.log(array[i]); //print even number
      }  
    }
  }
  var array = [13,23,12,45,22,48,66,100]
  
  printEven(array) //12 22 48 66 100

//4. //   reverse the string

  let n= "ankit";
  function reverse(input){
    let num=input.split();
    let output=" "
    for( let i=input.length - 1; i>=0;
        i--){
            output = output+input[i]
        }
        console.log(output);
  } reverse(n);



 4. Square Star Pattern in Javascript


 let n = 4 ;
 let row="";
 function Square(n){
  for(let i=0;i<=n;i++)
  {
    for(let j=0;j<=4;j++){
      row= row + "*";
  }
row = row + "\n";
}
console.log(row)
}Square(n)



5 Hollow Square Pattern


let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

//  3. Right Triangle Pattern in Javascript

 let n = 4;
 let string = "";
 for (let i = 1; i <= n; i++) {
   for (let j = 0; j < i; j++) {
     string += "*";
   }
   string += "\n";
 }
 console.log(string);
    


  