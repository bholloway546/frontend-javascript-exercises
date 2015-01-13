module.exports.stream = function(conditional,action){
  while (conditional()){
  action();   
  }
}

module.exports.sumNumbers = function(array){
  var counter=0;
  var total=0;
    while(counter<array.length){
      total += array[counter];
      counter ++;
    };
  return total;
}

  

