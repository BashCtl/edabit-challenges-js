/*
Promises I: What Is a Closure?

Closures are functions that remember their lexical environments. 
Lexical environments mean the environment in which the function was declared.

function parent(x) {
  return function closure() {    // Closure is declared here.
    return x
  }
}

const remember = parent("remembers me")
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure()
// Returns "remembers me" because the inner
// function remembers x.
Fix the greetingMaker() function so that it works with the greeting() function.
The greeting() function has already been created (check the Tests tab).

Example
const greeting = greetingMaker("Hello")
greeting("James") ➞ "Hello, James"

*/

function greetingMaker(greeting) {
	function closure(name) {
	  return `${greeting}, ${name}`;
	}
    return closure;
}

const greeting = greetingMaker("Hello");
console.log(greeting("James"));