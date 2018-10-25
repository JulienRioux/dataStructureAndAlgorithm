// Write a function that determine if the 2 string are anagrams (same numbers of letters)

function isAnagram(str1, str2){
	// Check if the string have the same length
	if(str1.length !== str2.length) return false;
	// create an empty object for both string character counter
	let charCount1 = {};
	let charCount2 = {};
	// iterate over the first string to create the character count dictionnary
	str1.split("").forEach(letter => {
		// increment if the char counter exist or init the counter
		letter in charCount1 ? charCount1[letter]++ : charCount1[letter] = 1;
	})
	// do the same for the second str
	str2.split("").forEach(letter => {
		// increment if the char counter exist or init the counter
		letter in charCount2 ? charCount2[letter]++ : charCount2[letter] = 1;
	})
	// iterate over the first character counter object
	for(let key in charCount1){
		// return false if there is the same count in the second character counter object
		if(charCount1[key] !== charCount2[key]){
			return false;
		}
	}
	// return true if the are the same
	return true;
}

console.log(isAnagram("hello", "hello"));  // true
console.log(isAnagram("hello", "heloo"));  // false
console.log(isAnagram("aaaaa", "aaa"));  // false
console.log(isAnagram("elohl", "hello"));  // true


// Colt solution

// function isAnagram(str1, str2){
// 	// Check if the string have the same length
// 	if(str1.length !== str2.length) return false;
// 	// create an empty object for both string character counter
// 	let charCount1 = {};
// 	// iterate over the first string to create the character count dictionnary
// 	str1.split("").forEach(letter => {
// 		// increment if the char counter exist or init the counter
// 		letter in charCount1 ? charCount1[letter]++ : charCount1[letter] = 1;
// 	})
// 	// do the same for the second str
// 	for(let i = 0; i < str2.length; i++){
// 		const letter = str2[i];
// 		if(!charCount1[letter]){
// 			return false;
// 		} else {
// 			charCount1[letter] -= 1;
// 		}
// 	}
// 	// return true if the are the same
// 	return true;
// }
