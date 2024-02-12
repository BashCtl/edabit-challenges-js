/*
Product of Digits of Sum

Create a function that takes one, two or more numbers as arguments 
and adds them together to get a new number. T
he function then repeatedly multiplies the digits 
of the new number by each other, yielding a new number, 
until the product is only 1 digit long. Return the final product.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

Notes
The input of the function is at least one number.

*/

function sumDigProd(...nums) {
  let sum = nums.reduce((a, c) => a + c, 0).toString();
  while (sum.length != 1) {
    sum = sum
      .split("")
      .reduce((a, c) => eval(a * c), 1)
      .toString();
  }
  return parseInt(sum);
}

console.log(sumDigProd(16, 28));
