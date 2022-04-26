//Com generators é possível pausar a execução de uma função
//Se usa a mesma interface de iterator
//Primeiro se deve colocar um * na frente da palavra funçãp
//depois basta colocar a palavra reservada yield onde deseja que pare a execução
//Depois é so chamar a função usando o metodo next() de forma que ele usa a mesma interface
//de iterators ou seja, também é possivel atribuir um valor ao next assim como ocorre no array

function* Hello() {
	console.log("Hello");
	yield 1;

	console.log("from");
	yield 2;

	console.log("function");
	const value = yield 3;

	console.log(value);
}

var func = Hello();

console.log(func.next());
console.log(func.next());
console.log(func.next());
console.log(func.next('Outside'));

//Também é possivél enviar dados para o yield
//Para fazer isso basta passar um parametro para o metodo next
//com base no yield que quer que fique modificado ele ayribui o valor a esse yield


