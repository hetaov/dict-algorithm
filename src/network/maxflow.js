'use strict'

function bfs(rGraph, s, t, parent) {
	const visited = [];
	const queue = [];
	const V = rGraph.length;
	// Create a visited array and mark all vertices as not visited
	for (var i = 0; i < V; i++) {
		visited[i] = false;
	}
	// Create a queue, enqueue source vertex and mark source vertex as visited
	queue.push(s);
	visited[s] = true;
	parent[s] = -1;

	while (queue.length != 0) {
		const u = queue.shift();
		for (let v = 0; v < V; v++) {
			if (visited[v] == false && rGraph[u][v] > 0) {
				queue.push(v);
				parent[v] = u;
				visited[v] = true;
			}
		}
	}
	//If we reached sink in BFS starting from source, then return true, else false
	return (visited[t] == true);
}

function fordFulkerson(graph, s, t) {
	/* Create a residual graph and fill the residual graph
	 with given capacities in the original graph as
	 residual capacities in residual graph

	 Residual graph where rGraph[i][j] indicates
	 residual capacity of edge from i to j (if there
	 is an edge. If rGraph[i][j] is 0, then there is
	 not)
	*/
  if (s < 0 || t < 0 || s > graph.length-1 || t > graph.length-1){
    throw new Error("Ford-Fulkerson-Maximum-Flow :: invalid sink or source");
  }
  if(graph.length === 0){
    throw new Error("Ford-Fulkerson-Maximum-Flow :: invalid graph");
  }
	const rGraph = [];
	for (let u = 0; u < graph.length; u++) {
		const temp = [];
    if(graph[u].length !== graph.length){
      throw new Error("Ford-Fulkerson-Maximum-Flow :: invalid graph. graph needs to be NxN");
    }
		for (let v = 0; v < graph.length; v++) {
			temp.push(graph[u][v]);
		}
		rGraph.push(temp);
	}
	const parent = [];
	let maxFlow = 0;

	while (bfs(rGraph, s, t, parent)) {
		let pathFlow = Number.MAX_VALUE;
		for (let v = t; v != s; v = parent[v]) {
			const u = parent[v];
			pathFlow = Math.min(pathFlow, rGraph[u][v]);
		}
		for (let v = t; v != s; v = parent[v]) {
			const u = parent[v];
			rGraph[u][v] -= pathFlow;
			rGraph[v][u] += pathFlow;
		}


		maxFlow += pathFlow;
	}
  console.log(rGraph, ' glll graph ');
  console.log(graph, ' before ');
	// Return the overall flow
	return maxFlow;
}

export {
  fordFulkerson,
  bfs,
}