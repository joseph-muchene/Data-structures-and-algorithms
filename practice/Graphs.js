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

  DepthFirstIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};

    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();

      result.push(vertex);

      this.nodeList[vertex].forEach((neighbor) => {
        // check if visited
        if (!visited[neighbor]) {
          visited[neighbor] = true;

          stack.push(neighbor);
        }
      });
    }
  }

  breadthFirst(start) {
    const result = [];
    const queue = [start];
    const visited = {};

    visited[start] = true;
    result.push(start);

    while (queue.length) {
      const currentVal = queue.shift();

      this.nodeList[currentVal].forEach((neighbor) => {
        // check if visted
        if (!visited[neighbor]) {
          visited[true];

          queue.push(neighbor);
        }
      });
    }
  }
}
