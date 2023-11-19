/*
Adding Numbers in a String

Given a string of numbers separated by a comma and space, 
return the total sum of all the numbers.

Examples
addNums("2, 5, 1, 8, 4") ➞ 20

addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28

addNums("10") ➞ 10
Notes
Numbers will always be separated by a comma and space.
Your function should accept negative numbers.

*/

function addNums(nums) {
  return nums.split(", ").reduce((a, c) => a + parseInt(c), 0);
}

console.log(addNums("2, 5, 1, 8, 4"));
console.log(addNums("1, 2, 3, 4, 5, 6, 7"));
console.log(addNums("10"));
