/*
Fibonacci Word


A Fibonacci Word is a specific sequence of binary digits (or symbols from any two-letter alphabet). 
The Fibonacci Word is formed by repeated concatenation in the same way that the Fibonacci numbers 
are formed by repeated addition.

Create a function that takes a number n as an argument and returns 
the first n elements of the Fibonacci Word sequence.

If n < 2, the function must return "invalid".

Examples
fiboWord(1) ➞ "invalid"

fiboWord(3) ➞ "b, a, ab"

fiboWord(7) ➞ "b, a, ab, aba, abaab, abaababa, abaababaabaab"

Notes
You can try solving this using a recursive approach.

*/

function fiboWord(n, words = []) {
  if (words.length === 0 && n < 2) {
    return "invalid";
  }
  if (words.length === 0) {
    words.push("b");
    words.push("a");
    n -= 2;
  }
  if (n === 0) {
    return words.join(", ");
  }
  words.push(words[words.length - 1] + words[words.length - 2]);

  return fiboWord(--n, words);
}


console.log(fiboWord(7))
console.log(fiboWord(3))
console.log(fiboWord(1))