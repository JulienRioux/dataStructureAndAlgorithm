const myArr = [2,3,1,5];

// given an array, find the missing number to complete the sequence
function solution(arr) {
	// create an empty object to store the numbers
	let numObj = {};
	// iterate over the array and add i to the object
	for(let i = 0; i < arr.length; i++){
		let item = arr[i];
		numObj[item] = 1;  // dummy variable
	}
	let result = 1;
	// iterate from 1 to N+1 and return what item in the sequence that is not in the numObj
	for(let i = 1; i <= arr.length+1; i++){
		if(numObj[i] === undefined) result = i;
	}
	return result;
}


console.log(solution(myArr));
