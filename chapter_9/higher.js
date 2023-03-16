function add(a, b){
    return a+b;
}

function manipulate(a, b, func){
    let c = a+b;
    let d = a-b;
    
    // function multiply (){
    //     let m = func(a, b);
    //     return c*d*m
    // }
    // return multiply
    return function(){
        let m = func(a, b)
        return c*d*m
    }
}
let multiply = manipulate(6, 5, add)
console.log(multiply())