const lst = [1,2,3,5,7,9,11,12,14,16,19];
// const lst = [1,2,3,4,5,6,7]

function binarySearch(arr, value){
	// get the upper and lower index value
	let lower = 0;
	let upper = arr.length-1;
	// while the upper value is greater or equal to the lower
	while(upper >= lower){
		// get the middle index value
		let middle = Math.floor((upper+lower) / 2);
		// if the middle index item equal the value return the middle index
		if(value === arr[middle]) return middle;
		// if value > the middle index item: change the lower value to the middle + 1 else change the upper to the middle - 1;
		value > arr[middle] ? lower = middle + 1 : upper = middle - 1;
	}
	// return the -1 index if not found
	return -1;
}

console.log(binarySearch(lst, 5));
console.log(binarySearch(lst, 3));
console.log(binarySearch(lst, 19));
console.log(binarySearch(lst, 15));
console.log(binarySearch(lst, 111));
