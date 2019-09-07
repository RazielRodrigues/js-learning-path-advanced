var fruteira = ["Banana", "Mexirica", "Melão"];

var chocolate = {

	nome: "Hersheys",
	kg: 200,
	sabor: "Ovomaltine"

}

var caixaChocolate = [

	{nome: "Hersheys", kg: 200, sabor: "Ovomaltine"},
	{nome: "Galak", kg: 320, sabor: "Branco"},


]

fruteira.push("Melancia");
console.log(fruteira);

fruteira.pop("Banana");
console.log(fruteira);

console.log(fruteira.toString());
console.log(fruteira.join(" - "));
console.log(fruteira.length);

console.log(chocolate.nome);
console.log(chocolate);
console.log(caixaChocolate);
console.log(caixaChocolate[1].nome);