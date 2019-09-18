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