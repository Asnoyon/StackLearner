// function add(a, b) {
//   return a + b;
// }

// function manipulate(a, b, func) {
//   let c = a + b;
//   let d = a - b;

//   // function multiply (){
//   //     let m = func(a, b);
//   //     return c*d*m
//   // }
//   // return multiply
//   return function () {
//     let m = func(a, b);
//     return c * d * m;
//   };
// }
// let multiply = manipulate(6, 5, add);
// console.log(multiply());

//Higher Order Function
const radius = [1, 2, 3];
// logic to clculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};
// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};
// a reusable function to calculate area, diameter, etc
const calculate = function (radius, logic) {
  console.log(radius);
  console.log(logic);
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
