/*
Is the Average of All Elements a Whole Number?

Create a function that takes an array as an argument and returns true 
or false depending on whether the average of all elements in the array is a whole number or not.

Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false

*/

function isAvgWhole(arr){
    return Number.isInteger(arr.reduce((a, c)=> a+c,0)/arr.length);
}

console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));