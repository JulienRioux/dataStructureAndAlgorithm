const arr = [32,123,4,120,0,123,22,2033,34,1];

// function getDigit(num, place){
// 	return Number(("" + num).split("").reverse().join("")[place]) || 0
// }

function getDigit(num, i){
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
	if(num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
	let max = 0;
	for(let i = 0; i < arr.length; i++){
		if(digitCount(arr[i]) > max) max = digitCount(arr[i]);
	}
	return max;
}


function radixSort(arr){
	// find the most digits number
	const maxDigits = mostDigits(arr);
	// loop over to the most digit
	for(let i = 0; i < maxDigits; i++){
		// create buckets for each digits (0-9)
		// let buckets = [[],[],[],[],[],[],[],[],[],[]]
		let buckets = Array.from({ length: 10 }, () => [])
		// place each numbers in the corresponding bucket
		for(let j = 0; j < arr.length; j++){
			const index = getDigit(arr[j], i);
			buckets[index].push(arr[j]);
		}
		// concat the arrays
		arr = [].concat(...buckets)
		// console.log(buckets);
	}
	return arr;
}

console.log(radixSort(arr));
