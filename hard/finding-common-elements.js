/*
Finding Common Elements

Create a function that takes two "sorted" arrays of numbers 
and returns an array of numbers which are common to both the input arrays.

Examples

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

Notes
Arrays are sorted.
Try doing this problem with O(n + m) time complexity.

*/

function commonElements(arr1, arr2) {
  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)];
  return arr1.filter((element) => arr2.includes(element));
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
