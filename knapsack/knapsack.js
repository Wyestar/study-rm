// Knapsack Problem

// You are given an array of arrays. Each subarray in this array holds two integer values and represents an item; the first integer is the item's value, and the second integer is the item's weight. You are also given an integer representing the maximum capacity of a knapsack that you have. Your goal is to fit items in your knapsack, all the while maximizing their combined value. Note that the sum of the weights of the items that you pick cannot exceed the knapsack's capacity. Write a function that returns the maximized combined value of the items that you should pick, as well as an array of the indices of each item picked. Assume that there will only be one combination of items that maximizes the total value in the knapsack.

// Sample input: [[1, 2], [4, 3], [5, 6], [6, 7]], 10
// Sample output: [10, [1, 3]]

var stuff = [[1, 2], [4, 3], [5, 6], [6, 7]];
var bag = 10;

function knapsack(items, limit) {
  // loop through each item and find all ways to sum to bag weight, needs a double loop
  // can store each combination in an object
  // with each combination, find value of grouped items
  // compare all values, return indexes with the appropriate items
  
  
  
}
