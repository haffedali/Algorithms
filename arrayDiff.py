def array_diff(a, b):
    bank = {}
    difference = []
    for i in b:
        if i not in bank:
            bank[i] = True
    for i in a:
        if i not in bank:
            difference.append(i)
    return difference

array_diff([1,2,3,3,2,4,5,3,4,2,4],[4,3])