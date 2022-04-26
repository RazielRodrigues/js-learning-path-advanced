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


//Atribuindo uma nova propriedade atraves de variaveis, e depois colocando um valor
var propName = 'Nome do campo via variavel';
var objetoPropriedade = {};
objetoPropriedade[propName] = 'conteudo indo para o campo criado via variavel';
objetoPropriedade[propName + 'Concatenando'] = 'conteudo indo para o campo criado via variavel';
console.log(objetoPropriedade);

//Com ECMA 6 funciona assim
var propName = 'Nome do campo via variavel';
var objetoPropriedade = 
{
	[propName]: 'conteudo indo para o campo criado via variavel'
};
console.log(objetoPropriedade);
