/*
Calculate the Mean

Create a function that takes an array of numbers and returns the mean (average) of all those numbers.

Examples
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55

mean([2, 3, 2, 3]) ➞ 2.50

mean([3, 3, 3, 3, 3]) ➞ 3.00
Notes
Round to two decimal places.
You can expect a number ranging from 0 to 10,000.

*/

function mean(arr){
    return parseFloat((arr.reduce((a,c)=>a+c,0)/arr.length).toFixed(2));
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));