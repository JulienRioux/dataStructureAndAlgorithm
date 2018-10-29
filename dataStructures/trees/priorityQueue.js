
class Node {
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

class MinBinaryHeap {
	constructor(){
		this.values = [];
	}

	enqueue(val, priority){
		const newNode = new Node(val, priority);
		if(this.values.length === 0){
			this.values.push(newNode);
			return this;
		}
		// push the value to the value property
		this.values.push(newNode);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2) ;
		let parent = this.values[parentIndex];
		while(parent && this.values[index].priority < parent.priority){
			// swap the values
			this.values[parentIndex] = newNode;
			this.values[index] = parent;
			// change the index value
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2) ;
			parent = this.values[parentIndex];
		}
		return this.values;
	}


	dequeue(){
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

			let bigChild;
			let bigChildIndex;

			if(left === undefined && right === undefined) return extracted;
			else if(left === undefined){
				bigChild = right;
				bigChildIndex = rightIndex;
			}
			else if(right === undefined){
				bigChild = left;
				bigChildIndex = leftIndex;
			} else {
				bigChild = left.priority < right.priority ? left : right;
				bigChildIndex = left.priority < right.priority ? leftIndex : rightIndex;
			}

			// SWAP if needed
			if(popped.priority > bigChild.priority){
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

let priorityQueue = new MinBinaryHeap();

priorityQueue.enqueue("common cold", 5);
priorityQueue.enqueue("gunshot wound", 1);
priorityQueue.enqueue("high fever", 4);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 3);

console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
