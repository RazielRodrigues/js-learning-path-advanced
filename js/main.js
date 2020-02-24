function consultaCep(){

	var	inputCep = document.getElementById('inputCep').value;
	var url = "https://viacep.com.br/ws/"+inputCep+"/json/";
	console.log(url);
	
	$.ajax({
		url: url,
		type: "GET",
		success: function(response){
			console.log(response);
		}
	});

}

/*

Jquery facilita no uso de requisições ajax e tambem com diversos metodos e funções
que auxiliam na escrita do código.

*/