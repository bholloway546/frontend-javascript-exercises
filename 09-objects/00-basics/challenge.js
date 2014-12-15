module.exports.createCourse = function(string1,string2,array){
  var bloc={title:string1,duration:string2,students:array};
  return bloc;
}

module.exports.addProperty = function(object,newProp,newValue){
 if (object.hasOwnProperty(newProp)){
   return object;
 }else{
   object[newProp]= newValue;
   return object;
 }
}

module.exports.formLetter = function(letter){
  var letterString= "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
  return letterString;
}

module.exports.canIGet = function(item,money){
  var priceList={
    "MacBook Air":999,
    "MacBook Pro":1299,
    "Mac Pro":2499,
    "Apple Sticker":1,
  }
  return (money>=priceList[item])
}