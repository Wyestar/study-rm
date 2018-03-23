// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// roman numerals do not repeat more than three in a row, but they can in some instances

function romanNumeralConverter(number) {
  var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
  ];

  if (number === 0) {
    return '';
  }
  else {
    for (var i = 0; i < romanMatrix.length; i++) {
      if (number >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + romanNumeralConverter(number - romanMatrix[i][0]);
      }
    }
  }
}
