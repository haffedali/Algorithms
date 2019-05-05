def jumpingOnClouds(c, k):
    e = 100
    n = len(c)
    pos = 0
    last = 0
    flag = False

    while flag == False:
        last = pos
        pos = (last + k) % n
        if c[pos] == 0:
            e -= 1
        else:
            e -= 3

        if last >= pos:
            flag = True
    print(e)

jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3)