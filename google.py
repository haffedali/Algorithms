def findGoogle(string):

    new_string = []

    new_string_load = []
    for i in string:
        if i not 

    bank = {1: ["g","G"],
            2: ["O","o","0","()","[]","<>"],
            3: ["O","o","0","()","[]","<>"],
            4: ["g","G"],
            5: ["l","L","I"],
            6: ["e","E","3"]}
    
    count = 1
    is_google = True
    
    for i in string:
        if i in bank[count]:
            count += 1
        else:
            is_google = False
    return is_google


print(findGoogle("g0oGIe"))