let obj = {
    x: 40,
    y: 60,
    z: 75
}
//basic methods
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj)) 
let obj2 = Object.assign({},obj);
obj2.x = 100;
console.log(obj);
console.log(obj2)