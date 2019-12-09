//O simbolo não é uma string e também não é um número, é apenas um identifcador único.
//como o ID de um banco de dados

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

//O symbol é diferente mesmo se o valor for igual
//return false
console.log(uniqueId === uniqueId2);


//Ele serve também para deixar uma propriedade do objeto
//inacesseivel por metodos convencionais
//e tambem serve para que outros dev entendeam que nao pode mecher ali

var obj = {
	[uniqueId] : 'Hello'
}

console.log(obj);

//Well known symbols:

Symbol.iterator
Symbol.split
Symbol.toPrimitive
Symbol.asyncIterator


//O iterator percorre todo o array usando a função next
//e quando não tem mais valor o parametro done da função retorna true
//Basicamente o que faz é ir exibindo todos os valores do array
const arr = [1,2,3];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Esse for serve para percorrer os array e devolver qual valor tem
for (let value of arr){
console.log(value);

}





