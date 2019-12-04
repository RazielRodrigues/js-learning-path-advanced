//O problema: Esquecer de passar um argumento para uma função classica
//Pois se nao passar o argumento o que entra no lugar e o undefined
//Causando erros no codigo...

function multiplicaoVerbosa(a,b){
	//gambeta b = b || 1;
	//b = typeof b === 'undefined' ? 1 : b;
	return a * b;
}

console.log(multiplicaoVerbosa(3));

//return = NaN pi certo com as validação que é 6

//Com o ECMA 6 para implementar um valor default é so adicionar um simbolo de igual.
//Funciona com todos os parametros
function multiplicaoDefault(a,b = 1){
	return a * b;
}
console.log(multiplicaoDefault(3));
//return = 3

//Reverenciando o parametro com o outro, caso falte o argumento
//o parametro fica igual ao definiido
function multiplicaoTroca(a,b = a){
	return a * b;
}
console.log(multiplicaoTroca(3, undefined));
//return = 9



//Conceito de lazy evaluation
function numberRandom(){
	return Math.random() + 19;
}

function multiplicaoLazy(a,b = numberRandom()){
	return a * b;
}
console.log(multiplicaoLazy(3, undefined));
//return = 3 vezes o numero ramdomico da outra função










