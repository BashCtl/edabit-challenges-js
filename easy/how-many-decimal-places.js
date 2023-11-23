/*
How Many Decimal Places?

Create a function that returns the number of decimal places a
 number (given as a string) has. Any zeros after the decimal 
 point count towards the number of decimal places.

Examples
getDecimalPlaces("43.20") ➞ 2

getDecimalPlaces("400") ➞ 0

getDecimalPlaces("3.1") ➞ 1
Notes
Return 0 if the number doesn't have any decimal places (see example #2).

*/

function getDecimalPlaces(num) {
  let nums = num.split(".");
  return nums.length === 2 ? nums[1].length : 0;
}

console.log(getDecimalPlaces("43.20"));
console.log(getDecimalPlaces("400"));
