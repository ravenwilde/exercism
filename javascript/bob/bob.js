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

function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var input = input.trim();
	var lastChar = input.substr(-1);
	if ((isAlpha(lastChar) && !isUpperCase(input)) ||
		(lastChar == ".") || 
		(!isUpperCase(input) && lastChar == "!") || 
		(lastChar != "?" && isNum(input)) 
			) {
			return 'Whatever.';
		} else if (
			(isAlpha(lastChar) && isUpperCase(input)) ||
			(isUpperCase(input) && lastChar == "!") || 
			(isUpperCase(input) && lastChar == "?" && !isNum(input)) 
				) {
			return 'Whoa, chill out!';
		} else if ((lastChar == '?') || ((isNum(input)) && lastChar == '?')) {
			return 'Sure.';
		} else if (input == '') {
			return 'Fine. Be that way!';
		}
};

module.exports = Bob;
