// Write a function that return an object of every alphanum char lowercased with his number of occurance in the string

function charCount(str) {
	// create an empty object to store the data
	let charObj = {};
	// lowercase the string
	str = str.toLowerCase();
	// loop over the string
	str.split("").forEach(character => {
		// check if its alphanum
		// check if alphanum using regex
		const regExp = /^[A-Za-z0-9]+$/;
		if(character.match(regExp)){
			// implement his count if not in object || add it in the object and init the count
			if(character in charObj){
				charObj[character]++;
			} else {
				charObj[character] = 1;
			}
		}
	});
	// return the result
	return charObj;
}

console.log(charCount("Hellsdfgfsdgfgfd*fgs335O"))
