/*
Digits Sum Root

Create a function that takes a number and returns one digit that is the result of summing 
all the digits of the input number. When the sum of the digits consists of more than one digit, 
repeat summing until you get one digit.

Examples
rootDigit(123) ➞ 6
// 1 + 2 + 3 = 6

rootDigit(999888777) ➞ 9

rootDigit(1238763636555555555555) ➞ 6

Notes
Recursion is allowed.


*/

function rootDigit(n) {
    let strNum = n.toString();
    if (strNum.length===1){
        return parseInt(strNum);
    }

    n = strNum.split("").reduce((a, c)=> a + parseInt(c), 0);
    return rootDigit(n);
}

console.log(rootDigit(123));

console.log(rootDigit(999888777));