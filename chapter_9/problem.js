// let a = Number(readLine());
// console.log(a + 1);
// let a = Number(readLine());
// const add = function(a){
//     return a+1;
// }
// console.log(add(a));
var a = 10;
{
  var a = -10; //var is functional scoped , so its value get changes here
}
let b = a; // here value of b = a = -10
{
  let b = -20; //let is blocked scoped so , the value of b = -20 will be within curly brackets
}

console.log(b); // outside of brackets , the value of b = -10
