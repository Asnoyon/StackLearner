var a = 'abc';
//if condition e variable accessible but function e not accessible
// if(true){
//     console.log(a);
//     var b = 'Noyon'
// }
// console.log (b)

function test(n){
    function a(){
        return n%3 === 0;
    }
    function b(){
        return n%5 === 0;
    }
    if( a() && b() ){
        console.log(n + ' is divisible both 3 and 5')
    }else{
        console.log('Not a valid Number')
    }
}
test(15)