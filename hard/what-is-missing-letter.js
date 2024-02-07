/*
What's the Missing Letter?

Given a string of letters in the English alphabet, return the letter 
that's missing from the string. The missing letter 
will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"

Notes
The given string will never have more than one missing letter.

*/

function missingLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let code1 = str.charCodeAt(i);
    let code2 = str.charCodeAt(i + 1);
    if (code2 - code1 > 1) {
      return String.fromCharCode(code1 + 1);
    }
  }
  return "No Missing Letter";
}

console.log(missingLetter("abdefg"));
console.log(missingLetter("tuvxyz"));
console.log(missingLetter("ghijklmno"));
