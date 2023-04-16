let string1 = ['Noyon', 'noyon', 'Apple','Bat','Zen'];

string1.sort((a,b)=>{
    a = a.toLowerCase()
    b = b.toLowerCase()
    if(a>b) return 1;
    if(b>a) return -1;
    return 0;
})