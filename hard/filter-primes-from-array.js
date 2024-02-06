/*
Filter Primes from an Array

Create a function that takes an array and returns a new array containing only prime numbers.

Examples
filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]

filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]

filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]

Notes
New array must maintain the order of primes as they first appear in the original array.

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

function filterPrimes(num) {
  return num.filter(isPrime);
}

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]));
