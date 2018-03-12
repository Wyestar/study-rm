function levenshtein(a, b) {
  var matrix = [];

  if (a.length > b.length) {
    var temp = a;
    a = b;
    b = temp;
  }

  for(var i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  for(var j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  for(var y = 1; y <= b.length; y++){
    for(k = 1; k <= a.length; k++){
      if(b.charAt(y-1) === a.charAt(k-1)){
        matrix[y][k] = matrix[y-1][k-1];
      } else {
        matrix[y][k] = Math.min(matrix[y-1][k-1] + 1, Math.min(matrix[y][k-1] + 1, matrix[y-1][k] + 1));
      }
    }
  }
  console.log(matrix);
  console.log(a.length ,'a length');
  console.log(b.length ,'b length');
  return matrix[b.length][a.length];
}

levenshtein("abc", "aycz");
