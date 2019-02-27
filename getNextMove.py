def getNextMove(x):
    x_count = 0
    o_count = 0
    turn = None
    for i in x:
        for j in i:
            if j == "X":
                x_count += 1
            if j == "0":
                o_count += 1
    
    if x_count > o_count:
        turn == "x"
    else:
        turn == "o"
    spots = {}
    for y_index, i in enumerate(x):
        for x_index, j in enumerate(i):
            if j == "X":
                spots[y_index, x_index] = "X"
            if j == "O":
                spots[y_index, x_index] = "O"
    
    #check top row

    
            
            

    print(spots)

    


print(getNextMove([["X","O",None],[None,"X",None],["O",None,None]]))

