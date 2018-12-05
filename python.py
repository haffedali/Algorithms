def longest(s1, s2):
    list = []
    for i in s1:
        if i in list:
            pass
        else:
            list.append(i)
    for e in s2:
        if e in list:
            pass
        else:
            list.append(e)
    list.sort()
    return(list)

def add(word):
    test = "test"
    for i in word:
        test = test + i
    print(test)

add("poop")