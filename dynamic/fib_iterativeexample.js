function fibDynamic(n) {
  let fibNumbers = [0, 1];

  for (var j = 2; j <= n; j++) {
    fibNumbers[j] = fibNumbers[j - 1] + fibNumbers[j - 2];
  }

  return fibNumbers[n];
}

fibDynamic(1476);
// first 1 is the first fibonacci number
// 0, 1, 1, 2, 3, 5, 8
lkjljlkhlkjhk
