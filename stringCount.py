def count(string):
    bank = {}
    for i in string:
        if i not in bank:
            bank[i] = 1
        else:
            bank[i] = bank[i] + 1
    print(bank)


count("suckmballs")