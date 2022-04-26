const escopoConstante = 'Não dá para alterar valores primitivos ou seja strings, numeros etc...';

console.log(escopoConstante);

//Se eu tirar o comentário dá erro
//escopoConstante = 'Quero alterar!';

const dados = {
	name: 'Raziel M.'
};

console.log(dados.name);

//Quando voce declara uma constante em um array ou em um dicionario de dados
//Voce não comsegue fazer isso:
// dados = { idade: 20 }, pois, da erro o mesmo acontece com array.