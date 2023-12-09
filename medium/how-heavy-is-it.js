/*

How Heavy Is It?

Given radius r and height h (in cm), calculate the mass of a cylinder 
when it's filled with water and the cylinder itself doesn't weigh anything. 
The desired output should be given in kg and rounded to two decimal places.

How to solve:

Calculate the volume of the cylinder.
Convert cm³ into dm³.
1dm³ = 1L, 1L is 1Kg.

Examples
weight(4, 10) ➞ 0.5

weight(30, 60) ➞ 169.65

weight(15, 10) ➞ 7.07



*/

function weight(r, h) {
  let volume = Math.PI * r * r * h;
  volume /= 1000;
  return parseFloat(volume.toFixed(2));
}

console.log(weight(4, 10));
console.log(weight(30, 60));