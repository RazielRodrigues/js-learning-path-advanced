function firstCurrying(multiplicador) {
	return function(multiplicado){
		return multiplicador + multiplicado;
	}
}

const somar = firstCurrying(2);

console.log(firstCurrying(10));

/*

O curry é uma parte do que é o paradigma funcional
pelo que entendi ele ajuda a retornar o resultado de uma 
função dentro da outra aproveitando os parametros
deixando um código mais rápido.

Aqui o parametro da primeira função está travado na variavel que foi
declarada abaixo da função assim o primeiro parametro sempre será 2
enquanto o segundo parametro pode ser alterado sem problemas, ao chamar 
a função denovo.

acho que é isso...

*/