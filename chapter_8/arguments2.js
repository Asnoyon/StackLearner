function test(a,b,c){
    // console.log(arguments)
    for(let i= 0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
test(1,2,3)

function addAll(){
    let sum = 0;
    for(let i = 0; i< arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum)
}
addAll(2,3,4,6,5)