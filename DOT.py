# x,y are both vectors
def DOT(x,y):
    ans = 0
    for counter, i in enumerate(x):
        ans += i*y[counter]
    return ans


# print(DOT([2,-1,4,2,1],[1,-2,2,3,-1]))



# Now we do it recursively

def DOT_r(x,y,s,a):
    if s < len(x):
        a += x[s]*y[s]
        s += 1
        return DOTr(x,y,s,a)
    if s == len(x):
        return a

print(DOT_r([2,-1,4,2,1],[1,-2,2,3,-1],0,0))
