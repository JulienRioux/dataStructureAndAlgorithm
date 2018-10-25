// Write a function that take an sorted array of integer and that return the first pair where the sum equal to 0

function sumZero(arr){
	// init a left and right pointer
	let left = 0;
	let right = arr.length-1
	// continue while the left item is smaller than the left item
	while(left < right){
		// return the pair if the left and the right item sum 0
		const sum = arr[left] + arr[right];
		if(sum === 0){
			return [arr[left], arr[right]];
		}
		// if not and sum > 0 decrement the left else increase the right
		sum > 0 ? right-- : left++;
	}
}



console.log(sumZero([-3,-2,-1,0,1,2,3]));  // [-3, 3];
console.log(sumZero([1,2,3]));  // undefined
console.log(sumZero([-7,-5,-1,1,2,3]));  // [-1, 1];
