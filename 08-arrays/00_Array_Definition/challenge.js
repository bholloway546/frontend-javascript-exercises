module.exports.newArray =function(a,b,c,d){
  return array=[a,b,c,d];
}


module.exports.firstAndLast = function(array){
  if(array.length>2){
  var lastIndex=array.length-1;
    var newArray=[array[0],array[lastIndex]]
     return newArray;
    } else
      return console.log("Array needs to be bigger!");
}