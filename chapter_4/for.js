/*let sum = 0;
for (let i = 1; i<=10; i++){
    console.log(sum + ' + ' + i + ' = ' +(sum+i))
    sum+=i;
}
console.log('result = ' +sum)*/

let sum = 0;
for (i= 1; i<10; i++){
    if(i%2===0){
        console.log(sum + '+' + i + '=' +(sum+i));
        sum+=i;
    }
}

console.log('Result = ' +sum)