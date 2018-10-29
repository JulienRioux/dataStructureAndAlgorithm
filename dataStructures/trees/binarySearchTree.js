
class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
	}

	insert(val){
		let newNode = new Node(val);
		if(this.root === null) this.root = newNode;

		let current = this.root;
		while(true){
			if(val === current.value) return undefined;
			if(val < current.value){
				if(current.left === null){
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if(val > current.value) {
				if(current.right === null){
					current.right = newNode;
					return this;
				}
				current = current.right
			}
		}
	}

	find(val){
		let current = this.root;
		while(true && current){
			if(val === current.value) {
				return current;
			}
			if(val < current.value){
				current = current.left;
			}
			else {
				current = current.right;
			}
		}
		return false
	}

	breadthFirstSearch(){
		let queue = [];
		let data = [];
		let current;
		queue.unshift(this.root);

		while(queue.length > 0){
			current = queue.pop();
			data.push(current.value);
			if(current.left) queue.unshift(current.left);
			if(current.right) queue.unshift(current.right);
		}
		return data;
	}

	DFSPreOrder(){
		let data = [];
		if(this.root === null) return data;
		function traverse(node){
			data.push(node.value);
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	DFSPostOrder(){
		let data = [];
		if(this.root === null) return data;
		function traverse(node){
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.root);
		return data;
	}

	DFSInOrder(){
		let data = [];
		if(this.root === null) return data;
		function traverse(node){
			if(node.left) traverse(node.left);
      data.push(node.value);
			if(node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(7);
tree.insert(2);
tree.insert(14);
tree.insert(23);
tree.insert(1);


// console.log(tree.breadthFirstSearch());

// console.log(tree.DFSPreOrder());
// console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
