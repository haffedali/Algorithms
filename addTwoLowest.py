def sum_two_smallest_numbers(numbers):
    smallest_nums = []
    if numbers[0] < numbers[1]:
        smallest_nums = [numbers[0], numbers[1]]
    else:
        smallest_nums = [numbers[1], numbers[0]]
    for i in numbers:
        if i < smallest_nums[0] and i < smallest_nums[1]:
            smallest_nums[1] = smallest_nums[0]
            smallest_nums[0] = i
        elif i > smallest_nums[0] and i < smallest_nums[1]:
            smallest_nums[1] = i

    smolsum = smallest_nums[0] + smallest_nums[1]
    return smolsum



