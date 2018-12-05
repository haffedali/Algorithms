function escape(maze) {
    //input [x,y] for x
    //stringifyyyyy
    function stringCoord(x){
        let string = x[0].toString() + "," + x[1].toString();
        return string
    }
    class Graph {
        constructor(noOfVertices){
            this.noOfVertices = noOfVertices;
            this.AdjList = new Map();
        }
    

        //adds node to adjacency list after stringify
        /**
         * @param {string} column - the 'x-coordinate' of the node we are adding
         * @param {string} row - the 'y-coordinate' of the node we are adding
         */
        addVertex([v,w]){
            let string = stringCoord([v,w])
            this.AdjList.set(string, []);
        }
        

        //adds edges to node if not existing already...prob
        /**
         * 
         * @param {string} firstpair - column,row pair
         * @param {string} secondpair -column,row pair
         */
        addEdge([v,w],[x,y]){
            let string = stringCoord([v,w])
            let string2 = stringCoord([x,y])
            if (this.AdjList.get(string).indexOf(string2) === -1){
                this.AdjList.get(string).push(string2)
            }
            if (this.AdjList.get(string2).indexOf(string) === -1){
                this.AdjList.get(string2).push(string)
            }
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
        //dfs(v)
    }

    var rows = maze.length;
    var collumns = maze[0].length;
    var verticesCount = 0;

    //function to be run to check the neighbors of a specific node
    function neighbors(x,y){
        if (y<collumns-1){
            if (maze[x][y+1] !== "#"){
                g.addEdge([x,y],[x,y+1])
            }
        }
        if (x<rows-1){
            if (maze[x+1][y] !== '#'){
                g.addEdge([x,y],[x+1,y])
            }
        }
        if (y !== 0){
            if (maze[x][y-1] !== '#'){
                g.addEdge([x,y],[x,y-1])
            }
        }
        if (x !== 0){
            if (maze[x-1][y] !== '#'){
                g.addEdge([x,y],[x-1,y])
            }
        }
    }

    //here we get the starting indice and the position of person
    //stepping through each indice of maze
    for (let i=0;i<maze.length;i++){
        //stepping through each indice of maze
        for (let j=0;j<maze[i].length;j++){
            // neighbors(i,j)
            if (maze[i][j] !== '#'){
                verticesCount++
                if (maze[i][j] !== ' '){
                    switch(maze[i][j]){
                        case(">"):
                            startPos = "right";
                            break;
                        case("<"):
                            startPos = "left";
                            break;
                        case("^"):
                            startPos = "up";
                            break;
                        case("v"):
                            startPos = "down";
                            break;
                    }
                }
            }
        }
    }

    var g = new Graph(verticesCount);
    function bfs(){
        //stepping through each indice of maze
        for (let i=0;i<maze.length;i++){
            for (let j=0;j<maze[i].length;j++){
                if (maze[i][j] !== "#"){
                    g.addVertex([i,j])
                    neighbors(i,j)
                }
            }
        }
        //dont remember why i had to loop twice
        for (let i=0;i<maze.length;i++){
            for (let j=0;j<maze[i].length;j++){
                if (maze[i][j] !== "#"){
                    // g.addVertex([i,j])
                    // neighbors(i,j)
                }
            }
        }
    }
    bfs();
    g.printGraph();
    
  }

  escape(['#########',
          '#>     ##',
          '### ## ##',
          '###### ##'])