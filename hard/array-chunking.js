/*
Array Chunking

Given an array and chunk size "n", create a function such that 
it divides the array into many subarrays where each subarray is of length size "n".

Examples
chunk([1, 2, 3, 4], 2) ➞ [
  [1, 2], [3, 4]
]

chunk([1, 2, 3, 4, 5, 6, 7], 3) ➞ [
  [1, 2, 3], [4, 5, 6], [7]
]

chunk([1, 2, 3, 4 ,5], 10) ➞ [
  [1, 2, 3, 4, 5]
]

Notes
Remember that number of subarrays may not be equal to chunk size.

*/

function chunk(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3))
