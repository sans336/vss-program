// Challenge # 1 — Counting duplicate characters

// let a="sans"
// let count=0;
// function duplicate(a,n){
//       for(let i=0;i<=a.length;i++){
//         if(a.charAt(i)==n){
//             count++;
//         }
//       }
//       return count;
// }console.log(duplicate("sans","s"))

// let a = "sansss";
// let count = 0;
// function duplicate() {
//   for (let i = 0; i <= a.length; i++) {
//     if (a.charAt(i) == a.charAt(i + 1)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(duplicate(a));

// Finding the first non-repeated character
// Input: "cbcbdde"

// Output: e

// let str = "cbcbdde";
// function character(str) {
//   let char = "";
//   for (let i = 0; i < str.length; i++) {
//     const current = str[i];
//     console.log(current)
//     for (let j = i + 1; j < str.length; j++) {
//       const last = str[j];
//       if (current !== last) {
//         console.log(current,last)
//         return current;

//       }
//     }

//     return false;
//   }
// }
// console.log(character(str));

// Challenge # 3 — Reversing letters and words

// let array="i evol u so much"
// let num = array.split(' ').reverse()
// console.log(num)
// let output=" "
//  for(let i =num.length-1;i>=0;i--){
//     output=num[i]+output}
//     console.log(output)

// Palindrome
// function checkPalindrome(input) {
//     input = input.toLowerCase();
//     let j = input.length - 1;

//     for (let i = 0; i < input.length / 2; i++) {
//       const currentElement = input[i];
//       const lastElement = input[j - i]; // input[j - i] -> input[5-1-0] -> input[4] -> "M"

//       if (currentElement !== lastElement) {
//         return false;
//       }
//     }

//     return true;
//   }

//   // Example usage:
//   const result = checkPalindrome("Madam");
//   console.log(result); // Output: true

// function anagram(str1, str2) {

//     if (str1.length != str2.length) {
//       return "not an anagram";
//     }

//     let sort1 = str1.split("").sort().join("");
//     let sort2 = str2.split("").sort().join("");

//     let sorting1 = sort1.toLowerCase();
//     let sorting2 = sort2.toLowerCase();

//     if (sorting1 === sorting2) {
//       return "it's an anagram";
//     } else {
//       return "not an anagram";
//     }
//   }

//   const str1 = "12";
//   const str2 = "132";
//   console.log(anagram(str1, str2));

//   const checkAnagram = (str1, str2) => {
//     const arr1 = str1.split("");
//     const arr2 = str2.split("");

//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//           arr2.splice(j, 1);
//           console.log("Splice: ", arr2);
//           break;
//         }
//       }
//     }

//     console.log({ str1, str2 });
//     return arr2.length > 0 ? false : true;
//   };

//   console.log(checkAnagram("carrace", "racecar"));

// function countVowel(b) {
//   var count = 0;
//   b=b.toLowerCase();
//   for(var i=0;i<b.length;i++){
//     if(b.charAt(i)=="a"||b.charAt(i)=="e"||b.charAt(i)=="i"||
//        b.charAt(i)=="o"||b.charAt(i)=="u"){
//        count++; //Increment vowel count
//     }
//   }
//   return count;
// }

// console.log(countVowel("Hello"))


