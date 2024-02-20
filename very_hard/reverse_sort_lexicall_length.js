/*

Reverse Sort: Lexical and Length

Write a function that sorts the words in a given string 
lexicographically (lexical sort) and by length in reverse order.

Examples
reverseSort("You've rocked the pragmatic world in the making!") 
 ➞ "pragmatic making! You've rocked world the the in"

reverseSort("Tesh makes my world worth enjoying and living for.")
 ➞ "enjoying living worth world makes Tesh for. and my"

reverseSort("Shaken by the bloody truth and crazy lies.")
 ➞ "Shaken bloody truth lies. crazy the and by"

reverseSort("Java streams and collections are fun to program with!")
 ➞ "collections streams program with! Java fun are and to"

Notes
Special characters, punctuation marks and symbols are part of the word that directly precedes it.
The space character separates each word in the given string.
Case insensitive sorting is required.

*/

function reverseSort(str) {
  return str
    .split(" ")
    .sort((a, b) => {
     let compare = b.length - a.length
     if (compare === 0){
        return b.localeCompare(a, {sensitivity: "base"})
     }
     return compare
    })
    .join(" ");
}

console.log(reverseSort("You've rocked the pragmatic world in the making!"));
console.log(reverseSort("Java streams and collections are fun to program with!"))
