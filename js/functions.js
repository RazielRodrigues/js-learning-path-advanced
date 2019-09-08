var variavelGlobal = "ei sou acessivel em qualquer parte";

function Calculo(n1, n2){
	var variavelLocal = 98;
	return n1+n2 * variavelLocal;
}

console.log(Calculo(30,78));

//Funcoes de manipulação do DOM
function botaoClicado() {
	document.getElementById('agradecimento').innerHTML = "<b> Agradecido </b>";
}

function redirecionamento(){
	window.open("https://www.google.com");
}

function trocandoFrase(frase){
	frase.innerHTML = "Descobriu o segredo!";
}

function voltarFrase(frase){
	frase.innerHTML = "...";

}

function funcaoChange(elemento){
	return console.log(elemento.value);
}