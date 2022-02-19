var arr1 =  [1, 2, 3, 9, 5];
var arr2 =  [2, 5, 7, 9 ,15]; 
var arr3 = [8, 9, 15, 5, 10];
var arr4 = [8, 5, 9, 7, 36]

function getIntersection() {
    var result = [];
    var list;
  
  if(arguments.length === 1) {
  	list = arguments[0];
  } else {
  	list = arguments;
  }
  
  for(var i = 0; i < list.length; i++) {
  	var currentList = list[i];
  	for(var y = 0; y < currentList.length; y++) {
    	var currentValue = currentList[y];
      if(result.indexOf(currentValue) === -1) {
        var exists = true;
        for(var x = 0; x < list.length; x++) {
          if(list[x].indexOf(currentValue) === -1) {
            var exists = false;
            break;
          }
        }
        if(exists) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
}

console.log(getIntersection([arr1, arr2, arr3, arr4]));