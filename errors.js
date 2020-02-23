class CustomError extends Error{
	constructor({message, data}){
		super(message);
		this.data = data;
	}
}


try{
	console.log(name);
	const name = 'raziel';

	const myError = new CustomError({
		message: 'Deu merda!',
		data:{
			type: 'Server error'
		}
	});

}catch(err){

	if (err.data.type === 'Server error') {

	}else{

	}

} finally{
	console.log('Keep going...');
}

//Quando o JS acha um erro não executa o resto do codigo
//Erros em JS são um classe
//O finally executa mesmo se tivesse erro ou não
//Quando a gente cria as nossas classes de erros é possivel criar verificações para ele
//deixando assim o erro tratado da forma que a gente quer