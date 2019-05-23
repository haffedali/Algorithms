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
minimumBribes([1,3,2,5,4])
# minimumBribes([1,4,5,3,6,8,2,7,9,11,13,10,12,14,15])

def betterBribes(q):
    last = (len(q)-1)
    chaotic = False
    bribes = 0
    counter = 0
    bribe_book = {}
    for i in range(last):
        counter += 1
        person = q[i]
        neighbor = q[i+1]
        if person > counter and neighbor < person:
            q[i] = neighbor
            q[i+1] = person
            if neighbor not in bribe_book:
                bribe_book[neighbor] = 1
            elif bribe_book[neighbor] == 1:
                bribe_book[neighbor] = 2
            else:
                chaotic = True
    
    if not chaotic:
        for i, value in bribe_book.items():
            bribes += value

        print(bribes)
    else:
        print("Too Chaotic")
            
        
# betterBribes([1,3,2,5,4])
# betterBribes([1,2,5,3,7,8,6,4])