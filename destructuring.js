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