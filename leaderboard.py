def sorting(arr,score,low,high):
    # partition = (len(arr) - 1) // 2
    position = 0
    finished = False
    partition = ((low - high) // 2) + high
    poormanslen = low - high
    if poormanslen == 1:
        if score > arr[high]:
            finished = True
            position = high - 1
            # high = 0
        else:
            finished = True
            position = high + 1
            # high = 0
        return position
 
            
    if not finished:
        if score == arr[partition]:
            return (partition)
        elif score > arr[partition] and len(arr) != 1:
            # arr = arr[:partition]
            low = partition
            return sorting(arr, score, low, high)
        elif score < arr[partition] and len(arr) != 1:
            # arr = arr[partition:low]
            high = partition
            return sorting(arr, score, low, high)


def climbing_leaderboard(scores, alice):
    ans = []
    #Now, I will iterate through alice's scores, and place them in new array
    scores = list(dict.fromkeys(scores))
    start = 0
    for i in alice:
        last = len(scores) - 1
        if i > scores[0]:
            scores.insert(0, i)
            ans.append(1)
        elif i < scores[last]:
            scores.append(i)
            ans.append(last + 2)
        else:
            position = sorting(scores, i, last, start)
            scores.insert(position, i)
            ans.append(position + 1)
    # return ans
    print(ans)

climbing_leaderboard([100,90,90,80,75,60],[50,65,77,90,102])
climbing_leaderboard([100,100,50,40,40,20,10],[5,25,50,120])
# climbing_leaderboard([100,80,50,40],[30,60,70,120])
# print("POOP")