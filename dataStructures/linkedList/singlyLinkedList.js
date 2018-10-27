
class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		const newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop(){
		// if nothing is in the head return undefined
		if(this.length === 0) return undefined;
		// otherwise loop through the list until you reach the tail
		let current = this.head;
		let newTail = current;
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		console.log(list);
		return current;
	}

	shift(){
		if(this.length === 0) return undefined;
		const currentHead = this.head;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}
		else {
			this.head = this.head.next;
		}
		this.length--;
		console.log(list);
		return currentHead;
	}

	unshift(val){
		const newNode = new Node(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index){
		// if the index is < 0 || greater or == to the list length, return null
		if(index < 0 || index >= list.length) return null;
		// loop trough the list and return the specific node at the specific index
		let current = this.head;
		for(let i = 0; i < index; i++){
			current = current.next
		}
		return current;
	}

	set(index, val){
		let item = this.get(index);
		if(item){
			item.val = val;
			return true;
		}
		return false;
	}

	insert(index, val){
		if(index < 0 || index > this.length) return false;
		if(index === 0) return !!this.unshift(val);
		if(index === this.length) return !!this.push(val);

		let newNode = new Node(val);
		newNode.next = this.get(index);
		this.get(index-1).next = newNode;
		this.length++;
		return true;
	}

	remove(index){
		if(index < 0 || index > this.length) return undefined;
		if(index === 0) return this.shift();
		if(index === this.length-1) return this.pop();

		const removed = this.get(index);
		this.get(index-1).next = this.get(index+1);
		this.length--;
		return removed;
	}

	reverse(){
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for(let i = 0; i < this.length; i++){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log("===>", list.reverse());

for(let i = 0; i < list.length; i++){
	console.log("*", list.get(i).val);
}
