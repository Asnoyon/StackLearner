// Arguments chara baire theke jodi kono kichu newa hoy setake closer bola hoy

// let b = 10;
// function a(){
//     console.log(b);
// }
// a();
function a(){
    let x = 10;
    return function(){
        console.log(x);
    }
}
let abc = a();
console.dir(abc())

// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 1000);
//     }
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 1000);
//     }

function add(a) {
    return function (b) {
    return a + b;
    };
    }
     
    let addTen = add(10);
    let addSeven = addTen(7);
     
    console.log(addSeven); // 17
