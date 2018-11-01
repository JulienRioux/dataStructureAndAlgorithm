
class Graph {
	constructor(){
		this.adgencyList = {}
	}

	addVertex(vertex){
		if(!this.adgencyList[vertex]){
			this.adgencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2){
		// find vertex1 and push vertex2 inside and vice versa
		this.adgencyList[vertex1].push(vertex2);
		this.adgencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2){
		// remove vertex2 from the vertex1 array and vice versa
		this.adgencyList[vertex1] = this.adgencyList[vertex1].filter(vertex => vertex !== vertex2);
		this.adgencyList[vertex2] = this.adgencyList[vertex2].filter(vertex => vertex !== vertex1);
	}

	removeVertex(vertex){
		// remove all the edge that contain the vertex
		let edges = this.adgencyList[vertex];
		for(let i = 0; i < edges.length; i++){
			const city = edges[i];
			this.adgencyList[city] = this.adgencyList[city].filter(v => v !== vertex);
		}
		// this.adgencyList[vertex] = [];
		delete this.adgencyList[vertex];
	}
}


let graph = new Graph();

graph.addVertex("Montreal");
graph.addVertex("Tokyo");
graph.addVertex("Vancouver");
graph.addVertex("New-York");

graph.addEdge("Montreal", "Vancouver");
graph.addEdge("Vancouver", "Tokyo");
graph.addEdge("Montreal", "Tokyo");
graph.addEdge("Montreal", "New-York");
graph.addEdge("New-York", "Tokyo");

graph.removeVertex("Tokyo");
// graph.removeVertex("Vancouver");





// graph.removeEdge("Montreal", "Tokyo");

console.log(graph);
