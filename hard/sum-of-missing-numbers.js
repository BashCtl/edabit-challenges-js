/*
Sum of Missing Numbers

Create a function that returns the sum of missing numbers.

Examples
sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// 2 + 4 + 6 + 8 + 9

sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575

Notes
The minimum and maximum value of the given array are the inclusive bounds 
of the numeric range to consider when searching for missing numbers.


*/

function sumMissingNumbers(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let result = 0;
  for (let i = minNum; i <= maxNum; i++) {
    if (!arr.includes(i)) {
      result += i;
    }
  }
  return result;
}

console.log(sumMissingNumbers([1, 3, 5, 7, 10]))