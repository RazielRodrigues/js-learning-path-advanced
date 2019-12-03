//Primeira maneira clássica

function log(value){
	console.log(value);
}

log('Funcão clássica');

//Segunda maneira: omitir o nome da função atribuindo ela a uma variavél

var log = function(value){
	console.log(value);
}

log('Função de atribuição');

//Com return

var sum = function(a,b){
	return a + b;
}

console.log(sum(10,10));