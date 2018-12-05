class Graph {
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    //functions to be implemented
    //addVertex(v)
    addVertex(v){
        this.AdjList.set(v, []);
    }
    //addEdge(v,w)
    addEdge(v, w){
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }
    //printGraph()
    printGraph(){
        var get_keys = this.AdjList.keys();
        for (var i of get_keys){
            //great the corresponding adjacency list for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            //iterate over the adjacency list
            //concatenate the values into a string
            for (var j of get_values){
                conc += j + " ";
            }
            console.log(i + " -> " + conc)
        }
    }

    //bfs(v)
    bfs(startingNode){
        var visited = [];
        for (var i=0;i<this.noOfVertices;i++){
            visited[i] = false;
        }
        var q = new Queue();

        
    }
    //dfs(v)
}


var g = new Graph(6);
var vertices = ['a','b','c','d','e','f']

for (var i=0; i<vertices.length;i++){
    g.addVertex(vertices[i]);
}

g.addEdge('a', 'b'); 
g.addEdge('a', 'd'); 
g.addEdge('a', 'e'); 
g.addEdge('b', 'c'); 
g.addEdge('d', 'e'); 
g.addEdge('e', 'f'); 
g.addEdge('e', 'c'); 
g.addEdge('c', 'f'); 

g.printGraph();