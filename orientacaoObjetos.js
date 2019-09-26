'use strict';

const text = String('hello proto');

console.log(text._proto_.split === String.prototype.split);

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

//Sintaxe de orientaçãop a objetos em ECMA 6
//Para gerar classes e herança
class Animal{
	constructor(){
		this.qtdepatas = 0 ;
	}

	movimentar();
}

class cachorro extends animal{
	constructor(morde){
		super();
		this.qtdepatas = 4;
		this.morde = morde;
	}

	latir(){
		console.log('au au');
	}

}

const pug = new cachorro(false);
const pitbull = new cachorro(true);




//Trabalhando com modificadores de acesso
// e o encapsulamento
class person{
	#name = '';

	constructor(nomeinicial){
		this.#name = nomeinicial;
	}

	setname(name){
		this.#name = name;
	}

	getname(){
		return this.#name;
	}
}

console.log(p);
p.getname();
p.name();

p.setname('Raziel M.');
p.getname();

class person{
	static walk(){
		console.log('walking...');
	}
}

console.log(person.walk());