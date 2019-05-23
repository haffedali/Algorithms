for i in range(10):
    print(i)







for i in range(last):
    person = q[i]
    neighbor = q[count+1]
    if person > neighbor:
        if neighbor not in bribe_book:
            bribe_book[neighbor] = 1
        elif bribe_book[neighbor] == 1:
            bribe_book[neighbor] = 2
        else:
            chaotic = True