// let string1 = ['Noyon', 'noyon', 'Apple','Bat','Zen'];

// string1.sort((a,b)=>{
//     a = a.toLowerCase()
//     b = b.toLowerCase()
//     if(a>b) return 1;
//     if(b>a) return -1;
//     return 0;
// })

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
persons.sort;
console.log(persons);
persons.sort((a,b)=>{
    if(a.age>b.age){
        return 1;
    }
    else if(b.age>a.age){
        return -1;
    }
    else{
        return 0;
    }

})
console.log(persons)
