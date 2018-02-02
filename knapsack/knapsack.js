// Knapsack Problem

// You are given an array of arrays. Each subarray in this array holds two integer values and represents an item; the first integer is the item's value, and the second integer is the item's weight. You are also given an integer representing the maximum capacity of a knapsack that you have. Your goal is to fit items in your knapsack, all the while maximizing their combined value. Note that the sum of the weights of the items that you pick cannot exceed the knapsack's capacity. Write a function that returns the maximized combined value of the items that you should pick, as well as an array of the indices of each item picked. Assume that there will only be one combination of items that maximizes the total value in the knapsack.

// Sample input: [[1, 2], [4, 3], [5, 6], [6, 7]], 10
// Sample output: [10, [1, 3]]

var stuff = [[1, 2], [4, 3], [5, 6], [6, 7]];
var bag = 10;

function knapsackProblem(items, capacity) {
  const knapsackValues = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = (new Array(capacity + 1)).fill(0);
    knapsackValues.push(row);
  }
  // console.log(knapsackValues ,'matrix constructed')
  for (let i = 1; i < items.length + 1; i++) {
    const currentWeight = items[i - 1][1];
    const currentValue = items[i - 1][0];
    for (let c = 0; c < capacity + 1; c++) {
      if (currentWeight > c) {
        knapsackValues[i][c] = knapsackValues[i - 1][c];
      } else {
        // console.log(knapsackValues[i - 1][c - currentWeight] + currentValue)

        knapsackValues[i][c] = Math.max(knapsackValues[i - 1][c], knapsackValues[i - 1][c - currentWeight] + currentValue);
      }
    }
      console.log(knapsackValues ,'matrix filled')
  }
  return [knapsackValues[items.length][capacity], getKnapSackItems(knapsackValues, items)];
}