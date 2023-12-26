/*
LCM of Two Numbers

Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187

Notes
Both values will be positive.
The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.



*/

function lcm(n1, n2) {
  let m = Math.max(n1, n2);

  while (true) {
    if(m%n1==0 && m%n2==0){
        break;
    }
    m++;
  }
  return m;
}


console.log(lcm(9, 18));
console.log(lcm(8, 5));