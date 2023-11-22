/*
Count Ones in a 2D Array

Create a function to count the number of 1s in a 2D array.

Examples
countOnes([
  [1, 0],
  [0, 0]
]) ➞ 1

countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]) ➞ 7

countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
]) ➞ 2


*/

function countOnes(matrix){
    return matrix.flat(2).filter(n=>n===1).length;
}

console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ]));