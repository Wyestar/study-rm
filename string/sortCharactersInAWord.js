function nico(key, message) {

  let alphabet = "!abcdefghijklmnopqrstuvwxyz";

  function sortStr(str) {
    return a - b;
  }

  function sorter(str) {
    return str.split('').sort().join('');
  }

  let sortedKey = sorter(key);
  console.log(sortedKey);

  let numberKeyCode = "";
  let sortedArray = [];
  let keyObj = {};
  for (let i = 0; i < key.length; i++) {
    keyObj[key[i]] = alphabet.indexOf(key[i]);
  }
  for (var char in keyObj) {
    sortedArray.push([char, keyObj[char]]);
  }
  
  // sortedArray may not be completely sorted
  let result = sortedArray.sort(function(a, b) {
    return a[1] - b[1];
  });
  console.log(sortedArray ,'sortedArray');
  console.log(result, 'result');
  
  return result;
}


nico('czrazy', 'message');