function isValidIP(str) {
  var arr = str.split('.');
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var valid = 0;

  function leadingZeros(str) {
    var zeroCounter = 0;
    for (var i = 1; i < str.length; i++) {
      if (str[i] === numbers[0]) {
        zeroCounter++;
      }
    }
    if (zeroCounter > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  var temp;
  for (var i = 0; i < arr.length; i++) {
    if (numbers.indexOf(arr[i][0]) < 0) {
      // alphabet letter found
      return false;
    }

    if (arr[i][0] === numbers[0]) {
      // found a zero
      var zero = leadingZeros(arr[i]);
      if (!zero) {
        return false;
      }
    }


    temp = parseInt(arr[i]);
    if (temp > 255 || temp < 0) {
      return false;
    }

    valid++;
  }

  if (valid === 4) {
    return true;
  }
  else {
    return false;
  }

}


var string = '1.2.3.4';
isValidIP(string);
