let arr = [1, 2, 3, 4, 5, 6,9];

let sum = arr.reduce(function(prev, curr){
    return prev + curr;
},100)

let max = arr.reduce(function(prev, curr){
    return Math.max(prev, curr)
})
console.log(sum)
console.log(max)

function myReduce(arr, cb, acc){
    for ( let i = 0; i< arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc;
}

let sum1 = myReduce(arr, function(prev,curr){
    return prev + curr
},0)
let max1 = myReduce(arr, function(prev,curr){
    return Math.max(prev, curr)
},0)
let min = myReduce(arr, function(prev,curr){
    return Math.min(prev, curr)
},arr[0])

console.log(sum1);
console.log(max1);
console.log(min)