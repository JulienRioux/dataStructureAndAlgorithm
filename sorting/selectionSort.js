let nums = [4,23,13,61,88,3,8,12,9,-10];

function selectionSort(arr){
	// loop over the array
	for(let i = 0; i < arr.length; i++){
		// setup a smallest variable to the first index in the loop
		let smallest = i;
		// loop over the array to find the minimal value
		for(let j = i; j < arr.length; j++){
			// change the minimal value index with the smaller value index
			if(arr[j] < arr[smallest]){
				smallest = j;
			};
		}
		// if needed, swap the first element of the loop by the smallest value founded
		if(i !== smallest){
			const temp = arr[i];
			arr[i] = arr[smallest];
			arr[smallest] = temp;
		}
	}
	// return the swapped array
	return arr;
}

console.log(selectionSort(nums));
