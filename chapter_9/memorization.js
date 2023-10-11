function add(x) {
  return 10 + x;
}

//memo function is higher order function
const memo = (func) => {
  const cache = {}; // this is clousure. and its outer scope
  return function (y) {
    if (cache[y]) {
      console.log("from cache");
      return cache[y];
    } else {
      console.log("from calculating");
      const result = func(y);
      cache[y] = result;
      return result;
    }
  };
};

const calculate = memo(add);
console.log(calculate(30));
console.log(calculate(30));
