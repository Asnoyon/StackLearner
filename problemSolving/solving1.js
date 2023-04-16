//randomly 1 to 6 both included
function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
let result= getRandom(1,6);
console.log(result)

// 1 included to 6 excluded
function getRandomly(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
console.log(getRandomly(1,6))