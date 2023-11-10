/*
Come Check Out This Crazy Function

You are given two numbers, a and b. Write a function which uses an expression 
to return the expected output. I am not going to tell you what the expression 
is because that will spoil the fun! :)

Examples
crazyfunction(10, 20) ➞ 30

crazyfunction(17, 35) ➞ 50

crazyfunction(61, 233) ➞ 212

Notes
bit operations

*/

function crazyfunction(a, b){
    return a ^ b;
}

console.log(crazyfunction(10, 20));
console.log(crazyfunction(17, 35));
console.log(crazyfunction(61, 233));