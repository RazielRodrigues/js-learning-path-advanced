//O problema: Esquecer de passar um argumento para uma função classica
//Pois se nao passar o argumento o que entra no lugar e o undefined
//Causando erros no codigo...

function multiplicao(a,b){
	//gambeta b = b || 1;
	//b = typeof b === 'undefined' ? 1 : b;
	return a * b;
}

console.log(multiplicao(3));

//return = NaN