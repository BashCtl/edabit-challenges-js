/*
Recursion: Palindrome Word


Create a recursive function that determines whether a word is a palindrome or not.

Examples
isPalindrome("madam") ➞ true

isPalindrome("adieu") ➞ false

isPalindrome("rotor") ➞ true

Notes
All inputs are in lowercase.
You are expected to solve this challenge via recursion.

*/

function isPalindrome(word, i = 0, e = word.length - 1) {
  if (i === e) {
    return true;
  }

  if (word.charAt(i) != word.charAt(e)) {
    return false;
  }

  if (i < e + 1) {
    return isPalindrome(word, i + 1, e - 1);
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("adieu"));
console.log(isPalindrome("rotor"));
console.log(isPalindrome("scholars"));
