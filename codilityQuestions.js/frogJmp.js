X = 10
Y = 1000
D = 30

// count the minimal jump to reach y from x
function solution(X, Y, D) {
	// check if the X < Y otherwise its already there or passed (return 0)
	if(X < Y){
		// if not substract X to Y and divide by D to get the number of step
		return Math.ceil((Y - X) / D);
		// Round to the highest integer
	}
	return 0;
}

console.log(solution(X, Y, D));
