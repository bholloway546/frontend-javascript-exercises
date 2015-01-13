module.exports.copy = function(object1){
  var object2={}
  for(var key in object1){
    object2[key]=object1[key]
  }
  return object2
}

module.exports.extend = function(dest,src){
  for(var key in src){
    dest[key]=src[key]
  }
  return dest
}

module.exports.hasElems = function(object,array){
  for(var i = 0; i < array.length;i++){
    if(!object[array[i]]){
      return false;
    }
  return true;
  }
/* 
for(var i = 0; i < array.length;i++){
    if(object.hasownproperty(array[i])){
      return false;
    }
  return true;
  }
*/




}
