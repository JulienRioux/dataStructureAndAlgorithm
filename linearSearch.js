const lst = [1,4,3,2,5,4,7,6,3];

function linearSearch(arr, value){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === value) return i;
	}
	return -1;
}

console.log(linearSearch(lst, 100));
