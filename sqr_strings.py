def compose(s1, s2):
    strng = ""
    s1 = s1.split("\n")
    s2 = s2.split("\n")
    f_line_count = 0
    second_line_count = len(s1) - 1

    for i in s1:
        strng += i[:f_line_count + 1]
        strng += s2[second_line_count][:second_line_count + 1]
        strng += "\n"
        second_line_count -= 1
        f_line_count += 1
    print(second_line_count)
    print(strng)

# compose("TEST\nFORT\nYOUR\nASSY", "DOES\nTHIS\nEVEN\nWORK")


def vert_mirror(s):
    strng = ""
    s = s.split("\n")
    for i in s:
        strng += ''.join(reversed(i))
        strng += "\n"
    return strng
def hor_mirror(s):
    strng = ""
    s = list(reversed(s.split("\n")))
    
    for count,i in enumerate(s):
        if count < len(s) - 1:
            i = i + "\n"
        strng += i
    return strng
    
def oper(fct, s):
    if fct == vert_mirror:
        response = vert_mirror(s)
    elif fct == hor_mirror:
        response = hor_mirror(s)
    return response

def rot(strng):
    s  = ""
    strng = list(reversed(strng.split("\n")))
    for i in strng:
        s += ''.join(reversed(i))
        s += "\n"
    # print(s)
    s = s.rstrip()

    return s
    



# dog = vert_mirror("TEST\nTHIS\nONE\nTOO")
cat = rot("TEST\nTHIS\nONE\nTOO")

# cat = oper(vert_mirror, "hello\ntonight\nlike")

print(cat)