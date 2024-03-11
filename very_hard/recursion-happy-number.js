/*
Recursion: Happy Number

A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless cycle of numbers containing 4, the number is said to be an unhappy number.

Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.

Examples
isHappy(67) ➞ false

isHappy(89) ➞ false

isHappy(139) ➞ true

isHappy(1327) ➞ false

isHappy(2871) ➞ false

isHappy(3970) ➞ true

Notes
You are expected to solve this challenge via recursion.

*/

function isHappy(n) {
 
  if (n === 1) {
    return true;
  }
  if (n === 4) {
    return false;
  }

  n = n
    .toString()
    .split("")
    .reduce((a, c) => a + parseInt(c) * parseInt(c), 0);

  return isHappy(n);
}

console.log(isHappy(67));
