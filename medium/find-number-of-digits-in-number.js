/*
Find Number of Digits in Number

Create a function that will return an integer number 
corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1

Notes
Try to solve this challenge without using strings!


*/

function num_of_digits(num) {
  num = Math.abs(num);
  if (num <= 9) {
    return 1;
  }
  num = Math.floor(num / 10);
  return 1 + num_of_digits(num);
}

console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));
console.log(num_of_digits(-12381428));
console.log(num_of_digits(42));
