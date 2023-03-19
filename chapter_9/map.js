let arr = [1,2,3];
let sqArr = arr.map(function (value){
    // return Math.random() * 100;
    return value*value
})

console.log(arr);

console.log(sqArr)

// function myMap(arr,cb){
//     let newArray = [];
//     for(let i = 0; i<arr.length; i++){
//         let temp = cb(arr[i],i,arr)
//         newArray.push(temp);
//     }
//     return newArray
// }

// let qb = myMap(arr, function(value){
//     return value * value * value
// })
// let mTen = myMap(arr, function(value){
//     return value * 10
// })
// console.log(arr);
// console.log(qb);
// console.log(mTen);