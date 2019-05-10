def removeDupes(array):
    newArr = []
    bank = {}

    for i in array:
        if i not in bank:
            newArr.append(i)
            bank[i] = True
    return newArr

print(removeDupes([1,2,3,4,5,2,3,7,4,1]))
        
