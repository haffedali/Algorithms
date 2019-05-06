# x,y are both vectors
def DOT(x,y):
    ans = 0
    for counter, i in enumerate(x):
        ans += i*y[counter]
    return ans


print(DOT([1,-2,2],[1,-2,2]))
