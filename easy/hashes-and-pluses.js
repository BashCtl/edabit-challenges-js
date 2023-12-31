/*
Hashes and Pluses

Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses].

*/

function hashPlusCount(str){
    let arr = str.split("");
    return [arr.filter(a=>a==="#").length, arr.filter(b=> b==="+").length];
}


console.log(hashPlusCount("###+"));
console.log(hashPlusCount("###"));