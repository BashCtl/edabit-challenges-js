/*
Calculate Depth of Array

Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

Examples
depth([1, 2, 3, 4]) ➞ 1

depth([1, [2, 3, 4]]) ➞ 2

depth([1, [2, [3, 4]]]) ➞ 3

depth([1, [2, [3, [4]]]]) ➞ 4
*/

function depth(arr) {
  for (item of arr) {
    if (Array.isArray(item)) {
      return 1 + depth(item);
    }
  }

  return 1;
}

console.log(depth([1, [2, [3, [4]]]]));


