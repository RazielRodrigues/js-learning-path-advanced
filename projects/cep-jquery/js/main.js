function consultaCep(){
	
	var	inputCep = document.getElementById('inputCep').value;
	var url = "https://viacep.com.br/ws/"+inputCep+"/json/";

		try{
			$.ajax({
				url: url,
				type: "GET",
				success: function(response){

					$('#cep').html("CEP: "+response.cep);
					$('#logradouro').html(response.logradouro);
					$('#bairro').html(response.bairro);
					$('#localidade').html(response.localidade);
					$('#uf').html(response.uf);
					$(".cep").show();
				},

				error: function(response){
					alert("Erro na requisão:" + response.status);
				}

			});
		}catch(err){
			console.log(err);
		}

}

// $(function(){
// 	$(".cep").hide();
// });

/*

Jquery facilita no uso de requisições ajax e tambem com diversos metodos e funções
que auxiliam na escrita do código.

*/