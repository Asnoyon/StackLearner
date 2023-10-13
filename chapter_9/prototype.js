const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

console.log(myObject.toString()); // Greetings from Madrid
console.log(Object.getPrototypeOf(myObject))