function doSomething(callback){
	setTimeout(function(){


		callback('Fists data');
	}, 1000);
}

	setTimeout(function(){


		callback('Second data');
	}, 1000);
}

function doAll(){
	doSomething(function(data){

		var processedData = data.split('');

		doOtherthing(function(data2){
			var processedData2 = data2.split('');

			setTimeout(function(){
				console.log(processedData2,processedData);
			}, 1000);

		});

	});
}

doAll();





























