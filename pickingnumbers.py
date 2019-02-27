import math
import os
import random
import re
import sys
# import numpy

#
# Complete the 'pickingNumbers' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

    def pickingNumbers(a):
        abs_array = []
        unique_array = set(a)
        top_length = 0
        temp_abs_array = []
        for i in unique_array:
            temp_abs_array.append(i)
            for j in a:
                if i-j == 1 or i-j == 0:
                    temp_abs_array.append(j)
            if len(temp_abs_array) > top_length:
                # the -1 is to account for the initial value from set added
                top_length = len(temp_abs_array) - 1
            temp_abs_array = []
        print(top_length)

pickingNumbers([1,2,2,6,7,3,1,3,5,2,1,3,4,3])