/*
Transforming Words into Binary Strings

Write a function that transforms all letters 
from [a, m] to 0 and letters from [n, z] to 1 in a string.

Examples
convertBinary("house") ➞ "01110"

convertBinary("excLAIM") ➞ "0100000"

convertBinary("moon") ➞ "0111"
Notes
Conversion should be case insensitive (see example #2).

*/

function convertBinary(str) {
  return str.replace(/[a-m]/gi, 0).replace(/[n-z]/gi, 1);
}

console.log(convertBinary("house"));
