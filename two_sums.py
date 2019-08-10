def two_sum(numbers, target):
    found = False
    counted = 0
    while not found:
        main = numbers[counted]
        for count,i in enumerate(numbers[counted:]):
            count += counted
            if numbers[counted] + i == target:
                if counted != count:
                    return [counted,count]
        counted += 1
    pass

cat = two_sum([1,2,5,8], 10)
print(two_sum([1,2,5,8], 10))