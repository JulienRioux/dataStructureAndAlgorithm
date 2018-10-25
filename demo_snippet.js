let nums = [4,3,13,6,8,3,8,1,9,10];

function sorting(arr){
	// create an empty arr
	let newArr = [];
	while(arr.length > 0){
		// create the temp smallest value
		let tempVal = arr[0];
		let tempInd = 0;
		// loop over the array
		for(let i = 1; i < arr.length; i++){
			// find the smallest element
			if(arr[i] <= tempVal){
				// replace the smallest temp value and index
				tempVal = arr[i];
				tempInd = i;
			}
		}
		// push the smallest value inside the new array
		newArr.push(tempVal);
		// remove the value from the initial arr
		arr.splice(tempInd, 1)
		tempVal = arr[0];
	}
	return newArr;
}

console.log(sorting(nums));
