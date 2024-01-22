/*
Simple Counting

Mubashir needs your help to count a specific digit in an array.

You have to create a function that takes two integers n 
and d and makes an array of squares of all numbers from 0...<= n 
and returns the count of the digits d in the array.

Examples
countDigits(10, 1) ➞ 4
// Squared array from 0 to 10 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// Digit 1 appeared 4 times in the array

countDigits(25, 2) ➞ 9

countDigits(10, 1) ➞ 4

Notes
d will always be 0<=d<10.

*/

function countDigits(n, d) {
  let arr = [...Array(n + 1).keys()];
  let re = new RegExp(d, "g");
  return arr
    .map((a) => a * a)
    .flatMap((b) =>
      b
        .toString()
        .split("")
        .filter((x) => x.toString().match(re))
    ).length;
}

console.log(countDigits(10, 1));
console.log(countDigits(25, 2));
