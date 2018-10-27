
function pivot(arr, start, end){
	// swap function
	function swap(arr, i, j){
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	// init the pivot variables
	const pivotValue = arr[start];
	let pivotIndex = start;
	// loop over the array
	for(let i = pivotIndex; i <= end; i++){
		// if bigger, increment pivot index and swap
		if(pivotValue > arr[i]){
			pivotIndex++;
			swap(arr, i, pivotIndex);
		}
	}
	// swap the pivotValue at the right place
	swap(arr, start, pivotIndex);
	// return the pivot index
	return pivotIndex;
}
// console.log(pivot(arr, 0, arr.length-1));

function quickSort(arr, left=0, right = arr.length-1){
	if(left < right){
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex-1);
		// right
		quickSort(arr, pivotIndex+1, right);
	}
	return arr;
}

const arr = [-3,100,4,6,9,1,2,-2,5,3];

console.log(quickSort(arr));
