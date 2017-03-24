// Final version
var testString = 'hello'

function stringReversal(string) {
	var newArray = [];
	for (var i = testString.length - 1; i >= 0; i--) {
	  newArray.push(testString[i]);
	}
	return newArray.join('');
}


// trying array comprehensions...
var test_string = 'hello'

var new_string = [test_string.pop() for (i of test_string)]


// string not array

function string_reversal(string) {
	var new_string = ''
	for (var i = test_string.length-1; i>=0; i--) {
	  new_string += test_string[i]
	}
	return new_string
}


// Creating array first...

function stringReversal(string) {
	var newArray = [];
	var testArray = [];
	for (var i = 0; i < testString.length; i++) {
		testArray.push(testString[i]);
};
	for (var i = testString.length - 1; i >= 0; i--) {
		element = testArray.pop();
	  	newArray.push(element);
	};
	return newArray.join('');
}