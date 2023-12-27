/*
Bitwise Operator to Check Odd, Regular Expression to Check Even

Create two functions:

The first is isOdd() to check if a given number is odd using bitwise operator.
The second is isEven() to check if a given input is even using regular expressions.
Use of % operator is disallowed.

Examples
isOdd(3) ➞ "Yes"
// Use Bitwise Operator

isOdd(58) ➞ "No"
// Use Bitwise Operator

isEven("0") ➞ "Yes"
// Use Regular Expression

isEven("-99") ➞ "No"
// Use Regular Expression

Notes
Input will only be integers (positive/negative/zero).
For the second function, input will be numbers in string.


*/

function isOdd(number) {
  return number & 1 === 1 ? "Yes" : "No";
}




function isEven(number){
    return /[0,2,4,6,8]/.test(number) ? "Yes": "No";
}

console.log(isOdd(3));
console.log(isOdd(6));

console.log(isEven(3));
console.log(isEven(8));