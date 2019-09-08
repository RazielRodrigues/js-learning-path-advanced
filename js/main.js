var idade = console.log("Digite a sua idade");
var segundos = 0;
var acao = 0 
var count = 0
data = new Date();



//Condicionais
if (idade >= 18) {
	console.log("Maior de idade");
} else {
	console.log("Menor de idade");
}


switch(idade){
	case idade >18: "Voce é maior de idade" break;
	default: "Voce é menor de idade" break;
}

//Laços de repetição
do{
	console.log("Do while em ação!");
	acao++;
	while(acao < 5);
}

while (segundos < 10){
	segundos++;
	console.log(segundos);
}

for (count = 0; count < 50; count++){
	console.log(count);
}

// Varios metodos para o Date
alert(data.getMinutes());
alert(data.getDay());
