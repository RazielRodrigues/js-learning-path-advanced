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




//CONTEXTO DE INVOCAÇÃO PT.1
//O THIS REVERENCIA O PROPRIO OBJETO E UAS PROPRIEDAES 
//POIS, PEGA FORA DO CONTEXTO DAS CHAVES
var obj = {

	showContext: function showContext(){
		console.log(this);
	}, 

	log: function log(value){
		console.log(value);
	}


};

//QUANDO SE OLHA PRA ESQUERDA PERCEBE-SE O OBJETO QUE O THIS IRIA 
//REVERENCIAR, UMA DICA QUE USAVA.
obj.showContext();





//CONTEXTO DE INVOCAÇÃO PT.2
//É POSSIVEL CHAMAR A FUNÇÃO DO OBJETO ABAIXO POIS PEGA DO CONTEXTO FORA DAS CHAVES 
//Mas é necessario colocar o this para reverenciar o objeto em si sem o this nao reconhece
var obj = {

	showContext: function showContext(){
		this.log('Chamando função abaixo por conta que pega o contexto de fora da chave ');
	}, 

	log: function log(value){
		console.log(value);
	}


};

obj.showContext();


//CONTEXTO DE INVOCAÇÃO PT.3
//Declarando uma função de settimeout de nivel global do browser, 
//e chamando a log dentro dela
//de qualquer forma não funcionaria porque o contexto global de eventlistener
//seria o Browser object model então o this buscaria uma função nesse contexto

var obj = {

	showContext: function showContext(){
		this.log('Chamando função abaixo por conta que pega o contexto de fora da chave ');

		setTimeout(function(){
			console.log(this);
			//this.log('Set time out!');
		}, 3000);

	}, 

	log: function log(value){
		console.log(value);
	}


};

obj.showContext();














































