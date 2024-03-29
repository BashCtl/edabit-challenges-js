/*

Recursion: Fibonacci String


A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters 
of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series) 
as the initial items and concatenates them together as it progresses similarly 
to that of the Fibonacci series. See examples for more details.

Examples
fibStr(3, ["j", "h"]) ➞ "j, h, hj"

fibStr(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"

fibStr(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"

Notes
All values for n will be at least 2.
It is expected from the challenge-takers to come up with a solution using 
the concept of recursion or the so-called recursive approach.


*/

function fibStr(n, str) {
  if (n == str.length) {
    return str.join(", ");
  }

  str.push(str[str.length - 1] + str[str.length - 2]);
  return fibStr(n, str);
}

console.log(fibStr(5, ["e", "a"]));
