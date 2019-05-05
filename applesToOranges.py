def countApplesAndOranges(s, t, a, b, apples, oranges):
    # apples and oranges are arrays holding the distance value of each fruit from the tree
    #a is apple tree; b is orange tree, s & t are the left and right side of home
    apple_count = 0
    orange_count = 0

    for i in apples:
        apple = a + i
        if apple >= s and apple <= t:
            apple_count += 1
    for i in oranges:
        orange = b + i
        if orange >= s and orange <= t:
            orange_count += 1
    return [apple_count,orange_count]



countApplesAndOranges(1,5,0,6,[3,-1],[-3,8])
    
    