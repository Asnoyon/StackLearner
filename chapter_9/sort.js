let persons = [
    {
    firstName :'A',
    age : 24
    },
    {
    firstName :'B',
    age : 19
    },

    {
    firstName :'C',
    age : 26
    },
    {
    firstName :'D',
    age : 21
    }
]
 let arr = [1, 7, 9 , 8, 4 , 1, 3, 20];
//  arr.sort();
//  console.log(arr)
// persons.sort();
// console.log(persons)

arr.sort(function(a,b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0;
    }
})
console.log(arr);

// persons.sort(function(a, b){
//     if(a.age>b.age){
//         return 1
//     }else if(a.age<b.age){
//         return -1
//     }else{
//         return 0
//     }
// })
// console.log(persons)