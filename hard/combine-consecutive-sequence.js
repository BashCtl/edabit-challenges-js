/*
Combined Consecutive Sequence

Write a function that returns true if two arrays, when combined, 
form a consecutive sequence. A consecutive sequence is a sequence 
without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.

Examples
consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true

consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false

consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false

consecutiveCombo([44, 46], [45]) ➞ true

Notes
The input arrays will have unique values.
The input arrays can be in any order.


*/

function consecutiveCombo(a1, a2) {
  let a3 = a1.concat(a2).sort();

  return a3.slice(0, a3.length - 1).every((e, i) => a3[i + 1] - e === 1);
}

console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6]));
console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]));
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]));
console.log(consecutiveCombo([44, 46], [45]))