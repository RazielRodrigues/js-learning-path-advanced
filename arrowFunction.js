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

console.log(classicaObjeto());

//Função construtora: Gerar objetos com uma função passado a propriedade pelo paramentro
//De forma que depois se cria um novo objeto com a palavra New

function construirCarro(){
	this.Marca = 'Honda';
}

console.log(new construirCarro());

//Nao funciona em arrow function

var naofunc = () => {
	this.Marca = 'Honda';
}

console.log(new naofunc());

//CONCEITO DE HOSTING, QUANDO VOCE DECLARA VARIAVEIS COM VAR ELA SOBE AO TOBO DO CODIGO
//TENDO ESCOPO GLOBAL E PODENDO SER CHAMADA ANTES MESMO DE SER DECLARADA
//ESSE CONCEITO SE APLICA A VARIAVEIS E A FUNCOES ANONIMAS E CONSTRUTORAS
//AS ARROWS FUNCTION NÃO POSSUEM ESSA CARACTERISTICA.





