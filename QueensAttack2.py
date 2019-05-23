#first iteration of function will omit the obstacles
# n is the size of the grid
# q is the cooridinates of the queen
# k is the amount of obstacles
# obstacles is an array of the obstacle coordinates in tuple format
def queensAttack(n,k,r_q,c_q,obstacles):
    # ALL global variables that may or may not be filled
    global ne,nw,se,sw,up,down,left,right
    ne,nw,se,sw,up,down,left,right = None,None,None,None,None,None,None,None
    # two variables yCountN,S log the distance of queen from the upper and lower bounds 
    yCountN = n-r_q
    yCountS= r_q - 1

    # west and east log the distace of queen from the left and rightmost bounds
    east = n - c_q
    west = c_q - 1

    # points keeps track of the positions the queen can attack
    points = 0

    # Looping through the items in obstacles, and sorting them accordingly for straight checks
    for i in obstacles:
        # up
        if c_q == i[1] and i[0] > r_q:
            if up == None:
                up = i[0]
            elif i[0] < up:
                up = i[0]
        # down
        if c_q == i[1] and i[0] < r_q:
            if down == None:
                down = i[0]
            elif i[0] > down:
                down = i[0]
        # right
        if r_q == i[0] and i[1] > c_q:
            if right == None:
                right = i[1]
            elif i[1] < right:
                right = i[1]
        # left
        if r_q == i[0] and i[1] < c_q:
            if left == None:
                left = i[1]
            elif i[1] > left:
                left = i[1]

        # ne and sw
        if abs((i[1]-i[0])) == (c_q-r_q):
            if i[1] > c_q and ne == None:
                ne = i
            elif i[1] > c_q and i[1] < ne[1]:
                ne = i
            if i[1] < c_q and sw == None:
                sw = i
            elif i[1] < c_q and i[0] < sw[0]:
                sw = i
        # nw and se
        if (i[1]+i[0]) == (c_q+r_q):
            if i[1] < c_q and nw == None:
                nw=i
            elif i[1] < c_q and i[0] < nw[0]:
                nw = i
            if i[1] > c_q and se == None:
                se = i
            elif i[1] > c_q and i[0] < se[0]:
                se = i

    # Upper Diagonals check if there ARENT any obstacles
    if nw == None and west <= yCountN:
        print("NW none:",west)
        points += west
    elif nw == None:
        print("NW none:",yCountN)
        points += yCountN
    else:
        nwPoints = (c_q-nw[1]-1)
        print("NW points",nwPoints)
        points +=  (c_q-nw[1]-1)
    
    if ne == None and east <= yCountN:
        print("NE none:",east)
        points += east
    elif ne == None:
        print("NE none:",yCountN)
        points += yCountN
    else:
        nePoints = (ne[1]-c_q-1)
        print("NE points",nePoints)
        points += (ne[1]-c_q-1)

    # Lower Diagonals check if there ARENT any obstacles
    if sw == None and west <= yCountS:
        print("SW none:",west)
        points += west
    elif sw == None:
        print("SW none:",yCountS)
        points += yCountS
    else:
        swPoints = (c_q-sw[1]-1)
        print("SW points:",swPoints)
        points += (c_q-sw[1]-1)

    if se == None and east <= yCountS:
        print("SE none",east)
        points += east
    elif se == None:
        print("SE none",yCountS) 
        points += yCountS
    else:
        sePoints = (se[1]-c_q-1)
        print("SE points",sePoints)
        points += (se[1]-c_q-1)

        
    # straight calcs to add to all attackable positions if there ARENT any obstacles

    # UP NO OBSTACLE
    if up == None:
        upPoints = (n-r_q)
        print("UP none:",upPoints)
        points += (n-r_q)
    else:
        upPoints=(up-r_q-1)
        print("UP:",upPoints)
        points += (up-r_q-1)

    # DOWN NO OBSTACLE
    # continue adding none to notes where there wasnt any obstacle
    # looking for the -2 bug; i should never be adding a negative to score
    if down == None:
        downPoints = (r_q-1)
        print("DOWN none:",downPoints)
        points += (r_q-1)
    else:
        downPoints = (r_q-down-1)
        print("DOWN:",downPoints)
        points += (r_q-down-1)

    # RIGHT NO OBSTACLE
    if right == None:
        rightPoints = (n-c_q)
        print("RIGHT none:",rightPoints)
        points += (n-c_q)
    else:
        rightPoints = (right-c_q-1)
        print("RIGHT:",rightPoints)
        points += (right-c_q-1)

    # LEFT NO OBSTACLE
    if left == None:
        leftPoints = (c_q-1)
        print("LEFT none:",leftPoints)
        points += (c_q-1)
    else:
        leftPoints = (c_q-left-1)
        print("LEFT:",leftPoints)
        points += (c_q-left-1)

    print("------------------------------------------")
    print("UP pos", up)
    print("DOWN pos", down)
    print("RIGHT pos", right)
    print("LEFT pos", left)
    print("SE pos", se)
    print("SW pos", sw) 
    print("NE pos", ne)
    print("NW pos", nw)
    print("------------------------------------------")

    return points


# test = queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])

# test2 = queensAttack(6,1,5,3,[[1,1]]) 



def parse(text):
    for i in text:
        print(i)





queenTest = [[54,87],[64,97],[42,75],[32,65],[42,87],[32,97],[54,75],[64,65],[48,87],[48,75],[54,81],[42,81],[45,17],[14,24],[35,15],[95,64],[63,87],[25,72],[71,38],[96,97],[16,30],[60,34],[31,67],[26,82],[20,93],[81,38],[51,94],[75,41],[79,84],[79,65],[76,80],[52,87],[81,54],[89,52],[20,31],[10,41],[32,73],[83,98],[87,61],[82,52],[80,64],[82,46],[49,21],[73,86],[37,70],[43,12],[94,28],[10,93],[52,25],[50,61],[52,68],[52,23],[60,91],[79,17],[93,82],[12,18],[75,64],[69,69],[94,74],[61,61],[46,57],[67,45],[96,64],[83,89],[58,87],[76,53],[79,21],[94,70],[16,10],[50,82],[92,20],[40,51],[49,28],[51,82],[35,16],[15,86],[78,89],[41,98],[70,46],[79,79],[24,40],[91,13],[59,73],[35,32],[40,31],[14,31],[71,35],[96,18],[27,39],[28,38],[41,36],[31,63],[52,48],[81,25],[49,90],[32,65],[25,45],[63,94],[89,50],[43,41]]



test3 = queensAttack(100,100,48,81,queenTest)

print(test3)