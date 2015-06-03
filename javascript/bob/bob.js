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
	var responses = { Statement : 'Whatever.', Shouting : 'Whoa, chill out!', Question : 'Sure.', Silence : 'Fine. Be that way!' };
	var input = input.trim();
	var lastChar = input.substr(-1);
	if (input === '') {
		return responses.Silence;
	}
	if (lastChar === "?") {
		if ( isNum(input) || !isUpperCase(input) ) {
			return responses.Question;
		}
	}
	if ( isUpperCase(input) && !isNum(input) ) {
		return responses.Shouting;
	} else {
		return responses.Statement;
	} 
};

module.exports = Bob;
