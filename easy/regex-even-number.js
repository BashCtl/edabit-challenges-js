/*
Regex Series: Even Number?

Write a regular expression that matches only an even number. Numbers will be presented as strings.

Examples
"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true
Notes
This challenge is designed for RegEx only.
*/

let x = /.+[02468]$/

function validate(num) {
	return x.test(num); 
}

console.log(validate("2341"));
console.log(validate("132"));