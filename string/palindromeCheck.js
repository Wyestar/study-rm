// given a string, find if it can be a palindrome, find if that palindrome is a dictionary word. need to check more than if palindromocity is potential

function palin(str) {
  let letters = {}
  for (let i = 0; i < str.length; i++) {
    if (!letters[str[i]]) {
      letters[str[i]] = 1
    }
    else {
      letters[str[i]]++
    }
  }
  
  let oddCounter = 0;
  for (let key  in letters) {
    if (letters[key] % 2 !== 0) {
      oddCounter++
    }
  }
  
  if (oddCounter > 1) {
    return false
  }
  else {
    return true
  }
}

const civic = "vciic"
palin(civic)