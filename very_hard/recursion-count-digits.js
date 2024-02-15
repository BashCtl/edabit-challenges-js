/*
Recursion: Count The Digits

Create a function that will recursively count the number of digits of a number. 
Conversion of the number to a string is not allowed, thus, the approach is recursive.

Examples
digitsCount(4666) ➞ 4

digitsCount(544) ➞ 3

digitsCount(121317) ➞ 6

digitsCount(0) ➞ 1

digitsCount(12345) ➞ 5

digitsCount(1289396387328L) ➞ 13

Notes
All inputs are integers but some are in exponential form, deal with it accordingly.
You are expected to come up with a solution using the concept of recursion or the so-called recursive approach.

*/

function digitsCount(num) {
    num = parseInt(num/10)
  if (num === 0) {
    return 1;
  }

  return 1 + digitsCount(num);
}

console.log(digitsCount(4666));
console.log(digitsCount(544))
console.log(digitsCount(121317))
console.log(digitsCount(0))