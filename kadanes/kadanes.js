function kadanesAlgorithm2(array) {
  let currentMax = Number.NEGATIVE_INFINITY;
  let PresentMax = 0 ;
  
  for (let i = 0; i < array.length; i++) {
    PresentMax = PresentMax + array[i];
    
    if (currentMax < PresentMax) {
      currentMax = PresentMax;
    }
    
    if (PresentMax < 0) {
      PresentMax = 0;
    }
  }
  
  return currentMax;
}

var array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
var array2 = [-5, 1, 1, 5, -10, 6, 6, -8]
// kadanesAlgorithm2(array)


// random notes
/*
polymorphism; function that can be used multiple ways, overload(a), overload(a, b), overload(diff type). will use correct function when called. overloading is good polymorphism example, compiled languages can handle it

js is not commpiled, can write functions and call them with incorrect args, will not throw error until it is run. compiler does not check while parsing. 

overriding; abstract, regular, inheritance. can overwrite function that parent/super class has. 

upcasting; new class declaration has parent as well, it gets cast upwards with parent class.
downcasted; upcasted inversion, class is not a subclass

dynamic and static binding; at run-time and compile-time
*/

////
function subarraySort(array) {
  // Write your code here.
	let start = null;
	let end = null;
	let smallest = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < smallest) {
		  end = i
		  console.log(end)
		}
		smallest = array[i]
	}
	
	for (let j = 0; j < end; j++) {
	  if (array[end] <= array[j]) {
	    start = j
	    array[end] = array[j]
	  }
	}
	
	for (let k = end + 1; k < array.length; k++) {
	  if (array[k] < array[end]) {
	    end += k - end
	    

	  }
	}
	
	if (!end) {
		return [-1, -1]	
	}
	return [start, end]
}


var sort1 = [1, 6, 7, 5, 6, 4, 2, 6, 3, 9]
// 2, 5
subarraySort(sort1)
