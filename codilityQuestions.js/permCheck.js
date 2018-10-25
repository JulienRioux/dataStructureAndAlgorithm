
// const A = [1,4,2];
const A = [4,1,3,2];
// const A = [1,4,2,2];
// const A = [1000000000];

// permutation: array that contain [1 to N] one time only each
function solution(arr) {
  // init a object that hold the different element of the array
	let diffElem = {};
	// loop in the array
	for(let i = 0; i < arr.length; i++){
		const item = arr[i];
		// if the item is not in the diffElem obj add it
		if(diffElem[item] === undefined) diffElem[item] = 1;
		// if its there, return 0
		else return 0;
	}

	// return 1 if it is a permutation
  for(let i = 1; i <= arr.length; i++){
		if(diffElem[i] === undefined) return 0
	}
	return 1;
}

console.log(solution(A));
