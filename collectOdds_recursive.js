
// Collect all the odds values in an array

function collectOddValues(arr){
	// init the result array
	let result = [];

	function helper(helperInput){
		// base case => end the recursion
		if(helperInput.length === 0){
			return;
		}
		// Add it to the result array if its an odd number
		if(helperInput[0] % 2 !== 0){
			result.push(helperInput[0]);
		}
		// remove the first element of the  helperInput and recursive call the helper function with it
		helper(helperInput.slice(1));
	}
	// first call the recursive function
	helper(arr);

	return result;
}


console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
