def countEm():
    x = range(6)
    d1 = []
    d2 = []
    vals = {}
    for i in x:
        i = i + 1
        d1.append(i)
        d2.append(i)
    for i in d1:
        for j in d2:
            dice_sum = i + j
            if dice_sum not in vals:
                vals[dice_sum] = 1
            else:
                vals[dice_sum] = vals[dice_sum] + 1
    print(vals)
    
    

countEm()
