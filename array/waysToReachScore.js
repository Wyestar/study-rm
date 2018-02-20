// points comes in 1, 2, or 4, given n, find how many ways that score can be reached.
// n = 3 
// there are three ways;
// 1 + 1 + 1 
// 1 + 2 
// 2 + 1

// find all combinations until they sum to equal of n
// subtract 1; find all permutations until 0
// subtract 1, 2, and 4 

// subtract 2; find all permutations until 0
//

// subtract 4; find all permutations until 0

let pointsObj = {
  1: 1,
  2: 2,
  4: 4 
};

let pointsArr = [1, 2, 4];

let one = 1;
let two = 2;
let four = 4;

function scoring(n, one, two, four) {
  let counter = 0;
  let temp = 0;
  
  // base cases are when n are any of the obtainable score values
  if (n - one === 0) {
    counter += 1;
  }
  else if (n - two === 0) {
    counter += 2;
  }
  else if (n - four === 0) {
    counter += 6;
  }
}

// scoring(3);

/////////////////////////////////////
//Scoring options are 1, 2, 4
// options are 2, 5
let scoring_options_dp = function(n) {
  if (n <= 0) {
    return 0;
  }
  
  // 2(3) and 5(0)
  let result = [0,0,0,0,1]
  
  for (let i = 1; i < n + 1; i++) {
    let current_sum = result[3] + result[0];
    
    result[0] = result[1];
    result[1] = result[2];
    result[2] = result[3];
    result[3] = result[4];
    result[4] = current_sum;
  }
  
  console.log(result);
  return result[4];
};

scoring_options_dp(7);