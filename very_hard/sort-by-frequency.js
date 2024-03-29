/*
Sort by Frequency

Create a function that takes an array of integers arr and sort the elements 
of the array by decreasing frequency of the elements. 
If two elements have the same frequency, sort them by increasing value.

Examples
sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7]) ➞ [3, 3, 3, 5, 5, 7, 7, 2, 9]

sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]) ➞ [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]

sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]) ➞ [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]

Notes
All input numbers will be between 0-9.

*/
function countOcurence(arr, el) {
  const result = {};
  for (let num of arr) {
    result[num] = result[num] ? result[num] + 1 : 1;
  }
  return result[el];
}

function sortFreq(arr) {
  return arr.sort((a, b) => {
    let aOccur = countOcurence(arr, a);
    let bOccur = countOcurence(arr, b);
    if (aOccur != bOccur) {
      return bOccur - aOccur;
    }
    return a - b;
  });
}

console.log(sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7]));
console.log(sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]));
