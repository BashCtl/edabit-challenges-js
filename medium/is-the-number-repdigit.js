/*
Is the Number a Repdigit


A repdigit is a positive number composed out of the same digit. 
Create a function that takes an integer and returns whether it's a repdigit or not.

Examples
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false

Notes
The number 0 should return true (even though it's not a positive number).


*/

function isRepdigit(num) {
  if (num === 0) {
    return true;
  } else if (num < 0) {
    return false;
  }
  let nums = num.toString().split("");
  return nums.every((a) => a === nums[0]);
}

console.log(isRepdigit(66));
console.log(isRepdigit(-11));
console.log(isRepdigit(0));
console.log(isRepdigit(1001));
