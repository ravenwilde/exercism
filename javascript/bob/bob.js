//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isUpperCase(str) {
    return str === str.toUpperCase() && isNaN(str);
}

function isNum(str) {
	str = str.substr(0,str.length-1);
	str = str.replace(/, /g, '');
	if((parseFloat(str) == parseInt(str)) && !isNaN(str)){
		return true;
	} else {
		return false;
	}

}

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var responses = ['Whatever.', 'Whoa, chill out!', 'Sure.', 'Fine. Be that way!'];
	var input = input.trim();
	var lastChar = input.substr(-1);
	if (input === '') {
		return responses[3];
	}
	if (lastChar === "?") {
		if ( isNum(input) || !isUpperCase(input) ) {
			return responses[2];
		}
	}
	if ( isUpperCase(input) && !isNum(input) ) {
		return responses[1];
	} else {
		return responses[0];
	} 
};

module.exports = Bob;
