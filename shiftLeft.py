def rotLeft(a, d):
    d = d % len(a)
    print(a[d:] + a[:d])

rotLeft([1,2,3], 1)