var words = function words(input) {
	var sanitized = input.replace(/toString/, toString);
	var inputArray = sanitized.replace(/\s+|\\./g," ").split( " " );
	var outputObj = {};
	
	// for each array item
	for (var i = 0; i < inputArray.length; ++i) {
		// check if it matches a key
		if (inputArray[i] in outputObj) {
			// if yes, +1 to that value
			var tmp = (inputArray[i]);
			outputObj[tmp] += 1;	
		} else {
		// if no, add a new key with value = 1
			var tmp = (inputArray[i]);
			outputObj[tmp] = 1;
		}
	}
	return outputObj;
};


module.exports = words;