


function solution(arr) {
  // sort the array
  // if there is triplet, it have to be 3 consecutive number once the array is sorted
  arr.sort((a, b) => (a - b))
  // loop over the array
  for(var i = 0; i < arr.length - 2; i++) {
	// check for tripplet possibility
    const p = arr[i];
    const q = arr[i + 1];
    const r = arr[i + 2];
		// check if its a triangular triplet
    if(p + q > r && q + r > p && r + p > q) return 1;
  }
  // if not found, it's not triangular
  return 0
}
