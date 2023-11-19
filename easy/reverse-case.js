/*
Reverse the Case

Given a string, create a function to reverse the case. 
All lower-cased letters should be upper-cased, and vice versa.

Examples
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

*/

function reverseCase(str){
   return str.split("")
    .map(l=> l===l.toUpperCase()? l.toLowerCase(): l.toUpperCase())
    .join("");
}

console.log(reverseCase("Happy Birthday"));