def find_it(seq):
    bank = {}
    ans = 0
    for i in seq:
        if i not in bank:
            bank[i] = True
        elif i in bank:
            del bank[i]

    for i in bank:
        ans = i


        
        
    print(ans)


find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])