/*
Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
const VOWELS = 'aeiouAEIOU';
let removeLastVowel = function(word) {
    let copy = word.split('');
    for(let i = copy.length-1; i >= 0; i--){
        if(VOWELS.includes(copy[i])){
            copy.splice(i, 1);
            break;
        }
    }
    return copy.join('');
};

let hipsterfy = function(sentence) {
    let copy = sentence.split(' ');
    let hipster = copy.map(word => {
        console.log
        return removeLastVowel(word);
    })
    return hipster.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
