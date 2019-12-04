//Maneira clássica

function logClassica(value){
	console.log(value);
}
logClassica('Funcão clássica');

//Função anonima: omitir o nome da função atribuindo ela a uma variavél ou para outra função

var logAnonima = function(value){
	console.log(value);
}
logAnonima('Função anonima');

//Função anonima: com return

var sumAnomima = function(a,b){
	return a + b;
}
console.log(sumAnomima(10,10));


//Arrow functions: mesmo principio de uma função anonima

//Quando não tem statement "if else e variaveis" pode se escrever assim:
//Basicamente o que se faz é omitir a palavra funcion, return e chaves

var arrowSemStatement = (a,b) => a + b;
console.log(arrowSemStatement(10,5));

//Quando tem statements é obrigatorio escrever com chaves
//Basicamente o que se faz é omitir a palavra funcion

var arroComStatement = (a,b) =>{
	if (a > b) {
		console.log('a é maior que b');
	}
	return a + b;
}
arroComStatement(10,5);

//Quando se tem apenas um argumento pode se omitir o parentese
//com dois argumentos não se pode omitir é obrigatorio usar
var arrowUmParametro = a => a + 19;
console.log(arrowUmParametro(10));

var arrowObjeto = () => ({nome: 'Função arrow com objeto'});

console.log(arrowObjeto());

var classicaObjeto = function(){
	return {nome: 'Fun~ão literal com objeto'}
}

console.log(arrowObjeto1());








