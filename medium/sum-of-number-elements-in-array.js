/*
Sum of Number Elements in an Array


Arrays can be mixed with various types. Your task for this challenge 
is to sum all the number elements in the given array. Create a function 
that takes an array and returns the sum of all numbers in the array.

Examples
numbersSum([1, 2, "13", "4", "645"]) ➞ 3

numbersSum([true, false, "123", "75"]) ➞ 0

numbersSum([1, 2, 3, 4, 5, true]) ➞ 15


*/

function numbersSum(arr) {
  return arr.filter((a) => typeof a === "number").reduce((a, c) => a + c, 0);
}

console.log(numbersSum([1, 2, "13", "4", "645"]));