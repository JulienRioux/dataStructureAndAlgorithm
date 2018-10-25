// Create an array of random value
const data = Array.apply(null, {length: 10}).map(Function.call, Math.random)

// const data = [4,23,13,61,88,3,8,12,9,-10];
// const data = [1, 9, 76, 0];

function mergeSort(arr){
	console.log(arr);
}

console.log(mergeSort(data));
