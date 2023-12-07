/*
Square Every Digit

Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414

Notes
The function receives an integer and must return an integer.

*/

function squareDigits(n) {
  let strNum = n
    .toString()
    .split("")
    .map((x) => parseInt(x) * parseInt(x))
    .join("");
  return parseInt(strNum);
}

console.log(squareDigits(9119));
