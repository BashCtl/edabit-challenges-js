/*
Any Prime Number in Range

Create a function that returns true if there's at least one prime number in the given
range (n1 to n2 (inclusive)), false otherwise.

Examples
primeInRange(10, 15) ➞ true
// Prime numbers in range: 11, 13

primeInRange(62, 66) ➞ false
// No prime numbers in range.

primeInRange(3, 5) ➞ true
// Prime numbers in range: 3, 5

Notes
n2 is always greater than n1.
n1 and n2 are always positive.
0 and 1 aren't prime numbers.


*/

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= parseInt(n / 2); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function primeInRange(n1, n2) {
  for (let j = n1; j <= n2; j++) {
    if (isPrime(j)) {
      return true;
    }
  }
  return false;
}

console.log(primeInRange(10, 15));
console.log(primeInRange(62, 66));
