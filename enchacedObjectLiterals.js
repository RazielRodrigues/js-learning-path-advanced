//Maneira clássica de escrever objetos literias em JS
//Pode se colocar as propriedades de qualquer tipo
//ou deficinir uma propriedade com base em uma varivel

var propriedade = 'Propriedade da variavel!';

var objetoClassico = {
	//String
	nome: 'Raziel',

	//Numero
	idade: 20,

	//Funcoes e metodos
	id: function random(){
		return Math.random() * 10;
	},

	//Acessando pela variavel
	propriedade: propriedade
}

console.log(objetoClassico);

//Com o ECMA 6 é possivel omitir o lado direito funciona com var e funções:
var propriedade = 'Propriedade da variavel!';
var id = function(){
		return Math.random() * 10;
	}

var objetoEcma = {
	id,
	propriedade,
	sum: function(a,b){
		return a + b;
	},

	sumOmitidido(a,b){
		return a + b;
	}

}

console.log(objetoEcma);
objetoEcma.id();
console.log(objetoEcma.sum(1,2));
console.log(objetoEcma.sumOmitidido(2,2));




















