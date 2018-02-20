/*
A magical sub-sequence of a string S is a sub-sequence of S that contains all five vowels in order. Find the length of largest magical sub-sequence of a string S.

For example, if S = aeeiooua, then aeiou and aeeioou are magical sub-sequences but aeio and aeeioua are not.

other test cases:
S = "aeiouaaeeaiioooooieuau" => aaeeiiooooou is longest subsequence. return 13
*/

// for each vowel, find largest consecutive block
// if they are in order, add lengths
// find all possible magic subsequences, and store them
// return the length of the longest one 

// after 'a', if every block of each vowel is stored, the order of the blocks is important.
// magicss can also start from a later 'a' block
// from each valid partial magicss, build all possible complete magicss
// find length of longest complete 
// store all permutations in an object?

// longest increasing subsequence
// there are potentially many LIS in string, only concerned about the longest

// assuming input is only lowercase vowels

function magic(str, key = 0) {
	console.log(key ,'key');
	console.log(str);
	
	vowels = ["a", "e", "i", "o", "u"];
	
	temp = "";
	for (i = 0; i < str.length; i++) {
	  if (vowels.indexOf(str[i]) === key) {
	    // find all consecutive 'a's if there are any
	    // otherwise, start searching and counting 'e'
	    temp = str.slice(i + 1);
	    if (key === 5) {
	      key = -1;
	    }
	    key = key + 1;
	    // callback with temp and next key (vowel)
	    magic(temp, key);
	  }
	}
	
	return null;
}

let string = "aeiouaaeeaiioooooieuau";
magic(string);
