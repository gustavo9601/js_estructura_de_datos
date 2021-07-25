/*
   2 - 0
  / \
 1 - 3
*/

// Edge List

const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
];

// Adjacent List
//       0    1     2        3
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph2 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
};

// Adjacent Matrix

const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
];

const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
};


class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        // crea el indice vacio
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(node1, node2) {
        // agregar por los indices el nodo pasado por parametro
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();

myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");

console.log("myGraph", myGraph)

myGraph.addEdge("3", "5");
myGraph.addEdge("6", "3");
myGraph.addEdge("1", "6");
myGraph.addEdge("1", "3");
myGraph.addEdge("1", "4");
myGraph.addEdge("4", "5");
myGraph.addEdge("8", "4");


console.log("myGraph", myGraph)
