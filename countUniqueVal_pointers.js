// Write a function that accept soted array and check how many uinque value are in the array


function countUniqueValues(arr){
	// return the array length if the length is less than 1
	if(arr.length <= 1){
		return arr.length;
	}
	// init a counter to 1
	let counter = 1;
	// iterate over the array through the second last item
	for(let i = 0; i < arr.length-1; i++){
		// increment the counter if the item is not the same as the next one
		if(arr[i] !== arr[i+1]) {
			counter++;
		}
	}
	return counter;
}

console.log(countUniqueValues([1,1,1,1,1,2]));  // 2
console.log(countUniqueValues([1,2,3,4,4,4,5,5,6,7])); // 7
console.log(countUniqueValues([]));  // 0
console.log(countUniqueValues([1]));  // 1
