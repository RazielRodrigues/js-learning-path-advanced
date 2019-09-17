let arr = [3,5,7];

arr.foo = 'hello';

//executa tudo do array até o que esta fora
for (let i in arr){
	console.log(i);
}

//executa só o que esta dentro do array e ja era dele
for (let i of arr){
	console.log(i);
}