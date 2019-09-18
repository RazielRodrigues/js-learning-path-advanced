String letras = 'Temos 6 tipos de variaveis no ECMA 6';
Number numero = 6;
Boolean verdade = true;

//Dá pra quase criar um enull do typescript.
Symbol valorUnico = 'Esse é um valor único'; 

//Representa o nulo.
null variavelPelada;

//Existe mais ainda não foi definida.
undefined variavelIndecisa; 

//Dicionario de dados etc...
Object Objeto

//É um "objeto" mas permite que a gente possa chama-lo.
function () {}

//O Array tem relação com seus "filhos" ou seja os seus valores.
Array vetorzinho[];

/* 

Trabalhando com o objeto array e funlão 

*/

var agenda = {
	nome: 'Raziel Miranda'
};
console.log(agenda);

agenda['nome'] = 'Jaiara M.';
console.log(agenda);

agenda.nome = 'Marcos Roberto';
console.log(agenda);

//Usa o nome do indice na variavel e coloca a variavel pra acessar o indice, muito bom.
var acessoPorVariavel = 'nome';
agenda[acessoPorVariavel] = 'Maria Rosa';
console.log(agenda);

//Criando novo campo dentro do dicionario
agenda.observacao = 'Criei um novo campo no dicionario';
console.log(agenda);

//Retorna um Array
console.log(Object.keys.(agenda));

//Retorna valores
console.log(Object.values.(agenda));

//Retorna indices
console.log(Object.entries.(agenda));

//Cria um novo objeto juntando dois
console.log(Object.assign.({}, agenda, {idade: 20}));

//Não consegue fazer mais nada no objeto
console.log(Object.freeze.(agenda));

//Não consegue fazer mais nada no objeto, exceto alterar o que já existe
console.log(Object.seal.(agenda));