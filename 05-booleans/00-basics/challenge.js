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
  return true
} else{
  return 5<4
}
};

module.exports.outsideRanges = function(number) {
  if((number<10 || number>20) && (number<=42 || number>75) && (number<=1 || number>=6)){
     return true;
} else{
     return false;
}
}

module.exports.nameAndPrice = function(name, price) {
if((name=="NYTimes" || name == "LATimes") && (price>=1)){
   return 5>4;
}else{
   return 5<4;
   }
};