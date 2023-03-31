let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sqArr = arr.map(function(value){
    return value*value;
})

console.log(arr);
console.log(sqArr)
function greet(msg){
    function greetings (name){
        return msg + ', ' +name + '!'
    }
    return greetings
}
let gm = greet('Good Morning')
// console.log(typeof gm)
let msg = gm("Noyon")
console.log(msg)
console.log(gm('Twinkle Cats'))