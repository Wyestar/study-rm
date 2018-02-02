// sorted array of integers, return array index of a given number. return -1 if not found

function returnIndex(arr, n, start, end) {
  
  let midpoint = Math.floor((end + start) / 2);
  
  if (start > end) {
    return -1;
  }
  
  if (n === arr[midpoint]) {
    return midpoint;
  }
  else if (n > arr[midpoint]) {
    start = midpoint + 1;
    return returnIndex(arr, n, start, end);
    
  } 
  else {
    end = midpoint - 1;
    return returnIndex(arr, n, start, end);
  }
}

function helper(arr, n) {
  return returnIndex(arr, n, 0, arr.length);
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 11;

helper(array, n);