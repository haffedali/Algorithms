def twoStrings(s1, s2):
    s1_letters = {}
    for i in s1:
        if i not in s1_letters:
            s1_letters[i] = True
    for i in s2:
        if i in s1_letters:
            return "YES"
    return "NO"



print(twoStrings("Hello","Kenobi"))