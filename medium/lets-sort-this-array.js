/*
Let's Sort This Array!

Create a function that takes an array of numbers arr, a string str 
and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.

Examples
ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]


*/

function ascDesNone(arr, str) {
  switch (str) {
    case "Asc":
      arr.sort((a, b) => a - b);
      break;
    case "Des":
      arr.sort((a, b) => b - a);
      break;
    default:
      break;
  }
  return arr;
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"));
console.log(ascDesNone([7, 8, 11, 66], "Des"));
console.log(ascDesNone([9, 7, 43, 11, 16, 111, 19], "Asc"));
