let arr = [4, 8, 1, 3,13,5, 7, 9, 15];
let filterArray = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
});
console.log(filterArray);
// let filterArr=arr.filter(function(value){
//     return value % 2 === 1;
// })
// console.log(filterArr)

// function myFilter(arr,cb){
//     let newArr = [];
//     for(let i = 0; i<arr.length; i++){
//         if(cb(arr[i], i, arr)){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(myFilter(arr, function(value){
//     return value % 2 === 1
// }))
// console.log(myFilter(arr, function(value){
//     return value % 2 === 0
// }))
