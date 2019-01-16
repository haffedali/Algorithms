def add_binary(a,b):
    binary = ''
    num = a + b
    while num > 0:
        if num % 2 == 0:
            binary = "0" + binary
        else:
            binary = "1" + binary
        num //= 2
    return binary