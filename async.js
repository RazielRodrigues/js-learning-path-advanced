//Outra forma que surgiu para fazer promisses e usando a função reservada async:
var simpleFunc = async () => {
	throw new Error 'Oh no crap!'
	return 123;
}

//A gente consegue trasnformar qualquer metodo em assincrono usando essa palavra.
//E quando utilizado podemos ainda fazer tratamentos de erro como em uma promisse normal.
simpleFunc()
.then(data => {
	console.log(data);
})
.catch(err => {
	console.log(err);
})

//o AWAIT serve para fazer uma promisse esperar a outra ser reolvida primeiro e depois ser executada
//causando então um efeito "assicrono sequencial".

var asyncTimer = () => new Promisse((resolve, reject) => {
	setTimeout(() =>{
		resolve(12345);
	}, 1000);
});

var simpleFunc = async () => {
	var data = await asyncTimer();
	var dataJson = await fetch('/data.json').then(responseStream => 
		responseStream.json()
	);

return data;
};

