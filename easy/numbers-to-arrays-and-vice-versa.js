/*
Numbers to Arrays and Vice Versa

Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0

*/

function toArray(num) {
  return num
    .toString()
    .split("")
    .map((n) => parseInt(n));
}

function toNumber(arr) {
  return parseInt(arr.join(""));
}

console.log(toArray(235));
console.log(toNumber([2, 3, 5]));
