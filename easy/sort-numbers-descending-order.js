/*
Sort Numbers in Descending Order

Create a function that takes any non-negative number as 
an argument and return it with its digits in descending order. 
Descending order is when you sort from highest to lowest.

Examples
sortDescending(123) ➞ 321

sortDescending(1254859723) ➞ 9875543221

sortDescending(73065) ➞ 76530
Notes
You can expect non-negative numbers for all test cases.

*/

function sortDescending(num) {
  let strNum = num
    .toString()
    .split("")
    .sort((a, b) => parseInt(b) - parseInt(a))
    .join("");
  return parseInt(strNum);
}

console.log(sortDescending(123));
