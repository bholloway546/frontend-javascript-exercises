module.exports.getKeys = function(object){
  var gotKeys=Object.keys(object);
  return gotKeys;
}

module.exports.getValues = function(object){
  var gotKeys=[]
  
  for(var key in object){
    gotKeys.push(object[key]);
  }
  return gotKeys;
}


module.exports.objectToArray = function(object){
  var array=[]
  for(var key in object){
    var string1=key + " is " + object[key]
    array.push(string1)
  }
  return array;
}