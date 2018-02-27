// given an array of integers with, return an array of only beginnings of consecutive blocks and isolated values

// [1, 2, 3, 5, 7, 8, 9, 11, 12]
// [1, 5, 7, 11]

function startingPoints(arr) {
  let storage = [];
  // can put arr[0] in storage immediately

  let pointer = 0;

  for (let i = 0; i < arr.length; i++) {
    pointer = arr[i];

    for (let j = i+1; j < arr.length; j++) {
      console.log(pointer);

      if (arr[j] === (pointer + 1)) {
        pointer = arr[j];
      }
      else {
        // consecutive block is broken
        // store index
        // reset pointer
        // reset i
        storage.push(arr[i]);
        i = j;
      }
    }
  }
  console.log(storage ,'storage at end');

  return [];
}

let array = [1, 2, 3, 5, 7, 8, 9, 11, 12];
startingPoints(array);
