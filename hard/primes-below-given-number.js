/*
Primes Below a Given Number

Create a function that will find all primes below a given number. Return the result as an array.

Examples
primesBelowNum(5) ➞ [2, 3, 5]

primesBelowNum(10) ➞ [2, 3, 5, 7]

primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]

Notes
If n is a prime, include it in the array.

*/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function primesBelowNum(n) {
  return [...Array(n + 1).keys()].filter((x) => isPrime(x));
}

console.log(primesBelowNum(5));
console.log(primesBelowNum(10));

