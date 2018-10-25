// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
//
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
//
// Write a function:
//
// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..2,147,483,647].
// Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solution(N){
	// init a max variable
	let max = 0;
	// convert the number to binary
	let binary = N.toString(2);
	// split the number at every "1"
	binary = binary.split("1");
	// remove the first and the last element of the array (not surronded)
	binary = binary.slice(1, binary.length-1)
	// get the length of the biggest sequence
	binary.forEach(item => {
		// get the length of the item
		const temp = item.length;
		// check if its bigger than the actual max
		if(temp > max){
			max = temp;
		}
	})
	// return the max
	return max;
}

console.log(solution(1041));
