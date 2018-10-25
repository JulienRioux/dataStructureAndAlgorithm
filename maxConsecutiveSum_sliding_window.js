// Write a function that take an array of integer and a number called n that calculate the maximum sum of n consecutive elements in the array.


function maxSubarraySum(arr, n){
	// check if the array is empty
	if(arr.length === 0){
		return null;
	}
	// reset n if its more than the length of the array
	if(arr.length < n){
		n = arr.length
	}
	// calculate the first sum and keep it in the temp variable
	let temp = 0;
	for(let i = 0; i < n; i++){
		temp += arr[i];
	}
	// init the max variable with the first n numbers
	let max = temp;
	// iterate over the array
	for(let i = 0; i < arr.length - n; i++){
		// add the next value and substract the first
		temp += (arr[i + n] - arr[i]);
		// replace the max if the sum of the n numbers is bigger
		if(temp > max){
			max = temp;
		}
	}
	// return the biggest sum
	return max
}



console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));  // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));  // 17
console.log(maxSubarraySum([4,2,1,6], 1));  // 6
console.log(maxSubarraySum([4,2,1,6,2], 4));  // 13
console.log(maxSubarraySum([], 4));  // null
console.log(maxSubarraySum([1,2], 4));  // 3
