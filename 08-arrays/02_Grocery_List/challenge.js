module.exports.addItem = function(item,array){
  for(i=0;i<array.length;i++){
    if(array[i]==item){
      return array;
    }
  }
  array.push(item)
  return array
}

module.exports.reverseSortedList = function(array){
  array.sort();
  array.reverse();
  return array;
}