let arr = [1, 2, 3, 4, 5, 65, 6, 7 ];
let find = 10;
let isFound = false;
for (i = 0; i<arr.length; i++){
    if(arr[i]== find){
        console.log('Data found at index ' +i);
        isFound = true;
        break;
    }
}
if (!isFound){
    console.log('Data not found')
}