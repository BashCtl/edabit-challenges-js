/*
Which Generation Are You?

Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y 
("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"


Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter

*/
function generation(x, y){
    let gen = {
        "m":
        {
            "-3":"great grandfather",
            "-2":"grandfather",
            "-1":"father",
            "0": "me!",
            "1": "son",
            "2": "grandson",
            "3": "great grandson"
        },
        "f":
        {
            "-3":"great grandmother",
            "-2":"grandmother",
            "-4":"mother",
            "0": "me!",
            "1": "daughter",
            "2": "granddaughter",
            "3": "great granddaughter"
        }
    }
    return gen[y][`${x}`];
}


console.log(generation(2, "f"));
console.log(generation(-3, "m"));