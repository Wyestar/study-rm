/*
A magical sub-sequence of a string S is a sub-sequence of S that contains all five vowels in order. Find the length of largest magical sub-sequence of a string S.

For example, if S = aeeiooua, then aeiou and aeeioou are magical sub-sequences but aeio and aeeioua are not.

other test cases:
S = "aeiouaaeeaiioooooieuau" => aaeeiiooooouu is longest subsequence. return 13
*/

// for each vowel, find largest consecutive block
// if they are in order, add lengths
// find all possible magic subsequences, and store them
// return the length of the longest one 

// below is not true
// after an 'a', next char must be another 'a' or 'e'
// after 'e', next must be 'e' or 'i', and so forth

// find leftmost 'a' and rightmost 'u', doesn't really help?

// assuming input is only lowercase vowels

function magic(str) {
	vowels = ["a", "e", "i", "o", "u"];
	
	for (i = 0; i < str.length; i++) {
	  if (str[i] === vowels[0]) {
	    // found 'a', subsequence can be to the right of the 'a'
	    
	  }
	}
	
	return null;
}

let string = "aeiouaaeeaiioooooieuau";
magic(string);