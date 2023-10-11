// function add(x) {
//   return 10 + x;
// }

// //memo function is higher order function
// const memo = (func) => {
//   const cache = {}; // this is clousure. and its outer scope
//   return function (y) {
//     if (cache[y]) {
//       console.log("from cache");
//       return cache[y];
//     } else {
//       console.log("from calculating");
//       const result = func(y);
//       cache[y] = result;
//       return result;
//     }
//   };
// };

// const calculate = memo(add);
// console.log(calculate(30));
// console.log(calculate(30));

function add(...x) {
  return x.reduce((sum, curr) => sum + curr);
}

const memo = (func) => {
  const cache = {}; // this is clousure. and its outer scope
  return function (...y) {
    console.log(cache);
    const key = JSON.stringify(y);
    if (cache[key]) {
      console.log("from cache");
      return cache[key];
    } else {
      console.log("from calculating");
      const result = func(...y);
      cache[key] = result;
      return result;
    }
  };
};
const calculate = memo(add);
console.log(calculate(40, 50, 60));
console.log(calculate(40, 50, 60));
