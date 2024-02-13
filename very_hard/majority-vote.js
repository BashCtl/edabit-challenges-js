/*
Majority Vote

Create a function that returns the majority vote in an array. 
A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples
majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null

Notes
The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.

*/

function countOcurence(arr, el) {
  const result = {};
  for (let num of arr) {
    result[num] = result[num] ? result[num] + 1 : 1;
  }
  return result[el];
}

function majorityVote(arr) {
  let unique = [...new Set(arr)];
  let votes = unique.filter((el) => countOcurence(arr, el) > arr.length / 2);

  return votes.length > 0 ? votes[0] : null;
}

console.log(majorityVote(["A", "A", "B"]));
console.log(majorityVote(["A", "B", "B", "A", "C", "C"]));
console.log(majorityVote([]));
