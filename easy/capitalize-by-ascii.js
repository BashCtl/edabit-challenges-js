/*
Capitalize by ASCII

Create a function that takes a string as input and capitalizes 
a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

Examples
asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."

*/

function  asciiCapitalize(str) {
  return str.split(" ")
    .map((word) =>
     word.split("").map((l) =>
     l.charCodeAt(0) % 2 === 0 ? l.toUpperCase() : l.toLowerCase()).join("")
    ).join(" ");
}

console.log( asciiCapitalize("to be or not to be!"));