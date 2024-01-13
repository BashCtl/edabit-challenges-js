/*
Is the Input Factorial of an Integer?

Create a function to check if a given integer is a factorial of integer or not. 
The return value should be a boolean.

Examples
isFactorial(2) ➞ true
// 2 = 2 * 1 = 2!

isFactorial(27) ➞ false

isFactorial(24) ➞ true
// 24 = 4 * 3 * 2 * 1 = 4!

Notes
Input is a positive integer.
Alternatively, you can solve this with a recursive approach.

*/

function isFactorial(number, f = 1, x = 1) {
  if (number === f) {
    return true;
  }
  if (f > number) {
    return false;
  }
  f *= x;
  return isFactorial(number, f, ++x);
}

console.log(isFactorial(2));
console.log(isFactorial(27));
console.log(isFactorial(24));
