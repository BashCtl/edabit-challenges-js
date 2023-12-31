/*
Repeating Letters

Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
Notes
All test cases contain valid strings. 
Don't worry about spaces, special characters or numbers. They're all considered valid characters.

*/

function doubleChar(str){
    return str.split('').map(l=> l.repeat(2)).join('');
}

console.log(doubleChar("String"))