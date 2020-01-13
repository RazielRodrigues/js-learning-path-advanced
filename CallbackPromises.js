//Callback é a tecnica para trabalhar com resultados assincronos
//ou seja temos uma função com parametro dentro dessa função
//chamamos a função do javascript setTimeout que é uma função do navegador
//que executa coisas dentro de um determinado valor de tempo dado em milisegundos.
//Chamamos essa função, e dentro dela colocamos para executar a função que criamos já passando
//um valor para o parametro ou seja executa a propria função com o auxilio da time out
//fazendo assim uma recursividade da função e ja setando o valor do parametro.
//O problema é que fica um código muito verboso.
//com a implementaçao do ecma 6 é possivél usar promises

function doSomething(callback){
	setTimeout(function(){

		callback('First data');

	}, 1000);
}

function doOtherthing(callback){
	setTimeout(function(){

		callback('Second data');
	}, 1000);
}

//Aqui temos uma função que chama todas as outras basicamente é so pra invocar.
//dentro dela chamamos a função do something, temos de lembrar que ela
//já tem um valor setado pelo set time out.
//Pegamos esse proprio resultado armazenamos ele em uma variavel e usamos a 
//função split para fazer um processamento com os dados da função de callback.
//Usamos try e catch para evitar erros e depois é exibido.

function doAll(){
	try{
		doSomething(function(data){
			var processedData = data.split('');

			try{
				doOtherthing(function(data2){
				var processedData2 = data2.split('');

				try{
					setTimeout(function(){
						console.log(processedData2,processedData);
					}, 1000);
				}catch(err){
					//error 3
				}

			});
			}catch(err){
				//error 2
			}

		});
	}catch(err){
		//error 1
	}
}

doAll();


//Promises deixa o código de mais inteligente, basta criar uma nova funçao promisse
//com o seu respectivo construtor após isso se passa os dois argumentos resolve e rejected.
//Usamos arrow function para executar a time out, e invez de ter duas funçoes temos apenas
//uma função.

const doSomethingPromisse = new Promise((resolve, rejected) => {
	//throw new Error('Algo deu errado :(');
	setTimeout(function(){
		//fez alguma coisa aqui
		resolve('First data');
	}, 1000);
});

const doOtherThingPromisse = new Promise((resolve, rejected) => {
	//Já se pode apagar porque trata com o catch lá embaixo, throw new Error('Algo deu errado :(');
	setTimeout(function(){
		//fez alguma coisa aqui
		resolve('Second data');
	}, 1000);
});

//Quando se cria uma promisse não precisa invoca-la com outro time out
//ela já se auto invoca usando o timeout de dentro dela.
//uma promisse tem 3 estados:
//1 - Pending, quando ela ainda está executando no caso 1 segundo, pois é o tempo do time out.
//2 - Fullfilled, quando ela acabou de ser executada.
//3 - Rejected, quando por algum motivo nao foi executada.

//Nesse caso vai mostrar o status da promisse, pois está exeutando como "objeto"
//agora ela está no status pending
//console.log(doSomethingPromisse);

//Para tratar erros com promisses basta adicionar um catch no final da função e encadear.
doSomethingPromisse.then(data => console.log(data)).catch(error => console.log(error));

//Com promisses podemos encadear uma com a outra basta adicionar um outro then
//Entretando não se pareceu muito assincrono, temos outra opção.

doSomethingPromisse
.then(data => {
console.log(data);
return doOtherThingPromisse;
})
.then(data2 => {
	console.log(data2);
})
.catch();

//Trasnformar a promisse em uma função e vamos adicionar um tratamento de erro basico
//Assim são exeutadas no mesmo tempo, pois e como se tivesse escrevendo do jeito antigo
//mas com menos codigos e usando tecnicas mais avançadas.

const doSomethingPromisse = () => new Promise((resolve, rejected) => {
	//throw new Error('Sem conexão!');
	setTimeout(function(){
		//fez alguma coisa aqui
		resolve('First data');
	}, 1000);
});

const doOtherThingPromisse =  () => new Promise((resolve, rejected) => {
	setTimeout(function(){
		//fez alguma coisa aqui
		resolve('Second data');
	}, 1000);
});


doSomethingPromisse()
.then(data => {
console.log(data);
return doOtherThingPromisse();
})
.then(data2 => {
	console.log(data2.split(''));
})
.catch( error => console.log('Ops deu errado!', error));
//Qualquer erro que acontecer dentro das promisses o erro vai ser tratado diretamente pelo catch