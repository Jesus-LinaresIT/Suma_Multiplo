"use strict"
//function for find multiple
let multiple = (valorN, multiple) => (valorN % multiple === 0)

//variables that will contain the multiples
var t0 = performance.now();
var Multiples = []

for ( let i = 1; i < 1000; i++){

	if (multiple(i,3) || multiple(i,5))
		Multiples.push(i);			
};

let suma = 0;
for (let i = 0; i < Multiples.length; i++){
	suma += Multiples[i];	
}	

var t1 = performance.now();
console.log(t1 - t0);
	
document.write("<br> La Suma de los multiplos de 3 y 5 son: ", suma);


