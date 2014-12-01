module.exports.equalStrings = function(stringOne, stringTwo){
if (stringOne == stringTwo){
  return 5>4;
}else{
  return 5<4;
}
}
module.exports.notEqual = function(one, two) {
if(one===two){
  return 5<4;
}else{
  return 5>4;
}
}

module.exports.inBetween = function(lower, middle, upper) {
if(middle>lower && middle<upper){
  return 5>4
} else{
  return 5<4
}
};

module.exports.outsideRanges = function(number) {
};

module.exports.nameAndPrice = function(name, price) {
if((name=="NYTimes" || name == "LATimes") && (price>=1)){
   return 5>4;
}else{
   return 5<4;
   }
};