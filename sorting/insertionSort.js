// Random array of number between -100 and 100
function randomData() {
	const range = 100;
	return Math.round(Math.random() * (range * 2)) - range;
}
const data = Array.apply(null, {length: 10}).map(Function.call, randomData);

// let data = [4,23,13,61,88,3,8,12,9,-10];
// let data = [1, 9, 76, 0];

function insertionSort(arr){
	// loop over the array starting from the 2nd element
	for(let i = 1; i < arr.length; i++){
		// setup the currentVal
		const currentVal = arr[i];
		// setup the currentVal index
		let index = i;
		// loop reverse from the 2nd element and stop if j-1 is > than current value
		for(let j = i; i >= 0 && currentVal <= arr[j-1]; j--){
			// swap the value of j-1 to j
			arr[j] = arr[j-1];
			// change the value of the currentVal index
			index = j-1;
		}
		// insert the currentVal at the index it should be
		arr[index] = currentVal;
	}
	// return the array
	return arr;
}

console.log(insertionSort(data));
