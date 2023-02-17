class Graph {
  constructor() {
    this.nodeList = {};
  }

  addNode(vertex) {
    if (this.nodeList[vertex]) return null;
    this.nodeList[vertex] = [];
  }

  addEdges(vertex, edge) {
    this.nodeList[vertex].push(edge);
    this.nodeList[edge].push(vertex);
  }

  removeEdge(vertex, edge) {
    this.nodeList[vertex].filter((c) => c !== edge);
    this.nodeList[edge].filter((y) => y !== vertex);
  }
  removeVertex(vertex) {
    while (this.nodeList[vertex].length > 0) {
      const value = this.nodeList[vertex].pop();

      this.removeEdge(vertex, value);
    }

    delete this.nodeList[vertex];
  }

  depthFirstSearch(start) {
    const result = [];

    const visited = {};

    const nodeList = this.nodeList;

    (function Dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;

      result.push(vertex);

      nodeList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return Dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}
