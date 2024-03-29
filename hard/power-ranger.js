/*
Power Ranger

Create a function that takes in n, a, b and returns the number 
of positive values raised to the nth power that lie in the range [a, b], inclusive.

Examples
powerRanger(2, 49, 65) ➞ 2
// 2 squares (n^2) lie between 49 and 65, 49 (7^2) and 64 (8^2)

powerRanger(3, 1, 27) ➞ 3
// 3 cubes (n^3) lie between 1 and 27, 1 (1^3), 8 (2^3) and 27 (3^3)

powerRanger(10, 1, 5) ➞ 1
// 1 value raised to the 10th power lies between 1 and 5, 1 (1^10)

powerRanger(5, 31, 33) ➞ 1

powerRanger(4, 250, 1300) ➞ 3

Notes
Remember that the range is inclusive.
a < b will always be true.

*/

function powerRanger(power, min, max) {
  let counter = 0;
  for (let i = min; i <= max; i++) {
    if (Number.isInteger(Math.pow(i, 1 / power))) {
      counter++;
    }
  }
  return counter;
}

console.log(powerRanger(2, 49, 65));
console.log(powerRanger(3, 1, 27));
