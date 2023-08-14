// longest string of an array[]

//  let array = ["nitin" , "romesh", "sanskriti" ,"jain" ];
// 
// let longest="";
// for(i=0;i<array.length;i++){

//     if(longest<array[i])
//     {
//         longest=array[i]
//         console.log(longest)
//     }
// }console.log(longest)


// question - sum of array element's pairs whose sum is10


let array=[2,3,4,5,6,4];
function arr(array){
    let sum=[];
    for(let i=0;i<array.length;i++){
          for(j=i+1;j<array.length;j++){
            if(array[i]+array[j]==10){
                sum.push(array[i], array[j]);;
                return sum;
            }
          }
    }
}console.log(arr(array))


// let arr = [1,2,3,5,-5, 1];
// function array(arr){
//     let sum=[]
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==0){
//               sum.push(arr[i],arr[j])
//               return sum;
//             }
//         }
//     }
// }console.log(array(arr))