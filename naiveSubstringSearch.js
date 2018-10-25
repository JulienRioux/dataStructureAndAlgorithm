// =======================
//   NAIVE STRING SEARCH
// =======================

// Searching the number of substring in a string

// let string = "wowomgzomg";
// let pattern = "omg";

let string = "harrold said haha to the hamburger.";
let pattern = "ha";

// let string = "harrold said haha to the hamburger.";
// let pattern = "haha";

// let string = "lorie loled";
// let pattern = "lol";

// ************************************************
//            Check for KMP Algorithm
// ************************************************

function naiveStringSearch(str, pat){
	// implement a counter
	let counter = 0;
	// loop over the string
	for(let i = 0; i < str.length - (pat.length - 1); i++){
		// if char we're looping is the same as our first char pattern
		if(str[i] === pat[0]){
			// start a counter
			let patCount = 0;
			// loop over the pattern to see if char match
			for(let j = 0; j < pat.length; j++){
				// if it match, increment the pattern counter
				if(pat[j] === str[i+j]) patCount++;
			}
			// check if the patCount is the same as the length of the pattern
			if(patCount === pat.length) counter++;
		}
	}
	return counter;
}

console.log(naiveStringSearch(string, pattern));
