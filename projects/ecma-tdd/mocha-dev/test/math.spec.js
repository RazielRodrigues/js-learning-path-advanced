const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', function(){
	//hooks
	beforeEach(function(){
		value = 0;
	});

	before(function(){
		value = 0;
	});

	afterEach(function(){
		value = 0;
	});

	after(function(){
		value = 0;
	});

	ìt('Sum two numbers', function(done){
		const math = new Math();
		this.timeout(3000)

		math.sum(5, 5, value => {
			assert.equal(value, 10);
			done();
		});
	});

	it('Multiply two numbers', function(){
		const math = new Math();

		assert.equal(math.Multiply(5, 5) 25);

	});
});