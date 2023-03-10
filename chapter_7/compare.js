let obj1 = {
    a: 20,
    b: 30
}
let obj2 = {
    a: 20,
    b: 330
}
// if(obj1.a===obj2.a && obj1.b === obj2.b){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log(true)
}
else{
    console.log(false)
}

