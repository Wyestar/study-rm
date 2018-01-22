function valid(str, index = 0) {
  if (dict[str]) {
    return true;
  }
  let test;
  for (let i = 0; i < str.length; i++) {
    test = str.slice(0, i);
    if (dict[test]) {
      if (valid(str.slice(i), i)) {
        return true;
      }
    }
  }
  return false;
}

// function isSegmented(str, index = 0) {
//   if (dict[str]) return true
//   if (index === str.length) return false
//   let subStr = str.length(0, index + 1)
//   let isSeg = false
//   if (dict[subStr]) {
//     if (isSegmented(str.slice(index + 1))) return true
//   }
//   return isSegmented(str, index + 1)
// }

const dict = {
  hello: true,
  on: true,
  hell: true,
  now: true
}

const str = ""

valid(str)
