/*
Average Word Length

Create a function that takes in a sentence and returns the average 
length of each word in that sentence. Round your result to two decimal places.

Examples
averageWordLength("A B C.") ➞ 1.00

averageWordLength("What a gorgeous day.") ➞ 4.00

averageWordLength("Dude, this is so awesome!") ➞ 3.80

Notes
Ignore punctuation when counting the length of a word.

*/

function averageWordLength(str) {
  let words = str.split(/[^\w]/).filter((w) => w.length > 0);
  let lengthTotal = words.reduce((a, c) => a + c.length, 0);
  return parseFloat((lengthTotal / words.length).toFixed(2));
}

console.log(averageWordLength("Dude, this is so awesome!"));
