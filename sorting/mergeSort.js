// merge function
function merge(arr1, arr2){
	// init a sorted array
	let sortedArr = [];
	// init index for arr and arr2
	let index1 = 0;
	let index2 = 0;
	// loop over both array length
	for(let i = 0; i < (arr1.length + arr2.length); i++){
		// push the smallest value in the sorted array
		// check for undefined value
		if(arr2[index2] === undefined || arr1[index1] <= arr2[index2]){
			sortedArr.push(arr1[index1]);
			index1++;
		}
		else {
			sortedArr.push(arr2[index2]);
			index2++;
		}
	}
	// return the sorted array
	return sortedArr;
}

function mergeSort(arr){
	// check for base case (arr.length === 1 || 0)
	if(arr.length <= 1) return arr;
	// split the arr and recursive call
	let middle = Math.round(arr.length / 2);
	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle));
	// return the merged array
	return merge(left, right)
}

// const data = [2,1,4,3,6,5,0];

function randomData() {
	const range = 20;
	return Math.round(Math.random() * (range * 2)) - range;
}
const arrLength = Math.floor(Math.random() * 10) + 5;
const data = Array.apply(null, {length: arrLength}).map(Function.call, randomData);

console.log(mergeSort(data));
