// given a number, print out all combinations of valid parenthesis pairings
// n = 2 
// {{}}
// {}{}

function paren(n, stringParen = "", validNum = 0) {
  if (validNum < 0 || validNum > n) {
    return false;
  }
  if (validNum === 0 && n*2 === stringParen.length) {
    console.log(stringParen);
    return true;
  }
  else if (n*2 === stringParen.length) {
    return false;
  }
  
  paren(n, stringParen + "{", validNum + 1);
  paren(n, stringParen + "}", validNum - 1);
}

const n = 4;

paren(n)