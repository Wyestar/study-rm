// given a string, write a function that reverse vowels
// 'fruit' => friut
// frouga = fraugo


function fasterReverseVowels(str) {
  let result = "";
  let left = 0;
  let right = str.length - 1;
  
  let vowels = ["a", "e", "i", "o", "u"];
  
  while (left === right) {
    while (vowels.indexOf(str[left]) === -1) {
      left++;
    }
    while (vowels.indexOf(str[right]) === -1) {
      right--;
    }
    
  }
}

function reverseVowels(str) {

  let vowels = ["a", "e", "i", "o", "u"];
  let arrVowel = [];
  let arrVowelIndex = [];
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      arrVowel.push(str[i]);
      arrVowelIndex.push(i);
    }
  }
  
  let flipVowels = arrVowel.reverse();
  let result = "";
  let counter = 0;
  for (let j = 0; j < str.length; j++) {
    if (j === arrVowelIndex[counter]) {
      result += flipVowels[counter];
      counter++;
    }
    else {
      result += str[j];
    }
  }
  return result;
}

string = "";
reverseVowels(string);