//Rest operator serve para quando voce deseja
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
//Ele simula o comportamento do arguments mas já trazendo em forma de vetor
//podendo ser usado os metodos de vetor para manipular os paramentros.
//enquanto o arguments retorna os argumento da função em forma
//de objeto.

function sum(...vetorArgumento){
	console.log(vetorArgumento);
	console.log(arguments);
	//return vetorArgumento.pop();
}

sum(1,2,3,4,5);













