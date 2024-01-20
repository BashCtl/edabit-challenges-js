/*
Meme Sum :)

Examples
memeSum(26, 39) ➞ 515
// 2+3 = 5, 6+9 = 15
// 26 + 39 = 515

memeSum(122, 81) ➞ 1103
// 1+0 = 1, 2+8 = 10, 2+1 = 3
// 122 + 81 = 1103

memeSum(1222, 30277) ➞ 31499

*/

function memeSum(a, b) {
  a = a.toString();
  b = b.toString();
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let strNum = a
    .split("")
    .map((n, i) => parseInt(n) + parseInt(b.charAt(i)))
    .join("");
  return parseInt(strNum);
}

console.log(memeSum(1222, 30277));
console.log(memeSum(26, 39));
