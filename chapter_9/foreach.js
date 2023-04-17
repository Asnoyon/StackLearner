let array = [1, 2, 3, 4, 5, ];

let sum1 = 0;
array.forEach(function(value){
    // console.log(value)
    sum1+=value
})
console.log(sum1)

function forEach(array,cb){
    for(let i = 0; i<array.length; i++) {
        cb(array[i],i,array);
    }
}
let sum = 0;
forEach(array,function (value,index,array){
    sum+=value
})
console.log(sum)

forEach(array, function(value,index,array){
    array[index] = value + 5;
})
console.log(array)