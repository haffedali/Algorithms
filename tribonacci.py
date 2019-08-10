
def helper(signature):
    total = 0
    for i in signature:
        total += i
    del signature[0]
    signature.append(total)
    return [signature, total]



def tribonacci(signature, n):
    if n < 3:
        return signature[:n]
    count = 0
    main_array = [signature[0],signature[1],signature[2]]
    # BIG point of confusion here... top works, but lower line ends up growing the signature by one indice per loop
    # main_array = signature
    while count < (n-3):
        count += 1
        help_me = helper(signature)
        signature = help_me[0]
        main_array.append(help_me[1])
    return main_array
        


cat = tribonacci([1,1,1], 1)
print(cat)