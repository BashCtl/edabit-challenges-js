/*
Find First Character That Repeats


Create a function that takes a string and returns the first character that repeats. 
If there is no repeat of a character, return "-1".

Examples
firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"

Notes
Tests are case sensitive.

*/

function firstRepeat(chars) {
  let result = "-1";
  let first = Number.MAX_VALUE;
  for (let i = 0; i < chars.length; i++) {
    let index = chars.indexOf(chars.charAt(i));
    let lastIndex = chars.lastIndexOf(chars.charAt(i));
    if (index < first && lastIndex > index) {
      result = chars.charAt(i);
      first = index;
    }
  }

  return result;
}

console.log(firstRepeat("legolas"));
console.log(firstRepeat("Gandalf"));
console.log(firstRepeat("Balrog"));
