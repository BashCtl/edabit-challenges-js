/*
Volume of a Cone

Create a function that takes the height and radius of a cone 
as arguments and returns the volume of the cone rounded to the nearest hundredth.

Volume of a Cone Image

Examples
coneVolume(3, 2) ➞ 12.57

coneVolume(15, 6) ➞ 565.49

coneVolume(18, 0) ➞ 0

Notes


Return approximate answer by rounding the answer to the nearest hundredth.
Use JavaScript's PI property, don't fall for 3.14 ;-)
If the cone has no volume, return 0.


*/

function coneVolume(h, r) {
  let volume = (Math.PI * r * r * h) / 3;
  return volume > 0 ? parseFloat(volume.toFixed(2)) : 0;
}

console.log(coneVolume(3, 2));
console.log(coneVolume(18, 0));
