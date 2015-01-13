module.exports.sumNumbers = function(array){
  var total=0
  for(var i=0;i<array.length;i++){
      total += array[i];   
    } 
   return total
}
/*module.exports.sumNumbers = function(array){
  for(var i in array){
    if(i.length<1){
      return 0;
    }else{
      var total=0
      total += i
    }
  }*/

module.exports.splitAndLowerCaseString = function(inputString){
  var inputStringLower=inputString.toLowerCase();
  var array=inputStringLower.split(",");
  return array;
}

module.exports.addIndex = function(array){
  var output=[];
  for(var i=0;i<array.length;i++){
    var string=i + " is " + array[i]
    output[i]= string
  }
  return output; 
}
  

