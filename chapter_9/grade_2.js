var num = 55;
if (num >= 90) {
  console.log("A");
} else if (num >= 80) {
  console.log("B");
} else if (num >= 70) {
  console.log("C");
} else if (num >= 60) {
  console.log("D");
} else if (num >= 50) {
  console.log("E");
} else console.log("F");

// DO NOT USE ARGUMENTS FOR INPUTS
// Input num valus is in variable *num*
var num = parseInt(readLine().trim());
// YOUR CODE GOES HERE
for (let i = 0; i <= num; i++) {
  if (i % 2 !== 0) {
    if (i === num) {
      continue;
    }
    console.log(i);
  }
}
