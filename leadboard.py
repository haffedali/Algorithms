def climbingLeaderboard(scores, alice):
    scores = list(dict.fromkeys(scores))
    prev = len(scores) - 1
    ans = []

    for i in alice:
