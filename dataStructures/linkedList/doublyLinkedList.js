
class Node {
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		// create the new node
		let newNode = new Node(val)
		// check if list is empty => head & tail == new node
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}
		// else take the current tail => next = new node && new node prev = oldTail
	  // update the tail property
		else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		// increment the length
		this.length++;
		// return the list
		return list
	}

	pop(){
		if(this.length === 0) return undefined;
		let removed = list.tail;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}
		else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			removed.prev = null;
		}
		this.length--;
		return removed;
	}

	shift(){
		if(this.length === 0) return undefined;
		let removed = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.head = this.head.next;
			this.head.prev = null;
			removed.next = null;
		}
		this.length--;
		return removed;
	}

	unshift(val){
		let newNode = new Node(val);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			let oldHead = this.head;
			this.head = newNode;
			oldHead.prev = this.head;
			this.head.next = oldHead;
		}
		this.length++;
		return this;
	}

	get(index){
		// check if the length === 0;
		if(index < 0 || index >= this.length) return undefined;
		// check if we start from the begining or the end
		let item;
		if(index < this.length / 2){
			item = this.head
			// iterate until you got the item at the right index and store it
			for(let i = 0; i < index; i++){
				item = item.next;
			}
		} else {
			item = this.tail;
			index = this.length - index-1;
			for(let i = 0; i < index; i++){
				item = item.prev;
			}
		}
		// return the item
		return item;
	}

	set(index, val){
		let item = this.get(index);
		if(item !== undefined){
			item.val = val;
			return true;
		}
		return false;
	}

	insert(index, val){
		if(index < 0 || index >= this.length) return false;
		if(index === 0) return !!this.unshift(val);
		if(index === this.length-1) return !!this.push(val);

		let newNode = new Node(val);
		let item = this.get(index);
		// set the prev and next value of the new node
		newNode.prev = item.prev;
		item.prev.next = newNode;
		newNode.next = item;
		this.length++;
		return true;
	}

	remove(index){
		if(index < 0 || index >= this.length) return undefined;
		if(index === 0) return this.shift();
		if(index === this.length-1) return this.pop();

		let removed = this.get(index);
		// recreate the right links
		removed.prev.next = removed.next;
		removed.next.prev = removed.prev;
		// remove the next and prev of the removed item
		removed.next = null;
		removed.prev = null;
		this.length--;
		return removed;
	}
}

let list = new DoublyLinkedList();

list.push("Hello");
list.push("world");
list.push("Goodbye");

console.log(list.remove(1));


let item = list.head;
for(let i = 0; i < list.length; i++){
	console.log(item);
	item = item.next;
}
