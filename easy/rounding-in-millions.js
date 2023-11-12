/*
Rounding in Millions

Given an array of cities and populations, return an array where all populations 
are rounded to the nearest million.

Examples
millionsRounding([
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572]
])
[
  ["Nice", 1000000],
  ["Abu Dhabi", 1000000],
  ["Naples", 2000000],
  ["Vatican City", 0]
]
Notes
Round down to 0 if a population is below 500,000.

*/

function millionsRounding(arr){
    return arr.map(item => [item[0],Math.round(item[1]/1000000)*1000000]);
}

console.log(millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572]
  ]));

  const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]
	
	const cities2 = [
	['Sao Paulo', 21846507]
	]
	
	const cities3 = [
	['London', 9304016],
	['Naples', 	2186853],
	['Nice', 	942208],
	['Abu Dhabi', 1482816],
	['Riga', 	630692],
	['Vatican City', 572]
	]

    console.log(millionsRounding(cities1));
    console.log(millionsRounding(cities2));
    console.log(millionsRounding(cities3));