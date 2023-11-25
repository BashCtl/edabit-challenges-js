/*
First and Last Index

Given a word, write a function that returns the first index and the last index of a character.

Examples
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

charIndex("happy", "h") ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.

charIndex("happy", "e") ➞ undefined
// "e" does not exist in "happy", so we return undefined.
Notes
If the character does not exist in the word, return undefined.
If only one instance of the character exists, the first and last index will be the same.


*/

function charIndex(word, char) {
  return word.indexOf(char) >= 0
    ? [word.indexOf(char), word.lastIndexOf(char)]
    : undefined;
}

console.log(charIndex("circumlocution", "c"));
