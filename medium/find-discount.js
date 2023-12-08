/*
Find the Discount

Create a function that takes two arguments: the original price and the discount percentage 
as integers and returns the final price after the discount.

Alternative Text

Examples
dis(1500, 50) ➞ 750

dis(89, 20) ➞ 71.2

dis(100, 75) ➞ 25

Notes
Your answer should be rounded to two decimal places.


*/

function dis(price, discount){
    let result = price - price*(discount/100);
    return Math.round(result*100)/100;
}

console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(593, 61));