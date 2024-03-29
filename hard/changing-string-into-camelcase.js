/*
Changing a String into camelCase

Using Camel Case (or camelCase) is where the first word is in lower case, 
and all words after it have their first letter capitalised. 
Note that there are no spaces in between words!

Create a function that takes a string and returns it back in camelCase.


Examples
camelCasing("Hello World") ➞ "helloWorld"

camelCasing("snake_case") ➞ "snakeCase"

camelCasing("low high_HIGH") ➞ "lowHighHigh"

Notes
You need to remove all spaces and underscores.
There will be no numbers in inputs.

*/

function camelCasing(str) {
  let words = str.split(/[ _]/);
  let firstWord = words.shift().toLowerCase();
  return (
    firstWord +
    words
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("")
  );
}

console.log(camelCasing("low high_HIGH"));
