// First class function

function add(a, b){
    return a+b;
}
// 1. A function can be stored in any variable
let sum = add;

console.log(sum(4,5))

// 2. A function can be stored in any array

let arr = [];
arr.push(add);
console.log(arr)
console.log(arr[0](5,3))

// 3. A function can be stored in any object

let obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(5,5))

// 4. We can create a function as we need

 setTimeout(function(){
    console.log('I have created')
 }, 1000);