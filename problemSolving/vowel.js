//How many vowels in a sentence calculate it
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value){
        if(vowel.includes(value)){
            count++;
        }
    });
    return count;
}
console.log(countVowels("I love my country"))