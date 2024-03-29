class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList(v1).push(v2);

    this.adjacencyList(v2).push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList === []) {
      this.adjacencyList[v1].filter((v) => v !== v1);

      this.adjacencyList(v2).filter((v) => v !== v2);
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList(vertex).length > 0) {
      const adjacentVertex = this.adjacencyList(vertex).pop();

      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList(vertex);
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = {};

    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;

      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}
