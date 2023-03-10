let obj = {
    x: 20,
    y: 30,
    z: 40
}
// console.log('a' in obj)
// console.log('x' in obj)

//For IN loop <--->
for(let i in obj){
    //console.log(i)
    console.log(i + ': ' +obj[i])
}