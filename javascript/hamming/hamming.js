var compute = function compute(input1, input2) {
	var output = 0;
	var arr1 = input1.split("");
	var arr2 = input2.split("");
	console.log(arr1);
	console.log(arr2);
	// if inputs are the same
	if ( arr1.length == arr2.length) {
		for (var i = 0; i < arr1.length; ++i) {
		// compare each array value, if not equal, +1 to output
			if (arr1[i] !== arr2[i]) {
				output += 1;
			} 
		};
	} else {
		// if not, throw error
		output = "DNA strands must be of equal length.";
	}

		
// TO DO:
	//replace var compute() with an object that contains 
		//a method named compute (I think - double check 
		//jasmine docs)
	//throw exception for error



	return output;
};


module.exports = compute;