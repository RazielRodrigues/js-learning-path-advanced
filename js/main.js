function 

Pessoa(nome, idade) { 

this.nome = nome;

 this.idade = idade; 

 return { nome, idade: 20, 


 falar() { 


 console.log('objeto falar'); 
 } 
 } 
 } 


 Pessoa.prototype.falar = function() {

  console.log('prototype falar'); }; 


  const pessoa = new Pessoa('Foo', 30); 

  Com base no código acima, observe as afirmativas abaixo: