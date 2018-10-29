
// left child is stored at 2n + 1
// right child is stored at 2n + 2

// parrent from child => Math.floor((n - 1) / 2)

class MaxBinaryHeap {
	constructor(){
		this.values = [];
	}

	insert(val){
		// push the value to the value property
		this.values.push(val);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2) ;
		let parent = this.values[parentIndex];
		while(this.values[index] > parent){
			// swap the values
			this.values[parentIndex] = val;
			this.values[index] = parent;
			// change the index value
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2) ;
			parent = this.values[parentIndex];
		}
		return this.values;
	}


	extractMax(){
		if(this.values.length <= 1) return this.values.pop();
		let index = 0;
		let extracted = this.values[index];
		let popped = this.values.pop();
		this.values[index] = popped;

		while(true){
			let leftIndex  = 2 * index + 1;
			let rightIndex = 2 * index + 2;
			let left = this.values[leftIndex];
			let right = this.values[rightIndex];

			if(left === undefined && right === undefined) return extracted;

			let bigChild = left > right ? left : right;
			let bigChildIndex = left > right ? leftIndex : rightIndex;

			if(left === undefined){
				bigChild = right;
				bigChildIndex = rightIndex;
			}
			if(right === undefined){
				bigChild = left;
				bigChildIndex = leftIndex;
			}

			// SWAP if needed
			if(popped < bigChild){
				this.values[index] = bigChild;
				this.values[bigChildIndex] = popped;
				index = bigChildIndex;
			} else {
				break;
			}
		}
		return extracted;
	}
}

let heap = new MaxBinaryHeap();

heap.insert(10);
heap.insert(5);
heap.insert(8);
heap.insert(6);
heap.insert(7);
heap.insert(3);
heap.insert(9);
heap.insert(14);
heap.insert(11);


console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
