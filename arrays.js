const arr = [1,2,3];

const arr2 = new Array(1,2,3);

const arr3 = Array.of(1,2,3);

//Se criar um array assim, ele cria um array com 10 posições vazias
const arr2 = new Array(10);

const divs = document.querySelectorAll('p');
divs.pop(); //não funciona

const divsArray = Array.from(divs);
divs.pop() // Agora funciona

//Cria uma nova instancia de array a partir 
//de um parametro array-like ou iterable object
//array-like = node list com documentselect e tranforma o node list em um array
//iterable object =  set e map

//adicionando itens em um array na ultima posição
var frutas = ['melçancia', 'mamao'];
frutas.push('banana');
console.log(frutas);

//removendo itens em um array na ultima posição e retornando o que foi removido
frutas.pop();
console.log(frutas);

//adicionando itens em um array na primeira posição
var frutas = ['melçancia', 'mamao'];
frutas.unshift('pera');
console.log(frutas);

//removendo itens em um array na primeira posição e retornando o que foi removido
var frutas = ['melçancia', 'mamao'];
frutas.shift();
console.log(frutas);

//Concatenando dois array, a concat não meche com a estrutura dos array
//na verdade junta so dois e retona um novo array
var salgados = ['kibe', 'coxinha'];
var concatenado = frutas.concat(salgados);
console.log(concatenado);

//fatia o array com o inicio e a final determinado 
//pega essa fatia e cria um novo array
var fatiado = [1,2,3,4,5];
console.log(fatiado);
fatia = fatiado.slice(0,3);
console.log(fatia);

//Adiciona e remove itens especificando a posição
fatiado.splice(
	'posicao',
	'quantos itens quer remover a partir da posicao',
	'item que quer adicionar'
);

//Primeiro parametro é o nome do valor, segundo parametro é o
//indice do vetor 0,1,2 etc, e o terceiro parametro é o nome do array (opcional)
fatiado.forEach((numero, index, fatiado) => console.log(numero, index, fatiado));

fatiado.map((numero,index) => '${index} ---- ${numero}');