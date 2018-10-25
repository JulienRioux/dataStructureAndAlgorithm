
// const A = [2,1,1,2,3,1,1,2,3,2,4,3,5,4,5,6,5,7,5,6,4,3];
const A = [-1000, 0, -99, 192, 1000, 99, 1000];

// Count the number of different value inside the array
function solution(arr) {
	// create an empty diffObj;
	let diffObj = {};
	// init a counter
	let counter = 0;
	// loop over the array
	for(let i = 0; i < arr.length; i++){
		const item = arr[i];
		// check if the item is in diffObj
		if(diffObj[item] === undefined){
			// Add the number if its not there yet
			diffObj[item] = 1;
			// increment the counter
			counter++;
		}
	}
  // return the counter
	return counter;
}

console.log(solution(A));










































// const myArr = [1,1,2,2,2,3,3,4,5,6,7,7,8,8,8,8,8,7,8,6,5,9];
//
// // find the number of different element in an array
// function solution(arr){
// 	// create an empty for the different element object
// 	let elemObj = {};
// 	// init a counter
// 	let counter = 0;
// 	// iterate over the array
//   for(let i = 0; i < arr.length; i++){
// 		// set up the current item in a variable
// 		const current = arr[i];
// 		// check if the item is not in the different element object
// 		if(!(current in elemObj)){
// 			// add it to the dictionary if not
// 			elemObj[current] = 1;
// 			// increment the counter
// 			counter++;
// 		}
// 	}
// 	// return the counter
// 	return counter;
// }
//
// console.log(solution(myArr));
