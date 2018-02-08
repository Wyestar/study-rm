// given intervals in arrays of length two, merge all possible overlapping intervals into one interval
// [ [10, 13], [11, 15] ] => [10, 15]

// find all index zeroes, find minumum, use it's end to see if it can be in the interval of further ones. keep track of that interval max, at end, return an array that has min and max in an interval

// make an interval, and keep updating/expanding it as loop continues. this may not result in the largest loop though.
// make a new interval for any interval found that does not fit
// compare differences between intervals and return largest one.

function overlappingIntervals(arr) {
  let min = arr[0][0];
  let max = arr[0][1];
  let currentMaxInterval = Math.abs(arr[0][0] - arr[0][1]);
  let currentRange = []
  let tempInterval = 0;
  
  let intervalStorage = [];
  let result = [];
  
  for (let i = 1; i < arr.length; i++) {
    tempInterval = Math.abs(arr[i][0] - arr[i][1]);
    
    // possibilities:
    // if there is overlap;
      // intervals can be combined, does not matter if one is greater than the other
      // if overlaps is totally enclosed, keep original interval
    // if they cannot be combined, any further intervals cannot overlap with original, store original interval 
    // new max 
    if (arr[i][0] < max && arr[i][1] > max) {
      console.log('test')
      // since intervals are sorted by start, arr[i][0] > min is always true
      max = arr[i][1];
      currentRange[0] = min;
      currentRange[1] = max;
      currentMaxInterval = Math.abs(min - max);
    }
    else {
      // there is no overlap 
      if (tempInterval < currentMaxInterval) {
        intervalStorage.push([currentRange, currentMaxInterval]);
      }
      min = arr[i][0];
      max = arr[i][1];
    }
  }
  console.log(min ,'min');
  console.log(max ,'max');
  console.log(intervalStorage ,'intervalStorage');
  if (Math.abs(min - max) < intervalStorage[0][1]) {
    return intervalStorage[0][0];
  }

 return [min, max]; 
}

const array = [ [1, 15], [16, 19], [17, 20] ];
const array2 = [ [2, 4], [4, 5] ];
// [10, 15]
overlappingIntervals(array);

// below is wip recursive unsorted interval solution  
function unsorted(arr) {
  if (arr[i][0] > min && arr[i][0] < max && arr[i][1] > max) {
    // next min is within range of current interval
    if (arr[i][1] > max) {
      // next max can extend interval 
      max = arr[i][1];
      currentMaxInterval = Math.abs(min - max);
      result[0] = min;
      result[1] = max;
    }
  }
  else if (arr[i][1] < max && arr[i][1] > min) {
    if (arr[i][0] < min) {
      min = arr[i][0];
      currentMaxInterval = Math.abs(min - max);
      result[0] = min;
      result[1] = max;
    }
    
  }
  else {
    storage.push(arr[i]);
  }

  // if ( (Math.abs(arr[i][0] - arr[i][1])) > currentMaxInterval ) {
  //   min = arr[i][0];
  //   max = arr[i][1];
  //   currentMaxInterval = Math.abs(arr[i][0] - arr[i][1]);
  // }
  
  storage.push(result);
  console.log(storage ,'storage');
  if (storage.length !== 0) {
    storage.push(result);
    // return overlappingIntervals(storage);
    // console.log(storage)
  }
  
  else {
    // storage length is 0
    // console.log(result ,'result');
    return result;
  }
}