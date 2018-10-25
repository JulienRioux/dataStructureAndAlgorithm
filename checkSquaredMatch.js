// write a function that check if every item in an array contain all his squared value in the second array.

// Naive version

// function frequencyCounter(arr1, arr2){
// 	if(arr1.length !== arr2.length){
// 		return false;
// 	}
// 	for(let i = 0; i < arr1.length; i++){
// 		let correctIndex = arr2.indexOf(arr1[i] ** 2)
// 		if(correctIndex === -1){
// 			return false
// 		}
// 		arr2.splice(correctIndex, 1)
// 	}
// 	return true
// }

function frequencyCounter(arr1, arr2){
	// check if the array are the same length
	if(arr1.length !== arr2.length){
		return false;
	}
	// init the frequency counter obj
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	// loop over the first array and populate the frequency object
	for(let val of arr1){
		// increment or init the frequency counter
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
	}
	// loop over the second array and populate the frequency object
	for(let val of arr2){
		// increment or init the frequency counter
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
	}
	// Check if there is the same counter for each item on both frequency obj
	for(let key in frequencyCounter1){
		// check if there is a key in the second array that is the key squared
		if(!(key**2 in frequencyCounter2)){
			return false
		}
		// check if the value match
		if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
			return false;
		}
	}
	return true
}

console.log(frequencyCounter([1,2,3,2], [4,4,1,9]))  // true
console.log(frequencyCounter([1,2,3], [1,0]))  // false
