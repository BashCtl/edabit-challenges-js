/*
Persistent Little Bugger


Create a function that takes a number and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

Examples
bugger(39) ➞ 3
// Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit.

bugger(999) ➞ 4
// Because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2.

bugger(4) ➞ 0
// Because 4 is already a one-digit number.

*/

function bugger(num) {
  if (num.toString().length === 1) {
    return 0;
  }

  num = num
    .toString()
    .split("")
    .reduce((a, c) => eval(a * c), 1);

  return 1 + bugger(num);
}

console.log(bugger(39));
console.log(bugger(4))
