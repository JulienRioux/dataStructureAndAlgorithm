// Write a function that rotate the array k times
// rotate is shifting the last index to the first

A = [3, 8, 9, 7, 6];
K = 3

function solution(arr, k) {
	// check for test cases if k is bigger than the length of the array!
	k = k % arr.length;
	// slice the array at k item starting from the end
	let newArr = arr.slice(arr.length-k)
	// put it back in front
	newArr = newArr.concat(arr.slice(0, arr.length-k))
	// return the array rotated
	return newArr;
}



console.log(solution(A, K));  // [9, 7, 6, 3, 8]
