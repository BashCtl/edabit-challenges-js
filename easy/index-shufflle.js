/*
Index Shuffle

Write a function that takes all even-indexed characters and odd-indexed characters 
from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
Examples
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"
Notes
0 should be treated as an even number.

*/

function indexShuffle(str) {
  return [...str]
    .filter((v, i) => i % 2 == 0)
    .concat([...str].filter((v, i) => i % 2 != 0))
    .join("");
}

console.log(indexShuffle("abcd"));
