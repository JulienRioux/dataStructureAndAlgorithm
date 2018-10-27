// Random array of number between -100 and 100
function randomData() {
	const range = 20;
	return Math.round(Math.random() * (range * 2)) - range;
}

const data = Array.apply(null, {length: 100000}).map(Function.call, randomData);

// let data = [4,23,13,61,88,3,8,12,9,-10];

function bubbleSort(arr){
	// init a hasSwapped to true to start the loop
	let hasSwapped = true;
	// init a counter
	let counter = 1;
	// iterate over the array while there is no more swap
	while(hasSwapped){
		// set the hasSwapped to false once the loop has ended
		hasSwapped = false;
		// loop over the array (removing the already sorted elements that have been bubbled up)
		for(let i = 0; i < arr.length - counter; i++){
			// swap elements if the second is bigger and set hasSwapped to true
			if(arr[i] > arr[i+1]){
				const temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				hasSwapped = true;
			}
		}
		// increment the counter
		counter++;
	}
	// return the sorted array
	return arr;
}

console.log(bubbleSort(data));
