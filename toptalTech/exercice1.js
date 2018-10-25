
A = [5,4,0,3,1,6,2];  // 4

// find the neckless with the more bead
function solution(arr) {
	// store the total number of beads
	const total = arr.length;
	// init a totalBead counter
	let totalBeadCount = 0;
	if(total === 0) return 0;
  // init a counter for the max bead neckless
	let counter = 0;
	// loop over the array
	for(let i = 0; i < arr.length; i++){
		// increment the totalBeadCount
		totalBeadCount++;
		// init a temp counter
		let tempCounter = 1;
		// create the first item
		let firstItem = i;
		// init the nextItem
		let nextItem = arr[i];
		// count the number of bead
		while(total !== totalBeadCount && firstItem !== nextItem){
			// increment the counter
			tempCounter++;
			nextItem = arr[nextItem];
		}
		// replace the counter if the tempcounter is bigger
		if(tempCounter > counter) counter = tempCounter
	}

	// return the number max of beads
	return counter;
}


console.log(solution(A));
