def thirt(n):
    # lines 3...8 could be done in one line if using commas to seperate variables
    rule = [1,10,9,12,3,4]
    result1 = 0
    result2 = 1
    rollingSum = 0
    count = 0
    num = numToArrStr(n)
    status = "result1"
    while result2 != result1:
        
        for i in num:
            rollingSum += int(i)*rule[count]
            count += 1
            if count > 5:
                count = 0
        count = 0
        if status == "result1":
            result1 = rollingSum
            num = numToArrStr(result1)
            rollingSum = 0
            status = "result2"
        else:
            result2 = rollingSum
            num = numToArrStr(result2)
            rollingSum = 0
            status = "result1"
    
def numToArrStr(n):
    n = str(n)
    num = []
    for i in n:
        num[:0] = i
    return num




thirt(1234567565768798096565)