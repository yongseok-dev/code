import sys
number = [0,0,0,['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'], ['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R','S'], ['T', 'U','V'], ['W', 'X', 'Y', 'Z']]
# print(number)
s = 0
data = list(map(str,(sys.stdin.readline().rstrip())))
for i in range(3,11):
    for j in data:
        if number[i].count(j):
            s += i
print(s)