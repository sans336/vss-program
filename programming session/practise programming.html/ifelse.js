// 1. Check if a number is odd or even in JavaScript
function oddeven(a){

    if(a%2 == 0){
        console.log("the no is even")}
        else{
            console.log("the no is odd")
        }
    }oddeven(8)


//   2.  Check if input variable is a number or not

function num(a){
    if(a== Number){
        console.log("a is a no")
    }else{
        console.log("a is not a no")
    }
}num("sans")

// 3 .Find the largest of two number

function largest(a,b){
    if(a>b){
        console.log("a is big")
    }else{
        console.log("b is big")
    }
}largest(11,18)

// 4. Find the largest of three number

function largestest(a,b,c){
    if(a>b){
        console.log("a is big")
    }else if(b>c){
        console.log("b is big")
    }else{
        console.log("c is big")
    }
}largestest(11,18,34)

// 5. Check if a triangle is equilateral, scalene, or isosceles

function triangle(a,b,c){
    if(a==b==c){
        console.log("triangle is equal")
    }else if(a==b || b==c){
        console.log("triangle is isosceles")
    }
    else{
        console.log("the triangle is scalene")
    }
}triangle(11,12,12)




// 6.Find the a number is present in given range
let n = 15;
function range(a,b){
    if (n >= a && n <= b){
        console.log("present")
    }else{
        console.log("not present")
    }
}range(20,25);

// 7. Perform arithmetic operations on two numbers

function arithmetic(a,b,op){
    if (op == "add"){
        console.log(a+b)
    }else if (op == "subtract"){
        console.log(a-b)
    }
    else if (op == "multiple"){
        console.log(a*b)
    }
    else if (op == "divide"){
        console.log(a/b)
    }
}arithmetic(2,3,"multiple")

// 8. Find check if a year is leap year or not

function checkLeapYear(year) {
if((year%4==0 && year%100 != 0)||(year%400==0)){
    console.log("itis a leap year")
}else{
    console.log("it is not a leap yr")
}

}checkLeapYear(2024)

//9. Find the grade for input marks

function grade(a){
       
    if (a >=90 && a <=100){
        console.log("verygood a++")
    }
    else if( a >=80 && a <= 90)
    {
        console.log("A")
    }
else{
    console.log("failed")
}
}grade( 100)

//10. Find number of days in a given month

function isLeapYear(year){

    return (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0));
  }
  
  function findDaysInMonth(month, year) {
  
    if(month < 1 || month > 12){
      console.log(`Invalid Month of value ${month}`)
      return;
    }
  
    if(month ==2){
      if(isLeapYear(year)){
         console.log(`The Month has 29 days`)    
      }
      else{
         console.log(`The Month has 28 days`)    
      }
    }
    else if(month == 4 || month == 6 || month == 9 || month== 11){
       console.log(`The Month has 30 days`)    
    }
    else{
       console.log(`The Month has 31 days`)
    }
  }
  
  findDaysInMonth(2, 2012) //"The Month has 29 days"
  findDaysInMonth(2, 2013) //"The Month has 28 days"
  findDaysInMonth(4, 2012) //"The Month has 30 days'
  findDaysInMonth(10, 2013) //"The Month has 31 days"


