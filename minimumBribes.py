def minimumBribes(q):
    last = (len(q) - 1)
    chaotic = False
    count = 0
    bribes = 0
    for i in q:
        count+=1
        if i == (count + 2):
            bribes += 2
        elif i > (count + 2):
            print(i)
            print(count)
            chaotic = True
        elif i > count:
            bribes +=1
        else:
            if count <= last:
                if i > q[count]:
                    bribes +=1
    if not chaotic:
        print(bribes)
    else:
        print("Too chaotic")

# minimumBribes([1,2,5,3,7,8,6,4])
# minimumBribes([1,3,2,5,4])
minimumBribes([1,4,5,3,6,8,2,7,9,11,13,10,12,14,15])