function consultaCep(){

	var	inputCep = document.getElementById('inputCep').value;
	var url = "https://viacep.com.br/ws/"+inputCep+"/json/";
	console.log(url);
	$.ajax({
		url: url,
		type: "GET",
		success: function(response){
			console.log(response);

			$('#cep').html(response.cep);
			//document.getElementById('cep').innerHTML = response.cep;
			document.getElementById('logradouro').innerHTML = response.logradouro;
			document.getElementById('complemento').innerHTML = response.complemento;
			document.getElementById('bairro').innerHTML = response.bairro;
			document.getElementById('localidade').innerHTML = response.localidade;
			document.getElementById('uf').innerHTML = response.uf;

		}
	});

}

/*

Jquery facilita no uso de requisições ajax e tambem com diversos metodos e funções
que auxiliam na escrita do código.

*/