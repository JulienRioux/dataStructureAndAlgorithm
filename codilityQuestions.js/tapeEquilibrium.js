let A = [3,1,2,4,3];

// write a function that return the minimal absolute difference between the sum of the non subArrray splitted at P
function solution(arr) {
	// sliding window problem
	// init a left and right sum
	let left = arr[0];
	let right = arr.slice(1).reduce((a, b) => a + b, 0);
	// init the minimum sum value
	let min = Math.abs(left - right);
	// check if there is only 2 value in the array
	if(arr.length === 2) return min;
	// iterate over the array from 2 to arr.length-1
	for(let i = 1; i < arr.length-1; i++){
		// add an element to left and remove one from right
		left += arr[i];
		right -= arr[i];
		// check if it is the minimum value (abs)
		let temp = Math.abs(left - right);
		if(temp < min) min = temp;
	}

	// return the minimum value
	return min;
}

// check for absolute value!
console.log(solution(A));
