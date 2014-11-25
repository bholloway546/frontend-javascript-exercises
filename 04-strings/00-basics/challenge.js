module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + "," + "\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return sliceItAndCombineIt("This is a Test", 0, 4, 5, 7)
};

module.exports.findFirstMatch = function(text, searchString) {

};

module.exports.findLastMatch = function(text, searchString) {

};

module.exports.substringBetweenMatches = function(text, searchString) {

};