//É usado quando se quer consumir um dado de alguma API, a forma antiga de fazer isso
//era com o XmlHttpRequest, entretanto usava sa callback que consequentemente pode levar a 
//um callbackhell

//o fetch serve para fazer essas requisições de uma forma mais fácil:

fetch('/data.json')
.then(responseStream => responseStream.json())
.then(data => { console.log(data);
	//console.log(responseStream); 
	// Somente retorna as propriedades do resultado
	 // Com esse metodo voce define que é para resposta processar em JSON
	//tem outros metodos dependendo do dado que quer processar. Lembrando que trabalha de forma
	//assincrona então para pegar os dados de fato é necessario pegar os dados dessa promisse.
}).catch(err => {
	console.log('Erro que ocorreu:', err);
});

//É importante ficar atento nos erros que podem acontecer com a API e não deixar
//o Browser processar o json se ele não existir, para isso usamos a propriedade
//de status do responseStream para saber se é 200 se for 200 tentar convertar os dados
//senão lança um novo erro, caso não tenha essa verificação o browser tenta ainda converter
//e vai retornar um status de indefinido.

fetch('/data.json')
.then(responseStream => {
	if (responseStream.status === 200) {
		responseStream.json();
	} else {
		throw new Error('Erro de requisição!');
	}
}
.then(data => { console.log(data);
}).catch(err => {
	console.log('Erro que ocorreu:', err);
});
