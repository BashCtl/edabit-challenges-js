/*
Recursion: N-Length Letter Groups

Write a function that returns an array of strings populated from 
the slices of n-length characters of the given word 
(a slice after another while n-length applies onto the word).

Examples
collect("intercontinentalisationalism", 6)
➞ ["ationa", "interc", "ntalis", "ontine"]

collect("strengths", 3)
➞ ["eng", "str", "ths"]

collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15)
➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]

Notes
Ensure that the resulting array is lexicographically ordered.
Return an empty array if the given string is less than n.
You are expected to solve this challenge via a recursive approach.
*/

function collect(s, n, groups = []) {
  if (s.lingth < n && groups.length === 0) {
    return groups;
  }

  if (s.length === 0) {
    return groups.filter((w) => w.length === n).sort();
  }
  groups.push(s.slice(0, n));
  return collect(s.slice(n, s.length), n, groups);
}

console.log(collect("intercontinentalisationalism", 6));
console.log(collect("strengths", 3))
