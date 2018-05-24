/* Remove Duplicates from a Sorted Array

Given a SORTED array of integers, remove the duplicates IN PLACE
and return the LENGTH of the new array.

You can always assume the array will be SORTED.

No extra data structure allowed given this is an IN PLACE mutation

example:
dups = [1,1,1,2,2,2,2,3,3,4,4,4,4,4] => [1,2,3,4] => return 4
*/

function removeDups(arr) {
  let counter = 1;
  let temp = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp) {
      counter++;
      temp = arr[i];
    }
  }
  return counter;
}

// not complete 
function removeDupsSplice(arr) {
  let j = arr.length - 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] === arr[j]) {
      j = i - 1;
      arr = arr.splice(i, 1);
    }
  }
  return arr.length;
}


// Test cases:
console.log(removeDups([1,1,1,2,2,2,2,3,3,3,4,4,5,6,6]) === 6);
console.log(removeDups([-1,0,0,0,2,4,4,10,90,90,90,91]) === 7);
console.log(removeDups([1,1,1,1,1,1,1,1]) === 1);
console.log(removeDups([0,1,1,1,1,1,1,1]) === 2);
