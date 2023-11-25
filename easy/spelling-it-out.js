/*
Spelling it Out

Create a function which takes in a word and spells it out, 
by consecutively adding letters until the full word is completed.

Examples
spelling("bee") ➞ ["b", "be", "bee"]

spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]


*/

function spelling(str) {
  let result = [];
  for (let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i));
  }
  return result;
}

console.log(spelling("bee"));
