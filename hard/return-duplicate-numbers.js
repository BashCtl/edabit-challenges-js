/*
Return Duplicate Numbers

Given an array nums where each integer is between 1 and 100, 
return a sorted array containing only duplicate numbers from the given nums array.

Examples
duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null

Notes
The given array won't contain the same number three times.


*/

function duplicateNums(nums) {
  nums = nums.filter((n) => nums.indexOf(n) !== nums.lastIndexOf(n));
  nums = [...new Set(nums)].sort((a, b) => a - b);

  return nums.length !== 0 ? nums : null;
}

console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6]));
console.log(duplicateNums([100, 59, 12, 13, 54, 76, 100, 14, 12]));
