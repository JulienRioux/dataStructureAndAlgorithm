
// const A = 6
// const B = 11
// const K = 2

const A = 1
const B = 2000000000
const K = 2

function solution(A, B, K) {
	// find the number of time B is divisible by K and round it
	const bDiv = Math.floor(B / K);
	// find the number of time A is divisible by K and round it
	const aDiv = Math.floor(A / K);
	// if A is divisible by K add 1 to the counter
	const isDiv = A % K === 0 ? 1 : 0;

  return bDiv - aDiv + isDiv;
}

console.log(solution(A,B,K));
