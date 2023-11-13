/*
Highest Digit

Create a function that takes a number as an argument and returns the highest digit in that number.

Examples
highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7
Notes
Don't forget to return the result.



*/

function highestDigit(number){
    let numbers = number.toString().split("").map(Number);
    return Math.max(...numbers);
}

console.log(highestDigit(379));