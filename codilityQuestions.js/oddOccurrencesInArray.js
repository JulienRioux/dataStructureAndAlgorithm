
const myArr = [9, 3, 9, 3, 9, 7, 9];

function solution(arr) {
  // create an object that store the number of time the item occur in the array
  let countObj = {};
	// loop over the array
	for(let i = 0; i < arr.length; i++){
		const item = arr[i];
		// increment his count if the item already in the countObj
		if(countObj[item] !== undefined) countObj[item]++;
		// else init it to the countObj
		else {
			countObj[item] = 1;
		}
	}

	// loop over the object and check which has the counter value of 1
	for(let key in countObj){
		if(countObj[key] % 2 !== 0) return Number(key);
	}
}

console.log(solution(myArr));  // 7
