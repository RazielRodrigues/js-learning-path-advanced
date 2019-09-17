function funcionamentoLet() {

	let escopoBlocoIntro = 'Variaveis que são declaradas com let tem espoco de bloco, ';
	let escopoBlocoMeio = 'significa que ela existe apenas dentro de chaves ';
	let escopoBlocoFinal = 'ou seja em funções, if, laços, dicionarios de dados etc...';
	
	console.log(escopoBlocoIntro + escopoBlocoMeio + escopoBlocoFinal);

		if (true) {
			let escopoBlocoSemAcesso = 'Ela também não pode ser acessada fora dos { }';
		}

	console.log(escopoBlocoSemAcesso);
}

funcionamentoLet();