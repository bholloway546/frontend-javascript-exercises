module.exports.reversePlusOne = function(array){
if (array.length>1){
  var reverseArray=array.reverse();
  reverseArray.unshift(1);
  return reverseArray;
} else{
  return("This array needs more numbers!")
}
}
module.exports.plusesEverywhere = function(array){
if (array.length==0){
  return "";
}
  if(array.length==1){
    return array[0].toString();
  }
  var output=array[0].toString();
  for(i=1;i<array.length;i++){
    output+="+";
    output+=array[i].toString();
  }
  return output
}

module.exports.arrayQuantityPlusOne = function(array){
  return(array.length) + 1;
}