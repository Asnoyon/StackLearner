// let arr = [4, 5, 6];
// let arr2 = [7, 8, 9];
// //arr.fill(true);
// let arr3 = arr.concat(arr2)
// console.log(arr3)
let a = [1, 2];
//let b  = a;
let b = Array.from(a);
b[0] = 5;
console.log(a);
console.log(b);