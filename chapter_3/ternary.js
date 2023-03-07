let n = 11;
let str = '';
if(n%2===0){
    str = 'EVEN'
}
else{
    str = 'ODD'
}
console.log(str);

//ternary Operator: condition? true side : false side
let result = n%2 === 0 ? 'EVEN': 'ODD';
console.log(result)