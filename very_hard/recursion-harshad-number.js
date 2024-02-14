/*
Recursion: Harshad Number


A number is said to be Harshad if it's exactly divisible by the sum of its digits. 
Create a function that determines whether a number is a Harshad or not.

Examples
isHarshad(75) ➞ false
// 7 + 5 = 12
// 75 is not exactly divisible by 12
 
isHarshad(171) ➞ true
// 1 + 7 + 1 = 9
// 9 exactly divides 171
 
isHarshad(481) ➞ true

isHarshad(89) ➞ false

isHarshad(516) ➞ true

isHarshad(200) ➞ true

Notes
You are expected to solve this challenge via recursion.

*/

function isHarshad(n, nums = []) {
  if (nums.length === 0) {
    nums.push(n);
  }
  if (n === 0) {
    let num = nums[0];
    return num % nums.slice(1).reduce((a, c) => a + c, 0) === 0;
  }

  nums.push(n % 10);
  n = parseInt(n / 10);

  return isHarshad(n, nums);
}

console.log(isHarshad(75));
console.log(isHarshad(171))
