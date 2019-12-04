//Spread operator serve para quando voce deseja
//Incrementar os argumentos  de uma função sem saber
//Quantos argumentos ela vai ter e deseja que ocorra
//o comportamento esperado da função independente dos paramentros que
//foi passado

//Maneira clássica de fazer isso:
function sum(a,b){
	value = 0;

	for (var i = 0; i < arguments.length; i++) {
		value += arguments[i];
	}

	return value;
}

console.log(sum(1,2,3,4,5));


//Com ECMA 6 