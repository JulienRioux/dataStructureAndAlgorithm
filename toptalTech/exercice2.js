const A = [9,4,2,10,7,8,8,1,9];  // 5
// const A = [4,8,12,16];  // 2
// const A = 100;  // 1

// count the number of turbulance
// Sliding window!
function solution(arr) {
	// check if less than 2 movement
	if(arr.length <= 2) return arr.length;
	// init a max counter as the first turbulance
	let max = 0;
	// setup a tempCounter
	let tempCounter = 1;
	// setup a direction of the place (desc or asc or neutral)
	let direction = arr[0] > arr[1] ? "desc" : "asc";
	if(arr[0] === arr[1]) direction = "neutral";
	// loop over the array
	for(let i = 1; i < arr.length-1; i++){
		let incrementer = 1;
		// if the turbulance stand still add 2 turbulance zone time
		if(i+1 === arr.length-1) incrementer += 2;
		if((arr[i] < arr[i+1]) && direction === "asc"){
			// check if the plane is asc and was desc the last period
			tempCounter += incrementer;
			direction = "desc";
		} else if((arr[i] > arr[i+1]) && direction === "desc"){
			// check if the plane is desc and was asc the last period
			tempCounter += incrementer;
			direction = "asc";
		} else if(arr[i] === arr[i+1]){
			// reinit the tempCounter
			tempCounter = 1;
			direction = "neutral"
		} else {
			tempCounter = 1;
		}
		// check if tempCounter is bigger than max
		if(tempCounter > max) max = tempCounter;
	}
	// return the max
	return max;
}

console.log(solution(A));
