/*
Recursion: Fibonacci Word


A Fibonacci word is a specific sequence of binary digits (or symbols from any two-letter alphabet). The Fibonacci word is formed via repeated concatenation in the same fashion that the Fibonacci numbers are formed via repeated addition.

Create a function that takes a number n as an argument and returns the first n elements of the Fibonacci word sequence.

Examples
generateWord(1) ➞ "invalid"
// if n < 2 then return "invalid".

generateWord(3) ➞ "b, a, ab"

generateWord(7) ➞ "b, a, ab, aba, abaab, abaababa, abaababaabaab"

Notes
You are expected to solve this challenge via recursion.

*/

function generateWord(n, words = []) {
  if (words.length === 0 && n < 2) {
    return "invalid";
  }

  if (words.length == 0) {
    words.push("b");
    words.push("a");
    n -= 2;
  }

  if (n === 0) {
    return words.join(", ");
  }

  words.push(words[words.length - 1] + words[words.length - 2]);

  return generateWord(--n, words);
}

console.log(generateWord(1));
console.log(generateWord(7));
