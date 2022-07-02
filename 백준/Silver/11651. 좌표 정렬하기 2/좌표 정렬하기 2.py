import sys
n = int(sys.stdin.readline().rstrip())
data = []
for i in range(n):
    temp = sys.stdin.readline().rstrip().split()
    data.append([int(temp[1]),int(temp[0])])
data.sort()
for i in data:
    print(i[1],i[0])