// given intervals in arrays of length two, merge all possible overlapping intervals into one interval
// [ [10, 13], [11, 15] ] => [10, 15]

// find all index zeroes, find minumum, use it's end to see if it can be in the interval of further ones. keep track of that interval max, at end, return an array that has min and max in an interval

// make an interval, and keep updating/expanding it as loop continues. this may not result in the largest loop though.
// make a new interval for any interval found that does not fit
// compare differences between intervals and return largest one.