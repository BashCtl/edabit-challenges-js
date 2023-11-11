/*
Burglary Series (20): Sign Your Name

The police send you the electronic statement again for you to sign. 
This time you are able to sign it and, to speed up bureaucracy, 
you try to sign for your spouse as well. Unfortunately, 
the document is still protected against new entries...

This challenge is a bit different as the function you are given 
already contains some code that you should not change or remove. 
Also, don't use a return statement, it is already included. 
Your task is, given an object, prevent new properties from being 
added to that object, but you should still be able to change 
the value of the existing properties.


Examples
const obj = { yourSignature: "" };

signYourName( obj ) {
  // write your code here


  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;

} ➞ { yourSignature: "Whatever" }

*/

function signYourName(obj) {
  // write your code here
  // don't use a return statement
  Object.preventExtensions(obj);
  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;
}

const obj = { yourSignature: "" };

console.log(signYourName(obj));