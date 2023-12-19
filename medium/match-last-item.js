/*
Match the Last Item

Create a function that takes an array of items and checks if the last 
item matches the rest of the array concatenated together.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

Notes
The array is always filled with items.

*/

function matchLastItem(arr) {
  return arr.slice(0, arr.length - 1).join("") === arr[arr.length - 1];
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
