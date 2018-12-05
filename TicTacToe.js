function isSolved(board){
    var b = {}
    var space = 0;
    for (var i=0;i<board.length;i++){
        var row = i;
        b[row] = board[i];
    }
    for (var i=0;i<board.length;i++){
        if (b[i][0] === b[i][1] && b[i][1] === b[i][2] && b[i][0] !== 0){
            return b[i][0]
        }
        if (b[0][i] === b[1][i] && b[2][i] === b[1][i] && b[0][i] !== 0){
            return b[0][i]
        }
        if (board[i].indexOf(0) !== -1){
            space++
        }
    }
    if (b[0][0] === b[1][1] && b[2][2] === b[1][1] && b[0][0] !== 0){
        return b[0][0]
    }
    if (b[0][2] === b[1][1] && b[1][1] === b[2][0] && b[0][2] !== 0){
        return b[0][2]
    }
    if (space > 0){
        return -1
    }
    if (space === 0){
        return 0
    }
}

isSolved([[0, 1, 2],
          [0, 2, 2],
          [2, 2, 0]])