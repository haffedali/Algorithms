# first iteration of function will omit the obstacles
# n is the size of the grid
# q is the cooridinates of the queen
# k is the amount of obstacles
# obstacles is an array of the obstacle coordinates in tuple format


# BIG REMEMBER: In the problem, coordinates are given by (col,i[0])... Here I have (i[0],col)
# For a quick fix, when done flip the r_q and c_q around; should fix the entire thing
def queensAttack(n,k,r_q,c_q,obstacles):
    # ALL global variables that may or may not be filled
    global ne,nw,se,sw,up,down,left,right
    ne,nw,se,sw,up,down,left,right = [0,0],[0,0],[0,0],[0,0],0,0,0,0
    # two variables yCountN,S log the distance of queen from the upper and lower bounds 
    yCountN = n-c_q
    yCountS= c_q - 1

    # west and east log the distace of queen from the left and rightmost bounds
    west = n - r_q
    east = r_q - 1

    # points keeps track of the positions the queen can attack
    points = 0

    # Looping through the items in obstacles, and sorting them accordingly for straight checks
    for i in obstacles:
        # up
        if r_q == i[0] and i[1] > c_q:
            if i[1] < up or up == 0:
                up = i[1]
        # down
        if r_q == i[0] and i[1] < c_q:
            if i[1] > down or down == 0:
                down = i[1]
        # right
        if c_q == i[1] and i[0] > r_q:
            if i[0] < right or right == 0:
                right = i[0]
        # left
        if c_q == i[1] and i[0] < r_q:
            if i[1] > left or left == 0:
                left = i[0]
        # ne and sw
        if (i[1]-i[0]) == (c_q-r_q):
            if i[1] > c_q and i[1] < ne[0] or i[1] > c_q and ne[0] == 0:
                ne = i
            if i[1] < c_q and i[1] > sw[0] or i[1] < c_q and sw[0] == 0:
                sw = i
        # nw and se
        if (i[1]+i[0]) == (c_q+r_q):
            if i[1] > c_q and i[1] < nw[0] or i[1] > c_q and nw[0] == 0:
                nw = i
            if i[1] < c_q and i[1] > se[0] or i[1] <c_q and se[0] == 0:
                se = i

    # Upper Diagonals check if there ARENT any obstacles
    if nw == [0,0] and west < yCountN:
        points += west
    elif nw == [0,0]:
        points += yCountN
    else:
        points += (nw[0]-c_q-1)
    
    if ne == [0,0] and east < yCountN:
        points += east
    elif ne == [0,0]:
        points += yCountN
    else:
        points += (ne[0]-c_q-1)

    # Lower Diagonals check if there ARENT any obstacles
    if sw == [0,0] and west < yCountS:
        points += west
    elif sw == [0,0]:
        points += yCountS
    else:
        points += (c_q-sw[0]-1)
    if se == [0,0] and east < yCountS:
        points += east
    elif se == [0,0]: 
        points += yCountS
    else:
        points += (c_q-se[0]-1)

        
    # straight calcs to add to all attackable positions if there ARENT any obstacles
    if up == 0:
        points += (n-c_q)
    else:
        points += (up-c_q-1)
    if down == 0:
        points += (c_q-1)
    else:
        points += (c_q-down-1)
    if right == 0:
        points += (n-r_q)
    else:
        points += (right-r_q-1)
    if left == 0:
        points += (r_q-1)
    else:
        points += (r_q-left-1)

    return points


test = queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])


print(test)