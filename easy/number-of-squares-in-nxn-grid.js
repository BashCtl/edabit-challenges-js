/*
Number of Squares in an N * N Grid

Create a function that calculates the number of different squares in an n * n square grid.

Examples
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55

Explanation
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
As you can see, for each value of n the number of squares is n squared + the number of squares 
from the previous value of n.

Notes
Input is a positive integer.
Square pyramidal number.
*/


function numberSquares(n){
    if(n==1){
        return n;
    }
    return n*n + numberSquares(--n);
}

console.log(numberSquares(5));
console.log(numberSquares(2));