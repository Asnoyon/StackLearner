// function add(a, b){
//     let result = a+b;
//     console.log(result)
// }
// add(2,5)
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

function sumOfArray(arr){
    let sum = 0;
    for ( i = 0; i<arr.length; i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)