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

