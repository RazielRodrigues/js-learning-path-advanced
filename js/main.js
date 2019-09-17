var partes = ['ombro'. 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

console.log(partes);
console.log(musica);

function fn(x,y,z){}
var args = [0,1,2];
console.log(fn(...args));


/*

O Spread foi adicionado na versão 6 do ECMA,
ele consegue adicionar objetos de um array no outro
basicamente o que acontece abaixo

var partes = ['ombro'. 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

é a mesma coisa que fazer isso:

var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pés'];

Nunca se deve concatenar arrays, o interessante é "juntalos"
de uma forma consistente, é isso que o spread faz.

outra forma é usalo dentro de funções

function fn(x,y,z){}
var args = [0,1,2];
fn(...args);

basicamente quando faz isso os paramentro da função x,y e z vão receber
os valores do array 0,1 e 2 e assim por diantes, sem eu precisar
ficar reverenciando eles.


*/