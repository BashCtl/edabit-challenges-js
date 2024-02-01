/*
Proper Modulo Operator

While useful, the modulo operator in JavaScript is not infallible when negative numbers 
are thrown into the mix. For example, -13 % 64 = -13, when the actual answer is 51. 
Create a function to fix this. It should also work for positive numbers.

Examples
mod(-13, 64) ➞ 51

mod(50, 25) ➞ 0

mod(-6, 3) ➞ 0

Notes
All test cases contain valid numbers.


*/

function mod(m, n) {
  return ((m % n) + n) % n;
}

console.log(mod(-13, 64));
console.log(mod(50, 25));
