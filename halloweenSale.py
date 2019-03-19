def howManyGames(p, d, m, s):
    count = 0
    while p > m:
        if s - p > 0:
            s -= p
        if p - d < m:
            p -= d
        else:
            p = m
        count += 1
    while s > 0:
        if s - p  > 0:
            count += 1
        s -= p
    print(count)

howManyGames(20, 2, 10, 70)