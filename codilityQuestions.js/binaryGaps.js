function solution(num) {
	// transform the integer to binary
    let bin = num.toString(2);
		// split the string at every 1
		bin = bin.split("1");
		// remove the first and the last item in the array (not surrounded by 1)
		bin = bin.slice(1, bin.length-1);
		// init a max
		let max = 0;
		bin.forEach(item => {
			if(item.length > max) max = item.length;
		})
		return max;
}

console.log(solution(529));  // 4
