def series_sum(n):
    total = 1
    added_num = 1
    if n > 1:
        for i in range(n-1):
            added_num += 3
            total += (1/added_num)
    elif n = 0:
        return 0.00
    print("{:.2f}".format(total))


series_sum(3)

