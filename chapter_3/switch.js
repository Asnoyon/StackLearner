/*let date = new Date();
// 0-Sunday, 1- Monday, 2- Tuesday
let today = date.getDay();

switch(today){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
         break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday")
        break;
    default: console.log("Not a valid Number")
}*/

let date = new Date();
let today = date.getMonth();

switch(today){
    case 0:
        console.log("Month is January")
        break
    case 1:
        console.log("Month is February")
        break
    case 2:
        console.log("Month is March")
        break
    default: console.log("Not a valid month")
}