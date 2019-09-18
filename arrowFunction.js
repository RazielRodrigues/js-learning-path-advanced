//Arrow function usa o this local dela, 
//quanto as funlões normal usam o this global do contexto onde foi escrita
//foram criadas para deixar mais limpo o codigo
//Essas array fucntion é bom pra fica puxando uma atras da outra
//que nem no curry

(() => {

	return console.log("função arrow");

})();

function NaoArrow(){
	return console.log("não arrow");
}