def bestBribes(q):
    last = len(q) - 1
    chaotic = False
    bribes = 0
    bribe_book = {}
    for counter, i in enumerate(q):
        count = counter + 1
        if i > count + 2:
            chaotic = True
            break
        if i != count:
            if i > count and i not in bribe_book:
                bribe_book[i] = 0
            elif i > count and i in bribe_book:
                bribe_book[i] = 1
            bribes += abs(count - i)
        # if count <= last:
        #     if i > q[count] and bribe_book[i] < 1:
        #         print(i, "is greater than", q[count])
        #         bribes += abs(i - q[count])
    print(bribe_book)
    if not chaotic:
        print(bribes//2)
    else:
        print("Too chaotic")


# bestBribes([2,5,1,3,4])
# bestBribes([1,2,5,3,7,8,6,4])
# bestBribes([1,5,2,3,4,7,8,6])
# bestBribes([1,3,2,5,7,6,4,8])
# bestBribes([1,2,5,3,4,7,8,6])
bestBribes([2,1,4,3,7,6,8,5])


