'use strict';

const text = String('hello proto');

console.log(text.__proto__.split === String.prototype.split);

console.log(text.constructor === String);


__proto__ -> prototype -> constructor

//Um aponta pro outro


function ComoFuncionaObjeto(MeuNome) {
	this.MeuNome = MeuNome;
}

const x = new ComoFuncionaObjeto('Raziel M.');
console.log(x);
/*

1 - Se cria um novo objeto e ele herda o prototipo de Foo
2 - A funcção construtora Foo é chamada com os argumentos especificados
e com o 'this' vinculando ao novo objeto criado
3 - Caso a função construtora tenha um retorno explicito, será respeitado
o seu return, senão, será retornado o objeto criado no passo 1.

*/