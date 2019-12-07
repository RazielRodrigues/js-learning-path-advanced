//Destructuring assignmet é bassicamente fazer com que os indices
//do array se tranformem em variavel.

//forma classica:

arr = ['queijo','presunto','salame'];

var queijo2 = arr[0];
var presunto2 = arr[1];
var salame2 = arr[2];

console.log(queijo2, arr[0]);

//Com o desctruciting é possível fazer apenas 
//apontando um "array" de variaveis para o que quer
//tranformar em variaveis.

var [queijo2, presunto2, salame2] = ['queijo','presunto','salame'];
console.log(queijo2, arr[0]);


//O destruction pode ser usado com objetos também

//Maneira clásicca
var obj = {
	nome: 'raziel'
};
var x = obj;
console.log(x);

//Destructor
var obj = {
	nome: 'raziel'
};

//Assim ele procura uma propriedade nome no objeto e cria uma variavel
//com o valor dessa propriedade setado.
var { nome } = obj;
console.log(nome);

//Para definir o nome da variavel tem que escrever assim:
var { nome: nome2 } = obj;
console.log(nome2);

//Dá para fazer varios nested com isso é de boa...

//Usando com funções:

function sum([a,b] = [0,0]){
	return a + b;
}

console.log(sum([2,3]));
console.log(sum([]));

//e com objetos tambem e com default values

















