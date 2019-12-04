//Maneira clássica de escrever objetos literias em JS
//Pode se colocar as propriedades de qualquer tipo
//ou deficinir uma propriedade com base em uma varivel

var propriedade = 'Propriedade da variavel!';

var objetoClassico = {
	//Strinf
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