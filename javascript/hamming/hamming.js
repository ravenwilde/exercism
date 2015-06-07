var Hamming = {

	compute: function(input1, input2) {
		var output = 0;
		var arr1 = input1.split("");
		var arr2 = input2.split("");
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
			throw new Error("DNA strands must be of equal length.")
		}
		return output;
	}

};

module.exports = Hamming;